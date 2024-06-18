import { EditionOne } from "./pages/EditionOne";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ModelViewer from "./components/ModelViewer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ed-1" element={<EditionOne />} />
        </Routes>
        <ModelViewer scale="100" modelPath={"/images/kioskNEW.glb"} />
      </BrowserRouter>
    </>
  );
}

export default App;
