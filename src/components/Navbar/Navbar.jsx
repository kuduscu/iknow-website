import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
//navbardaki item'lara basıldığında o kısma yönlenme için
import { Link } from "react-scroll";
import img1 from "../../img/iQuality1.png";
import img2 from "../../img/iQuality12.png";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  /*Yapılacak projedeki navbarın 2 kısmı var burda da ikiye bölücez*/
  /* Liste elemanlarının başlarındaki noktaları silmek için style={{ListStyleType:'none'}} */
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">
          <img src={img1} alt="" />
        </div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Anasayfa
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Hizmetler
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Araçlar
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
              Projeler
              </Link>
            </li>
            <li>
              <div className="lang-menu">
                <div className="selected-lang">
                  Türkçe
                </div>
                <ul>
                  <li>
                    <a href="#" className="tr">Turkish</a>
                  </li>
                  <li>
                    <a href="" className="en">English</a>
                  </li>
                </ul>
              </div>
            </li>
        
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
