import React from "react";
import styles from "./Subscribers.module.css";

const Subscribers = () => {
  return (
    <section className={`${styles.subscribe} section`}>
      <div className={`${styles.sectionContainer} container`}>
        <h2>Подписывайтесь на новости и получайте последние обновления</h2>
        <div className={`${styles.inputDiv} flex`}>
          <input type="text" placeholder="Введите ваш адрес электронной почты" />
          <button className={`btn ${styles.btn}`}>Подписаться</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribers;
