import React, { useState } from "react";
import styles from "./Navbar.module.css";
// импорт иконок
import { AiOutlineGlobal } from "react-icons/ai";
import { BsPhoneVibrate } from "react-icons/bs";
import { SiConsul } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";

// импорт изображения
import logo from "../../assets/logo2.jpg";

const Navbar = () => {
  // Добавление видимости навигации
  const [active, setAcive] = useState(styles.navBarMenu);
  const [nobg, addbg] = useState(styles.navBarTwo);

  const showNavBar = () => {
    setAcive(`${styles.navBarMenu} ${styles.showNavBar}`);
  };

  const removeNavBar = () => {
    setAcive(styles.navBarMenu);
  };

  // Добавление фона
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

        <ul className={`none ${styles.none} flex`}>
          <li className="flex">
            <BsPhoneVibrate />
            Поддержка
          </li>
          <li className="flex">
            <AiOutlineGlobal />
            Языки
          </li>
        </ul>

        <div className={`${styles.atb} flex`}>
          <div>Войти</div>
          <div>Выйти</div>
        </div>
      </div>
      <div className={nobg}>
        <div className={styles.logoDiv}>
          <img src={logo} alt="Логотип компании" className={styles.logo} />
        </div>

        <div className={active}>
          <ul className={`${styles.menu} flex`}>
            <li onClick={removeNavBar} className={styles.listItem}>
              Главная
            </li>
            <li onClick={removeNavBar} className={styles.listItem}>
              О нас
            </li>
            <li onClick={removeNavBar} className={styles.listItem}>
              Предложения
            </li>
            <li onClick={removeNavBar} className={styles.listItem}>
              Место
            </li>
            <li onClick={removeNavBar} className={styles.listItem}>
              Направление
            </li>
            <li>
              <button className={`${styles.btnTwo} btn flex`}>Контакт</button>
            </li>
          </ul>
          <button
            onClick={removeNavBar}
            className={`${styles.btnOne} btn flex`}
          >
            Контакт
          </button>
        </div>
        <div className={styles.toggleIcon} onClick={showNavBar}>
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
