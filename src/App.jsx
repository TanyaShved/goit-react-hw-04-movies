import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppBar from './components/AppBar/AppBar';
import Spinner from './components/Spinner/Spinner';
import { addBackToTop } from 'vanilla-back-to-top';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-view" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-view" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movies-details-view" */
  ),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "not-found-view" */),
);

const App = () => {
  useEffect(() => {
    addBackToTop({
      backgroundColor: '#ff6b08',
    });
  }, []);

  return (
    <>
      <AppBar />

      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies/:slug">
            <MovieDetailsPage />
          </Route>

          <Route path="/movies">
            <MoviesPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer position="top-center" />
    </>
  );
};

export default App;
