import { Swiper, SwiperSlide } from "swiper/react";
import musteri1 from "../../img/musteri1.png";
import musteri2 from "../../img/musteri2.png";
import musteri3 from "../../img/musteri3.png";
import musteri5 from "../../img/musteri5.jpg";
import musteri4 from "../../img/musteri4.jfif";
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
      <span>& Örnek Projelerimiz</span>
      <span style={{ color: darkMode ? "white" : "" }}>
        Birçok uluslararası firma ile projeler gerçekleştirmiş bulunuyoruz.
        <br></br>
        Web ve Mobil çözümlere ait test yönetimi ve otomasyonları ile ilgili
        demolarımızı paylaşabiliriz.
        <br></br>
        Ayrıca API, DB sistemleri gibi uçtan uca test otomasyonları
        gerçekleştirmekteyiz.
      </span>
      {/*slider*/}
      <Swiper
        spaceBetween={90}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={musteri1} alt="" />
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
          <img src={musteri4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
