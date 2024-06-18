// import tonturaTitulo from "../assets/tonturaTitulo.mov";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="relative flex items-center justify-center bg-[url('images/tontura-titulo.GIF')] bg-contain lg:bg-contain lg:bg-no-repeat bg w-screen h-screen lg:w-full lg:h-[1000px]">
        <div className="absolute flex flex-col lg:flex-row m-auto top-3/4 justify-center items-center text-2xl gap-10">
          <Link to="/ed-1" className="hover:text-red-500 hover:cursor-pointer">
            [ed. 1]
          </Link>
          <div>[ed. ???]</div>
          <div>[ed. ???]</div>
        </div>
      </div>

      {/* <div className="w-full h-full">
        <video
          className="video w-full h-full object-cover"
          src={tonturaTitulo}
          autoPlay
          loop
          muted
        />
      </div> */}

    </>

  );
};
