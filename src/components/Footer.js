import React from 'react';
import footerLogo from '../assets/images/nintendu-logo.svg';
import '../assets/css/footer.css'; // Assuming your CSS is here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faThreads, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import usFlag from '../assets/images/US-Flag.webp';

const Footer = () => {
    return (
        <>
            <footer className="footer-one-container">
                <div className='footer-first-content'>
                    <div className="footer-content">
                        <div className="footer-logo">
                            <img src={footerLogo} className="img-fluid" alt="logo" />
                        </div>
                        <div className='footer-social-icons'>
                            <FontAwesomeIcon icon={faFacebook} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faThreads} />
                            <FontAwesomeIcon icon={faYoutube} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                    </div>
                </div>
            </footer>

            <footer className='footer-two-container'>
                <div className='footer-second-content'>
                    <div className='footer-links'>
                        <div>
                            <h5>About Nintendo</h5>
                            <ul>
                                <li>Careers</li>
                                <li>Corporate Social Responsibility</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Shop</h5>
                            <ul>
                                <li>Games</li>
                                <li>Hardware</li>
                                <li>Merchandise</li>
                                <li>Sales & deals</li>
                                <li>Exclusives</li>
                                <li>Online service</li>
                                <li>Nintendo NY store</li>
                            </ul>
                        </div>
                        <div>
                            <h5>My Nintendo Store orders</h5>
                            <ul>
                                <li>Order details</li>
                                <li>Shipping info</li>
                                <li>Returns & exchanges</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Support</h5>
                            <ul>
                                <li>Nintendo Switch</li>
                                <li>Nintendo Account</li>
                                <li>Other systems</li>
                                <li>Repairs</li>
                                <li>Nintendo product recycling</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Parents</h5>
                            <ul>
                                <li>Info for parents</li>
                                <li>Parental controls</li>
                            </ul>
                            <h5 className='mt-4'>Privacy</h5>
                            <ul>
                                <li>Privacy policy</li>
                                <li>Cookies and interest-based ads</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Community</h5>
                            <ul>
                                <li>Community guidelines</li>
                                <li>Online safety principles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

            <footer className='footer-bottom-container'>
                <div className="footer-bottom">
                    <small>&copy; Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</small>
                    <ul className='footer-bottom-links'>
                        <li><a href="#" className="footer-link">Contact us</a></li>
                        <li><a href="#" className="footer-link">Website feedback</a></li>
                        <li><a href="#" className="footer-link">Terms of Use</a></li>
                        <li><a href="#" className="footer-link">Documents & Policies</a></li>
                    </ul>
                    <div className="footer-language">
                        <img src={usFlag} className='img-fluid rounded-1' alt='us-flag' />
                        <span>English (United States)</span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
