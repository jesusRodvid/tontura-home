// import tonturaTitulo from "../assets/tonturaTitulo.mov";
import { Link } from "react-router-dom";
import ModelViewer from "../components/ModelViewer";

export const Home = () => {
  return (
    <>
      <div className="relative bg-[#fcfbff] h-full w-full">
        <nav className="absolute font-[SmoothPet] flex flex-col lg:flex-row gap-10 text-2xl lg:gap-20 lg:text-3xl items-center justify-center top-[20vh] left-[30vw] lg:top-20 lg:left-[50vw]">
          <Link to="/ed-1" className="hover:text-red-500 hover:cursor-pointer">
            Ediciones
          </Link>
          <Link
            to="/about-us"
            className="hover:text-red-500 hover:cursor-pointer"
          >
            Sobre nosotros
          </Link>
          <Link
            to="https://instagram.com/tonturazine"
            className="hover:text-red-500 hover:cursor-pointer"
          >
            Instagram
          </Link>
          <Link
            to="https://open.spotify.com/user/31ijyok47fxfkcbt3pqzq3hqxxay"
            className="hover:text-red-500 hover:cursor-pointer"
          >
            Spotify
          </Link>
        </nav>

        <div className="z-20">
          <img src="images/tontura-titulo.GIF" alt="Logo tontura" />
        </div>

        <div className="absolute top-[80vh] h-full w-full z-50">
          <ModelViewer scale="3" modelPath={"/images/kioskNEW.glb"} />
        </div>
      </div>
    </>
  );
};
