import React from "react";

interface RatingCircleProps {
  voteAverage: number;
}

const RatingCircle: React.FC<RatingCircleProps> = ({ voteAverage }) => {

  const borderColor = () => {
    if (voteAverage >= 7) {
        return "border-lime-600";
    } else if (voteAverage < 7 && voteAverage >= 5 ) {
        return "border-yellow-300";
    } else {
        return "border-amber-700";
    }
  };

  return (
    <div className="flex items-center justify-center h-16 w-16 bg-black rounded-full">
      <div className={`h-14 w-14 bg-black rounded-full flex items-center justify-center ${borderColor()} border-4`}>
        <p className="text-white font-bold text-md">{(voteAverage*10).toFixed(0)}<sup className="text-xl/16">%</sup></p>
      </div>
    </div>
  );
};

export default RatingCircle;
