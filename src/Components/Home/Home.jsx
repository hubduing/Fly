import React from "react";
import styles from "./Home.module.css";

import videoAeroplane from "../../assets/aeroplaneCut.mp4";
import aeroplane from "../../assets/aeroplane.png";

const Home = () => {
  return (
    <div className={`${styles.home} flex container`}>
      <div className={styles.mainText}>
        <h1>Create memories</h1>
      </div>

      <div className={`${styles.homeImages} flex`}>
        <div className={styles.videoDiv}>
          <video src={videoAeroplane} autoPlay muted loop className="video"></video>
        </div>

        <img src={aeroplane} alt="Plane" className={styles.plane} />
      </div>
    </div>
  );
};

export default Home;
