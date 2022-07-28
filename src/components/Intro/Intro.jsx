import "./Intro.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/image1.jpg";
import profilePic2 from "../../img/image2.jpg";
import profilePic3 from "../../img/image3.jpg";
import profilePic4 from "../../img/intro1.png";
/*
import { Carousel } from "react-bootstrap";
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import image3 from "../../img/image3.jpg";
import intro1 from "../../img/intro1.png";
import intro2 from "../../img/intro2.png";
import intro3 from "../../img/intro3.png";
*/
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


  //
  const clients = [
    {
      img: profilePic1,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];
  //
  //animasyonlara başlamadan önce transition tanımlıyoruz
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Çalışanlar </span>
        <span>veya </span>
        <span>giriş kısmına slayt gösterisi olacak şekilde kullanılabilir.</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
         {/*clients'ı maplayıp her client için işlem yapıyoruz*/}
        {clients.map((client, index) => { 
          return (
            <SwiperSlide key={index}>
              <div className="testimonial" >
                <img src={client.img} alt="" /> 
                <span style={{ color: darkMode ? "white" : "" }}>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Intro;
