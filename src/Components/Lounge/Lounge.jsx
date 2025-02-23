import React from "react";
import styles from "./Lounge.module.css";

import imagesGrid2 from "../../assets/images-grid2.jpg";

const Lounge = () => {
  return (
    <section className={`${styles.lounge} container section`}>
      <div className={`${styles.sectionContainer} grid`}>
        <div className="imgDiv">
          <img src={imagesGrid2} alt="Зона ожидания" />
        </div>

        <div className={styles.textDiv}>
          <h2>Лаунж для несовершеннолетних без сопровождения</h2>
          <div className={`${styles.grids} grid`}>
            <div className={styles.singleGrid}>
              <span className={styles.gridTitle}>Помощь в аэропорту</span>
              <p>
                Вы также можете позвонить в авиакомпании со своего телефона и
                забронировать билет на один из ваших любимых маршрутов.
              </p>
            </div>

            <div className={styles.singleGrid}>
              <span className={styles.gridTitle}>Приоритетная посадка</span>
              <p>
                Вы также можете позвонить в авиакомпании со своего телефона и
                забронировать билет на один из ваших любимых маршрутов.
              </p>
            </div>

            <div className={styles.singleGrid}>
              <span className={styles.gridTitle}>Забота во время полета</span>
              <p>
                Вы также можете позвонить в авиакомпании со своего телефона и
                забронировать билет на один из ваших любимых маршрутов.
              </p>
            </div>

            <div className={styles.singleGrid}>
              <span className={styles.gridTitle}>Услуги водителя</span>
              <p>
                Вы также можете позвонить в авиакомпании со своего телефона и
                забронировать билет на один из ваших любимых маршрутов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lounge;
