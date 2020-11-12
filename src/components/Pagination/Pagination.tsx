import React, { useEffect, useState } from "react";
import "./pagination.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../../hooks/useWindowSize";
import { nextPage, prevPage, renderPages } from "./utils";

type PaginationProps = { totalPages: number,currentPage:number,setCurrentPage:Function };
const Pagination = ({ totalPages,currentPage,setCurrentPage }: PaginationProps) => {

  const [maxPages, setMaxPages] = useState(7);
  const size = useWindowSize();

  //If the browser changes its size then:
  useEffect(() => {
    if (size.width < 800 && maxPages === 7) {
      setMaxPages(3);
    } else if (size.width > 800 && maxPages === 3) {
      setMaxPages(7);
    }
  }, [size,maxPages]);

  return (
    <div id="app" className="container">
      <ul className="page">
        <li onClick={()=>{nextPage(currentPage,setCurrentPage)}} className="page__btn">
          <span className="material-icons">
            <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
          </span>
        </li>
        {renderPages(currentPage,totalPages,maxPages,setCurrentPage)}
        <li onClick={()=>{prevPage(currentPage,totalPages,setCurrentPage)}} className="page__btn">
          <span className="material-icons">
            <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
