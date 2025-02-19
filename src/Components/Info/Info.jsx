import React from "react";
import styles from "./Info.module.css";
import { RxCalendar } from "react-icons/rx";
import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs";

const Info = () => {
  return (
    <section className={`${styles.info} section`}>
      <div className={`${styles.infoContainer} container`}>
        <div className={`${styles.titleDiv} flex`}>
          <button className="btn">View All</button>
        </div>
      </div>

      <div className={`${styles.cardsDiv} grid`}>
        <div className={`${styles.singleCard} grid`}>
          <div className={`${styles.iconDiv} flex`}>
            <RxCalendar className="icon" />
          </div>
          <span className={styles.cardTitle}>Book & Relax</span>
          <p>
            You can also call airlines from your phone and book a flight ticket!
          </p>
        </div>

        <div className={`${styles.singleCard} grid`}>
          <div className={`${styles.iconDiv} ${styles.colorOne} flex`}>
            <BsShieldCheck className="icon" />
          </div>
          <span className={styles.cardTitle}>Smart checklist</span>
          <p>
            You can also call airlines from your phone and book a flight ticket!
          </p>
        </div>

        <div className={`${styles.singleCard} grid`}>
          <div className={`${styles.iconDiv} ${styles.colorTwo} flex`}>
            <BsBookmarkCheck className="icon" />
          </div>
          <span className={styles.cardTitle}>Save More</span>
          <p>
            You can also call airlines from your phone and book a flight ticket!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
