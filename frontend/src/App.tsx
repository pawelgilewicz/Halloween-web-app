import Home from "./components/home";
import FullBlog from "./components/fullBlog";
import FullBand from './components/fullBand';
import FullAbout from './components/fullAbout';
import Cookies from './components/cookies';
import { BrowserRouter, Routes, Route} from "react-router-dom";

import "./App.css";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
         {/* <RouteTracker setRoute={setRoute} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/Band" element={<FullBand />} />
        <Route path="/Blog" element={<FullBlog />} />
        <Route path="/About" element={<FullAbout />} />
        <Route path="/Cookies" element={<Cookies />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
