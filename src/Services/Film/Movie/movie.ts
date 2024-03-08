import { MoviesT } from "@/Types";
import axios, { AxiosResponse } from "axios";

export const MovieService = {
  async getAll(): Promise<MoviesT> {
    const defaultResponse: MoviesT = [];
    try {
      const movies: AxiosResponse<MoviesT> = await axios.get<MoviesT>(
        "https://react-redux-crud-75194-default-rtdb.firebaseio.com/movies.json"
      );
      return movies.data;
    } catch {
      return defaultResponse;
    }
  },
  async getByCategory(category: string): Promise<MoviesT> {
    const defaultResponse: MoviesT = [];
    try {
      const movies: MoviesT = await this.getAll();
      return movies.filter((movie) => movie.categoryId === category);
    } catch {
      return defaultResponse;
    }
  },
};
