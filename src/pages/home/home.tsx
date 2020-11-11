import React from "react"
import SearchBar from "../../components/SearchBar/SearchBar"
import "./home.scss"
import Card from "../../components/Card/Card"
import { useDispatch, useSelector } from "react-redux"
import { Book } from "../../objectTemplates/templates"
import { fetchBooksFromServer } from "../../store/actions/index"
import Pagination from "../../components/Pagination/Pagination"

const RESULTS_PER_PAGE = 20

const HomePage = (props: any) => {
  let books: any = useSelector((state: any) => {
    return state.booksStore.books
  })
  let bookSearched: any = useSelector((state: any) => {
    return state.booksStore.key
  })

  let totalAmountOfBooks: any = useSelector((state: any) => {
    return state.booksStore.total
  })

  let dispatch = useDispatch()
  let renderCards = (books: Book[]) => {
    return books.map((book: Book, index: number) => {
      return (
        <Card
          key={index}
          book={book}
          triggerAction={(id: number) => {
            props.history.push(`/author-details/${id}`)
          }}
        ></Card>
      )
    })
  }

  let renderResults = () => {
    return (
      <div className="projects-results">Results: {totalAmountOfBooks}</div>
    )
  }

  let renderPagination = (bookSearched: string) => {
    if (bookSearched && bookSearched !== "") {
      return (
        <Pagination
          totalPages={Math.ceil(totalAmountOfBooks / RESULTS_PER_PAGE)}
          triggerFunction={(page: number) => {
            dispatch(fetchBooksFromServer(bookSearched, page))
          }}
        ></Pagination>
      )
    }
  }
  return (
    <>
      <div className="dashboard">
        <article className="projects">
          <header className="welcome-banner">
            <h1>Good Reads</h1>
            <p>
              Welcome to Good Reads! Just type your favourite author and we will
              show you his books
            </p>
          </header>
          <SearchBar
            wait_Interval={1000}
            triggerAction={fetchBooksFromServer}
          ></SearchBar>
          {renderResults()}
        </article>
      </div>
      <div className="books">{renderCards(books)}</div>
      {renderPagination(bookSearched)}
    </>
  )
}

export default HomePage
