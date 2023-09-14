import { isDatePassed } from "@/utils/dates";
import React from "react";

interface AditionalInfoProps {
  status: string;
  original_language: string;
  website: string
}

const AditionalInfo: React.FC<AditionalInfoProps> = ({
  status,
  original_language,
  website
}) => {

  return (
    <div className="flex-col w-64 gap-8 mt-8 md:mt-0 ">
      <div className=" flex mb-6 gap-4">
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={"/socialMedia/FacebookLogo.png"}
            alt={"Facebook logo"}
            className={"w-8"}
          />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={"/socialMedia/TwitterLogo.png"}
            alt={"Twitter logo"}
            className={"w-8"}
          />
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={"/socialMedia/InstagramLogo.png"}
            alt={"Instagram logo"}
            className={"w-8"}
          />
        </a>

        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={"/socialMedia/Share.png"}
            alt={"Share logo"}
            className={"w-8"}
          />
        </a>
      </div>
      <div className="mb-6">
        <h4 className="font-bold text-md ">Status</h4>
        <p>{status}</p>
      </div>
      <div className="mb-6">
        <h4 className="font-bold text-md ">Original Language</h4>
        <p>{original_language?.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default AditionalInfo;
