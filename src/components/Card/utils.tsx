import { Book } from "../../objectTemplates/templates";
import React from 'react'
export const renderAuthorName = (book:Book,triggerAction?:Function) => {
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

export const renderDescription = (title: string, details: any) => {
    if (title && details) {
      return (
        <>
          <p className="card-top-information__basic-info">{title}:</p>
          <p dangerouslySetInnerHTML={{ __html: details }}></p>
        </>
      );
    }
  };

export const renderBasicInfo = (
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