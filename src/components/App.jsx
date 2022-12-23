import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './sharedLayout/sharedLayout';

const Home = lazy(() => import('../pages/home'));
const Movies = lazy(() => import('../pages/movies'));
const MovieDetails = lazy(() => import('../pages/movieDetails'));
const Cast = lazy(() => import('./cast/cast'));
const Reviews = lazy(() => import('./reviews/reviews'));
const NotFound = lazy(() => import('../pages/notFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
