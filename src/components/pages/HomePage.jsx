import React from 'react';
import { useEffect, useState } from 'react';
import { MovieListLink } from 'components/movies/styled.jsx';
import { fetchMovieTrending } from '../api.jsx';
import { Home } from './steledPages.jsx';
const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieResults = await fetchMovieTrending();
        setMovies(movieResults);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Home>
      <p>Trending Today</p>
      <ul>
        {movies.map(item => {
          return (
            <li key={item.id}>
              <MovieListLink to={`/movies/${item.id}`}>{item.title}</MovieListLink>
            </li>
          );
        })}
      </ul>
    </Home>
  );
};
export default HomePage;
