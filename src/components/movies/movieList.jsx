
import React from 'react';
import { useLocation } from 'react-router-dom';
import { MovieListLink } from './styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  
  return (
    <ul>
      {movies.map(({id, title}) => {
        return (
          <li key={id} >
            <MovieListLink to={`/movies/${id}`} state={{from:location}}>{title}</MovieListLink>
          </li>
        );
      })}
    </ul>
  );
};
