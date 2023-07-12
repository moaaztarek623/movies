import React from 'react';
import img from '../imgs/1.png'
import { Link } from 'react-router-dom';

const Navbarr = ({ SEARCH }) => {

    const focusParent = (e) => {
        e.classList.add("!border-gray-300")
    }

    const onSearch = (word) => {
      SEARCH(word);
    }

  return (
    <header>
        <nav className='py-4 px-10 flex justify-center items-center gap-6'>
            <div className=" flex justify-between w-full rounded-full border border-gray-700 p-3"><input onChange={(e) => onSearch(e.currentTarget.value)} onBlur={(e) => e.currentTarget.parentElement.classList.remove("!border-gray-300")} onFocus={(e) => focusParent(e.currentTarget.parentElement)} className='flex basis-full outline-none border-none bg-transparent text-white caret-inherit' placeholder='البحث'></input><span className='text-white'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg></span></div>
           <Link to={'/'}> <img alt='img' src={img} className='w-28 cursor-pointer'></img></Link>
        </nav>
    </header>
  )
}

export default Navbarr