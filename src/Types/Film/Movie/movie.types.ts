export type MovieT = {
  id: string;
  name: string;
  sinopsis: string;
  trailer: string;
  preview: string;
  categoryId: string;
  duration: string;
  rating: number;
};

export type MoviesT = Array<MovieT>;
