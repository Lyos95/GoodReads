import React from 'react'

export const nextPage = (currentPage:number,setCurrentPage:Function) => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

export const prevPage = (currentPage:number,totalPages:number,setCurrentPage:Function) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

export const  selectPage = (page: number,setCurrentPage:Function) => {
    setCurrentPage(page);
  };
  
export const renderPages = (currentPage:number,totalPages:number,maxPages: number,setCurrentPage:Function) => {
    let pages = [];

    if (currentPage > 1 && totalPages > maxPages) {
      pages.push([
        <li
          onClick={() => {
            selectPage(1,setCurrentPage);
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
              selectPage(i,setCurrentPage);
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
            selectPage(totalPages,setCurrentPage);
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