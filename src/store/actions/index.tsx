import { FETCH_BOOKS, FETCH_AUTHOR } from "./types"
import axios from "axios"
import { parse } from "fast-xml-parser"
import { Book, Author } from "../../objectTemplates/templates"
import { searchBookApiBooksToBooksParser } from "../../utils/goodReadsApi/parsers";
import { authorShowApi_Author, authorShowApi_Book, searchBookApiBooks } from "../../types/goodReadsApi";
import { formatDate } from "../../utils/goodReadsApi/formatters";


export const fetchBooksFromServer = (bookName: string|null|undefined, page: number = 1) => async (
  dispatch: any,
  getState: any
) => {

  let book = (bookName === null || bookName === undefined) ? getState()?.booksStore?.key : bookName
  let res = await axios.get(
    `/search?key=4k2Bg0OHGUapepdPa2BOQg&q=${book}&page=${page}`
  )
  let parsedResponse = parse(res.data)
  let totalResults = parsedResponse.GoodreadsResponse.search["total-results"]
  let apiBooks:searchBookApiBooks[] = parsedResponse?.GoodreadsResponse?.search?.results?.work || []
  let convertedbooks:Book[] = searchBookApiBooksToBooksParser(apiBooks)

  dispatch({
    type: FETCH_BOOKS,
    payload: { books: convertedbooks, total: totalResults, key: book },
  })
}

export const fetchAuthorFromServerById = (id: number) => async (
  dispatch: any
) => {
  let res = await axios.get(
    `/author/show.xml?key=4k2Bg0OHGUapepdPa2BOQg&id=${id}`
  )
  let apiAuthor:authorShowApi_Author|undefined = parse(res.data)?.GoodreadsResponse?.author
  if(apiAuthor){
    let authorBooks
    if(!Array.isArray(apiAuthor?.books?.book)){
      authorBooks = [apiAuthor?.books?.book]
    }else{
      authorBooks = apiAuthor?.books?.book
    }
      let booksFormatted: Book[] = authorBooks.map((book: authorShowApi_Book) => {  
        //Parse all the special characters  
        let formattedDescription = book.description.replaceAll("&lt;", "<")
        formattedDescription = formattedDescription.replaceAll("&gt;", ">")

        let date = formatDate(book.publication_day,book.publication_month,book.publication_year)

        return new Book(
          book.title,
          book.average_rating,
          undefined,
          date,
          book.image_url,
          book.isbn,
          book.text_reviews_count,
          book.link,
          book.num_pages,
          book.format,
          formattedDescription,
          book.ratings_count
        )
      })
      
      let author = new Author(
        id,
        apiAuthor.name,
        apiAuthor.fans_count,
        apiAuthor.author_followers_count,
        apiAuthor.about,
        apiAuthor.large_image_url,
        apiAuthor.hometown,
        booksFormatted
      )
      dispatch({ type: FETCH_AUTHOR, payload: author })
    }
    
}
