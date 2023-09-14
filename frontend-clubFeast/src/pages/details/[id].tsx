"use client";

import {   IMovieDetails } from "@/api/interfaces";
import {
  getMovieById
} from "@/api/movies";
import AditionalInfo from "@/components/AditionalInfo";
import CastList from "@/components/CastList";
import Header from "@/components/Header";
import Chevron from "@/components/icons/chevron";
import MovieDetails from "@/components/MovieDetails";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../../styles/globals.css";



const Details: React.FC = () => {
  const [movie, setMovie] = useState<IMovieDetails | undefined>(undefined);
  const router = useRouter();
  const id = router.query.id as string;


  useEffect(() => {
    if (!router.isReady) return;

    getMovieById(id)
    .then(movie=>setMovie(movie))
    .catch(err =>console.log(err))

  }, [router.isReady]);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <nav className="flex w-screen flex-wrap gap-8 justify-center md:h-12">
        <button className="flex items-center gap-2 hover:cursor-pointer border-b-4 border-transparent hover:border-blue-400 ">
          OverView <Chevron rotateDown={true} />
        </button>
        <button className="flex items-center gap-2 hover:cursor-pointer border-b-4 border-transparent hover:border-blue-400 ">
          Media <Chevron rotateDown={true} />
        </button>{" "}
        <button className="flex items-center gap-2 hover:cursor-pointer border-b-4 border-transparent hover:border-blue-400 ">
          Fandom <Chevron rotateDown={true} />
        </button>{" "}
        <button className="flex items-center gap-2 hover:cursor-pointer border-b-4 border-transparent hover:border-blue-400 ">
          Share <Chevron rotateDown={true} />
        </button>
      </nav>
      <MovieDetails movie={movie!}  />
      <div className="flex flex-col md:flex-row w-full p-8 gap-8 ">
        <CastList id={id} />
        <AditionalInfo
          status={movie?.status!}
          original_language={movie?.original_language!}
          website={movie?.homepage!}
        />
      </div>
    </main>
  );
};

export default Details;
