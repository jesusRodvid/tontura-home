import { Link } from "react-router-dom";

export const EditionOne = () => {
  return (
    <>
      <div className="font-serif flex flex-col items-center justify-start pt-[15vh] gap-5 text-white w-screen h-auto bg-[url('images/pattern11.gif')]">
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
          <div className="flex flex-col items-center justify-center"></div>
          <div
            id="panel"
            className="flex flex-col items-center justify-center gap-10 lg:px-10 mx-[3vh] lg:mx-[40vh]"
          >
            <div className="lg:px-20 lg:pt-5 text-2xl font-bold lg:text-3xl">
              An endless streaming: cuando la música descubrió el internet
            </div>
            <div className="lg:px-20 lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
              tellus at velit convallis dictum. Etiam sagittis, velit at pretium
              iaculis, leo turpis scelerisque nibh, sit amet hendrerit libero
              felis vitae mauris. Ut dignissim, risus nec faucibus ultricies,
              urna massa vulputate ex, sed vulputate quam risus ac massa. Ut
              fringilla nisl massa, placerat gravida nunc aliquet eu. Proin ut
              finibus erat, non ultrices orci. Curabitur ante odio, vehicula a
              vehicula eu, tincidunt molestie justo. Sed efficitur felis nec
              nulla congue, a eleifend felis elementum...
            </div>
            <div id="read-more" className=""></div>
            <Link to="/" className="text-xl lg:text-3xl text-[blue] underline">
              LEE M&#193;S
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
