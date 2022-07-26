import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonial from "./components/Testimonials/Testimonial";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.";
import Sampas from "./Pages/Sampas/Sampas";
function App() {
  /*renk değişimi kısmı için Context.js teki fonksiyonlar çekiliyor.*/
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    /*renk değişimi kısmı*/
    <BrowserRouter>
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/sampas"
            element={<Sampas />}
          ></Route>
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
