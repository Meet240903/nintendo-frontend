import React, { useState } from 'react'
import '../../assets/css/newsEventDetailPageCSS/moreNewsSection.css'
import { Link } from 'react-router-dom';

const MoreNewsSection = ({ sectionData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSliding, setIsSliding] = useState(false);

    const itemsPerSlide = 5;

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
            <div className='more-news-section-main-div'>
                <h4>More News | <Link to='/news-and-events' style={{ textDecoration: 'none' }}><small style={{ fontSize: '18px', color: '#e60012' }}>See all</small></Link> </h4>
                <div className='slider-controls'>
                    {currentIndex > 0 && (
                        <button className='more-news-slider-control-leftbtn' onClick={prevSlide}>&lt;</button>
                    )}
                    {currentIndex + itemsPerSlide < sectionData.length && (
                        <button className='more-news-slider-control-rightbtn' onClick={nextSlide}>&gt;</button>
                    )}
                </div>
                <div className={`more-news-section-flex-box ${isSliding ? 'sliding' : ''}`}>
                    {sectionData.slice(currentIndex, currentIndex + itemsPerSlide).map((data, index) => (
                        <Link to={`/news-and-events-details/${data?.slugs}`} className='router-link'>
                            <div className='more-news-sections-box' key={index}>
                                <img src={data?.articleImg} className='img-fluid more-news-section-img' alt='more-news-sectiond-img' />
                                <div className='more-news-sections-box-content'>
                                    <p>{data?.date}</p>
                                    <p className='fw-bold mb-4'>{data?.newstitle}</p>
                                    <div className='more-news-section-box-footer'>
                                        <a href='#' className='more-news-read-more-link'>Read more</a>
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

export default MoreNewsSection
