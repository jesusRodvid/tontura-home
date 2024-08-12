// import tonturaTitulo from "../assets/tonturaTitulo.mov";
import { Link } from "react-router-dom";
import Scene from "../components/Scene";

function Home(){
  return (
    <>
      <div className="relative h-screen w-screen object-cover bg-no-repeat bg-[url('images/tontura-titulo.GIF')]">
        <nav className="absolute font-[SmoothPet] flex flex-col lg:flex-row gap-10 text-2xl lg:gap-20 lg:text-3xl items-center justify-center top-[20vh] left-[30vw] lg:top-20 lg:left-[50vw] z-20">
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
        <div className="absolute z-10 h-screen w-screen"></div>

        <div className="absolute top-[90vh] h-[200vh] w-full z-40 overflow-hidden">
          <Scene modelUrl="/images/kioskNEW.glb" />
        </div>
      </div>
    </>
  );
}

export default Home;
