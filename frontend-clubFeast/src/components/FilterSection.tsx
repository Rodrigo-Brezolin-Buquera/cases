import React, { memo, useState } from "react";
import Chevron from "./icons/chevron";

const FilterSection: React.FC = () => {
  const [isOpen, setIsopen] = useState<boolean>(false);

  const openSection = () => {
    setIsopen(!isOpen);
  };

  return (
    <section className="bg-white rounded-lg shadow-md p-4 w-48">
      <div className="flex items-center justify-between" onClick={openSection}>
        <h2 className="text-gray-800 text-md font-bold mb-2">Filters</h2>
        <Chevron rotateDown={isOpen} />
      </div>

      {isOpen ? (
        <div className="h-40">
         
        </div>
      ) : null}
    </section>
  );
};

export default memo(FilterSection);
