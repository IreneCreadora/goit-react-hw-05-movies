import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY_API = '74c5e15336c71e6f10e46fc816460a0f';

export const getTrendingMovies = async () => {
  const options = {
    params: {
      api_key: KEY_API,
    },
  };
  try {
    const { data } = await axios.get(`/trending/movie/day?`, options);
    const validData = data.results.map(
      ({ id, title, poster_path, vote_average }) => ({
        id,
        poster_path: poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : `https://sdlatlas.com/public/img/thumbnail.jpg`,
        title: title ? title : 'name not found',
        vote_average: vote_average.toFixed(1),
      })
    );
    return validData;
  } catch (error) {
    console.log('Something wrong with API', error.message);
  }
};

export const getMovies = async (searchQuery, currentPage) => {
  const options = {
    params: {
      api_key: KEY_API,
      query: searchQuery,
      page: currentPage,
    },
  };
  try {
    const { data } = await axios.get(`/search/movie?`, options);
    const validData = data.results.map(
      ({ id, title, poster_path, vote_average }) => ({
        id,
        poster_path: poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : `https://sdlatlas.com/public/img/thumbnail.jpg`,
        title: title ? title : 'name not found',
        vote_average: vote_average.toFixed(1),
      })
    );
    return validData;
  } catch (error) {
    console.error('Something wrong with API', error.message);
  }
};

export const getMovieById = async id => {
  const options = {
    params: {
      api_key: KEY_API,
    },
  };
  try {
    const { data } = await axios.get(`/movie/${id}?`, options);
    return data;
  } catch (error) {
    console.error('Something wrong with API', error.message);
  }
};

export const getCasts = async id => {
  const options = {
    params: {
      api_key: KEY_API,
      language: 'en-US',
    },
  };

  try {
    const { data } = await axios.get(`/movie/${id}/credits?`, options);

    return data.cast;
  } catch (error) {
    console.error('Something wrong with API', error.message);
  }
};

export const getReviews = async id => {
  const options = {
    params: {
      api_key: KEY_API,
      language: 'en-US',
      page: 1,
    },
  };

  try {
    const { data } = await axios.get(`/movie/${id}/reviews?`, options);

    return data.results;
  } catch (error) {
    console.error('Something wrong with API', error.message);
  }
};
