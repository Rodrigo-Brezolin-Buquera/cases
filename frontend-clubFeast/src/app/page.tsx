"use client";

import { IMoviesList } from "@/api/interfaces";
import { getPopularMovies } from "@/api/movies";
import FilterSection from "@/components/FilterSection";
import Header from "@/components/Header";
import MovieCard from "@/components/MovieCard";
import SortSection from "@/components/SortSection";
import WacthSection from "@/components/WacthSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState<IMoviesList | undefined>(undefined);
  const [filters, setFilters] = useState("");

  useEffect(() => {
    getPopularMovies()
      .then((movies) => setMovies(movies))
      .catch((err) => console.log(err));
  }, []);

  const sortMovies = (value: string, a: any, b: any) => {
    switch (value) {
      case "popularity":
        return b.popularity - a.popularity;
      case "rating":
        return b.vote_average - a.vote_average;
      case "upcoming":
        const currentDate = new Date();
        const dateA = new Date(a.release_date);
        const dateB = new Date(b.release_date);
        if (dateA < currentDate) {
          return 1;
        } else if (dateB < currentDate) {
          return -1;
        } else {
          return 0;
        }
      default:
        return 0;
    }
  };

  const moviesList =
    movies?.results.length &&
    movies.results
      .sort((a, b) => sortMovies(filters, a, b))
      .map((i) => {
        return (
          <MovieCard
            key={i.id}
            id={i.id}
            title={i.title}
            posterPath={i.poster_path}
            releaseDate={i.release_date}
            voteAverage={i.vote_average}
          />
        );
      });

  return (
    <main className="flex min-h-screen flex-col w-screen ">
      <Header />

      <div className="flex flex-col  w-screen m-8 md:flex-row">
        <div className="flex flex-col gap-4 mb-4 ">
          <h2 className="font-bold">Popular Movies</h2>
          <SortSection setFilters={setFilters} filters={filters} />
          <WacthSection/>
          <FilterSection/>
        </div>
        <div className="flex flex-wrap gap-4  px-4">{moviesList}</div>
      </div>
    </main>
  );
}
