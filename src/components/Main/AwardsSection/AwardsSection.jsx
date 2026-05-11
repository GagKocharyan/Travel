import "./AwardsSection.css";

import AttractionsImage from "../../../assets/images/awards/Attractions.png";
import HotelsImage from "../../../assets/images/awards/Hotels.png";
import ResortsImage from "../../../assets/images/awards/Resorts.png";
import LandmarksImage from "../../../assets/images/awards/Landmarks.png";
import BeachesImage from "../../../assets/images/awards/Beaches.png";
import IslandsImage from "../../../assets/images/awards/Islands.png";

const awardsItems = [
  {
    id: 1,
    title: "Attractions",
    desc: "Top 10 Attractions",
    image: AttractionsImage,
  },

  {
    id: 2,
    title: "Hotels",
    desc: "Top 10 Hotels",
    image: HotelsImage,
  },

  {
    id: 3,
    title: "Resorts",
    desc: "Top 5 Resorts",
    image: ResortsImage,
  },

  {
    id: 4,
    title: "Landmarks",
    desc: "Top 10 Landmarks",
    image: LandmarksImage,
  },

  {
    id: 5,
    title: "Beaches",
    desc: "Top 10 Beaches",
    image: BeachesImage,
  },

  {
    id: 6,
    title: "Islands",
    desc: "Top 10 Islands",
    image: IslandsImage,
  },
];

export const AwardsSection = () => {
  return (
    <section className="awards-section">
      <div className="awards-section__container">
        <div className="form-block">
          <h3 className="form-title">NEWSLETTER</h3>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc
            vulputate{" "}
          </p>
          <form className="form" action="">
            <input className="input" type="text" />
            <input className="input" type="text" />
            <button className="form-btn">SUBSCRIBE</button>
          </form>
        </div>
        <div className="awards-content">
          <div className="awards-title">
            <h2 className="section-title">Award Winning </h2>
            <p className="section-text">
              Lorem ipsum dolor sit amet, consec adipiscing elit. Nunc
              vulputate{" "}
            </p>
          </div>
          <div className="awards-items-block">
            {awardsItems.map((item) => (
              <div className="awards-item" key={item.id}>
                <div className="award-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="award-content">
                  <h3 className="award-title">{item.title}</h3>
                  <h4 className="award-desc">{item.desc}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
