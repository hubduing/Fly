import React from "react";
import styles from "./Lounge.module.css";

import imagesGrid2 from "../../assets/images-grid2.jpg";

const Lounge = () => {
  return (
    <section className={`${styles.lounge} container section`}>
      <div className={`${styles.sectionContainer} grid`}>
        <div className="imgDiv">
          <img src={imagesGrid2} alt="" />
        </div>

        <div className={styles.textDiv}>
          <h2>Unaccompanied Minor Lounge</h2>
          <div className={`${styles.grids} grid`}>
            <div className={styles.singleGrid}>
              <span className={styles.gridTitle}>Help through the airpot</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div className={styles.singleGrid}>
              <span className={styles.gridTitle}>Priority Boarding</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div className={styles.singleGrid}>
              <span className={styles.gridTitle}>Care on the flight</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>

            <div className={styles.singleGrid}>
              <span className={styles.gridTitle}>Chauffeur-drive services</span>
              <p>
                You can also call airlines from your phone and book a flight
                ticket to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lounge;
