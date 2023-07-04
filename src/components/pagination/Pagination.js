import React, { useState } from "react";
import styles from "./Pagination.module.scss";

const Pagination = ({
  currentPage,
  setCurrentPage,
  productPerPage,
  totalProducts,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productPerPage);

  // Limit the page Numbers shown
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  //   Paginate
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Go to next page
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
    //Show next set of pageNumbers
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  // Go to prev page
  const paginatePrev = () => {
    setCurrentPage(currentPage - 1);
    //Show next set of pageNumbers
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  //   console.log(pageNumbers);

  return (
    <ul className={styles.pagination}>
      <li
        onClick={paginatePrev}
        className={currentPage === pageNumbers[0] ? `${styles.hidden}` : null}
      >
        Prev
      </li>

      {pageNumbers.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              onClick={() => paginate(number)}
              className={currentPage === number ? `${styles.active}` : null}
            >
              {number}
            </li>
          );
        }
        return null;
      })}
      <li
        onClick={paginateNext}
        className={
          currentPage === pageNumbers[pageNumbers.length - 1]
            ? `${styles.hidden}`
            : null
        }
      >
        Next
      </li>
      <p>
        <b className={styles.page}>{`Page ${currentPage}`}</b>
        <span> of </span>
        <b>{`${totalPages}`}</b>
      </p>
    </ul>
  );
};

export default Pagination;