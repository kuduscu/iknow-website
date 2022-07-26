import "./Services.css";
import hizmetler1 from "../../img/hizmetler1.png";
import hizmetler2 from "../../img/hizmetler2.png";
import hizmetler3 from "../../img/hizmetler3.png";
import hizmetler4 from "../../img/hizmetler4.png";
import hizmetler5 from "../../img/hizmetler5.png";
import hizmetler6 from "../../img/hizmetler6.png";
import hizmetler7 from "../../img/hizmetler7.jpg";

import Card from "../Card/Card";
import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    //navbar kısmındaki react-scroll kütüphanesinin kullanılabilmesi için componentlere id veriyoruz
    <div className="services" id="Services">
      {/*left side*/}
      <div className="awesomee">
        <span style={{ color: darkMode ? "white" : "" }}>Verdiğimiz</span>
        <span>Hizmetler</span>
        <span style={{ color: darkMode ? "white" : "" }}>
          Create QA teams with 20+ experts <br></br>  Manage 15+ projects  <br></br> Manage 5+ remote
          teams with international customers <br></br>  Use 10+ tools for QA projects
          <br></br> Create 3500+ Test Automation scenarios <br></br> Work on desktop, mobile, web
          applications<br></br>  Work on SAP UI5 and SAP Logon, AWS and embedded device
          protocols
        </span>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*right side*/}
      <div className="cards">
        <motion.div
          initial={{ left: "8rem", top: "-2rem" }}
          whileInView={{ left: "3rem", top: "-2rem" }}
          transition={transition}
        >
          <Card
            emoji={hizmetler1}
            heading={"Web Uygulama Test&Otomasyon"}
            detail={"Selenium"}
          />
        </motion.div>
        {/*second card*/}
        <motion.div
          initial={{ left: "-11rem", top: "19rem" }}
          whileInView={{ left: "-16rem",top: "19rem" }}
          transition={transition}
        >
          <Card
            emoji={hizmetler2}
            heading={"Nesne Yönelimli Programlama"}
            detail={"Python"}
          />
        </motion.div>
        {/*3rd card*/}
        <motion.div
          initial={{ top: "19rem", left: "8rem" }}
          whileInView={{ left: "3rem", top: "19rem" }}
          transition={transition}
        >
          <Card emoji={hizmetler3} heading={"Web Tasarım& Mobil Uygulamalar"} detail={"C#"} />
        </motion.div>
        {/*4th card*/}
        <motion.div
          initial={{ top: "-2rem", left: "21rem" }}
          whileInView={{ left: "16rem", top: "-2rem" }}
          transition={transition}
        >
          <Card emoji={hizmetler4} heading={"Proje Yönetimi"} detail={"Azıure Devops"} />
        </motion.div>
        {/*5th card*/}
        <motion.div
          initial={{ top: "19rem", left: "21rem" }}
          whileInView={{ left: "16rem", top: "19rem" }}
          transition={transition}
        >
          <Card emoji={hizmetler5} heading={"Hata İzleme & Proje Yönetimi"} detail={"Jira"} />
        </motion.div>
        {/*6th card*/}
        <motion.div
          initial={{ top: "-2rem", left: "34rem" }}
          whileInView={{ left: "29rem", top: "-2rem" }}
          transition={transition}
        >
          <Card emoji={hizmetler6} heading={"Uygulama Testleri"} detail={"Appium"} />
        </motion.div>
        {/*7th card*/}
        <motion.div
          initial={{ top: "19rem", left: "34rem" }}
          whileInView={{ left: "29rem", top: "19rem" }}
          transition={transition}
        >
          <Card emoji={hizmetler7} heading={"Kurumsal Kaynak Planlama"} detail={"SAP ERP"} />
        </motion.div>

        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
