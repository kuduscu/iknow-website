import "./Intro.css";
import { Carousel } from "react-bootstrap";
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import image3 from "../../img/image3.jpg";
import intro1 from "../../img/intro1.png";
import intro2 from "../../img/intro2.png";
import intro3 from "../../img/intro3.png";
/*sağ taraf için*/
/*
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import a1 from "../../img/a1.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
*/

import React, { useContext } from "react";
import { themeContext } from "../../Context";

/*animasyonlar için framer-motion*/
import { motion } from "framer-motion";

/*çağırdığımız floatingdiv componentine crown'ı prop olarak veriyoruz */
function Intro() {
  //animasyonlara başlamadan önce transition tanımlıyoruz
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Carousel fade={true} pause={"hover"}>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
            vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit
            libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a
            pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image2} alt="Third slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>aaa</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="a" src={intro1} alt="Forth slide" />
        <Carousel.Caption>
          <h3>Our Workflow</h3>
          <p className="b">
            Our experts start with first answering your requested skills and
            then create dedicated team for your needs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="a" src={intro2} alt="Fifth slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="a" src={intro3} alt="Sixth slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Intro;
