import React from "react";
import styles from "./Info.module.css";
import { RxCalendar } from "react-icons/rx";
import { BsBookmarkCheck, BsShieldCheck } from "react-icons/bs";

const info = () => {
  return (
    <section className={`${styles.info} section`}>
      <div className={`${styles.infoContainer} container`}>
        <div className={`${titleDiv} flex`}>
          <button className="btn">View All</button>
        </div>
      </div>

      <div className={`${styles.cardsDiv} grid`}>

        <div className="singleCard grid">
          <div className="iconDiv flex">
            <RxCalendar className="icon" />
            <span className="cardTitle">Book & Relax</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket!
            </p>
          </div>
        </div>

        <div className="singleCard grid">
          <div className="iconDiv flex">
            <BsShieldCheck className="icon" />
            <span className="cardTitle">Smart checklist</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket!
            </p>
          </div>
        </div>
        
        <div className="singleCard grid">
          <div className="iconDiv flex">
            <BsBookmarkCheck className="icon" />
            <span className="cardTitle">Save More</span>
            <p>
              You can also call airlines from your phone and book a flight
              ticket!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default info;
