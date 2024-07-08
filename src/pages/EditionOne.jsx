import { Link } from "react-router-dom";

export const EditionOne = () => {
  return (
    <>
      <div className="font-serif flex flex-col items-center justify-center pt-[15vh] pb-[15vh] gap-5 text-white w-screen h-full bg-[url('images/pattern14.gif')]">
        <div className="flex gap-2 lg:gap-10">
          <img
            className="flex w-full h-full object-contain"
            src="images/cd_med_clr.gif"
          ></img>
          <Link
            to="/"
            className="items-center justify-center self-center text-3xl lg:text-5xl text-[blue] underline"
          >
            Tontura.zine
          </Link>
          <img
            className="flex w-full h-full object-cover"
            src="images/cd_med_clr.gif"
          ></img>
        </div>

        <div className="h-[20vh] w-full bg-[url('/images/31.png')] bg-repeat-x"></div>
        <div className="flex">
          <img
            className="flex object-cover w-[250px]"
            src="images/ad1.gif"
          ></img>
          <div className="flex items-center justify-center mx-10">
            <div
              id="panel"
              className="flex flex-col items-center justify-center gap-10 lg:px-5 lg:mx-[10vw]"
            >
              <div className="lg:px-10 lg:pt-5 text-3xl font-bold lg:text-3xl">
                An endless streaming: cuando la música descubrió el internet
              </div>
              <div className="lg:px-20 lg:text-xl font-bold text-justify">
                Este proyecto no se entendería sin la influencia que tuvo el
                internet de principios y finales de los 2000 en las personas que
                han decidido llevarlo a cabo. Cuando internet irrumpió en
                nuestra vida lo veíamos como algo casi místico. Todavía no se
                había convertido en una capa casi que inseparable de nuestra
                realidad. Era una actividad claramente delimitada, confinada al
                cuarto de ordenador, el cibercafé o la biblioteca. El acto de
                estar en internet tenía una premeditación. Abrir una app por
                abrirla y pasar horas viendo contenido, era impensable, el
                objetivo que teníamos la mayoría del tiempo era descubrir y
                muchas veces descargar música. [...] <br></br> <br></br>
              </div>
              <div id="read-more" className=""></div>
              <Link
                to="/ed-1-read"
                className="text-xl lg:text-3xl text-[blue] underline"
              >
                LEE M&#193;S
              </Link>
            </div>
            <img
              className="flex object-cover w-[250px]"
              src="images/ad1.gif"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};
