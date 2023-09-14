import { log } from "console";
import api, { API_KEY } from "./config";
import { ICast, IGenre, IMovie, IMovieDetails, IMoviesList } from "./interfaces";

export const getPopularMovies = async (): Promise<IMoviesList | undefined> => {
  try {
    const { data } = await api.get(`/movie/popular${API_KEY}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieById = async (id:string): Promise<IMovieDetails | undefined> => {
  try {    
    const { data } = await api.get(`/movie/${id}${API_KEY}`);
    return data ;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieCredits= async (id:string): Promise<ICast[] | undefined> => {
  try {
    const { data } = await api.get(`/movie/${id}/credits${API_KEY}`);
    return data.cast ;
  } catch (err) {
    console.log(err);
  }
};

export const getMovieGenres= async (): Promise< {genres: IGenre[]} | undefined> => {
  try {
    const { data } = await api.get(`/genre/movie/list${API_KEY}`);
    return data ;
  } catch (err) {
    console.log(err);
  }
};




