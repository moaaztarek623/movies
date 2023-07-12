import React from 'react';
import ReactPaginate from 'react-paginate';

const PaginationCom = ({getPage, pageCount}) => {

    const handlePageClick = (data) => {
      getPage(data.selected + 1)
    }

  return (
    <div className="p-4">
    <ReactPaginate
    breakLabel="..."
    nextLabel="التالي"
    onPageChange={handlePageClick}
    pageRangeDisplayed={3}
    pageCount={pageCount}
    previousLabel="السابق"
    renderOnZeroPageCount={null}
    containerClassName='flex justify-center w-fit mx-auto p-3 gap-3 text-white rounded-lg border border-gray-600 mb-3'
    pageClassName='py-2 rounded-lg hover:bg-gray-300 hover:text-black'
    pageLinkClassName='py-2 px-4'
    activeClassName='bg-gray-300 text-black'
    previousLinkClassName=' border-l-gray-600'
    previousClassName='flex items-center'
    nextClassName='flex items-center'
    disabledClassName='opacity-40'
/>
    </div>
  )
}

export default PaginationCom
