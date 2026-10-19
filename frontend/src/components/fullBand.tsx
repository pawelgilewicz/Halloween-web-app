import Navigation from "./nav";
import BandSection from "./band";
import { useLocation } from "react-router-dom";
import Footer from "./footer";

function FullBand() {

  const Location = useLocation();
  const route = Location.pathname;
  return (
    <div>
      <Navigation />
      <BandSection />
      <Footer />
    </div>
  );
}

export default FullBand;
