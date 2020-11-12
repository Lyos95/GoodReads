import React from "react";
import "./card.scss";
import StarRating from "../StarRating/StarRating";
import { Book } from "../../objectTemplates/templates";
import { renderAuthorName, renderBasicInfo, renderDescription } from "./utils";

// our components props accept a number for the initial value
type CardProps = { book: Book, triggerAction?: Function };
const Card = ({ book, triggerAction }: CardProps) => {

  return (
    <div className="card">
      <div className="card-picture">
        <img className="card-picture__image" alt={book.title} src={book.image}></img>
      </div>
      <div className="card-information">
        <div className="card-top-information">
          <h2 className="card-top-information__title">{book.title}</h2>
          {renderAuthorName(book,triggerAction)}
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
