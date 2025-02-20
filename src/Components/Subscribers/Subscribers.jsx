import React from "react";
import styles from "./Subscribers.module.css";

const Subscribers = () => {
  return (
    <section className={`${styles.subscribe} section`}>
      <div className={`${styles.sectionContainer} container`}>
        <h2>Subscribe newsletters & get Latest news</h2>
        <div className={`${styles.inputDiv} flex`}>
          <input type="text" placeholder="Enter your Email adress" />
          <button className={`btn ${styles.btn}`}>Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Subscribers;
