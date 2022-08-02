import React, { useContext } from "react";
import './Card.css';
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Cards = ({ emoji, heading, detail }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div className="card" >
      <img src={emoji} alt=""></img>
      <span style={{ color: darkMode ? "black" : "" }}>{heading}</span>
      <span  >{detail}</span>
    </div>
  );
};

export default Cards;
