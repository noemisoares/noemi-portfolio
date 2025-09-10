"use client";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import styles from "./components.module.css";

export function Social({ className }) {
  return (
    <div className={`${styles.socials} ${className || ""}`}>
      <a href="https://www.linkedin.com/in/noemi-soares-5a3327352" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/noemisoares" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </div>
  );
}

