import './StarSection.css'
import StarIcon from '../../../assets/images/Star.svg'


const starList = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "Packages",
    path: "/",
  },

  {
    label: "Tours",
    path: "/",
  },

  {
    label: "About Us",
    path: "/",
  },

  {
    label: "Contact",
    path: "/",
  },
];

export const StarSection = () => {
    return(
        <section className="star-section">
            <div className='star-section__container'>
                <div className='star-section__content'>
                    <img className='star-icon' src={StarIcon} alt="Star" />
                    <h2 className='star-title'>Star Travels</h2>
                </div>
    <nav className="star">
        <ul className="star-list">
            {starList.map((item) => (
              <li className="star-item" key={item.label}>
                <a className="star-link" href={item.path}>{item.label}</a>
              </li>
            ))}
            </ul>
            </nav>
            <div>
                <a className='section-link' href="a">Copyright 2023 | StarTravels.com | All Rights Reserved.</a>
            </div>
   </div>
</section>
    )
}