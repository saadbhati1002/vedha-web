import React from "react";
import { Link } from "react-router-dom";

// Image imports
import footerBg from "../../images/bg/footer-bg.png";
import emailIcon from "../../images/icon/email-icon.svg";
import locationIcon from "../../images/icon/location-icon.svg";
import callIcon from "../../images/icon/call-icon.svg";

const Footer: React.FC = () => {

  return (
    <footer
      className="footer footer-style-one pt-145 bg_img"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="xb-footer-wrap">
        {/* Footer Heading */}
        <div className="xb-footer-heading wow zoomIn" data-wow-delay="0ms" data-wow-duration="600ms">
          <h1 className="title">vedha</h1>
          <a className="mail" href="mailto:info@vedha.ae">
            <img src={emailIcon} alt="email" /> info@vedha.ae
          </a>
        </div>

        {/* Footer Navigation */}
        {/* <div className="xb-footer-nav">
          <div className="xb-footer-nav-item">
            <span className="sub-title">What we do?</span>
            <h2 className="title">
              <Link to="/service">Services</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">Who we are?</span>
            <h2 className="title">
              <Link to="/about">About us</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">How we deliver</span>
            <h2 className="title">
              <Link to="/contact">Contact us</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">What we're good at?</span>
            <h2 className="title">
              <Link to="/project">Our project</Link>
            </h2>
          </div>
          <div className="xb-footer-nav-item">
            <span className="sub-title">News?</span>
            <h2 className="title">
              <Link to="/blog">News</Link>
            </h2>
          </div>
        </div> */}

        {/* Social Media Section */}
        {/* <div className="xb-social-media-wrap">
          {socials.map((social, idx) => (
            <div className="xb-social-media-item ul_li_between" key={idx}>
              <div className="xb-item--holder ul_li">
                <div className="xb-item--icon">{social.icon}</div>
                <span className="xb-item--name">{social.name}</span>
              </div>

              <span className="xb-item--arrow">{arrowIcon}</span>

              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name} 
                className="xb-overlay"
              ></a>
            </div>
          ))}
        </div> */}

        {/* Footer Bottom */}
        <div className="xb-footer-bottom">
          <div className="contact-item">
            <img src={locationIcon} alt="location" />
            <span className="contact-method">Dubai, UAE</span>
          </div>

          <div className="contact-item copyright-item">
            <p>
              Copyright © 2026 <Link to="/">vedha</Link>, All rights reserved.
            </p>
          </div>

          <div className="contact-item">
            <a href="tel:+112304528597">
              <img src={callIcon} alt="call" />
            </a>
            <a className="contact-method" href="tel:+112304528597">
              +971 5065 VEDHA (83342)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
