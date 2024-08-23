import React, { useState } from 'react';
import '../../assets/css/homepagecss/featureSection.css';
import EmoFeatureImg from '../../assets/images/featureSection/Emio_Demo-Still.avif';
import NESEditionFeatureImg from '../../assets/images/featureSection/NESEdition.avif';
import BoxFeatureImg from '../../assets/images/featureSection/Box.avif';
import MissionRewardsFeatureImg from '../../assets/images/featureSection/Missions_Rewards-Icons.avif';
import LuingiMansionFeatureImg from '../../assets/images/featureSection/LuingiMansion2.avif';
import EAFCFeatureImg from '../../assets/images/featureSection/EA_FC25-GEN4.avif';
import CivilizationFeatureImg from '../../assets/images/featureSection/Civilizationvii.avif';
import StarWarsFeatureImg from '../../assets/images/featureSection/starWarsHunters.avif';
import ForniteFeatureImg from '../../assets/images/featureSection/Fortnite-BigBang-Keyart.avif';

const FeatureSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const featureData = [
        {
            featureImg: EmoFeatureImg,
            title: "Demo Updated: Play through Chapter 2!",
            spanContent: 'Free Demo',
            footerTitle: 'Nintendo Switch',
        },
        {
            featureImg: NESEditionFeatureImg,
            title: "Nintendo World Championships: NES™ Edition",
            spanContent: 'Available Now',
            footerTitle: 'Nintendo Switch',
        },
        {
            featureImg: BoxFeatureImg,
            title: "Nintendo Switch™ Lite: Hyrule Edition",
            spanContent: 'Pre-order Now',
            footerTitle: 'Hardware',
        },
        {
            featureImg: MissionRewardsFeatureImg,
            title: "Time to refresh your user icon?",
            spanContent: 'Learn more',
            footerTitle: 'Nintendo Switch',
        },
        {
            featureImg: LuingiMansionFeatureImg,
            title: "Luigi's Mansion 2 HD",
            spanContent: 'Available Now',
            footerTitle: 'Nintendo Switch',
        },
        {
            featureImg: EAFCFeatureImg,
            title: "EA SPORTS FC™ 25 gives you more ways to win for the club.",
            spanContent: 'Pre-order Now',
            footerTitle: 'Nintendo Switch',
        },
        {
            featureImg: CivilizationFeatureImg,
            title: "Sid Meier's Civilization® VII",
            spanContent: 'Pre-order Now',
            footerTitle: 'Nintendo Switch',
        },
        {
            featureImg: StarWarsFeatureImg,
            title: "Gear up for battle",
            spanContent: 'Available Now',
            footerTitle: 'Nintendo Switch',
        },
        {
            featureImg: ForniteFeatureImg,
            title: "The future of Fortnite is here.",
            spanContent: 'Free Download',
            footerTitle: 'Nintendo Switch',
        },
    ];

    const itemsPerSlide = 5;

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
            <h4>Featured</h4>
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
                            <p className='fw-bold mb-4'>{data?.title}</p>
                            <div className='feature-box-footer'>
                                <span className={`feature-box-span ${data?.spanContent === 'Available Now' ? 'bg-danger' : ''}`}>{data?.spanContent}</span><br />
                                <small><span className='fw-bold'>|</span> {data?.footerTitle}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureSection;
