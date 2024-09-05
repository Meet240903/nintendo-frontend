import React, { useState } from 'react'
import featureData from '../../../data/HomeFeatureData';
import { Link } from 'react-router-dom';
import '../../../assets/css/nintendoSwitchLineupPagecss/lineUpGetStartedSection.css'

const LineUpGetStartedSection = ({ hardwareData,controllerData,accessoriesData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);
    const [isSliding, setIsSliding] = useState(false);
    const [isSliding1, setIsSliding1] = useState(false);
    const [isSliding2, setIsSliding2] = useState(false);

    const itemsPerSlide = 5;

    const nextSlide = () => {
        if (currentIndex + itemsPerSlide < hardwareData.length && !isSliding) {
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

    const nextSlide1 = () => {
        if (currentIndex1 + itemsPerSlide < controllerData.length && !isSliding1) {
            setIsSliding1(true);
            setTimeout(() => {
                setCurrentIndex1(currentIndex1 + itemsPerSlide);
                setIsSliding1(false);
            }, 500);
        }
    };

    const prevSlide1 = () => {
        if (currentIndex1 - itemsPerSlide >= 0 && !isSliding1) {
            setIsSliding1(true);
            setTimeout(() => {
                setCurrentIndex1(currentIndex1 - itemsPerSlide);
                setIsSliding1(false);
            }, 500);
        }
    };
    const nextSlide2 = () => {
        if (currentIndex2 + itemsPerSlide < accessoriesData.length && !isSliding2) {
            setIsSliding2(true);
            setTimeout(() => {
                setCurrentIndex2(currentIndex2 + itemsPerSlide);
                setIsSliding2(false);
            }, 500);
        }
    };

    const prevSlide2 = () => {
        if (currentIndex2 - itemsPerSlide >= 0 && !isSliding2) {
            setIsSliding2(true);
            setTimeout(() => {
                setCurrentIndex2(currentIndex2 - itemsPerSlide);
                setIsSliding2(false);
            }, 500);
        }
    };
    return (
        <>
            <div className='nintendo-switch-lineup-getstarted-section-container'>
                <div className='nintendo-switch-lineup-getstarted-section-title'>
                    <h2>Get started with Nintendo Switch</h2>
                </div>
                {/* hardware data */}
                <div className='nintendo-switch-lineup-getstarted-section-title-two'>
                    <h4>Hardware</h4>
                    <p>Browse Nintendo Switch systems and bundles.</p>
                </div>
                <div className='slider-controls'>
                    {currentIndex > 0 && (
                        <button className='lineup-getstarted-section-slider-control-leftbtn' onClick={prevSlide}>&lt;</button>
                    )}
                    {currentIndex + itemsPerSlide < featureData.length && (
                        <button className='lineup-getstarted-section-slider-control-rightbtn' onClick={nextSlide}>&gt;</button>
                    )}
                </div>
                <div className={`lineup-getstarted-section-flex-box ${isSliding ? 'sliding' : ''}`}>
                    {hardwareData.slice(currentIndex, currentIndex + itemsPerSlide).map((data, index) => (
                        <Link to={`/game-details/${data?.slugs}`} className='router-link'>
                            <div className='lineup-getstarted-section-box' key={index}>
                                <div className='lineup-getstarted-section-box-img'>
                                    <img src={data?.sectionImg} className='img-fluid' alt='featured-img' />
                                </div>
                                <div className='lineup-getstarted-section-box-content'>
                                    <p className='fw-bold mb-1'>{data?.title}</p>
                                    <p>{data?.date}</p>
                                    <p className='fw-bold'>{data?.price}</p>
                                    <div className='lineup-getstarted-section-box-footer'>
                                        <small><span className='fw-bold'>|</span> Hardware</small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* controllers data */}
                <div className='nintendo-switch-lineup-getstarted-section-title-two'>
                    <h4>Controllers</h4>
                    <p>Get everyone in the game.</p>
                </div>
                <div className='slider-controls'>
                    {currentIndex1 > 0 && (
                        <button className='lineup-getstarted-section-slider-control-leftbtn1' onClick={prevSlide1}>&lt;</button>
                    )}
                    {currentIndex1 + itemsPerSlide < controllerData.length && (
                        <button className='lineup-getstarted-section-slider-control-rightbtn1' onClick={nextSlide1}>&gt;</button>
                    )}
                </div>
                <div className={`lineup-getstarted-section-flex-box ${isSliding1 ? 'sliding' : ''}`}>
                    {controllerData.slice(currentIndex1, currentIndex1 + itemsPerSlide).map((data, index) => (
                        <Link to={`/game-details/${data?.slugs}`} className='router-link'>
                            <div className='lineup-getstarted-section-box' key={index}>
                                <div className='lineup-getstarted-section-box-img'>
                                    <img src={data?.sectionImg} className='img-fluid' alt='featured-img' />
                                </div>
                                <div className='lineup-getstarted-section-box-content'>
                                    <p className='fw-bold mb-1'>{data?.title}</p>
                                    <p>{data?.date}</p>
                                    <p className='fw-bold'>{data?.price}</p>
                                    <div className='lineup-getstarted-section-box-footer'>
                                        <small><span className='fw-bold'>|</span> Hardware</small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* accessories data */}
                <div className='nintendo-switch-lineup-getstarted-section-title-two'>
                    <h4>Accessories</h4>
                    <p>Make it your own with handy add-ons.</p>
                </div>
                <div className='slider-controls'>
                    {currentIndex2 > 0 && (
                        <button className='lineup-getstarted-section-slider-control-leftbtn2' onClick={prevSlide2}>&lt;</button>
                    )}
                    {currentIndex2 + itemsPerSlide < accessoriesData.length && (
                        <button className='lineup-getstarted-section-slider-control-rightbtn2' onClick={nextSlide2}>&gt;</button>
                    )}
                </div>
                <div className={`lineup-getstarted-section-flex-box ${isSliding2 ? 'sliding' : ''}`}>
                    {accessoriesData.slice(currentIndex2, currentIndex2 + itemsPerSlide).map((data, index) => (
                        <Link to={`/game-details/${data?.slugs}`} className='router-link'>
                            <div className='lineup-getstarted-section-box' key={index}>
                                <div className='lineup-getstarted-section-box-img'>
                                    <img src={data?.sectionImg} className='img-fluid' alt='featured-img' />
                                </div>
                                <div className='lineup-getstarted-section-box-content'>
                                    <p className='fw-bold mb-1'>{data?.title}</p>
                                    <p>{data?.date}</p>
                                    <p className='fw-bold'>{data?.price}</p>
                                    <div className='lineup-getstarted-section-box-footer'>
                                        <small><span className='fw-bold'>|</span> Hardware</small>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default LineUpGetStartedSection
