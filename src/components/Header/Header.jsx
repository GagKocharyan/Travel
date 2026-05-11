import { Navbar } from "../Navbar/Navbar";
import "./Header.css";
import { HeaderList } from "./HeaderList";

import InstagramIcon from '../../assets/images/icons/instagram.svg'
import TwitterIcon from '../../assets/images/icons/twitter.svg'
import FacebookIcon from '../../assets/images/icons/facebook.svg'
import MailIcon from '../../assets/images/icons/mail.svg'
import PhoneIcon from '../../assets/images/icons/phone.svg'
import { Reservation } from "./Reservation";

const socialsList = [
    {
        title: 'Instagram',
        path: 'https://instagram.com',
        image: InstagramIcon
    },

    {
        title: 'Twitter',
        path: 'https://x.com',
        image: TwitterIcon
    },

    {
        title: 'Facebook',
        path: 'https://facebook.com',
        image: FacebookIcon
    }
]

const contactsList = [
    {
        title: 'Phone',
        path: 'tel:+1334445623',
        label: '+1 334 445 623',
        image: PhoneIcon
    },

    {
        title: 'Mail',
        path: 'mailto:contact@startravels.com',
        label: 'contact@startravels.com',
        image: MailIcon
    }
]

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
            <div className="header-top">
                <HeaderList list={socialsList}/>
                <HeaderList list={contactsList}/>
            </div>
                <Navbar />

                <div className="header-titles">
                    <h1 className="page-title">Your Dream Vacation Awaits</h1>
                    <h2 className="section-title">Explore the World with us.</h2>
                </div>
                <Reservation />
            </div>
        </header>
    )
}