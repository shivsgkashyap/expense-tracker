import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p>Copyright © 2022 Shiv Kashyap</p>
      <a
        className="footer-tag"
        href="https://github.com/shivsgkashyap"
        target="_blank"
      >
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
