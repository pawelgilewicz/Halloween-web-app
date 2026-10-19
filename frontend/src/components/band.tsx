import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

function BandSection(){
  const Location = useLocation();
  const route = Location.pathname;
  useEffect(()=>{
    if(route ==='/Band'){
      document.getElementById("BandId").style.background = "black";
    }
  })
    return(
      
        <section className="ourBand" id="BandId">
        <h1>Our Band!!!</h1>
        <div className="BandContainer">
          <div className="boxBand">
            <img src="./assets/header.jpg" /> <p>Jan Nowak</p>{" "}
            <button>Read more</button>
          </div>
          <div className="boxBand">
            <img src="./assets/header.jpg" /> <p>Jan Nowak</p>{" "}
            <button>Read more</button>
          </div>
          <div className="boxBand">
            <img src="./assets/header.jpg" /> <p>Jan Nowak</p>{" "}
            <button>Read more</button>
          </div>
          <div className="boxBand">
            <img src="./assets/header.jpg" /> <p>Jan Nowak</p>{" "}
            <button >Read more</button>
          </div>
        </div>
      { route === '/' ? <Link className="buttonBandSectionMain" to='/Band'>Read more</Link>: <></>}
        
      </section>
    )

}
export default BandSection;