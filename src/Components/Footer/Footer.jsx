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
            <img src={logo} alt="Логотип" className={styles.logo} />
          </div>

          <p>Ваш разум должен быть сильнее ваших чувств, летите!</p>
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
            <a href="">Главная</a>
          </li>
          <li>
            <a href="">Исследовать</a>
          </li>
          <li>
            <a href="">Статус рейса</a>
          </li>
          <li>
            <a href="">Путешествия</a>
          </li>
          <li>
            <a href="">Регистрация</a>
          </li>
          <li>
            <a href="">Управление бронированием</a>
          </li>
        </ul>

        <ul className={styles.footerLinks}>
          <span className={styles.linkTitle}>Быстрый гид</span>
          <li>
            <a href="">Часто задаваемые вопросы</a>
          </li>
          <li>
            <a href="">Как сделать</a>
          </li>
          <li>
            <a href="">Особенности</a>
          </li>
          <li>
            <a href="">Багаж</a>
          </li>
          <li>
            <a href="">Карта маршрутов</a>
          </li>
          <li>
            <a href="">Наши сообщества</a>
          </li>
        </ul>

        <ul className={styles.footerLinks}>
          <span className={styles.linkTitle}>Информация</span>
          <li>
            <a href="">Шофер</a>
          </li>
          <li>
            <a href="">Наши партнеры</a>
          </li>
          <li>
            <a href="">Направления</a>
          </li>
          <li>
            <a href="">Карьера</a>
          </li>
          <li>
            <a href="">Транспорт</a>
          </li>
          <li>
            <a href="">Правила программ</a>
          </li>
        </ul>
      </div>

      <div className={`${styles.copyRightDiv} flex`}>
        <p>
          Авторские права{" "}
          <a href="#" target="_blank">
            от Алексея
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
