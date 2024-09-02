import React from 'react';
import '../../assets/css/nintendoStoreHardwarePageCSS/nintendoHardwareStoreTopSection.css';

const NintendoHardwareTopSection = ({ sectionData }) => {
    return (
        <div
            className='nintendo-store-hardware-top-section-container'
            style={{
                backgroundColor: sectionData?.topSectionBgColor || 'none',
                backgroundImage: sectionData?.topSectionBgImg
                    ? `url(${sectionData.topSectionBgImg})`
                    : 'none',
                backgroundSize: 'cover', // Ensures the image covers the whole div
                backgroundPosition: 'center', // Centers the image in the div
                backgroundRepeat: 'no-repeat' // Prevents the image from repeating
            }}
        >
            <div className='row m-0 store-hardware-top-section-content'>
                {sectionData?.topSectionContent && (
                    <div className='col-md-6 store-hardware-top-section-left'>
                        <h2>{sectionData?.listTitle}</h2>
                        <p>{sectionData?.topSectionContent}</p>
                    </div>
                )}
                <div
                    className={`store-hardware-top-section-right ${sectionData?.topSectionContent ? 'col-md-6' : 'col-md-12'
                        }`}
                >
                    <img
                        src={sectionData?.topSectionImg}
                        className='img-fluid hardware-top-section-img'
                        alt='top-section-img'
                    />
                </div>
            </div>
        </div>
    );
};

export default NintendoHardwareTopSection;
