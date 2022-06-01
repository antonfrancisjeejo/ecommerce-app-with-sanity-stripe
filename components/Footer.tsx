import React, { FC } from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer: FC = () => {
  return (
    <div className="footer-container">
      <p>2022 AFJ Headphones All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
