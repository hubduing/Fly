// import React from "react";
// import styles from "./Support.module.css";

// import imageGrid from "../../assets/images-grid.png";

// const Support = () => {
//   return (
//     <section className={`${styles.support} container section`}>
//       <div className={styles.sectionContainer}>
//         <div className={styles.titlesDiv}>
//           <small>Travel support</small>
//           <h2>Plan your travel</h2>
//           <p>
//             Plan your travel right Now! Lorem ipsum dolor sit amet consectetur
//             adipisicing elit. Molestiae, asperiores!
//           </p>
//         </div>
//         <div className={`${styles.infoDiv} grid`}>
//           <div className={styles.singleInfo}>
//             <span className={`${styles.number}`}>01</span>
//             <h4>Travel requirements for Dubai</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
//               animi vitae assumenda vel, dignissimos perspiciatis explicabo id
//               omnis quo exercitationem.
//             </p>
//           </div>
//           <div className={styles.singleInfo}>
//             <span className={`${styles.number} ${styles.colorOne}`}>02</span>
//             <h4>Chauffeur services at your arrival</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
//               animi vitae assumenda vel, dignissimos perspiciatis explicabo id
//               omnis quo exercitationem.
//             </p>
//           </div>
//           <div className={styles.singleInfo}>
//             <span className={`${styles.number} ${styles.colorTwo}`}>03</span>
//             <h4>Multi-risk travel insurance</h4>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
//               animi vitae assumenda vel, dignissimos perspiciatis explicabo id
//               omnis quo exercitationem.
//             </p>
//           </div>
//         </div>
        
//         <div className={styles.imgDiv}>
//           <img src={imageGrid} alt="" />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Support;


import React from "react";
import styles from "./Support.module.css";

import imageGrid from "../../assets/images-grid.png";

const Support = () => {
  return (
    <section className={`${styles.support} container section`}>
      <div className={styles.sectionContainer}>
        <div className={styles.titlesDiv}>
          <small>Поддержка путешественников</small>
          <h2>Планируйте свои путешествия</h2>
          <p>
            Начните планировать свое путешествие прямо сейчас! Мы поможем вам сделать его незабываемым и комфортным.
          </p>
        </div>
        <div className={`${styles.infoDiv} grid`}>
          <div className={styles.singleInfo}>
            <span className={`${styles.number}`}>01</span>
            <h4>Требования для поездки в Дубай</h4>
            <p>
              Перед поездкой в Дубай убедитесь, что у вас есть все необходимые документы, включая визу и страховку. Ознакомьтесь с актуальными правилами въезда и требованиями к вакцинации.
            </p>
          </div>
          <div className={styles.singleInfo}>
            <span className={`${styles.number} ${styles.colorOne}`}>02</span>
            <h4>Услуги водителей по вашему прибытии</h4>
            <p>
              Мы предлагаем услуги профессиональных водителей, которые встретят вас в аэропорту и доставят в отель. Это обеспечит вам комфортное и безопасное начало вашего путешествия.
            </p>
          </div>
          <div className={styles.singleInfo}>
            <span className={`${styles.number} ${styles.colorTwo}`}>03</span>
            <h4>Многоуровневая туристическая страховка</h4>
            <p>
              Защитите себя и своих близких во время путешествий с нашей многоуровневой туристической страховкой. Она покрывает медицинские расходы, отмену поездки и другие непредвиденные ситуации.
            </p>
          </div>
        </div>
        
        <div className={styles.imgDiv}>
          <img src={imageGrid} alt="Travel support" />
        </div>

      </div>
    </section>
  );
};

export default Support;
