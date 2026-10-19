import { useState, useEffect } from "react";
function Footer(){
  
  
useEffect(()=>{
  const mediaWidth = window.innerWidth;
  console.log(mediaWidth);
  
if(mediaWidth <=800)
  {
   
    
}
} ,[])
return (
    <footer >
        <div className="thankContainer" >
          <h1>Thank you for visit</h1>
          <img src="./assets/header.jpg" />
        </div>
        <div className="referencesFooter">
          <ul>
            <a href="">Facebook</a>
            <a href="">Instagram</a>
            <a href="">Twitter</a>
            <a href="">Snapchat</a>
            <p style={{fontFamily:"system-ui"}}>Created by Paweł Gilewicz</p>
          </ul>
        </div>
        <div className="footerSettings">
          <ul>
            <a href="/Cookies">Cookies&Management</a>
            <a href="/Privaty">private policy</a>
            <a href="/Blog">Blog</a>
            <a href="/Band">Band</a>
            <a href="/About">More about us</a>
          </ul>
        </div>
      </footer>
)
}
export default Footer;