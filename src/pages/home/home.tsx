import React, { useCallback, useEffect, useState } from "react"
import SearchBar from "../../components/SearchBar/SearchBar"
import "./home.scss"
import Card from "../../components/Card/Card"
import { useDispatch, useSelector } from "react-redux"
import { Book } from "../../objectTemplates/templates"
import { fetchBooksFromServer } from "../../store/actions/index"
import Pagination from "../../components/Pagination/Pagination"

const RESULTS_PER_PAGE = 20

const HomePage = (props: any) => {
  const dispatch = useDispatch()
  const fetchBooks = useCallback((book?:string) =>{
    return dispatch(fetchBooksFromServer(book))
  },[dispatch])

  const [currentPage,setCurrentPage] = useState(1)

  let books: any = useSelector((state: any) => {
    return state.booksStore.books
  })
  let searchedBook: any = useSelector((state: any) => {
    return state.booksStore.key
  })

  let totalAmountOfBooks: any = useSelector((state: any) => {
    return state.booksStore.total
  })

  useEffect(() =>{
    setCurrentPage(1)
  },[searchedBook])

  useEffect(() =>{
    dispatch(fetchBooksFromServer(null,currentPage))
  },[currentPage,dispatch])

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

  let renderPagination = (totalAmountOfBooks:number) => {
    if (totalAmountOfBooks && totalAmountOfBooks > 0) {
      return (
        <Pagination
          totalPages={Math.ceil(totalAmountOfBooks / RESULTS_PER_PAGE)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
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
            triggerAction={fetchBooks}
          ></SearchBar>
          {renderResults()}
        </article>
      </div>
      <div className="books">{renderCards(books)}</div>
      {renderPagination(totalAmountOfBooks)}
    </>
  )
}

export default HomePage
