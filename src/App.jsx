import { Route, Routes } from "react-router-dom";
import AboutUS from "./pages/About Us";
import Alumni from "./pages/Alumni";
import ContactUS from "./pages/Contact Us";
import Events from "./pages/Events";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Team from "./pages/Team";

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/contact-us" element={<ContactUS />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
