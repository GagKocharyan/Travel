import { useState } from "react";

const reservationData = [
  {
    title: "FLIGHTS",
  },

  {
    title: "HOTELS",
  },

  {
    title: "TOURS",
  },
];

export const Reservation = () => {
  const [activeCategory, setActiveCategory] = useState(
    reservationData[0].title,
  );
  const changeCategory = (title) => {
    if (title === activeCategory) return;

    setActiveCategory(title);
  };
  return (
    <div className="reservation">
      <div className="reservation-top">
        {reservationData.map((item) => (
          <button
            className={`reserve-button ${activeCategory === item.title ? "active" : ""}`}
            onClick={() => changeCategory(item.title)}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="reservation-general">
        <div className="reservation-primary">
          <div className="reservation-item">
            <img src="./src/assets/images/img/location.png" alt="png" />
            <div className="item-select">
                <p className="reservation-text">From</p>
                <img className="reservation-img" src="./src/assets/images/img/arrow.png" alt="png" />
            </div>
          </div>

          <div className="reservation-item">
            <img className="reservation-location" src="./src/assets/images/img/location.png" alt="png" />
            <div className="item-select">
                <p className="reservation-text">To</p>
                <img className="reservation-img" src="./src/assets/images/img/arrow.png" alt="png" />
            </div>
          </div>

          <div className="reservation-item">
          <p className="reservation-text">Departure Date</p>
          <img className="reservation-date" src="./src/assets/images/img/date.png" alt="png" />
          </div>

          <div className="reservation-item">
          <p className="reservation-text">Return Date</p>
          <img className="reservation-date" src="./src/assets/images/img/date.png" alt="png" />
          </div>

          <div className="reservation-item">
          <p className="reservation-text">Traveller(s), Class</p>
          <img src="./src/assets/images/img/arrow.png" alt="png" />
          </div>
        </div>
      </div>
    </div>
  );
};
