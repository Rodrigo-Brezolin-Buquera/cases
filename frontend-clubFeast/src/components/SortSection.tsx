import React, { memo, useState } from "react";
import Chevron from "./icons/chevron";

interface SortSectionProps {
  setFilters: any;
  filters: string;
}

const SortSection: React.FC<SortSectionProps> = ({ setFilters, filters }) => {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const openSection = () => {
    setIsopen(!isOpen);
  };

  const markCheckbox = (str:string) => {
        if (str === filters){
            setFilters("")
            return false
        } else {
            setFilters(str)
            return true
        }

  }

  return (
    <section className="bg-white rounded-lg shadow-md p-4 w-48">
      <div className="flex items-center justify-between" onClick={openSection}>
        <h2 className="text-gray-800 text-md font-bold mb-2">Sort</h2>
        <Chevron rotateDown={isOpen} />
      </div>

      {isOpen ? (
        <div className="flex flex-col space-y-2">
          <label
            className="flex items-center space-x-1"
            onClick={() => markCheckbox("upcoming")}
          >
            <input
              type="checkbox"
              checked={filters === "upcoming"}
              className="form-checkbox"
            />
            <span className="text-gray-700">Upcoming</span>
          </label>
          <label
            className="flex items-center space-x-1"
            onClick={() => markCheckbox("popularity")}
          >
            <input
              type="checkbox"
              checked={filters === "popularity"}
              className="form-checkbox"
            />
            <span className="text-gray-700">Popularity</span>
          </label>
          <label
            className="flex items-center space-x-1"
            onClick={() => markCheckbox("rating")}
          >
            <input
              type="checkbox"
              checked={filters === "rating"}
              className="form-checkbox"
            />
            <span className="text-gray-700">Rating</span>
          </label>
        </div>
      ) : null}
    </section>
  );
};

export default memo(SortSection);
