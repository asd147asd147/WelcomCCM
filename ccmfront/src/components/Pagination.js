import React, { Component } from 'react';
import _ from 'lodash';

// const Pagination = (props) => {
//   const { itemsCount, pageSize, currentPage, onChange } = props; 

//   const pageCount = Math.ceil(itemsCount / pageSize); 
//   if (pageCount === 1) return null; 
//     console.log(this.currentPage);
//   const pages = _.range(1, pageCount + 1); 

// }
class Pagination extends Component {
    state = {
        ItemsCount: this.props.itemsCount,
        PageSize: this.props.pageSize,
        CurrentPage: this.props.currentPage,
        onPageChange: this.props.onPageChange
    }
    
    pageCount = Math.ceil(this.state.ItemsCount / this.state.PageSize);
    pages = _.range(1, this.pageCount+1);

    render() {
        // console.log(this.state.CurrentPage);
        return (
            <nav> {/* VSCode 입력: nav>ul.pagination>li.page-item>a.page-link */}
            <ul className="pagination">
            {this.pages.map(page => (
                <li 
                key={page} 
                className={page === this.state.CurrentPage ? "page-item active" : "page-item"} 
                style={{ cursor: "pointer" }}>
                <a className="page-link" onClick={() => this.state.onPageChange(page)}>{page}</a>
                </li>
            ))}
            </ul>
        </nav>
        );
    }

}

export default Pagination;