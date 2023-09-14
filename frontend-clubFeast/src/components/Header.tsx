import { useRouter } from "next/navigation";
import MagnifingGlass from "./icons/magnifingGlass";

const Header: React.FC = () => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push(`/`);
  };

  return (
    <header className="bg-blue-950 text-white py-4 px-6 w-screen ">
      <div className="container mx-auto flex  ">
        <img
          src={"/logo.svg"}
          alt={"TMDB Logo"}
          className="bg-transparent w-40 mr-5"
        />
        <nav className="flex justify-between w-full">
          <div className="flex items-center space-x-8">
            <button
              className="hover:text-gray-300 hover:cursor-pointer"
              onClick={goToHomePage}
            >
              Movies
            </button>
            <button
              className="hover:text-gray-300 hover:cursor-pointer"
              onClick={goToHomePage}
            >
              TV Shows
            </button>
            <button className="hover:text-gray-300 hover:cursor-pointer  hidden md:block ">
              People
            </button>
          </div>

          <div className="flex space-x-8 hidden md:block  ">
            <button className="hover:text-gray-300 hover:cursor-pointer font-bold text-2xl">
              +
            </button>
            <button className="hover:text-gray-300 hover:cursor-pointer border-2 rounded p-1 hover:border-gray-300">
              EN
            </button>
            <button className="hover:text-gray-300 hover:cursor-pointer">
              Login
            </button>
            <button className="hover:text-gray-300 hover:cursor-pointer">
              Join TMDB
            </button>
            <button className="hover:text-gray-300 hover:cursor-pointer" >
              <MagnifingGlass />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
