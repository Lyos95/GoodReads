import React, { useEffect, useState } from "react";
import "./pagination.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../../hooks/useWindowSize";

type PaginationProps = { totalPages: number,currentPage:number,setCurrentPage:Function };
const Pagination = ({ totalPages,currentPage,setCurrentPage }: PaginationProps) => {

  const [maxPages, setMaxPages] = useState(7);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width < 800 && maxPages === 7) {
      setMaxPages(3);
    } else if (size.width > 800 && maxPages === 3) {
      setMaxPages(7);
    }
  }, [size,maxPages]);


  let nextPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  let prevPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  let selectPage = (page: number) => {
    setCurrentPage(page);
  };
  let renderPages = (maxPages: number) => {
    let pages = [];

    if (currentPage > 1 && totalPages > maxPages) {
      pages.push([
        <li
          onClick={() => {
            selectPage(1);
          }}
          className="page__numbers"
          key='1'
        >
          1
        </li>,
        <li className="page__dots" key='dots-start'>...</li>,
      ]);
    }

    let startPoint = currentPage < totalPages - maxPages ? currentPage : totalPages - maxPages;

    for (let i = startPoint; i <= totalPages && i < currentPage + maxPages; i++) {
      let buttonClass = `page__numbers ${currentPage === i ? "active" : ""}`;
      pages.push(
        <li
            onClick={() => {
              selectPage(i);
            }}
            className={buttonClass}
            key={i}
          >
            {i}
        </li>
      );
    }
    if (currentPage <= totalPages - maxPages) {
      let buttonClass = `page__numbers ${
        currentPage === totalPages ? "active" : ""
      }`;
      pages.push([
        <li className="page__dots" key="dots-end">...</li>,
        <li
          onClick={() => {
            selectPage(totalPages);
          }}
          className={buttonClass}
          key={totalPages}
        >
          {totalPages}
        </li>,
      ]);
    }
    return pages;
  };

  return (
    <div id="app" className="container">
      <ul className="page">
        <li onClick={nextPage} className="page__btn">
          <span className="material-icons">
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
          </span>
        </li>
        {renderPages(maxPages)}
        <li onClick={prevPage} className="page__btn">
          <span className="material-icons">
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
