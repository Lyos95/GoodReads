import React, { useEffect } from "react"
import "./authordetailspage.scss"
import AuthorCard from "../../components/AuthorCard/AuthorCard"
import TextBoxInformation from "../../components/TextBox/TextBoxInformation"
import StickyHeader from "../../components/Sticky/StickyHeader"
import { useDispatch, useSelector } from "react-redux"
import { Author, Book } from "../../objectTemplates/templates"
import Card from "../../components/Card/Card"
import { fetchAuthorFromServerById } from "../../store/actions"

const AuthorDetailsPage = (props: any) => {
  const dispatch = useDispatch()
  let url = props.match.params.id
  useEffect(() => {
    dispatch(fetchAuthorFromServerById(url))
  }, [url,dispatch])
  let cards
  const author: Author = useSelector((state: any) => {
    return state.authorStore
  })

  if (author?.books) {
    cards = author.books.map((book: Book, index: number) => {
      return (
        <div className="author-details-page-container-books-book" key={index}>
          <Card book={book}></Card>
        </div>
      )
    })
  }
  if (Object.keys(author).length === 0 && author.constructor === Object) {
    return (
      <>
        <StickyHeader triggerFunction={props.history.goBack}></StickyHeader>
      </>
    )
  } else {
    return (
      <>
        <StickyHeader triggerFunction={props.history.goBack}></StickyHeader>
        <div className="author-details-page-container">
          <div className="author-details-page-container-info">
            <div className="author-details-page-container-info-card">
              <AuthorCard author={author}></AuthorCard>
            </div>
            <TextBoxInformation title="About">
              <p
                dangerouslySetInnerHTML={{ __html: author.aboutInfo || "" }}
              ></p>
            </TextBoxInformation>
          </div>
          <div className="author-details-page-container-books">
            <TextBoxInformation title="Author Books"></TextBoxInformation>
            {cards}
          </div>
        </div>
      </>
    )
  }
}

export default AuthorDetailsPage
