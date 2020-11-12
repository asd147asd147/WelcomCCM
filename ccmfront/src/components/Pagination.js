import React from 'react';
import _ from 'lodash';

const Pagination = (ItemsCount,PageSize,currentPage,onPageChange) => {
    const pageCount = Math.ceil(ItemsCount / PageSize);
    const pages = _.range(1, pageCount+1);
    return (
        <nav> {/* VSCode 입력: nav>ul.pagination>li.page-item>a.page-link */}
        <ul className="pagination">
        {pages.map(page => (
            <li 
            key={page} 
            className={page === currentPage ? "page-item active" : "page-item"} 
            style={{ cursor: "pointer" }}>
            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a>
            </li>
        ))}
        </ul>
    </nav>
    );
}

export default Pagination;