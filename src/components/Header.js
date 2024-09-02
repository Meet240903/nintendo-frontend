import React, { useState } from 'react';
import '../assets/css/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faBars, faBullhorn, faCalendar, faCalendarAlt, faCheck, faClipboardQuestion, faClose, faComment, faGamepad, faGear, faGift, faGreaterThan, faHeart, faPersonRunning, faPlusSquare, faReceipt, faShoppingCart, faStar, faStore, faSwatchbook, faTshirt, faUser } from '@fortawesome/free-solid-svg-icons';
import headerLogo from '../assets/images/nintendu-logo.svg';
import usFlag from '../assets/images/US-Flag.webp';
import unauthImg from '../assets/images/liginsiginSection/unauthd-asset.avif'
import { Link } from 'react-router-dom';
import nintendoSwtichImg1 from '../assets/images/nintendo-switch-header-img1.avif'
import nintendoSwtichImg2 from '../assets/images/nintendo-switch-header-img2.svg'
import nintendoSwtichImg3 from '../assets/images/nintendo-switch-header-img3.svg'
import nintendoSwtichImg4 from '../assets/images/nintendo-switch-header-img4.avif'
import nintendoSwtichImg5 from '../assets/images/nintendo-switch-header-img5.avif'

import playNintendoImg1 from '../assets/images/playNintendoImg1.svg'
import playNintendoImg2 from '../assets/images/playNintendoImg2.svg'

import headerData from '../data/MyNintendoStoreDropDownData';

const { MyNintendoStoreDropDownData } = headerData

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [myNintendoStoreDropDowwn, setMyNintendoStoreDropDown] = useState(false);
    const [gameDropDowwn, setGameDropDown] = useState(false);
    const [nintendoSwitchDropDowwn, setNintendoSwitchDropDown] = useState(false);
    const [playNintendoDropDowwn, setPlayNintendoDropDown] = useState(false);    

    const gameDropdownData = [
        {
            icon: faSwatchbook,
            title: 'Nintendo Switch games',
        },
        {
            icon: faBullhorn,
            title: 'New releases',
        },
        {
            icon: faCalendarAlt,
            title: 'Comming Soon',
        },
        {
            icon: faPlusSquare,
            title: 'Shop games',
        },
    ]

    const nintendoSwitchDropdownData = [
        {
            img: nintendoSwtichImg1,
            title: 'Nintendo Switch lineup',
        },
        {
            img: nintendoSwtichImg2,
            title: 'Compare systems',
        },
        {
            img: nintendoSwtichImg3,
            title: 'Online service',
        },
        {
            img: nintendoSwtichImg4,
            title: 'Accessories',
        },
        {
            img: nintendoSwtichImg5,
            title: 'Shop systems',
        },
    ]

    const playNintendoDropdownData = [
        {
            img: playNintendoImg1,
            title: 'For kids',
        },
        {
            img: playNintendoImg2,
            title: 'For parents',
        },
    ]

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
                        <Link to='/'><img src={headerLogo} className='img-fluid' style={{ color: 'white' }} alt='website-logo' /></Link>
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
                    <a href="#" className="header-link" onClick={() => { setMyNintendoStoreDropDown(!myNintendoStoreDropDowwn); setGameDropDown(false); setNintendoSwitchDropDown(false); setPlayNintendoDropDown(false) }}>
                        <FontAwesomeIcon icon={faStore} /> My Nintendo Store&nbsp;&nbsp; <FontAwesomeIcon
                            icon={faGreaterThan}
                            className="header-greater-than-icon"
                            style={{ transform: myNintendoStoreDropDowwn ? 'rotate(90deg)' : 'none' }}
                        />
                    </a>
                    {
                        myNintendoStoreDropDowwn && <div className='my-nintendo-store-header-dropdown'>
                            <div className='my-nintendo-store-header-dropdown-title'>
                                <h5><FontAwesomeIcon icon={faStore} /> My Nintendo Store</h5>
                                <FontAwesomeIcon icon={faClose} className='menu-close-icon' onClick={() => setMyNintendoStoreDropDown(false)} />
                            </div>
                            <div className='my-nintendo-store-dropdown-box'>
                                {
                                    MyNintendoStoreDropDownData?.map((data, index) => (
                                        <div className='my-nintendo-store-dropdown-content' key={index}>
                                            <h5><FontAwesomeIcon icon={data?.icon} style={{ color: '#e60012' }} />&nbsp;&nbsp;{data?.title}</h5>
                                            {
                                                data?.listData?.map((data, index) => (
                                                    <div key={index}>
                                                        <Link to={`/my-nintendo-store/${data?.mainSlugs}/${data?.slugs}`} className='router-link' onClick={() => setMyNintendoStoreDropDown(false)}>
                                                            <small>{data?.listTitle}</small>
                                                        </Link>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                    <a href="#" className="header-link" onClick={() => { setGameDropDown(!gameDropDowwn); setMyNintendoStoreDropDown(false); setNintendoSwitchDropDown(false); setPlayNintendoDropDown(false) }}>
                        <FontAwesomeIcon icon={faPlusSquare} /> Games&nbsp;&nbsp; <FontAwesomeIcon icon={faGreaterThan} className='header-greater-than-icon' style={{ transform: gameDropDowwn ? 'rotate(90deg)' : 'none' }} />
                    </a>
                    {
                        gameDropDowwn && <div className='game-header-dropdown'>
                            <div className='game-header-dropdown-title'>
                                <FontAwesomeIcon icon={faClose} className='game-menu-close-icon' onClick={() => setGameDropDown(false)} />
                            </div>
                            <div className='game-dropdown-box'>
                                {
                                    gameDropdownData?.map((data, index) => (
                                        <div className='game-dropdown-content' key={index}>
                                            <button className='game-dropdown-btns'><FontAwesomeIcon icon={data?.icon} /></button><br />
                                            <p>{data?.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                    <a href="#" className="header-link" onClick={() => { setNintendoSwitchDropDown(!nintendoSwitchDropDowwn); setGameDropDown(false); setMyNintendoStoreDropDown(false); setPlayNintendoDropDown(false) }}>
                        <FontAwesomeIcon icon={faSwatchbook} /> Nintendo Switch&nbsp;&nbsp; <FontAwesomeIcon icon={faGreaterThan} className='header-greater-than-icon' style={{ transform: nintendoSwitchDropDowwn ? 'rotate(90deg)' : 'none' }} />
                    </a>
                    {
                        nintendoSwitchDropDowwn && <div className='game-header-dropdown'>
                            <div className='game-header-dropdown-title'>
                                <FontAwesomeIcon icon={faClose} className='game-menu-close-icon' onClick={() => setNintendoSwitchDropDown(false)} />
                            </div>
                            <div className='game-dropdown-box'>
                                {
                                    nintendoSwitchDropdownData?.map((data, index) => (
                                        <div className='game-dropdown-content' key={index}>
                                            <div className='switch-dropdown-img-div'>
                                                <img src={data?.img} className='switch-dropdown-img' alt='witch-dropdown-img' />
                                            </div><br />
                                            <p>{data?.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                    <Link to="/news-and-events" className="header-link">
                        <FontAwesomeIcon icon={faComment} /> News & Events
                    </Link>
                    <a href="#" className="header-link" onClick={() => { setPlayNintendoDropDown(!playNintendoDropDowwn); setMyNintendoStoreDropDown(false); setNintendoSwitchDropDown(false); setGameDropDown(false) }}>
                        <FontAwesomeIcon icon={faStar} /> Play Nintendo&nbsp;&nbsp; <FontAwesomeIcon icon={faGreaterThan} className='header-greater-than-icon' style={{ transform: playNintendoDropDowwn ? 'rotate(90deg)' : 'none' }}/>
                    </a>
                    {
                        playNintendoDropDowwn && <div className='game-header-dropdown'>
                            <div className='game-header-dropdown-title'>
                                <FontAwesomeIcon icon={faClose} className='game-menu-close-icon' onClick={() => setPlayNintendoDropDown(false)} />
                            </div>
                            <div className='game-dropdown-box'>
                                {
                                    playNintendoDropdownData?.map((data, index) => (
                                        <div className='game-dropdown-content' key={index}>
                                            <div className='switch-dropdown-img-div'>
                                                <img src={data?.img} className='switch-dropdown-img' alt='witch-dropdown-img' />
                                            </div><br />
                                            <p>{data?.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    }
                </div>
            </header>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h2>Login / Signup</h2>
                    <FontAwesomeIcon icon={faClose} onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
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
                    <Link to="/signup-option"><button className='sidebar-signup-btn'>Sign up</button></Link>
                    <button className='sidebar-orderstatus-btn'><FontAwesomeIcon icon={faReceipt} style={{ color: '#e60012' }} />&nbsp;&nbsp; Order status</button>
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
