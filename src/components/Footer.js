import React from "react";
import { BsFacebook, BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p> &copy; 2024 burger06.com</p>
        <FaInstagram />
        <BsTwitterX />
        <BsFacebook />
      </div>
    </div>
  );
}

export default Footer;
