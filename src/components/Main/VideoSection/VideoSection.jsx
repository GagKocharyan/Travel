import './VideoSection.css'
import Poster from '../../../assets/images/video-image.jpg'
import PlayIcon from '../../../assets/images/Play.svg'
export const VideoSection = () => {
    return(
        <section className="video-section">
            <div className="video-poster">
                <img src={Poster} alt="poster" />
            </div>
            <div className="video-section__container">
                <button className="video-button">
                    <img src={PlayIcon} alt="Video button" />
                </button>
            </div>
        </section>
    )
}