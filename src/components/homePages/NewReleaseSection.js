import React, { useState } from 'react'
import '../../assets/css/homepagecss/newReleaseSection.css'
import DoomImg from '../../assets/images/bestSellerSection/doom.avif';
import SportsImg from '../../assets/images/bestSellerSection/sports.avif';
import OvercookedImg from '../../assets/images/bestSellerSection/overcooked.avif';
import MinecraftImg from '../../assets/images/bestSellerSection/minecraft.avif';
import StarvelleyImg from '../../assets/images/bestSellerSection/stardevValley.avif';
import nbaImg from '../../assets/images/bestSellerSection/nba2k24.avif';
import happinessParedImg from '../../assets/images/bestSellerSection/happinessPared.avif';
import Mariokart8Img from '../../assets/images/bestSellerSection/mariokart8.avif';
import marioSonicImg from '../../assets/images/bestSellerSection/marioSonic.avif';
import thankyougoddessImg from '../../assets/images/bestSellerSection/thankyougoddess.avif';
import NESImg from '../../assets/images/newReleaseSection/NESEdition.avif';
import LuingiMansionImg from '../../assets/images/newReleaseSection/LuingiMansion2.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const NewReleaseSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const newreleaseData = [
        {
            newreleaseImg: NESImg,
            title: "Nintendo World Championships: NES™ Edition",
            footerTitle: 'Nintendo Switch',
            date: '7/20/24',
            price: '$9.99'
        },
        {
            newreleaseImg: LuingiMansionImg,
            title: "Luigi's Mansion 2 HD",
            footerTitle: 'Nintendo Switch',
            date: '9/02/24',
            price: '$39.99'
        },
        {
            newreleaseImg: DoomImg,
            title: "DOOM + DOOM II",
            footerTitle: 'Nintendo Switch',
            date: '8/22/24',
            price: '$0.00'
        },
        {
            newreleaseImg: SportsImg,
            title: "Nintendo Switch™ Sports",
            footerTitle: 'Nintendo Switch',
            date: '8/22/24',
            price: '$39.99'
        },
        {
            newreleaseImg: OvercookedImg,
            title: "Overcooked! 2",
            footerTitle: 'Hardware',
            date: '8/22/24',
            price: '$29.99'
        },
        {
            newreleaseImg: MinecraftImg,
            title: "Minecraft",
            footerTitle: 'Nintendo Switch',
            date: '8/22/24',
            price: '$7.88'
        },
        {
            newreleaseImg: StarvelleyImg,
            title: "Stardew Valley",
            footerTitle: 'Nintendo Switch',
            date: '8/22/24',
            price: '$10'
        },
        {
            newreleaseImg: nbaImg,
            title: "NBA 2K24 Kobe Bryant Edition",
            footerTitle: 'Nintendo Switch',
            date: '8/02/24',
            price: '$9.99'
        },
        {
            newreleaseImg: happinessParedImg,
            title: "HELLO KITTY AND FRIENDS HAPPINESS PARADE",
            footerTitle: 'Nintendo Switch',
            date: '8/22/24',
            price: '$19.99'
        },
        {
            newreleaseImg: Mariokart8Img,
            title: "Mario Kart™ 8 Deluxe",
            footerTitle: 'Nintendo Switch',
            date: '8/20/22',
            price: '$49.99'
        },
        {
            newreleaseImg: marioSonicImg,
            title: "Mario & Sonic at the Olympic Games Tokyo 2020",
            footerTitle: 'Nintendo Switch',
            date: '7/22/21',
            price: '$9.99'
        },
        {
            newreleaseImg: thankyougoddessImg,
            title: "Thank Goodness You're Here!",
            footerTitle: 'Nintendo Switch',
            date: '8/02/24',
            price: '$2.99'
        },
    ];

    const itemsPerSlide = 4;

    const nextSlide = () => {
        if (currentIndex + itemsPerSlide < newreleaseData.length && !isSliding) {
            setIsSliding(true);
            setTimeout(() => {
                setCurrentIndex(currentIndex + itemsPerSlide);
                setIsSliding(false);
            }, 500);
        }
    };

    const prevSlide = () => {
        if (currentIndex - itemsPerSlide >= 0 && !isSliding) {
            setIsSliding(true);
            setTimeout(() => {
                setCurrentIndex(currentIndex - itemsPerSlide);
                setIsSliding(false);
            }, 500);
        }
    };
    return (
        <>
            <div className='newrelease-main-div'>
                <h4>Digital new releases | <small style={{ fontSize: '18px', color: '#e60012' }}>see full list</small> </h4>
                <div className='slider-controls'>
                    {currentIndex > 0 && (
                        <button className='slider-control-leftbtn' onClick={prevSlide}>&lt;</button>
                    )}
                    {currentIndex + itemsPerSlide < newreleaseData.length && (
                        <button className='slider-control-rightbtn' onClick={nextSlide}>&gt;</button>
                    )}
                </div>
                <div className={`newrelease-flex-box ${isSliding ? 'sliding' : ''}`}>
                    {newreleaseData.slice(currentIndex, currentIndex + itemsPerSlide).map((data, index) => (
                        <div className='newreleases-box' key={index}>
                            <img src={data?.newreleaseImg} className='img-fluid newrelease-img' alt='newreleased-img' />
                            <div className='newreleases-box-content'>
                                <p className='fw-bold'>{data?.title}</p>
                                <p>{data?.date}</p>
                                <div className='newrelease-box-footer'>
                                    {
                                        data?.price === '$0.00'
                                            ? <span className='newrelease-box-span'>Free Download</span>
                                            : null
                                    }
                                    <br />
                                    <span className='fw-bold'>{data?.price}</span><br />
                                    <small><span className='fw-bold'>|</span> {data?.footerTitle}</small>
                                    <FontAwesomeIcon icon={faHeart} className='heart-icon' />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewReleaseSection
