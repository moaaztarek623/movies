import React from 'react'
import CardList from './CardList'
import PaginationCom from './Pagination'
import Navbarr from './Navbar'

const Cards = ({ movies , getPage, pageCount, SEARCH}) => {

  return (
    <>
    <Navbarr SEARCH={SEARCH} />
    <div>
       <PaginationCom getPage={getPage} pageCount={pageCount}/>
    <div className='grid grid-cols-4 gap-8 mx-48 justify-center my-12'>
       {
        movies.length >= 1 ? movies.map((m) => {
          return (
            <CardList movie={m}/>
          )
        }): (<h1 className='font-bold text-white text-center w-full'>لا يوجد افلام الان</h1>) 
       }

    </div>
    </div>
    </>
  )
}

export default Cards
