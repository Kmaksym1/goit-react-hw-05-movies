import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '29b0d2aa85a3c0b16bad1778a50b3bea';

export const fetchMovieTrending = async () => {
  const response = await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return response.data.results;
};

export const fetchMovieSearch = async input => {
  const response = await axios.get('search/movie', {
    params: { query: input, api_key: API_KEY },
  });
  console.log();
  return response.data.results;
};

export const fetchMovieDetail = async id => {
  const response = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchMovieCredits = async id => {
  const response = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });

  return response.data.cast;
};

export const fetchMovieReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY
    },
  });
  console.log(response.data.results);
  return response.data.results;
};
