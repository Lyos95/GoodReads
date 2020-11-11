import React from "react";
import "./card.scss";
import StarRating from "../StarRating/StarRating";
import { Book } from "../../objectTemplates/templates";

// our components props accept a number for the initial value
type CardProps = { book: Book, triggerAction?: Function };
const Card = ({ book, triggerAction }: CardProps) => {
  let renderAuthorName = () => {
    if (
      triggerAction &&
      book?.author?.fullName !== undefined &&
      book?.author?.id !== undefined
    ) {
      let id = book.author.id;
      return (
        <p
          onClick={() => {
            triggerAction(id);
          }}
          className="card-top-information__author"
        >
          {book.author?.fullName}
        </p>
      );
    }
  };

  let renderDescription = (title: string, details: any) => {
    if (title && details) {
      return (
        <>
          <p className="card-top-information__basic-info">{title}:</p>
          <p dangerouslySetInnerHTML={{ __html: details }}></p>
        </>
      );
    }
  };

  let renderBasicInfo = (
    title: string,
    details: number | string | undefined,
    link?: string
  ) => {
    if (title && details) {
      if (link) {
        return (
          <p className="card-top-information__basic-info">
            {title}: <a href={link}>{details}</a>
          </p>
        );
      }
      return (
        <p className="card-top-information__basic-info">
          {title}: {details}
        </p>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="card">
      <div className="card-picture">
        <img className="card-picture__image" alt={book.title} src={book.image}></img>
      </div>
      <div className="card-information">
        <div className="card-top-information">
          <h2 className="card-top-information__title">{book.title}</h2>
          {renderAuthorName()}
          {renderDescription("Description", book.description)}
          {renderBasicInfo("Link", book.linkToGoodReads, book.linkToGoodReads)}
          {renderBasicInfo("Format", book.format)}
          {renderBasicInfo("Publication Date", book.publicationDate)}
          {renderBasicInfo("Pages", book.pages)}
          {renderBasicInfo("ISBN", book.isbn)}
          {renderBasicInfo("Text Reviews", book.textReviewsCount)}
          {renderBasicInfo("Rating Counts", book.ratingCounts)}
        </div>
        <div className="card-bottom-information">
          <StarRating rating={book.rating}></StarRating>
        </div>
      </div>
    </div>
  );
};

export default Card;
