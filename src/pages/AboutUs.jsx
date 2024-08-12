import React from 'react';
import { Link } from "react-router-dom";

function AboutUs(){
  return (
    <>
      <div className="relative bg-[#fcfbff] h-full w-full">
        <nav className="absolute font-[SmoothPet] flex flex-col lg:flex-row gap-10 text-2xl lg:gap-20 lg:text-3xl items-center justify-center top-[20vh] left-[30vw] lg:top-20 lg:left-[40%]">
          
          <Link
            to="/"
            className="hover:text-red-500 hover:cursor-pointer">Inicio</Link>

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

        <div className="font-sans text-3xl mx-40 pt-[30vh] z-20">
          Esto es Tontura.zine, un webzine donde hablaremos de música, no solo
          de artistas que nos gusten, sino también de nuestra relación con ella.
          Si quieres participar en el proyecto escribiendo algún artículo,
          recomendando música o tienes alguna aportación contactanos a
          <Link
            className="font-bold hover:text-red-500 ml-2"
            to="mailto:tonturazine@gmail.com"
          >
            tonturazine@gmail.com
          </Link>
          .
        </div>
      </div>
    </>
  );
}

export default AboutUs;

