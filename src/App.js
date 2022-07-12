import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NasaPicture from "./components/NasaPicture";
import Pictures from "./components/Pictures";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<NasaPicture />} path="/nasaPOTD" />
        <Route element={<Pictures />} path="/pictures" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
