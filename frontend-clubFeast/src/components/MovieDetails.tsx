import { IMG_URL } from "@/api/config";
import { IGenre, IMovie, IMovieDetails } from "@/api/interfaces";
import { formatDate, formatRuntime } from "@/utils/dates";
import BarIcon from "./icons/BarIcon";
import BookMarkIcon from "./icons/BookMarkIcon";
import Heart from "./icons/heart";
import PlayIcon from "./icons/PlayIcon";
import StarIcon from "./icons/StarIcon";
import RatingCircle from "./RatingCircle";

interface MovieDetailsProps {
  movie: IMovieDetails;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {


  const GenresList = () => {
    const list = movie?.genres.map((i, index, arr) => {
      const comma = index !== arr.length - 1 ? ", " : "";
      return (
        <p key={i.id} className={"bg-red"}>
          {i.name}
          {comma}
        </p>
      );
    });

    return <>{list}</>;
  };

  return (
    <div className="w-screen  md:flex md:flex-row  bg-grey-900 relative ">
      <div className="absolute inset-0 bg-black opacity-90 -z-10"></div>
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${IMG_URL}${movie?.backdrop_path})`,
          opacity: 0.1,
        }}
      ></div>

      <img
        src={`${IMG_URL}${movie?.poster_path}`}
        alt={movie?.title}
        className="w-80 m-8 rounded-2xl z-10	"
      />
      <div className="pt-12 z-10  text-white	">
        <h2 className="text-2xl font-bold mb-4">{movie?.title}</h2>
        <div className="text-sm flex flex-wrap md:flex-nowrap gap-1 md:gap-2 h-6 items-center ">
          <p className="border-2 font-bold p-1 h-6 w-5 flex items-center justify-center text-zinc-400 border-zinc-400">
            {movie?.adult ? "R" : "E"}
          </p>
          <p>{formatDate(movie?.release_date)}</p>
          <li></li>
          <div className="flex gap-1 ">{<GenresList />}</div>
          <li></li>
          <p >{formatRuntime(movie?.runtime)}m</p>
        </div>

        <div className="flex md:gap-2 h-6 items-center my-12 ">
          <RatingCircle voteAverage={movie?.vote_average} />
          <div className="font-bold">
            <p>User</p>
            <p>Score</p>
          </div>
          <div className="flex items-center justify-center h-10 w-10 bg-sky-950 rounded-full mx-3 hover:text-gray-400 ">
            <BarIcon />
          </div>
          <div className="flex items-center justify-center h-10 w-10 bg-sky-950 rounded-full mx-3 hover:text-gray-400 ">
            <Heart />
          </div>
          <div className="flex items-center justify-center h-10 w-10 bg-sky-950 rounded-full mx-3 hover:text-gray-400 ">
            <BookMarkIcon />
          </div>{" "}
          <div className="flex items-center justify-center h-10 w-10 bg-sky-950 rounded-full mx-3 hover:text-gray-400 ">
            <StarIcon />
          </div>
          <div className="flex gap-1 hover:text-gray-400  ">
            <PlayIcon />
            <p>Play Trailer</p>
          </div>
        </div>

        <div>
          <p className="text-zinc-400 my-2">{movie?.tagline}</p>
          <h1 className="font-bold text-xl ">Overview</h1>
          <p className=" my-4">{movie?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
