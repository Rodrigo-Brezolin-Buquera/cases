import { IMG_URL } from "@/api/config";
import React, { memo } from "react";

interface CastCardProps {
  profilePicture: string;
  name: string;
  character: string;
}

const CastCard: React.FC<CastCardProps> = ({
  profilePicture,
  name,
  character,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden w-40 h-80">
      <img
        src={`${IMG_URL}${profilePicture}`}
        alt="Profile Picture"
        className="w-full h-auto"
      />
      <div className="p-4">
        <h3 className="text-sm font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{character}</p>
      </div>
    </div>
  );
};

export default memo(CastCard);
