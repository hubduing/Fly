// import React from "react";
// import styles from "./Search.module.css";

// import { HiOutlineLocationMarker } from "react-icons/hi";
// import { RiAccountPinCircleLine } from "react-icons/ri";
// import { RxCalendar } from "react-icons/rx";

// const Search = () => {
//   return (
//     <section className={`${styles.search} container section`}>
//       <div className="sectionContainer grid">
//         <div className={`btns flex ${styles.btns}`}>
//           <div className="singleBtn active">
//             <span>Economy</span>
//           </div>
//           <div className="singleBtn">
//             <span>Business class</span>
//           </div>
//           <div className="singleBtn">
//             <span>First class</span>
//           </div>
//         </div>

//         <div className={`${styles.searchInputs} flex`}>
//           <div className={`${styles.singleInput} flex`}>
//             <div className="iconDiv">
//               <HiOutlineLocationMarker className="icon" />
//             </div>
//             <div className="text">
//               <h4>Location</h4>
//               <input
//                 className="textInput"
//                 type="text"
//                 placeholder="Куда бы Вы хотели полететь?"
//               />
//             </div>
//           </div>

//           <div className={`${styles.singleInput} flex`}>
//             <div className="iconDiv">
//               <RiAccountPinCircleLine className="icon" />
//             </div>
//             <div className="text">
//               <h4>Travelers</h4>
//               <input
//                 className="textInput"
//                 type="text"
//                 placeholder="Добавить гостя?"
//               />
//             </div>
//           </div>

//           <div className={`${styles.singleInput} flex`}>
//             <div className="iconDiv">
//               <RxCalendar className="icon" />
//             </div>
//             <div className="text">
//               <h4>Check In</h4>
//               <input
//                 className="textInput"
//                 type="text"
//                 placeholder="Добавить дату"
//               />
//             </div>
//           </div>

//           <div className={`${styles.singleInput} flex`}>
//             <div className="iconDiv">
//               <RxCalendar className="icon" />
//             </div>
//             <div className="text">
//               <h4>Check Out</h4>
//               <input
//                 className="textInput"
//                 type="text"
//                 placeholder="Добавить дату"
//               />
//             </div>
//           </div>
//           <button className={`${styles.btnBlock} btn flex`}>
//             Search flight
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Search;


import React from "react";
import styles from "./Search.module.css";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";

const Search = () => {
  return (
    <section className={`${styles.search} container section`}>
      <div className="sectionContainer grid">
        <div className={`btns flex ${styles.btns}`}>
          <div className="singleBtn active">
            <span>Эконом</span>
          </div>
          <div className="singleBtn">
            <span>Бизнес класс</span>
          </div>
          <div className="singleBtn">
            <span>Первый класс</span>
          </div>
        </div>

        <div className={`${styles.searchInputs} flex`}>
          <div className={`${styles.singleInput} flex`}>
            <div className="iconDiv">
              <HiOutlineLocationMarker className="icon" />
            </div>
            <div className="text">
              <h4>Место назначения</h4>
              <input
                className="textInput"
                type="text"
                placeholder="Куда бы Вы хотели полететь?"
              />
            </div>
          </div>

          <div className={`${styles.singleInput} flex`}>
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="text">
              <h4>Путешественники</h4>
              <input
                className="textInput"
                type="text"
                placeholder="Добавить гостя?"
              />
            </div>
          </div>

          <div className={`${styles.singleInput} flex`}>
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="text">
              <h4>Дата заезда</h4>
              <input
                className="textInput"
                type="text"
                placeholder="Добавить дату"
              />
            </div>
          </div>

          <div className={`${styles.singleInput} flex`}>
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="text">
              <h4>Дата выезда</h4>
              <input
                className="textInput"
                type="text"
                placeholder="Добавить дату"
              />
            </div>
          </div>
          <button className={`${styles.btnBlock} btn flex`}>
            Найти рейс
          </button>
        </div>
      </div>
    </section>
  );
};

export default Search;
