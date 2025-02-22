// import React from "react";
// import styles from "./Travelers.module.css";

// import paris from "../../assets/paris.jpeg";
// import london from "../../assets/london.jpeg";
// import newYork from "../../assets/newYork.jpeg";
// import dubai from "../../assets/dubai.jpeg";

// import traveler1 from "../../assets/user1.jpg";
// import traveler2 from "../../assets/user2.jpg";
// import traveler3 from "../../assets/user3.jpg";
// import traveler4 from "../../assets/user4.jpg";

// const travelers = [
//   {
//     id: 1,
//     destinationImage: paris,
//     travelerImage: traveler1,
//     travelerName: "Ista Tech",
//     socialLink: "@irsatech",
//   },
//   {
//     id: 2,
//     destinationImage: london,
//     travelerImage: traveler2,
//     travelerName: "Loly Poly",
//     socialLink: "@lolypoly",
//   },
//   {
//     id: 3,
//     destinationImage: newYork,
//     travelerImage: traveler3,
//     travelerName: "Astra Mentis",
//     socialLink: "@astramentis",
//   },
//   {
//     id: 4,
//     destinationImage: dubai,
//     travelerImage: traveler4,
//     travelerName: "Iris Now",
//     socialLink: "@irisnow",
//   },
// ];

// const Travelers = () => {
//   return (
//     <section className={`${styles.travelers} container section`}>
//       <div className={styles.sectionContainer}>
//         <h2>Top travelers of this month</h2>

//         <div className={`${styles.travelersContainer} grid`}>
//           {travelers.map(
//             ({
//               id,
//               destinationImage,
//               travelerImage,
//               travelerName,
//               socialLink,
//             }) => {
//               return (
//                 <div key={id} className={styles.singleTraveler}>
//                   <img
//                     src={destinationImage}
//                     alt=""
//                     className={styles.destinationImage}
//                   />
//                   <div className={styles.travelerDetails}>
//                     <div className={styles.travelerPicture}>
//                       <img
//                         src={travelerImage}
//                         alt=""
//                         className={styles.travelerImage}
//                       />
//                     </div>
//                     <div className={styles.travelerName}>
//                       <span>{travelerName}</span>
//                       <span>{socialLink}</span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             }
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Travelers;


import React from "react";
import styles from "./Travelers.module.css";

import paris from "../../assets/paris.jpeg";
import london from "../../assets/london.jpeg";
import newYork from "../../assets/newYork.jpeg";
import dubai from "../../assets/dubai.jpeg";

import traveler1 from "../../assets/user1.jpg";
import traveler2 from "../../assets/user2.jpg";
import traveler3 from "../../assets/user3.jpg";
import traveler4 from "../../assets/user4.jpg";

const travelers = [
  {
    id: 1,
    destinationImage: paris,
    travelerImage: traveler1,
    travelerName: "Ista Tech",
    socialLink: "@irsatech",
    description: "Любит исследовать культуру и гастрономию Парижа.",
  },
  {
    id: 2,
    destinationImage: london,
    travelerImage: traveler2,
    travelerName: "Loly Poly",
    socialLink: "@lolypoly",
    description: "Путешествует по всему миру и делится своими впечатлениями.",
  },
  {
    id: 3,
    destinationImage: newYork,
    travelerImage: traveler3,
    travelerName: "Astra Mentis",
    socialLink: "@astramentis",
    description: "Обожает архитектуру и искусство Нью-Йорка.",
  },
  {
    id: 4,
    destinationImage: dubai,
    travelerImage: traveler4,
    travelerName: "Iris Now",
    socialLink: "@irisnow",
    description: "Покоряет небоскрёбы и роскошные отели Дубая.",
  },
];

const Travelers = () => {
  return (
    <section className={`${styles.travelers} container section`}>
      <div className={styles.sectionContainer}>
        <h2>Лучшие путешественники этого месяца</h2>

        <div className={`${styles.travelersContainer} grid`}>
          {travelers.map(
            ({
              id,
              destinationImage,
              travelerImage,
              travelerName,
              socialLink,
              description,
            }) => {
              return (
                <div key={id} className={styles.singleTraveler}>
                  <img
                    src={destinationImage}
                    alt=""
                    className={styles.destinationImage}
                  />
                  <div className={styles.travelerDetails}>
                    <div className={styles.travelerPicture}>
                      <img
                        src={travelerImage}
                        alt=""
                        className={styles.travelerImage}
                      />
                    </div>
                    <div className={styles.travelerName}>
                      <span>{travelerName}</span>
                      <span>{socialLink}</span>
                    </div>
                    <p className={styles.travelerDescription}>{description}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Travelers;
