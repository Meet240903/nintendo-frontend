import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircle, faDownload, faHeart, faArrowLeft, faArrowRight, faCartFlatbed, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const NintendoGameTopSection = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [digital, setDigital] = useState(true)

    const handleThumbnailClick = (index) => {
        setCurrentSlide(index);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.sliderimgs.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === data.sliderimgs.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <>
            <div className='game-detail-top-section-container'>
                <div className='row game-detail-top-section-content'>
                    <div className='col-md-6 game-detail-top-left-content'>
                        <div className='game-detail-top-slider-container'>
                            <div className='game-detail-top-slider'>
                                {data?.sliderimgs.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`game-detail-top-slide ${index === currentSlide ? 'active' : ''}`}
                                    >
                                        <img src={img?.sliderImg} className='game-detail-top-slider-img' alt='img' />
                                    </div>
                                ))}
                            </div>
                            <div className='slider-arrows'>
                                <FontAwesomeIcon icon={faArrowLeft} className='arrow left-arrow' onClick={handlePrevSlide} />
                                <FontAwesomeIcon icon={faArrowRight} className='arrow right-arrow' onClick={handleNextSlide} />
                            </div>
                            <div className='game-detail-top-thumbnails'>
                                {data?.sliderimgs.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`game-detail-top-thumbnail ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => handleThumbnailClick(index)}
                                        style={{ backgroundImage: `url(${img.sliderImg})` }}
                                    ></div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 game-detail-top-right-content'>
                        <small>|&nbsp;&nbsp; Nintendo Switch</small>
                        <h2 className='my-3'>{data?.detailTitle}</h2>
                        <small>Select a product</small>
                        <div className='row mx-0 my-3 product-selection-div' onClick={()=>setDigital(true)}>
                            <div className='col-md-2 product-selection-left'>
                                {/* <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#e60012' }} /> */}
                                <FontAwesomeIcon icon={digital ? faCircleCheck : faCircle} style={digital ? { color: '#e60012' } : {color: '#fff'}} />
                            </div>
                            <div className='col-md-8 product-selection-middle'>
                                <h6>Digital</h6>
                                <small>{data?.detailTitle}</small>
                            </div>
                            <div className='col-md-2 product-selection-right'>
                                <p>{data?.price}</p>
                            </div>
                        </div>
                        <div className='row mx-0 my-3 product-selection-div' onClick={()=>setDigital(false)}>
                            <div className='col-md-2 product-selection-left'>
                            <FontAwesomeIcon icon={digital ? faCircle : faCircleCheck} style={digital ? { color: '#fff' } : {color: '#e60012'}} />
                            </div>
                            <div className='col-md-8 product-selection-middle'>
                                <h6>Physical</h6>
                                <small>{data?.detailTitle}</small>
                            </div>
                            <div className='col-md-2 product-selection-right'>
                                <p>{data?.price}</p>
                            </div>
                        </div>
                        <div className='game-detail-price-section my-4'>
                            <h2>{data?.price}</h2>
                            <FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} />
                        </div>
                        <div className='game-detail-btn'>
                            {
                                digital ? (
                                    <button className='game-detail-download-btn'><FontAwesomeIcon icon={faDownload} />&nbsp;&nbsp; Direct download</button>
                                ) : (
                                    <button className='game-detail-download-btn'><FontAwesomeIcon icon={faCartArrowDown} />&nbsp;&nbsp; Add to cart</button>
                                )
                            }
                        </div>
                        {
                            !digital && <small>This item will be shipped to your address.</small>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NintendoGameTopSection
