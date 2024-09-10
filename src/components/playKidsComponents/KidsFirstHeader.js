import React, { useState } from 'react';
import headerLogo from '../../assets/images/nintendu-logo.svg';
import headerLogo1 from '../../assets/images/kidsComponentsImgs/headerLogo.png';
import '../../assets/css/kidsComponentscss/kidsFirstHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const KidsFirstHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* First Header */}
            <div className="kids-first-header-container">
                <div className="kids-first-header-logo-img">
                    <Link to="/">
                        <img src={headerLogo} className="img-fluid" alt="logo" />
                    </Link>
                </div>
                <div className="kids-first-header-login-section">
                    <Link to="/nintendo-account" className="router-link">
                        <span>
                            <FontAwesomeIcon icon={faUser} />&nbsp;&nbsp;
                            Login in / Sign up
                        </span>
                    </Link>
                </div>
                {/* Toggle button for small screens */}
                <div className="kids-second-header-toggle" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
                </div>
            </div>

            {/* Second Header */}
            <div className={`kids-second-header-container ${isMenuOpen ? 'open' : ''}`}>
                <div className="kids-second-header-list">
                    <Link to='/friends' className='router-link'>
                        <li>Friends</li>
                    </Link>
                    <Link to='/activities' className='router-link'>
                        <li>Activities</li>
                    </Link>
                    <Link to='/media' className='router-link'>
                        <li>Media</li>
                    </Link>
                    <Link to="/kids-home">
                        <img src={headerLogo1} className="fluid-img" alt="header-logo" />
                    </Link>
                    <Link to='/printables' className='router-link'>
                        <li>Printables</li>
                    </Link>
                    <Link to='/news-tips' className='router-link'>
                        <li>News & Tips</li>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default KidsFirstHeader;
