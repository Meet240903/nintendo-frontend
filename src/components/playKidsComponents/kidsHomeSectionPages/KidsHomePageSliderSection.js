import React, { useState } from 'react';
import '../../../assets/css/kidsComponentscss/kidsHomePagesectioncss/kidsHomePageSliderSection.css';
import sectionImg1 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg1.png'
import sectionImg2 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg2.png'
import sectionImg3 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg3.png'
import sectionImg4 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg4.png'
import sectionImg5 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg5.png'
import sectionImg6 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg6.png'
import sectionImg7 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg7.png'
import sectionImg8 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg8.png'
import sectionImg9 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg9.png'
import sectionImg10 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg10.png'
import sectionImg11 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg11.png'
import sectionImg12 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg12.png'

const KidsHomePageSliderSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'Play',
            description: 'Make custom creations and play character match-ups.',
            color: '#ee0500',
            fontColor: '#fff',
            icon: sectionImg1,
        },
        {
            title: 'Personality Quizzes',
            description: 'Discover something new about yourself.',
            fontColor: '#000',
            color: '#00d2ff',
            icon: sectionImg2,
        },
        {
            title: 'Skill Quizzes',
            description: 'Put your trivia skills to the test.',
            color: '#1ddb81',
            fontColor: '#000',
            icon: sectionImg3,
        },
        {
            title: 'Memory Match-up',
            description: 'Flip cards to make matching pairs.',
            color: '#b42ff5',
            fontColor: '#fff',
            icon: sectionImg4,
        },
        {
            title: 'Paint-by-number',
            description: 'Fill in a picture by matching numbers to colors.',
            color: '#ee0500',
            fontColor: '#fff',
            icon: sectionImg5,
        },
        {
            title: 'Puzzles',
            description: 'Put together puzzles and try to beat your best time.',
            color: '#00d2ff',
            fontColor: '#000',
            icon: sectionImg6,
        },
        {
            title: 'Opinion Polls',
            description: 'We ask the questions, you choose the answers.',
            color: '#1ddb81',
            fontColor: '#000',
            icon: sectionImg7,
        },
        {
            title: 'Videos',
            description: 'Watch game trailers and other videos.',
            color: '#b42ff5',
            fontColor: '#fff',
            icon: sectionImg8,
        },
        {
            title: 'Pics',
            description: 'Click through photos, screenshots, and galleries.',
            color: '#ee0500',
            fontColor: '#fff',
            icon: sectionImg9,
        },
        {
            title: 'Wallpapers',
            description: 'Download wallpapers for your computer or smart device.',
            color: '#00d2ff',
            fontColor: '#000',
            icon: sectionImg10,
        },
        {
            title: 'Cards',
            description: 'Celebrate special days with clever cards.',
            color: '#1ddb81',
            fontColor: '#000',
            icon: sectionImg11,
        },
        {
            title: 'Crafts',
            description: 'Create crafty projects using everyday items.',
            color: '#b42ff5',
            fontColor: '#fff',
            icon: sectionImg12,
        },
        {
            title: 'Print and Play',
            description: 'Print out games and activities to play later.',
            color: '#ee0500',
            fontColor: '#fff',
            icon: sectionImg12,
        },
    ];

    const totalSlides = slides.length;
    const slidesPerView = 3; // Show 3 slides at a time

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide((prevSlide) => prevSlide - slidesPerView);
        }
    };

    const handleNext = () => {
        if (currentSlide + slidesPerView < totalSlides) {
            setCurrentSlide((prevSlide) => prevSlide + slidesPerView);
        }
    };

    return (
        <div className="kids-home-page-slider-section-container">
            <div className='kids-home-page-slider-section-title'>
                <h2>You can find lots of fun stuff right here!</h2>
            </div>
            <div className='kids-home-page-slider-section-container-flex'>
                <div
                    className={`kids-home-page-slider-section-slider-arrow kids-home-page-slider-section-left-arrow ${
                        currentSlide === 0 ? 'd-none' : ''
                    }`}
                    onClick={handlePrev}
                >
                    <span>⬅️</span>
                </div>
                <div className="kids-home-page-slider-section-slider-content">
                    {slides.slice(currentSlide, currentSlide + slidesPerView).map((slide, index) => (
                        <div
                            className="kids-home-page-slider-section-slide"
                            key={index}
                            style={{ backgroundColor: slide.color, color: slide.fontColor }}
                        >
                            <div className="kids-home-page-slider-section-icon">
                                <img src={slide?.icon} alt='slider-icon' />
                            </div>
                            <h2>{slide.title}</h2>
                            <p>{slide.description}</p>
                        </div>
                    ))}
                </div>
                <div
                    className={`kids-home-page-slider-section-slider-arrow kids-home-page-slider-section-right-arrow ${
                        currentSlide + slidesPerView >= totalSlides ? 'd-none' : ''
                    }`}
                    onClick={handleNext}
                >
                    <span>➡️</span>
                </div>
            </div>
        </div>
    );
};

export default KidsHomePageSliderSection;
