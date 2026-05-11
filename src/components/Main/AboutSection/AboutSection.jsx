import './AboutSection.css'

import GauranteeIcon from '../../../assets/images/about/Guarantee.svg'
import ExperienceIcon from '../../../assets/images/about/Experience.svg'
import ServiceIcon from '../../../assets/images/about/Service.svg'

const aboutItemsList = [
    {
        title: 'GUARANTEE',
        image: GauranteeIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    },

    {
        title: 'SERVICE',
        image: ServiceIcon,
        text: 'Nunc vulputate libero et velit interdum, ac aliquet odio. '
    },

    {
        title: 'EXPERIENCE',
        image: ExperienceIcon,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
]

export const AboutSection = () => {
    return(
        <section className='about-section'>
            <div className='about-section__container'>
                <h2 className='section-title'>Why Us?</h2>
                <div className='about-items__block'>
                    {aboutItemsList.map ((item) => (
                        <div className='about-item'>
                            <div className="about-item-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <h3 className='about-item-title'>{item.title}</h3>
                            <p className='abput-item-text'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}