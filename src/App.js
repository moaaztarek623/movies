import React, { useEffect, useState } from 'react';
import Navbarr from './components/Navbar';
import Cards from './components/Cards';
import axios from 'axios'
import PaginationCom from './components/Pagination';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MovieDetails from './components/MovieDetails'

const App = () => {

  const [movies, setstate] = useState([]);
  const [pageCount, setpage] = useState()
  const fetching = async() => {

    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9cf9a60a0c0d471e8c4db0788d95469f&language=ar");
    setstate(res.data.results);
    setpage(res.data.total_pages)
    console.log(res.data);
  }
  
  useEffect(() => {
    fetching();
  }, [])

  const SEARCH = async ( word ) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${word}&api_key=9cf9a60a0c0d471e8c4db0788d95469f&language=ar`);
    if (word === "") {
      fetching();
      setpage(res.data.total_pages)
    }else { 
      setstate(res.data.results)
      setpage(res.data.total_pages)
    }
  }
  
  const getPage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=9cf9a60a0c0d471e8c4db0788d95469f&language=ar&page=${page}`);
    setstate(res.data.results);
    setpage(res.data.total_pages)
    console.log(res.data.total_pages);
  }

  return (  
    <div className="flex flex-col bg-custom min-h-screen">
      <BrowserRouter>
        <Routes>
        <Route path='/navbar' element={<Navbarr SEARCH={SEARCH} />}/>
          <Route path={'/'} element={<Cards movies={movies} getPage={getPage} pageCount={pageCount} SEARCH={SEARCH}/>}/>
          <Route path={'/movie/:id'} element={<MovieDetails SEARCH={SEARCH}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
