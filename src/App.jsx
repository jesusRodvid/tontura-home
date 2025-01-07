import { BrowserRouter, Routes, Route } from "react-router-dom";
import  EditionOneReadMore  from "./components/EditionOneReadMore"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ed-1" element={<EditionOneReadMore />} />
          <Route path="/ed-1-read" element={<EditionOneReadMore />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
