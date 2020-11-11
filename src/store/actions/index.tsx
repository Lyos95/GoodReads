import { FETCH_BOOKS, FETCH_AUTHOR } from "./types"
import axios from "axios"
import { parse } from "fast-xml-parser"
import { Book, Author } from "../../objectTemplates/templates"
var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

export const fetchBooksFromServer = (bookName: string|null|undefined, page: number = 1) => async (
  dispatch: any,
  getState: any
) => {

  //let book = bookName === null ? getState()
  let book = (bookName === null || bookName === undefined) ? getState()?.booksStore?.key : bookName
  let res = await axios.get(
    `/api/search?key=4k2Bg0OHGUapepdPa2BOQg&q=${book}&page=${page}`
  )
  let parsedResponse = parse(res.data)
  let totalResults = parsedResponse.GoodreadsResponse.search["total-results"]
  let books = parsedResponse?.GoodreadsResponse.search.results?.work || []

  books = books.map((book: any) => {
    let title: string = book.best_book.title
    let image: string = book.best_book.image_url
    let date: string =
      `${book.original_publication_day}/${book.original_publication_month}/${book.original_publication_year}` === "//"
        ? "Unknown"
        : `${book.original_publication_day}/${book.original_publication_month}/${book.original_publication_year}`

    let rating: number = book.average_rating
    let author: Author = new Author(
      book.best_book.author.id,
      book.best_book.author.name
    )
    return new Book(title, rating, author, date, image)
  })

  dispatch({
    type: FETCH_BOOKS,
    payload: { books: books, total: totalResults, key: book },
  })
}

export const fetchAuthorFromServerById = (id: number) => async (
  dispatch: any
) => {
  let res = await axios.get(
    `/api/author/show.xml?key=4k2Bg0OHGUapepdPa2BOQg&id=${id}`
  )
  let parsedResponse = parse(res.data).GoodreadsResponse.author
  let {
    name,
    fans_count,
    author_followers_count,
    about,
    large_image_url,
    hometown,
    books,
  } = parsedResponse

  let booksFormatted: Book[] = books.book.map((book: any) => {
    const {
      isbn,
      text_reviews_count,
      image_url,
      link,
      num_pages,
      format,
      publication_day,
      publication_month,
      publication_year,
      average_rating,
      rating_counts,
      description,
      title,
    } = book

    let formattedDescription = description.replaceAll("&lt;", "<")
    formattedDescription = formattedDescription.replaceAll("&gt;", ">")
    let date =
      `${publication_day}/${publication_month}/${publication_year}` === "//"
        ? "Unknown"
        : `${publication_day}/${publication_month}/${publication_year}`

    return new Book(
      title,
      average_rating,
      undefined,
      date,
      image_url,
      isbn,
      text_reviews_count,
      link,
      num_pages,
      format,
      formattedDescription,
      rating_counts
    )
  })

  let author = new Author(
    id,
    name,
    fans_count,
    author_followers_count,
    about,
    large_image_url,
    hometown,
    booksFormatted
  )
  dispatch({ type: FETCH_AUTHOR, payload: author })
}
