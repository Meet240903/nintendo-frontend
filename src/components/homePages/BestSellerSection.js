import React, { useState } from 'react';
import '../../assets/css/homepagecss/featureSection.css';
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
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BestSellerSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const featureData = [
        {
            featureImg: DoomImg,
            title: "DOOM + DOOM II",
            footerTitle: 'Nintendo Switch',
            date: '8/22/24',
            price: '$9.99'
        },
        {
            featureImg: SportsImg,
            title: "Nintendo Switch™ Sports",
            footerTitle: 'Nintendo Switch',
            date: '8/22/24',
            price: '$39.99'
        },
        {
            featureImg: OvercookedImg,
            title: "Overcooked! 2",
            footerTitle: 'Hardware',
            date: '8/22/24',
            price: '$29.99'
        },
        {
            featureImg: MinecraftImg,
            title: "Minecraft",
            footerTitle: 'Nintendo Switch',
            date: '8/22/24',
            price: '$7.88'
        },
        {
            featureImg: StarvelleyImg,
            title: "Stardew Valley",
            footerTitle: 'Nintendo Switch',
            date: '8/22/24',
            price: '$10'
        },
        {
            featureImg: nbaImg,
            title: "NBA 2K24 Kobe Bryant Edition",
            footerTitle: 'Nintendo Switch',
            date: '8/02/24',
            price: '$9.99'
        },
        {
            featureImg: happinessParedImg,
            title: "HELLO KITTY AND FRIENDS HAPPINESS PARADE",
            footerTitle: 'Nintendo Switch',
            date: '8/22/24',
            price: '$19.99'
        },
        {
            featureImg: Mariokart8Img,
            title: "Mario Kart™ 8 Deluxe",
            footerTitle: 'Nintendo Switch',
            date: '8/20/22',
            price: '$49.99'
        },
        {
            featureImg: marioSonicImg,
            title: "Mario & Sonic at the Olympic Games Tokyo 2020",
            footerTitle: 'Nintendo Switch',
            date: '7/22/21',
            price: '$9.99'
        },
        {
            featureImg: thankyougoddessImg,
            title: "Thank Goodness You're Here!",
            footerTitle: 'Nintendo Switch',
            date: '8/02/24',
            price: '$2.99'
        },
    ];

    const itemsPerSlide = 4;

    const nextSlide = () => {
        if (currentIndex + itemsPerSlide < featureData.length && !isSliding) {
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
        <div className='feature-main-div'>
            <h4>Digital best sellers | <small style={{fontSize:'18px',color:'#e60012'}}>see full list</small> </h4>
            <div className='slider-controls'>
                {currentIndex > 0 && (
                    <button className='slider-control-leftbtn' onClick={prevSlide}>&lt;</button>
                )}
                {currentIndex + itemsPerSlide < featureData.length && (
                    <button className='slider-control-rightbtn' onClick={nextSlide}>&gt;</button>
                )}
            </div>
            <div className={`feature-flex-box ${isSliding ? 'sliding' : ''}`}>
                {featureData.slice(currentIndex, currentIndex + itemsPerSlide).map((data, index) => (
                    <div className='features-box' key={index}>
                        <img src={data?.featureImg} className='img-fluid feature-img' alt='featured-img' />
                        <div className='features-box-content'>
                            <p className='fw-bold'>{data?.title}</p>
                            <p>{data?.date}</p>
                            <div className='feature-box-footer'>
                                <span className='fw-bold'>{data?.price}</span><br/>
                                <small><span className='fw-bold'>|</span> {data?.footerTitle}</small>
                                <FontAwesomeIcon icon={faHeart} className='heart-icon' />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BestSellerSection;
