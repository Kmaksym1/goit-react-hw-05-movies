import { useEffect, useState, useRef } from 'react';
import { fetchMovieDetail } from '../api.jsx';
import { Suspense } from 'react';
import { MovieListLink } from './styled';
import {
  useParams,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';
import { BackLink } from './backLink.jsx';
import { MovieContainer } from './movieContainer.jsx';
import { Loader } from 'components/Loader/Loader.jsx';

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieCurrent = await fetchMovieDetail(id);

        setMovie(movieCurrent);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <BackLink backLinkHref={backLinkHref}> Go Back</BackLink>
      <MovieContainer movie={movie} />
      <p>Additional information</p>
      <ul>
        <li>
          <MovieListLink to="credits">Cast</MovieListLink>
        </li>
        <li>
          <MovieListLink to="review">Review</MovieListLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Movie;
