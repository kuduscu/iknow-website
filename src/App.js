import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import ScrollToTop from "react-scroll-to-top";

function App() {
  /*renk değişimi kısmı için Context.js teki fonksiyonlar çekiliyor.*/
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} />
      <Navbar />
      <Intro />
      <Services />
      <Works />
      <Portfolio />

      <Footer />
    </div>
  );
}

export default App;
