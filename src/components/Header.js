import React, { useState } from 'react';
import '../assets/css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClipboardQuestion, faComment, faHeart, faPlusSquare, faShoppingCart, faStar, faStore, faSwatchbook, faUser } from '@fortawesome/free-solid-svg-icons';
import headerLogo from '../assets/images/nintendu-logo.svg';
import usFlag from '../assets/images/US-Flag.webp';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                        <a href="#" className="header-link">
                            <FontAwesomeIcon icon={faUser} /> Login/Signup
                        </a>
                        <img src={usFlag} className='img-fluid rounded-1' alt='us-flag' />
                    </div>
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="Search..." />
                        <select className="search-dropdown">
                            <option value="all">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="fashion">Fashion</option>
                            <option value="books">Books</option>
                            <option value="toys">Toys</option>
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
                    <a href="#" className="header-link">
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
        </>
    );
};

export default Header;
