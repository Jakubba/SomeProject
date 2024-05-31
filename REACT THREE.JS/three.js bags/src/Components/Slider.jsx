import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';

function Slider() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    getTredingMovies();
  }, []);

  const getTredingMovies = () => {
    GlobalApi.getTredingVideos.then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  return (
    <div className='flex overflow-x-auto w-full px-16 py-4 no-scrollbar '>
      {movieList.map((item) => {
        return (
          <img
            className='min-w-full h-310px object-cover object-left-top mr-5 rounded-md'
            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
            alt={item?.title}
          />
        );
      })}
    </div>
  );
}

export default Slider;
