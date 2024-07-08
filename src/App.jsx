import { EditionOne } from "./pages/EditionOne";
import { EditionOneReadMore } from "./pages/EditionOneReadMore";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ed-1" element={<EditionOne />} />
          <Route path="/ed-1-read" element={<EditionOneReadMore />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
