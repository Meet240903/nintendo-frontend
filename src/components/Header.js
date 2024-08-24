import React, { useState } from 'react';
import '../assets/css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBars, faCheck, faClipboardQuestion, faClose, faComment, faGear, faGift, faHeart, faPlusSquare, faReceipt, faShoppingCart, faStar, faStore, faSwatchbook, faUser } from '@fortawesome/free-solid-svg-icons';
import headerLogo from '../assets/images/nintendu-logo.svg';
import usFlag from '../assets/images/US-Flag.webp';
import unauthImg from '../assets/images/liginsiginSection/unauthd-asset.avif'
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <header className="header">
                <div className="header-left">
                    <div className="logo">
                        <img src={headerLogo} className='img-fluid' style={{ color: 'white' }} alt='website-logo' />
                    </div>
                    <div className='mobile-screen-menu'>
                        <a href="#" className="header-link">
                            <FontAwesomeIcon icon={faClipboardQuestion} /> Support
                        </a>
                        <a href="#" className="header-link">
                            <FontAwesomeIcon icon={faHeart} /> Wish List
                        </a>
                        <a href="#" className="header-link">
                            <FontAwesomeIcon icon={faShoppingCart} /> Cart
                        </a>
                        <a href="#" className="header-link" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faUser} /> Login/Signup
                        </a>
                        <img src={usFlag} className='img-fluid rounded-1' alt='us-flag' />
                    </div>
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Search..." />
                        <select className="search-dropdown">
                            <option value="all">All Categories</option>
                            <option value="electronics">Games</option>
                            <option value="fashion">Hardware</option>
                            <option value="books">Merchandise</option>
                            <option value="toys">News & Events</option>
                            <option value="toys">Support</option>
                        </select>
                    </div>
                </div>
                <div className="header-right">
                    <a href="#" className="header-link">
                        <FontAwesomeIcon icon={faClipboardQuestion} /> Support
                    </a>
                    <a href="#" className="header-link">
                        <FontAwesomeIcon icon={faHeart} /> Wish List
                    </a>
                    <a href="#" className="header-link">
                        <FontAwesomeIcon icon={faShoppingCart} /> Cart
                    </a>
                    <a href="#" className="header-link" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={faUser} /> Login/Signup
                    </a>
                    <img src={usFlag} className='img-fluid rounded-1' alt='us-flag' />
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </header>
            <header className={`second-header ${isMenuOpen ? 'open' : ''}`}>
                <div className='header-content'>
                    <a href="#" className="header-link">
                        <FontAwesomeIcon icon={faStore} /> My Nintendo Store
                    </a>
                    <a href="#" className="header-link">
                        <FontAwesomeIcon icon={faPlusSquare} /> Games
                    </a>
                    <a href="#" className="header-link">
                        <FontAwesomeIcon icon={faSwatchbook} /> Nintendo Switch
                    </a>
                    <a href="#" className="header-link">
                        <FontAwesomeIcon icon={faComment} /> News & Events
                    </a>
                    <a href="#" className="header-link">
                        <FontAwesomeIcon icon={faStar} /> Play Nintendo
                    </a>
                </div>
            </header>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>Login / Signup</h2>
                    <FontAwesomeIcon icon={faClose} onClick={toggleSidebar} style={{cursor:'pointer'}} />
                </div>
                <div className="sidebar-content">
                    <div className='sidebar-section-one'>
                        <img src={unauthImg} className='img-fluid' alt='header-unauth-img' />
                        <h5>With a free account, you can</h5>
                        <ul>
                            <li><FontAwesomeIcon icon={faCheck} />&nbsp;&nbsp; Shop online</li>
                            <li><FontAwesomeIcon icon={faCheck} />&nbsp;&nbsp; Earn My Nintendo points</li>
                            <li><FontAwesomeIcon icon={faCheck} />&nbsp;&nbsp; Save a Wish List</li>
                        </ul>
                    </div>
                    <Link to="/nintendo-account" ><button className='sidebar-login-btn'>Log in</button></Link>
                    <button className='sidebar-signup-btn'>Sign up</button>
                    <button className='sidebar-orderstatus-btn'><FontAwesomeIcon icon={faReceipt} style={{color:'#e60012'}} />&nbsp;&nbsp; Order status</button>
                    <div className='sidebar-bottom-section'>
                        <div className='sidebar-bottom-content'>
                            <FontAwesomeIcon icon={faStore} />
                            <span className='fw-bold'>My Nintendo</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </div>
                        <div className='sidebar-bottom-content'>
                            <FontAwesomeIcon icon={faGift} />
                            <span className='fw-bold'>Redeem code</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </div>
                        <div className='sidebar-bottom-content'>
                            <FontAwesomeIcon icon={faGear} />
                            <span className='fw-bold'>Account settings</span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </div>
                    </div>
                </div>
            </div>
            {/* Overlay */}
            {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </>
    );
};

export default Header;
