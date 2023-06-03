import axios from 'axios';
import { toast } from 'react-toastify';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '45a3b58db21831f605301278579c97a0',
  },
});

export const fetchTrendingMovies = async () => {
  try {
    const { data } = await instance.get('/trending/movie/day', {});
    return data.results;
  } catch (error) {
    toast.warning('OPPS. Something wrong!');
    return error.message;
  }
};

export const searchMovieByTitle = async query => {
  try {
    const { data } = await instance.get(`/search/movie`, {
      params: { language: 'en-US', page: 1, include_adult: false, query },
    });
    console.log(data.results);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const fetchMovieDetails = async movie_id => {
  try {
    const { data } = await instance.get(`/movie/${movie_id}`, {
      params: { language: 'en-US' },
    });
    return data;
  } catch (error) {
    return error.message;
  }
};

export const getCastById = async movie_id => {
  try {
    const { data } = await instance.get(`/movie/${movie_id}/credits`, {
      params: { language: 'en-US' },
    });
    return data.cast;
  } catch (error) {
    return error.message;
  }
};

export const getReviewsById = async movie_id => {
  try {
    const { data } = await instance.get(`/movie/${movie_id}/reviews`, {
      params: { language: 'en-US' },
    });
    return data.results;
  } catch (error) {
    return error.message;
  }
};
