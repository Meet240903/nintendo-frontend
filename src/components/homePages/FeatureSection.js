import React, { useState } from 'react';
import '../../assets/css/homepagecss/featureSection.css';
import featureData from '../../data/HomeFeatureData';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);


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
                    <Link to={`/game-details/${data?.slugs}`} className='router-link'>
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
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default FeatureSection;
