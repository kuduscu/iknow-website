import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
/*provider'dajş themeContext*/
import { themeContext } from "../../Context";
/*tema değişimi için useContext*/
import { useContext, React } from "react";
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  /*tema değişim kısmını dinamik yapmak için bu fonksiyon*/
  const handleClick=()=>{
    theme.dispatch({type:'toggle'})
  }
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
