const API_KEY = 'c1ded0bfb98f51bbb3c132d34092ee93';
const BASE_URL = 'https://api.themoviedb.org/3';

const fetchPopularMovies = () => {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Sorry, Something came wrong!`));
    },
  );
};

const fetchMovieInfo = id => {
  return fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Sorry. This movie was not found!`));
  });
};

const fetchMovieByName = movieName => {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Sorry. This movie was not found!`));
  });
};

const fetchCast = id => {
  return fetch(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Sorry. This movie was not found!`));
  });
};

const fetchReviews = id => {
  return fetch(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Sorry. This movie was not found!`));
  });
};

const api = {
  fetchPopularMovies,
  fetchMovieInfo,
  fetchMovieByName,
  fetchCast,
  fetchReviews,
};

export default api;
