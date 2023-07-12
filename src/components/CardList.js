import React from 'react'
import { Link } from "react-router-dom";
import nulli from '../imgs/nullImage.png'
import Navbarr from './Navbar';

const CardList = ({ movie }) => {
  return (
    
    <div className="overflow-hidden relative h-[30rem] rounded-lg bg-cover transition-all duration-300 img-card cursor-pointer">
    <Link to={`/movie/${movie.id}`} >
    <div className="overlay bg-black bg-opacity-70 w-full h-full absolute z-10 transition-all duration-300"></div>
      <img src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path} onError={(e) => e.currentTarget.src = nulli} alt="img" className="h-full w-full object-center transition-all duration-300 "></img>
        <ul className="flex flex-col gap-4 p-2 absolute left-1/2 -translate-x-1/2 z-50 items-center justify-center transition-all duration-300">
            <li className='font-bold text-white'><span className='pl-0.5'>الاسم: </span> {movie.original_title}</li>
            <li className='font-bold text-white'><span className='pl-0.5'>تاريخ: </span> {movie.release_date}</li>
            <li className='font-bold text-white'><span className='pl-0.5'>عدد المقيمين: </span> {movie.vote_count}</li>
            <li className='font-bold text-white'><span className='pl-0.5'>التقييم: </span> {movie.vote_average}</li>
        </ul>
    </Link>
    </div>
    
  );
}

export default CardList
