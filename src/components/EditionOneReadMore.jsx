import { Link } from "react-router-dom";
import SpotifyPlaylist from "./SpotifyPlaylist";

function EditionOneReadMore() {
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
          
          <div className="flex items-center justify-center mx-10">
          <img
            className="flex object-cover w-[250px]"
            src="images/ad1.gif"
          ></img>
            <div
              id="panel"
              className="flex flex-col items-center justify-center gap-10 lg:px-5 lg:mx-[10rem]"
            >
              <div className="flex flex-col justify-center items-center lg:px-10 lg:pt-5 text-4xl font-bold lg:text-3xl">
                Cuando la música descubrió internet
              </div>
              <div className="flex flex-col lg:px-20 lg:text-xl font-bold text-justify items-center justify-center">
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
                internet. <br></br>
                <img
                  className="w-1/2 object-cover mt-10"
                  src="images/computer.jpg"
                  alt="Un ordenador"
                />
              </div>
              <div className="lg:px-20 lg:text-xl font-bold text-justify">
                Decides que el tiempo que le vas a dedicar a internet esa tarde
                será para buscar información sobre ese grupo que viste en un
                video musical en tu tele, aún no tienes mucha idea de cuales son
                tu gustos, pero ese videoclip te alucinó y quieres oír más de
                esa música. Entre los primeros resultados, te encuentras un
                blogspot, en donde un fan de esa banda escribe una biografía de
                la banda, que le parece el grupo y al final del post está toda
                la discografía en enlaces de descarga, te descargas un par de
                álbumes, porque no te queda mucho espacio en tu MP3, de paso
                aprovechas para compartir tu nuevo interés en las proto redes
                sociales que estaban surgiendo, y que veías como una especie de
                corcho donde colgabas cosas aleatorias que te gustaba. El
                concepto de red social aún no estaba asentado de la forma en la
                que hoy lo conocemos, pero sí fueron los primeros inicios de
                creación de un espacio de identidad virtual. Como esto sucedía
                al mismo tiempo que te desarrollabas como individuo, tu
                crecimiento como individuo (gustos, amistades, etc) lo hacía de
                la mano con el desarrollo de internet. <br></br>
              </div>

              <div className="flex flex-col justify-center items-center lg:px-20 lg:text-xl font-bold text-justify">
                Esta experiencia fue la norma para mucha gente durante la
                primera década de los dos mil. Era una evolución digital de los
                antiguos modelos “analógicos” que implican ir a tiendas de
                discos para descubrir cosas nuevas, buscar cassettes
                polvorientos en tiendas de segunda mano, comprar zines de
                artistas pequeños o escuchar la radio local. No obstante, aún
                constituían una manera proactiva y orgánica de explorar música.
                <br></br>
                <img
                  className="w-1/2 object-cover mt-10"
                  src="images/mp3.jpg"
                  alt="Un mp3"
                />
              </div>
              <div className="lg:px-10 lg:pt-5 text-4xl font-bold lg:text-3xl">
                An endless streaming
              </div>
              <div className="flex flex-col justify-center items-center lg:px-20 lg:text-xl font-bold text-justify">
                Este proyecto no se entendería sin la influencia que tuvo el
                internet de principios y finales de los 2000 en las personas que
                han decidido llevarlo a cabo. Todavía no se había convertido en
                una capa casi que inseparable de nuestra realidad. Era una
                actividad claramente delimitada, confinada al cuarto de
                ordenador, el cibercafé o la biblioteca. El acto de estar en
                internet tenía una premeditación. Abrir una app por abrirla y
                pasar horas viendo contenido, era impensable, el objetivo que
                teníamos la mayor parte del tiempo era descubrir y muchas veces
                descargar música. El debate de la piratería, a estas alturas es
                poco interesante, mucho se ha escrito y con el paso del tiempo
                nos hemos dado cuenta que las grandes discográficas no se han
                arruinado porque pirateamos la música de los artistas de sus
                sellos. La piratería e internet solo lograron hacer más
                accesible la música, democratizandola. En países en vías de
                desarrollo, como Brasil o Venezuela de donde provenimos, tener
                películas, videojuegos o CDs piratas es la norma, lo originale
                era considerado un lujo. En palabras de Hakitadev, creador del
                juego Ultrakill, cuando un usuario de twitter posteó que estaba
                descargando su juego él dijo &quot;La cultura no debería existir
                sólo para los que pueden pagarla.&quot;
                <br></br>
                <img
                  className="w-1/2 object-cover mt-10"
                  src="images/ares.jpg"
                  alt="Un screenshot de Ares"
                />
              </div>

              <div className="lg:px-20 lg:text-xl font-bold text-justify">
                Cuando la maquinaria capitalista se dió cuenta de las
                posibilidades de internet se empezaron a crear las grandes
                plataformas de contenido. Si bien en sus inicios la intención de
                los creadores de Facebook, Youtube, se entendía dentro del
                contexto de este internet temprano (estos dos sitios eran
                básicamente un foro y un videoblog), desde que se empezó a
                invertir más capital en ellos, la principal intención de los
                desarrolladores era lograr que los usuarios pasasen el mayor
                tiempo posible en sus aplicaciones. Una de las mejores
                herramientas que han creado para esto es tener un algoritmo
                personalizado y suministrar constantemente contenido con el que
                puedas tener un engagement. Youtube te recomienda cosas
                similares a las que ya has visto, Spotify todas las semanas crea
                una lista de reproducción de “descubrimiento semanal” que la
                mayoría del tiempo te da música muy parecida a la que ya oyes, o
                simplemente otras canciones de bandas que ya conoces, Instagram
                y TikTok tienen un feed a tu medida que te absorbe y no te
                suelta durante horas.
                <br></br>
              </div>

              <div className="flex flex-col justify-center items-center lg:px-20 lg:text-xl font-bold text-justify">
                Es difícil no sentirse atrapado por la vorágine de contenido
                creado con el principal objetivo de generar engagement y
                números, que es lo que sostiene a las apps actuales. El arte ya
                no solo es arte, es contenido que tiene que encajar dentro de
                las reglas (duración, formato y contenido) de la aplicación en
                la que va a existir. Si satisfaces al algoritmo llegarás a más
                gente. Por lo que el acto de descubrir música, en este nuevo
                contexto digital, ya no es algo natural, orgánico y motivado por
                la curiosidad, aparte de ser en su mayoría algo pasivo y por
                mucho que los algoritmos están muy refinados, no dejan de ser un
                conjunto de reglas definidas según el interés de quien los
                desarrolle.
                <br></br>
              </div>

              <div className="lg:px-10 lg:pt-5 text-4xl font-bold lg:text-3xl">
                Un internet más orgánico es posible.
              </div>

              <div className="flex flex-col justify-center items-center lg:px-20 lg:text-xl font-bold text-justify">
                Buscar información fuera de las redes sociales, ahondando en
                blogs, artículos y foros ya no forma parte de las actividades
                más comunes que realizan las personas en internet. Esto no lo
                señalamos como una crítica, el comportamiento que tenemos a la
                hora de interactuar con el internet ha ido de la mano de la
                volatilidad de este espacio, que ha cambiado muchísimo en 30
                años. Nuestro propósito no es criticar los hábitos digitales de
                las nuevas generaciones, decir que todo era mejor antes y cómo
                el mundo está perdido, si no volver a introducir la posibilidad
                de los hábitos de los primeros años de internet.
                <br></br>
                <img
                  className="w-1/2 object-cover mt-10"
                  src="images/recordstore.png"
                  alt="Una tienda de discos"
                />
              </div>

              <div className=" lg:px-20 lg:text-xl font-bold text-justify">
                Aun así, dentro de todo este flujo sin fin de información, en
                muy raras ocasiones, el algoritmo nos recomienda algo fuera de
                las reglas que ya como usuarios conocemos, es una anomalía
                dentro de este sistema. Hay algo muy básico y visceral de la
                experiencia humana cuando encontramos algo que nos llama la
                atención, ya sea una piedra brillante en la playa, un palo
                bonito en una caminata por el bosque, nos vemos atraídos por las
                cosas que se salen de la norma. Así pues cuando youtube empezó a
                recomendar a un montón de usuarios Pop-japonés de los 80, la
                gente se siente naturalmente atraída por esas letras que no
                entendían, esos arreglos de jazz en canciones que sonaban pop y
                esas voces que no estaban tan encajadas dentro de las
                sensibilidades del pop mainstream occidental.
                <br></br>
              </div>

              <div className="lg:px-20 lg:text-xl font-bold text-justify">
                La fatiga que siente el usuario medio de internet es evidente,
                cada vez la gente es más consciente de que necesitamos tener
                menos screen time en nuestra vida, en los últimos años el
                consumo de media física ha aumentado, cosa que vemos como una
                muestra de que la gente quiere volver a tener un relación con la
                cultura fuera del contexto del CONTENIDO. Esto se puede
                compaginar con una actitud distinta a la hora de plantearse
                nuestra horas en internet.
                <br></br>
              </div>

              <div className="flex flex-col justify-center items-center lg:px-20 pb-10 lg:text-xl font-bold text-justify">
                Se puede volver a hacer algo nuestro el tiempo que pasamos en
                internet, quitandolo de las manos de las grandes empresas,
                asemejar la búsqueda digital a las exploraciones físicas. Ir a
                una tienda de discos o rebuscar en una tienda de segunda mano
                tenía un componente de aventura y de descubrimiento. Volver a
                esa dinámica de entrar a paginas que no tienen que ver con las
                grandes tecnológicas, para encontrar recomendaciones, rebuscar
                entre canales de youtube con pocos seguidores que siguen
                usándolo como un videoblog personal en donde suben la música que
                les apasiona, zambullirse en páginas como rateyourmusic o
                lastfm, hacer una experiencia personal el descubrir música,
                participar en el algún foro y compartir algún enlace de descarga
                de una banda que si no fuera porque existe internet, su música
                no hubiera perdurado en el tiempo.
                <br></br>
              </div>
            </div>

            <img
              className="flex object-cover w-[250px]"
              src="images/ad1.gif"
            ></img>
          </div>
        </div>

        <SpotifyPlaylist />
      </div>
    </>
  );
}

export default EditionOneReadMore;
