import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cultures from "./pages/Cultures";
import CultureDetail from "./pages/CultureDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/cultures" element={<Cultures />} />

        <Route path="/cultures/:id" element={<CultureDetail />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;