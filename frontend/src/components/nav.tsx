import  { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const route = location.pathname;
  console.log(route);
  
  useEffect(() => {
    switch (route) {
      case "/": {
        document.getElementById("navButton1").style.color = "wheat";
        document.getElementById("navButton1").style.borderBottomColor = "wheat";
        document.getElementById("navButton2").style.color = "wheat";
        document.getElementById("navButton2").style.borderBottomColor = "wheat";
        document.getElementById("navButton3").style.color = "wheat";
        document.getElementById("navButton3").style.borderBottomColor = "wheat";
        document.getElementById("home").style.color = "red";
        document.getElementById("home").style.borderBottomColor = "red";
        break;
      }
      case "/Blog": {
        document.getElementById("home").style.color = "wheat";
        document.getElementById("home").style.borderBottomColor = "wheat";
        document.getElementById("navButton2").style.color = "wheat";
        document.getElementById("navButton2").style.borderBottomColor = "wheat";
        document.getElementById("navButton3").style.color = "wheat";
        document.getElementById("navButton3").style.borderBottomColor = "wheat";
        document.getElementById("navButton1").style.color = "red";
        document.getElementById("navButton1").style.borderBottomColor = "red";
        break;
      }
      case "/Band": {
        document.getElementById("navButton1").style.color = "wheat";
        document.getElementById("navButton1").style.borderBottomColor = "wheat";
        document.getElementById("home").style.color = "wheat";
        document.getElementById("home").style.borderBottomColor = "wheat";
        document.getElementById("navButton2").style.color = "red";
        document.getElementById("navButton2").style.borderBottomColor = "red";
        document.getElementById("navButton3").style.color = "wheat";
        document.getElementById("navButton3").style.borderBottomColor = "wheat";
        break;
      }
      case "/About": {
        document.getElementById("navButton1").style.color = "wheat";
        document.getElementById("navButton1").style.borderBottomColor = "wheat";
        document.getElementById("home").style.color = "wheat";
        document.getElementById("home").style.borderBottomColor = "wheat";
        document.getElementById("navButton2").style.color = "wheat";
        document.getElementById("navButton2").style.borderBottomColor = "wheat";
        document.getElementById("navButton3").style.color = "red";
        document.getElementById("navButton3").style.borderBottomColor = "red";
        break;
      }
    }
  });
  return (
    <nav className="navHeader">
      <Link to="/" className="navButton" id="home" >
        Home
      </Link>
      <Link to="/Blog" className="navButton" id="navButton1" >
        Blog
      </Link>

      <Link className="navButton" id="navButton2"  to="/Band">
        Band
      </Link>
      <Link className="navButton" id="navButton3" to="/About">
        about us
      </Link>
    </nav>
  );
}
export default Navigation;
