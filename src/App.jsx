import { EditionOne } from "./pages/EditionOne";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ed-1" element={<EditionOne />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
