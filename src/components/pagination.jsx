import styled from 'styled-components'
import ReactPaginate from 'react-paginate'

function Pagination({ className, currentPage, setCurrentPage, perPage }) {
    const pageNum = []
    for (let i = 0; i < perPage; i++) {
        pageNum.push(i)
    }
    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1)
    }
    return (<div className={`${className} mt-5 Pagination`}>
        <ReactPaginate
            breakLabel="...."
            nextLabel=">"
            forcePage={currentPage - 1}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageNum.length}
            previousLabel="<"
            pageClassName="pageList"
            activeClassName="activePage"
            previousClassName="prev"
            nextClassName="next"
            containerClassName="pageBox"
        />
    </div>)
}
export default styled(Pagination)`
    .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -35px;
    }
    span {
    margin: 0 10px;
    font-weight: bold;
    cursor: pointer;
  }
  .page-item {
    padding: 0.5rem;
    cursor: pointer;
    font-weight: bold;
  }
  .page-item.active {
    background-color: #fff;
  }
  .pagination-page-num {
    margin: 0;
  }
  .pageList {
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
  }
  .pageBox > li > a {
    text-decoration: none;
  }
  .activePage,
  a:active {
    background: #808080;
    border-radius: 90%;
    color: white;
  }
  .prev {
    font-size: 1.1rem;
    padding-right: 5px;
    cursor: pointer;
  }
  .next {
    font-size: 1.1rem;
    padding-left: 5px;
    cursor: pointer;
  }
  .pageBox {
    display: flex;
    list-style: none;
    justify-content: center;
    font-size: 1.1rem;
  }
`

