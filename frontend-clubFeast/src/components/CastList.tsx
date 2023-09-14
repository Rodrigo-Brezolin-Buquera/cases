import { ICast } from "@/api/interfaces";
import { getMovieCredits } from "@/api/movies";
import { useEffect, useRef, useState } from "react";
import CastCard from "./CastCard";

interface CastListProps {
  id: string;
}

const CastList: React.FC<CastListProps> = ({ id }) => {
  const [movieCredits, setMovieCredits] = useState<ICast[] | undefined>(
    undefined
  );


  useEffect(() => {
    getMovieCredits(id)
      .then((movie) => setMovieCredits(movie))
      .catch((err) => console.log(err));
  }, [id]);

  

  const orderedCast =
    movieCredits?.length &&
    movieCredits
      .sort((a, b) => b.popularity - a.popularity)
      .map((i) => {
        return (
          <CastCard
            key={i.id}
            name={i.name}
            character={i.character}
            profilePicture={i.profile_path}
          />
        );
      });

  return (
    <div className="w-full overflow-x-auto relative">
        <h1 className="font-bold text-md ">Top Billed Cast</h1>
      <div className="flex w-full overflow-x-auto relative">
        <div className=" flex flex-shrink-0 mr-4 gap-4">{orderedCast}</div>
      </div>
    </div>
  );
};

export default CastList;
