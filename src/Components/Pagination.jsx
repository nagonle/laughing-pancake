import React from 'react';
import './Pagination.css';


const Pagination = ({ productsPerPage, totalProducts, handlePage, handleArrow, currentPage }) => {

    let pageNumbers = [];
    for (let i=1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    const totalPages = pageNumbers.length;

    console.log('current page:', currentPage)
    return (
        <div className="pagination">
                <li key={pageNumbers + 2} className="arrow-left">
                    <button href="" className="page-link arrow-left" onClick={() => handleArrow(-1, totalPages)}>
                       &lt; 
                    </button>
                </li>
            {

            pageNumbers.map(number => (
                <li key={number} className="page-item">
                    <button href="" onClick={() => handlePage(number)} className={'page-link ' + (currentPage == number ? 'isActive' : '')}>
                        {number}
                    </button>
                </li>
            ))
            }
                <li key={pageNumbers + 1} className="arrow-right">
                    <button href="" className="page-link arrow-right" onClick={() => handleArrow(1, totalPages)}>
                        &gt;
                    </button>
                </li>
        </div>
    )
}

export default Pagination;
