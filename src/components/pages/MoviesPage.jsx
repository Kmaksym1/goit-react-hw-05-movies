import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import SearchBox from 'components/movies/searchBox.jsx';
import { MoviesList } from 'components/movies/movieList.jsx';
import { fetchMovieSearch } from '../api.jsx';

const MoviesPage = () => {
  const [moviesFounded, setMoviesFounded] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
    
  useEffect(() => {

    async function fetchMovie() {
      const list = await fetchMovieSearch(query);
      setMoviesFounded(list);
    }

    fetchMovie();
  }, [query]);
    
    const handleSubmit = input => {
        if (searchParams === '') {
            return setSearchParams({});
          }
    setSearchParams({ query: input });
  };

  return (
    <>
          <SearchBox handleSubmit={handleSubmit} />
          {moviesFounded && <MoviesList movies={moviesFounded}/>}
          
    </>
  );
};
export default MoviesPage;
