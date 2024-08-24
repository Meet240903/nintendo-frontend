import React, { useState } from 'react'
import '../../assets/css/homepagecss/recentlyViewedSection.css'
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

const RecentlyViewedSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const recentlyviewedData = [
        {
            recentlyviewedImg: NESImg,
            title: "Nintendo World Championships: NES™ Edition",
            footerTitle: 'Nintendo Switch',
            date: '7/20/24',
            price: '$9.99'
        },
        {
            recentlyviewedImg: LuingiMansionImg,
            title: "Luigi's Mansion 2 HD",
            footerTitle: 'Nintendo Switch',
            date: '9/02/24',
            price: '$39.99'
        },
        // {
        //     recentlyviewedImg: DoomImg,
        //     title: "DOOM + DOOM II",
        //     footerTitle: 'Nintendo Switch',
        //     date: '8/22/24',
        //     price: '$0.00'
        // },
        // {
        //     recentlyviewedImg: SportsImg,
        //     title: "Nintendo Switch™ Sports",
        //     footerTitle: 'Nintendo Switch',
        //     date: '8/22/24',
        //     price: '$39.99'
        // },
        // {
        //     recentlyviewedImg: OvercookedImg,
        //     title: "Overcooked! 2",
        //     footerTitle: 'Hardware',
        //     date: '8/22/24',
        //     price: '$29.99'
        // },
        // {
        //     recentlyviewedImg: MinecraftImg,
        //     title: "Minecraft",
        //     footerTitle: 'Nintendo Switch',
        //     date: '8/22/24',
        //     price: '$7.88'
        // },
        // {
        //     recentlyviewedImg: StarvelleyImg,
        //     title: "Stardew Valley",
        //     footerTitle: 'Nintendo Switch',
        //     date: '8/22/24',
        //     price: '$10'
        // },
        // {
        //     recentlyviewedImg: nbaImg,
        //     title: "NBA 2K24 Kobe Bryant Edition",
        //     footerTitle: 'Nintendo Switch',
        //     date: '8/02/24',
        //     price: '$9.99'
        // },
        // {
        //     recentlyviewedImg: happinessParedImg,
        //     title: "HELLO KITTY AND FRIENDS HAPPINESS PARADE",
        //     footerTitle: 'Nintendo Switch',
        //     date: '8/22/24',
        //     price: '$19.99'
        // },
        // {
        //     recentlyviewedImg: Mariokart8Img,
        //     title: "Mario Kart™ 8 Deluxe",
        //     footerTitle: 'Nintendo Switch',
        //     date: '8/20/22',
        //     price: '$49.99'
        // },
        // {
        //     recentlyviewedImg: marioSonicImg,
        //     title: "Mario & Sonic at the Olympic Games Tokyo 2020",
        //     footerTitle: 'Nintendo Switch',
        //     date: '7/22/21',
        //     price: '$9.99'
        // },
        // {
        //     recentlyviewedImg: thankyougoddessImg,
        //     title: "Thank Goodness You're Here!",
        //     footerTitle: 'Nintendo Switch',
        //     date: '8/02/24',
        //     price: '$2.99'
        // },
    ];

    const itemsPerSlide = 4;

    const nextSlide = () => {
        if (currentIndex + itemsPerSlide < recentlyviewedData.length && !isSliding) {
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
        <div className='recentlyviewed-main-div'>
                <h4>Recently viewed </h4>
                <div className='slider-controls'>
                    {currentIndex > 0 && (
                        <button className='slider-control-leftbtn' onClick={prevSlide}>&lt;</button>
                    )}
                    {currentIndex + itemsPerSlide < recentlyviewedData.length && (
                        <button className='slider-control-rightbtn' onClick={nextSlide}>&gt;</button>
                    )}
                </div>
                <div className={`recentlyviewed-flex-box ${isSliding ? 'sliding' : ''}`}>
                    {recentlyviewedData.slice(currentIndex, currentIndex + itemsPerSlide).map((data, index) => (
                        <div className='recentlyvieweds-box' key={index}>
                            <img src={data?.recentlyviewedImg} className='img-fluid recentlyviewed-img' alt='recentlyviewedd-img' />
                            <div className='recentlyvieweds-box-content'>
                                <p className='fw-bold'>{data?.title}</p>
                                <p>{data?.date}</p>
                                <div className='recentlyviewed-box-footer'>
                                    {
                                        data?.price === '$0.00'
                                            ? <span className='recentlyviewed-box-span'>Free Download</span>
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

export default RecentlyViewedSection
