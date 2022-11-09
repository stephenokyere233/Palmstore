import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="socials">
          <h3>E-commerce Shop</h3>
          <div className="icons">
            <FaInstagram />
            <FaTwitter />
            <FaFacebookSquare />
          </div>
        </div>
        <div className="quick-links">
          <h3>Quick links</h3>
          <a href="#">about us</a>
          <a href="#">visit store</a>
          <a href="#">let's connect</a>
        </div>
        <div className="get-in">
          <h3>get in touch with us for the best quality products</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus animi laboriosam quia rem itaque blanditiis assumenda
            sunt, magnam asperiores dolore?
          </p>
        </div>
        <div className="important">
          <h3>important links</h3>

          <a href="#">privacy policy</a>
          <a href="#">shipping details</a>
          <a href="#">terms & conditions</a>
        </div>
      </footer>
      <div className="copyright">
        {/* <hr /> */}
        <span>Copyright © 2022 | PALMSTORE </span>
        <span>Powered By PALMSTORE</span>
      </div>
    </>
  );
};

export default Footer;
