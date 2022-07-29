import "./Sidebar.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styl
const Sidebar = () => {
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
      isOpen === true ? setIsopen(false) : setIsopen(true);
    };
    return (
      <>
        <div className="container-fluid mt-3">
          <div className="btn btn-primary" onClick={ToggleSidebar}>
            <FontAwesomeIcon icon={solid("bars")} />
          </div>
  
          <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
            <div className="sd-header">
              <h4 className="mb-0">Sidebar Header</h4>
              <div className="btn btn-primary" onClick={ToggleSidebar}>
                <FontAwesomeIcon icon={solid("user-secret")} />
              </div>
            </div>
            <div className="sd-body">
              <ul>
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
                  Projeler
                </Link>
              </li>
              <li>
                <Link to="portfolio" spy={true} smooth={true}>
                  Müşterilerimiz
                </Link>
              </li>
              <li>
               
                  <ul>
                    <li>
                      <a href="#" className="tr">Turkish</a>
                    </li>
                    <li>
                      <a href="" className="en">English</a>
                    </li>
                  </ul>
              
              </li>
              </ul>
            </div>
          </div>
          <div
            className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
            onClick={ToggleSidebar}
          ></div>
        </div>
      </>
    );
  } 

export default Sidebar