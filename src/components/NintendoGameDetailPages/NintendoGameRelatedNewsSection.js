import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/gameDetailPagecss/gameDetailRelatedNewsSection.css'

const NintendoGameRelatedNewsSection = ({ sectionData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const itemsPerSlide = 4;

    const nextSlide = () => {
        if (currentIndex + itemsPerSlide < sectionData.length && !isSliding) {
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
            <div className='game-detail-related-news-section-main-div'>
                <h4>Related news and events</h4>
                <div className='slider-controls'>
                    {currentIndex > 0 && (
                        <button className='more-news-slider-control-leftbtn' onClick={prevSlide}>&lt;</button>
                    )}
                    {currentIndex + itemsPerSlide < sectionData.length && (
                        <button className='more-news-slider-control-rightbtn' onClick={nextSlide}>&gt;</button>
                    )}
                </div>
                <div className={`game-detail-related-news-section-flex-box ${isSliding ? 'sliding' : ''}`}>
                    {sectionData.slice(currentIndex, currentIndex + itemsPerSlide).map((data, index) => (
                            <div className='game-detail-related-news-sections-box' key={index}>
                                <img src={data?.sectionImg} className='img-fluid game-detail-related-news-section-img' alt='game-detail-related-news-sectiond-img' />
                                <div className='game-detail-related-news-sections-box-content'>
                                    <p>{data?.date}</p>
                                    <p className='fw-bold mb-4'>{data?.newsTitle}</p>
                                    <div className='game-detail-related-news-section-box-footer'>
                                        <a href='#' className='more-news-read-more-link'>Read more</a>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NintendoGameRelatedNewsSection
