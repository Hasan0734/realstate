import React from "react";
import ReactPaginate from "react-paginate";
import styles from './reactPaginate.module.css'


const ReviewPagination = ({ pageCount, changePage }) => {
  return (
    <>
      <nav className="pt-4 pb-2 border-top" aria-label="Blog pagination">
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBttns}
          previousLinkClassName={styles.previousBttn}
          nextLinkClassName={styles.nextBttn}
          disabledClassName={styles.paginationDisabled}
          activeClassName={styles.paginationActive}
        />
      </nav>
    </>
  );
};

export default ReviewPagination;
