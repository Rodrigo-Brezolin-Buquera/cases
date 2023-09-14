import { IMG_URL } from "@/api/config";
import { formatDate } from "@/utils/dates";
import { useRouter } from "next/navigation";
import React, { memo } from "react";
import RatingCircle from "./RatingCircle";

interface MovieCardProps {
  id: number;
  posterPath: string;
  title: string;
  releaseDate: string;
  voteAverage: number;
}

const MovieCard: React.FC<MovieCardProps> = (props) => {
  const { id, posterPath, title, releaseDate, voteAverage } = props;
  const router = useRouter();

  const goToDetailsPage = () => {
    router.push(`details/${id}`);
  };

  return (
    <div
      className="w-60 ed overflow-hidden shadow-lg hover:cursor-pointer relative"
      onClick={goToDetailsPage}
    >
      <div className="flex items-center justify-center h-6 w-6 bg-gray-100 bg-opacity-50 rounded-full absolute top-2 right-2">
        <p className="text-black font-bold text-md">...</p>
      </div>

      <img src={`${IMG_URL}${posterPath}`} alt={title} className="w-full" />
      <div className="px-3 py-4 relative">
        <div className="absolute -top-8 left-2">
          <RatingCircle voteAverage={voteAverage} />
        </div>

        <div className="font-bold text-sm mb-2 pt-6">{title}</div>
        <p className="text-gray-500 text-xs "> {formatDate(releaseDate)} </p>
      </div>
    </div>
  );
};

export default memo(MovieCard);
