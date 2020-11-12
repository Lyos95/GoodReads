import { Author, Book } from "../../objectTemplates/templates";
import { NumberUndefined, StringUndefined } from "../../types/global";
import { searchBookApiBooks, searchBookApi_Books_Author } from "../../types/goodReadsApi";
import { formatDate } from "./formatters";

export const searchBookApiBooksToBooksParser = (apiBooks:searchBookApiBooks[]) => {
    return apiBooks.map((apibook:searchBookApiBooks) => {
        //Variables
        let book:Book
        let author:Author
        let title: StringUndefined = apibook?.best_book?.title
        let image: StringUndefined = apibook?.best_book?.image_url
        let date: StringUndefined = formatDate(apibook.original_publication_day,apibook.original_publication_month,apibook.original_publication_year)
        let rating: NumberUndefined = apibook.average_rating
     
        let apiAuthor:searchBookApi_Books_Author|undefined = apibook?.best_book?.author
        if(apiAuthor !== undefined){
            author = new Author(
            apiAuthor?.id,
            apiAuthor?.name
          )
          book = new Book(title, rating, author, date, image)
        }else{
          book = new Book(title, rating, null, date, image)
        }
        return book
      })
}

