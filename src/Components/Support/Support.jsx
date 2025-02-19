import React from "react";
import styles from "./Support.module.css";

import imageGrid from "../../assets/images-grid.png";

const Support = () => {
  return (
    <section className={`${styles.support} container section`}>
      <div className={styles.sectionContainer}>
        <div className={styles.titlesDiv}>
          <small>Travel support</small>
          <h2>Plan your travel</h2>
          <p>
            Plan your travel right Now! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Molestiae, asperiores!
          </p>
        </div>
        <div className={`${styles.infoDiv} grid`}>
          <div className={styles.singleInfo}>
            <span className={`${styles.number}`}>01</span>
            <h4>Travel requirements for Dubai</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              animi vitae assumenda vel, dignissimos perspiciatis explicabo id
              omnis quo exercitationem.
            </p>
          </div>
          <div className={styles.singleInfo}>
            <span className={`${styles.number} ${styles.colorOne}`}>02</span>
            <h4>Chauffeur services at your arrival</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              animi vitae assumenda vel, dignissimos perspiciatis explicabo id
              omnis quo exercitationem.
            </p>
          </div>
          <div className={styles.singleInfo}>
            <span className={`${styles.number} ${styles.colorTwo}`}>03</span>
            <h4>Multi-risk travel insurance</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              animi vitae assumenda vel, dignissimos perspiciatis explicabo id
              omnis quo exercitationem.
            </p>
          </div>
        </div>

        <div className={styles.imgDiv}>
          <img src={imageGrid} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Support;
