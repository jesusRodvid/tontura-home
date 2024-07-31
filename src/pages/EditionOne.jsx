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
              <div className="lg:px-10 lg:pt-5 text-4xl font-bold lg:text-3xl">
                Cuando la música descubrió internet
              </div>
              <div className="lg:px-20 lg:text-xl font-bold text-justify">
                Es el año 200X. Te despierta la alarma de tu teléfono, con el
                que sólo puedes hacer llamadas, enviar SMS y jugar al snake, y
                vas a la escuela. Las clases pasan sin mucho drama, comentas con
                tus colegas que viste en la tele la tarde anterior, les hablas
                de un video gracioso que viste en youtube y les animas a
                buscarlo. Cuando terminas en el cole, ya en tu casa y solo
                después de comer y hacer algunas de tus obligaciones, finalmente
                puedes ir al ordenador de sobremesa de tu familia o si te
                sentías más social ir a un cibercafé o la sala de informática de
                la biblioteca municipal. Nos relacionamos con internet de una
                forma casi &quot;pública&quot;, comunal e impersonal – era como
                una gran enciclopedia que existía en un plano invisible y casi
                místico, especialmente para la percepción de jóvenes usuarios de
                internet. [...] <br></br> <br></br>
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
