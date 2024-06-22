// import tonturaTitulo from "../assets/tonturaTitulo.mov";
import { Link } from "react-router-dom";
import ModelViewer from "../components/ModelViewer";

export const Home = () => {
  return (
    <>
      <div className="relative bg-[#fcfbff] h-full w-full">
        <nav className="absolute font-[SmoothPet] flex gap-20 text-3xl items-center justify-center lg:top-20 lg:left-[50vh] z-40">
          <Link to="/ed-1" className="hover:text-red-500 hover:cursor-pointer">
            [ed. 1]
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
          <Link to="" className="hover:text-red-500 hover:cursor-pointer">
            Spotify
          </Link>
        </nav>
        <div className="absolute flex items-center justify-start bg-[url('images/tontura-titulo.GIF')] bg-contain lg:bg-contain bg-no-repeat -top-10 lg:bg-no-repeat bg w-1/2 h-1/2 lg:w-full lg:h-[1000px] z-20">
          <div className="absolute flex flex-col lg:flex-row m-auto top-3/4 justify-center items-center text-2xl gap-10"></div>

          <div className="absolute top-[70vh] h-3/4 w-full">
            <ModelViewer scale="3" modelPath={"/images/kioskNEW.glb"} />
          </div>
        </div>
      </div>
    </>
  );
};
