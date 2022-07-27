import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {

  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-left">
        <iframe
          width="420"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=iknow%20technology%20edirne+(iknow%20edirne)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>{" "}
      </div>
      <div className="f-right">
        <div className="f-content">
          <span>info@iknow.com.tr</span>
          <div className="f-icons">
            <Insta color="white" size={"3rem"} />
            <Facebook color="white" size={"3rem"} />
            <Gitub color="white" size={"3rem"} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
