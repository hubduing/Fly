import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.jpg";
import { TiSocialFacebook } from "react-icons/ti";
import {
  AiFillYoutube,
  AiOutlineTwitch,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container grid`}>
        <div className={styles.gridOne}>
          <div className={styles.logoDiv}>
            <img src={logo} alt="Logo" className={styles.logo} />
          </div>

          <p>Your mind should be stronger than your feelings, fly!</p>
          <div className={`${styles.socialIcon} flex`}>
            <TiSocialFacebook className={styles.icon} />
            <AiOutlineTwitter className={styles.icon} />
            <AiOutlineTwitch className={styles.icon} />
            <AiFillYoutube className={styles.icon} />
            <FaPinterestP className={styles.icon} />
          </div>
        </div>

        <ul className={styles.footerLinks}>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Flight status</a>
          </li>
          <li>
            <a href="">Travel</a>
          </li>
          <li>
            <a href="">Check-in</a>
          </li>
          <li>
            <a href="">Manage your booking</a>
          </li>
        </ul>

        <ul className={styles.footerLinks}>
          <span className={styles.linkTitle}>Quick guide</span>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">How to</a>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Baggage</a>
          </li>
          <li>
            <a href="">Route map</a>
          </li>
          <li>
            <a href="">Our communities</a>
          </li>
        </ul>

        <ul className={styles.footerLinks}>
          <span className={styles.linkTitle}>Information</span>
          <li>
            <a href="">Chouffuer</a>
          </li>
          <li>
            <a href="">Our Partners</a>
          </li>
          <li>
            <a href="">Destination</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Transportation</a>
          </li>
          <li>
            <a href="">Programms rules</a>
          </li>
        </ul>
      </div>

      <div className={`${styles.copyRightDiv} flex`}>
        <p>
          Copyright{" "}
          <a href="#" target="_blank">
            by Alexey
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
