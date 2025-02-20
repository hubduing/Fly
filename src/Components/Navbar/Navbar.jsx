import React, { useState } from "react";
import styles from "./Navbar.module.css";
// import icon
import { AiOutlineGlobal } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { SiConsul } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";

// import image
import logo from "../../assets/logo2.jpg";

const Navbar = () => {
  // Add navbar visible
  const [active, setAcive] = useState(styles.navBarMenu);
  const [nobg, addbg] = useState(styles.navBarTwo);

  const showNavBar = () => {
    setAcive(`${styles.navBarMenu} ${styles.showNavBar}`);
  };

  const removeNavBar = () => {
    setAcive(styles.navBarMenu);
  };

  // Add background
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addbg(`${styles.navBarTwo} ${styles.navBarBg}`);
    } else {
      addbg(`${styles.navBarTwo}`);
    }
  };
  window.addEventListener("scroll", addBgColor);

  return (
    <nav className={`${styles.navBar} flex`}>
      <div className={`${styles.navBarOne} flex`}>
        <div>
          <SiConsul />
        </div>

        <ul className="none flex">
          <li className="flex">
            <BsPhoneVibrate />
            Support
          </li>
          <li className="flex">
            <AiOutlineGlobal />
            Languages
          </li>
        </ul>

        <div className={`${styles.atb} flex`}>
          <div>Sign In</div>
          <div>Sign Out</div>
        </div>
      </div>
      <div className={nobg}>
      {/* <div className={`${styles.navBarTwo}`}> */}
        {/* <div className={`${styles.navBarTwo} flex`}> */}
        <div className={styles.logoDiv}>
          <img src={logo} alt="Company Logo" className={styles.logo} />
        </div>

        <div className={active}>
          <ul className={`${styles.menu} flex`}>
            <li onClick={removeNavBar} className={styles.listItem}>
              Home
            </li>
            <li onClick={removeNavBar} className={styles.listItem}>
              About
            </li>
            <li onClick={removeNavBar} className={styles.listItem}>
              Offers
            </li>
            <li onClick={removeNavBar} className={styles.listItem}>
              Seat
            </li>
            <li onClick={removeNavBar} className={styles.listItem}>
              Destination
            </li>
          </ul>

          <button
            onClick={removeNavBar}
            className={`${styles.btnOne} btn flex`}
          >
            Contact Us
          </button>
        </div>
        <div className="toggleIcon" onClick={showNavBar}>
          <CgMenuGridO className="icon" />
        </div>
        <button className={`${styles.btnTwo} btn flex`}>Get in Touch</button>
      </div>
    </nav>
  );
};

export default Navbar;
