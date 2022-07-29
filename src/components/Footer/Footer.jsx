import React, { useContext } from "react";
import "./Footer.css";
import iQuality from "../../img/iQuality.png";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div class="pg-footer">
      <footer class="footer">
        <svg
          class="footer-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            class="footer-wave-path"
            d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8 c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          ></path>
        </svg>
        <div class="footer-content">
          <div class="footer-content-column">
            <div class="footer-logo">
              <a class="footer-logo-link" href="#">
                <div className="aaa">
                  <img src={iQuality} alt="" />
                </div>
              </a>
            </div>
            <div class="footer-menu1">
              <h2 class="footer-menu-name">İÇERİK</h2>
              <ul id="menu-get-started" class="footer-menu-list">
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <Link to="services" spy={true} smooth={true}>
                Hizmetler
              </Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <Link to="works" spy={true} smooth={true}>
                Projeler
              </Link>
                </li>
                <li class="menu-item menu-item-type-post_type menu-item-object-product">
                <Link to="portfolio" spy={true} smooth={true}>
                Müşterilerimiz
              </Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu">
              <iframe
                width="420"
                height="300"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=iknow%20technology%20edirne+(iknow%20edirne)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>{" "}
            </div>
          </div>
          <div class="footer-content-column">
            <div class="footer-menu"></div>
          </div>
          <div class="footer-content-column"></div>
          <div class="footer-content-column">
            <div class="footer-call-to-action">
              <h2 class="footer-call-to-action-title"> İletişim</h2>
              <p class="footer-call-to-action-description">
                {" "}
                info@iknow.com.tr
              </p>
              <p class="footer-call-to-action-description">
                {" "}
                www.iquality.com.tr
              </p>
            </div>
            <div class="footer-call-to-action">
              <h2 class="footer-call-to-action-title">Telefon</h2>
              <p class="footer-call-to-action-link-wrapper">
                
                <a
                  class="footer-call-to-action-link"
                  href="tel:0124-64XXXX"
                  target="_self"
                >
                  
                  0124-64123241
                </a>
              </p>
            </div>
          </div>
          <div class="footer-social-links">
            <a class="footer-social-link linkedin" href="#" target="_blank">
              <span class="hidden-link-text">Linkedin</span>
              <svg
                class="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  class="footer-social-icon-path"
                  d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"
                ></path>
              </svg>
            </a>
            <a class="footer-social-link twitter" href="#" target="_blank">
              <span class="hidden-link-text">Twitter</span>
              <svg
                class="footer-social-icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 26 26"
              >
                <path
                  class="footer-social-icon-path"
                  d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219 "
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="footer-copyright-wrapper">
            <p class="footer-copyright-text">
              <a class="footer-copyright-link" href="#" target="_self">
                {" "}
                ©2022. | iQuality Danışmanlık Teknoloji LTD. ŞTİ.{" "}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
