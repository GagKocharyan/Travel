import "./PopularSection.css";
import ArrowIcon from "../../../assets/images/arrow.svg";
import { useState } from "react";

export const PopularSection = ({ data }) => {
  const [slide, setSlide] = useState(1);

  const itemsCount = data.popular.length;
  const itemsPerSlide = itemsCount < 4 ? itemsCount : 4;
  const slides = Math.ceil(itemsCount / itemsPerSlide);
  const start = slide * itemsPerSlide - itemsPerSlide;
  const end = start + itemsPerSlide;

  const prev = () => {
    if (slide === 1) return;

    setSlide((prev) => prev - 1);
  };

  const next = () => {
    if (slide === slides) return;

    setSlide((prev) => prev + 1);
  };

  return (
    <section className="popular-section">
      <div className="popular-section__container">
        <h2 className="popular-title">Popular Destinations</h2>
        <div className="slider">
          <button
            className="slider-btn prev"
            disabled={slide === 1}
            onClick={prev}
          >
            <img src={ArrowIcon} alt="Slider Prev Button" />
          </button>
          <div className="popular-primary">
            {data.popular.slice(start, end).map((item) => (
              <div className="popular-item">
                <img
                  className="popular-item__img"
                  src={`/src/assets/images/data/${item.img}.png`}
                  alt="Photo"
                />
                <div className="text-window">
                  <div className="title-box">
                    <h3 className="popular-box__title">{item.title}</h3>
                    <p className="popular-description">{item.text}</p>
                  </div>
                  <div className="price-box">
                    <p className="popular-price">${item.price}</p>
                    <p className="help-text">Per Person</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="slider-btn next"
            disabled={slide === slides}
            onClick={next}
          >
            <img src={ArrowIcon} alt="Slider next button" />
          </button>
        </div>
      </div>
    </section>
  );
};
