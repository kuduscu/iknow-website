import React, { useContext } from "react";
import "./Works.css";
import Tool1 from "../../img/tool1.png";
import Tool2 from "../../img/tool2.png";
import Tool3 from "../../img/tool3.png";
import Tool4 from "../../img/tool4.png";
import iQuality from "../../img/iQuality.png"
import Tool5 from "../../img/tool5.png";
import Tool6 from "../../img/tool6.png";
import Tool7 from "../../img/tool7.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="works">
      {/*sol taraf*/}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>
             Test Otomasyon 
          </span>
          <span>Araçlarımız</span>
          <spane style={{ color: darkMode ? "white" : "" }}>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </spane>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/*sağ taraf*/}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Tool1} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tool2} alt="" />
          </div>
          <div className="w-iQ">
            <img src={iQuality} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tool3} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tool4} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tool5} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tool6} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tool7} alt="" />
          </div>
        </motion.div>
        {/*arkaplan circle'ları*/}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
