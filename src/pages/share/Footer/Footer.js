import React from 'react';
import './Footer.css'
import hotline from '../../../images/social/icon-hotline.png'
import corporate from '../../../images/social/icon-corporate.png'
import mail from '../../../images/social/icon-mail.png'
import home from '../../../images/social//icon_home.png'
import facebook from '../../../images/social/facebook.png'
import youtube from '../../../images/social/youtube.png'
import instagram from '../../../images/social/insta.png'
import linkedin from '../../../images/social/icons8-linkedin-circled-48.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer >
            <div className='footer p-3'>
                <div className='text-start ms-5 companyDetalis'>
                    <h4>HR Production</h4>
                    <p><img src={hotline} alt="" /> Hotline: <small >16297,
                        09609616297</small>
                    </p>
                    <p><img src={corporate} alt="" /> Corporate: <small>+8801708166238, +8801708166239, +8801708166242
                        (9AM to 6PM)
                        Except Weekly & Govt. Holiday</small></p>

                    <p><img src={mail} alt="" /> admin@hr.com</p>
                    <p><img src={home} alt="" /> Motijheel,Dhaka</p>

                </div>
                <div>
                    <Link to='/' >Home</Link>
                </div>
                <div></div>
                <div className='text-start socialConnect'>
                    <h5>Stay Connected</h5>
                    <div className='social'>
                        <img src={facebook} alt="" />
                        <img src={youtube} alt="" />

                        <img src={instagram} alt="" />
                        <img src={linkedin} alt="" />

                    </div>
                    <h5>Likes Our Page</h5>
                    <div className='page'>
                        <div><h3>The Book Planet</h3></div>
                        <button>Liked</button>
                        <button><img style={{width:'20px'}} src={mail} alt="" /> Contact Us</button>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>&copy;copyright reserved {year}</p>
            </div>
        </footer>
    );
};

export default Footer;