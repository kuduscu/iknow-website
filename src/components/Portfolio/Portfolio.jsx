import { Swiper, SwiperSlide } from "swiper/react";
import musteri1 from "../../img/musteri1.png";
import musteri2 from "../../img/musteri2.png";
import musteri3 from "../../img/musteri3.png";
import musteri5 from "../../img/musteri5.png";
import musteri6 from "../../img/musteri6.jpg";
import "swiper/css";
import "./Portfolio.css";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="Portfolio">
      {/*heading*/}
      <span style={{ color: darkMode ? "white" : "" }}>Müşterilerimiz</span>

      <span>
        Birçok uluslararası firma ile projeler gerçekleştirmiş bulunuyoruz.
      </span>
      {/*slider*/}
      <Swiper
        spaceBetween={90}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="/sampas">
            <img src={musteri1} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={musteri2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musteri3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musteri5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musteri6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;