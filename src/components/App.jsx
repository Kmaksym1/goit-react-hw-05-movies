import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout.jsx';

const HomePage = lazy(()=> import('./pages/HomePage.jsx'));
const MoviesPage = lazy(() => import('./pages/MoviesPage.jsx'));
const Movie = lazy(() => import('./movies/movie.jsx'));
const Cast = lazy(() => import('../components/movies/Cast&Review/cast'));
const Review = lazy(() => import('../components/movies/Cast&Review/review.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

export const App = () => {

  return (
    <div
      style={{
        width: "1400px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: "0 auto",
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:id" element={<Movie />}>
            <Route path="credits" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
