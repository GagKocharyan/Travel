import './AdventuresSection.css'

import CruiseImage from '../../../assets/images/adventures/Cruise.png'
import SailingImage from '../../../assets/images/adventures/Sailing.png'
import CampingImage from '../../../assets/images/adventures/Camping.png'
import HikingImage from '../../../assets/images/adventures/Hiking.png'
import DivingImage from '../../../assets/images/adventures/Diving.png'

const galleryItems = [
    {
        id: 1,
        title : 'Canal Cruise',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ',
        image: CruiseImage
    },

    {
        id: 2,
        title : 'Sailing',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ',
        image: SailingImage
    },
    
    {
        id: 3,
        title : 'Camping',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ',
        image: CampingImage
    },

    {
        id: 4,
        title : 'Hiking ',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ',
        image: HikingImage
    },

    {
        id: 5,
        title : 'Scuba Diving',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit ',
        image: DivingImage
    }
]

export const AdventuresSection = () => {
    return(
        <section className="adventures-section">
            <div className="adventurs-section__container">
                <h2 className="section-title">Have an Adventure Today</h2>
                <div className="gallery">
                    {galleryItems.map((item) => (
                        <div className='gallery-item' style={{

                            backgroundImage: `url(${item.image})`
                        }}>
                            <div className="gallery-item-content">
                                <h3 className='gallery-item-title'>{item.title}</h3>
                                <p className='gallery-item-text'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}