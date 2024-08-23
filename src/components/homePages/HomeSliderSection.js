import React, { useState, useEffect } from 'react';
import '../../assets/css/homepagecss/slider.css'; // Ensure this CSS file exists for styling
import SliderImg1 from '../../assets/images/nm_desktop_bg.avif';
import SliderImg2 from '../../assets/images/ML_Brothership_Pre_Sale_bg.avif';
import SliderImg3 from '../../assets/images/SMP_Jamboree_Pre_Order_now_BG.avif';
import SliderImg4 from '../../assets/images/LOTZ_EOW_BG.avif';
import thumImg1 from '../../assets/images/Thumb-nm_v2.webp';
import thumImg2 from '../../assets/images/MLBrothership_PreOrder-THUMBNAIL.webp';
import thumImg3 from '../../assets/images/Thumb-LoZEoW_1.webp';
import thumImg4 from '../../assets/images/discover-THUMBNAIL.webp';
import nintendoMuseumSlideImg from '../../assets/images/museo-nintendo.webp';
import mlBrothershipSlideImg from '../../assets/images/mario-luigi-brothership.jpg';
import smpJumboreeSlideImg from '../../assets/images/super-mario-party-jamboree-cover.avif';
import theLegendOfZeldaSlideImg from '../../assets/images/TheLegendofZeldaEchoesOfWisdom.jpg';
import FadeComponent from '../FadeComponent';

const slidesData = [
    {
        Bgimage: SliderImg1,
        slideImg: nintendoMuseumSlideImg,
        alt: 'Slide 1',
        thumbImg: thumImg1,
        imgClassName: 'slider-img-1',
        sliderContent: 'Check out the presentation!',
    },
    {
        Bgimage: SliderImg2,
        slideImg: mlBrothershipSlideImg,
        thumbImg: thumImg2,
        alt: 'Slide 2',
        imgClassName: 'slider-img-2',
        sliderContent: 'Set sail on an all-new adventure with Mario and Luigi on 11/7—pre-order now!',
    },
    {
        Bgimage: SliderImg3,
        slideImg: smpJumboreeSlideImg,
        thumbImg: thumImg4,
        alt: 'Slide 3',
        imgClassName: 'slider-img-3',
        sliderContent: 'The party starts on 10/17—pre-order now!',
    },
    {
        Bgimage: SliderImg4,
        slideImg: theLegendOfZeldaSlideImg,
        thumbImg: thumImg3,
        alt: 'Slide 4',
        imgClassName: 'slider-img-4',
        sliderContent: 'Pre-order this brand-new adventure starring Princess Zelda—the legend begins 9/26!',
    },
];

const HomeSliderSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showSlide = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % slidesData.length;
            setCurrentIndex(nextIndex);
        }, 3000);

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [currentIndex]);

    return (
        <div className="slider-container">
            <div className="main-slide">
                {slidesData.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${slide.Bgimage})` }}
                    >
                        {/* Show slideImg only for the active slide */}
                        {index === currentIndex && slide?.slideImg && (
                            <img
                                src={slide?.slideImg}
                                alt={slide.alt}
                                className={slide?.imgClassName}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className='slider-content'>
                {slidesData.map((slide, index) => (
                    index === currentIndex && slide?.sliderContent && (
                        <FadeComponent duration={1000} delay={200} direction={'right'}>
                            <h4 key={index}>{slide?.sliderContent}</h4>
                        </FadeComponent>
                    )

                ))}
            </div>
            <div className="thumbnails">
                {slidesData.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.thumbImg}
                        alt={slide.alt}
                        className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => showSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomeSliderSection;
