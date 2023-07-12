import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-tailwind/react'
import nullImage from '../imgs/nullImage.png'
import Navbarr from './Navbar';

const MovieDetails = ({ SEARCH }) => {
  const [movie, setmovie] = useState([])
  const [hand, sethand] = useState()
  const param = useParams();
  console.log(param);
  
  const getMovieDetails = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=9cf9a60a0c0d471e8c4db0788d95469f&language=ar`);
    sethand(String(res.data.original_title).trim().replace(/\s+/g, '-').replace(':', '').toLowerCase());
    setmovie(res.data);
    console.log(res.data);
    
  }
  
  useEffect(() => {
    getMovieDetails();
  }, [])

  return (
    <>
      <Navbarr SEARCH={SEARCH} />
    
    <div className="flex justify-center px-16 py-8 flex-col gap-6">
        <div className="flex justify-between border-2 w-full rounded-lg p-6 border-gray-700 items-center">
          <div className="w-[18rem]">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} onError={(e) => e.currentTarget.src = nullImage} alt="img" className="h-full w-full object-center transition-all duration-300 "></img>
          </div>
          <div className="flex flex-col gap-4 items-center text-center flex-1">
            <p className='text-white font-bold text-xl border-b pb-2 border-b-gray-800'>اسم الفيلم: {movie.title}</p>
            <p className='text-white font-bold text-xl border-b pb-2 border-b-gray-800'>تاريخ نشر الفيلم: {movie.release_date}</p>
            <p className='text-white font-bold text-xl border-b pb-2 border-b-gray-800'>عدد مقيمين الفيلم: {movie.vote_count}</p>
            <p className='text-white font-bold text-xl border-b pb-2 border-b-gray-800'>متوسط تقييم الفيلم: {Number(movie.vote_average).toFixed(1)}</p>
          </div>
        </div>
        <div className="flex justify-between border-2 w-full flex-col rounded-lg p-6 gap-8 border-gray-700 ">
            <div ><h1 className='font-bold text-gray-200 underline underline-offset-8 text-2xl'>القصة</h1></div>
            <div><p className='font-bold text-white'>{movie.overview ? movie.overview : <h1>لا توجد قصة</h1>}</p></div>
        </div>
        <div className="w-full flex gap-4 justify-center items-center">
         <Link to={'/'}><Button className='cairo text-white' color='gray'>العودة للقائمه الرئيسيه</Button></Link>
          <a href={`https://www.marvel.com/movies/${hand}`}><Button className='cairo text-white' color='green'>مشاهدة الفيديو</Button></a>
        </div>
    </div>
    </>
  )
}

export default MovieDetails
