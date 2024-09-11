import React, { useState } from 'react';
import '../../assets/css/kidsComponentscss/parentsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import parentsPageData from '../../data/kidsComponentsData/parentsPageData';
import ParentsPageRightSection from './ParentsPageRightSection';
import ParentsPageRightBottomSection from './ParentsPageRightBottomSection';

const ParentsPage = () => {
    const [selectedIndex, setSelectedIndex] = useState(0); // State to track selected index
    const [showGreaterIcon, setShowGreaterIcon] = useState(true)

    const handleSelectedData = (index) => {
        setSelectedIndex(index); // Update the selected index
        setShowGreaterIcon(true)
    };

    return (
        <>
            <div className='parents-home-page-section-container'>
                <div className='parents-home-page-section-title'>
                    <h1>For Parents</h1>
                </div>
            </div>
            <div className='parents-home-page-section-container-two'>
                <div className='row mx-0 parents-home-page-section-content'>
                    <div className='col-md-4 parents-home-page-section-content-left'>
                        {parentsPageData?.map((data, index) => (
                            <div
                                className='parents-home-page-section-content-left-list-box'
                                key={index}
                                onClick={() => handleSelectedData(index)}
                                style={{
                                    backgroundColor: selectedIndex === index && '#c1c1c1', // Apply different background for the selected item
                                    fontWeight: selectedIndex === index && 'bold'
                                }}
                            >
                                <p>{data?.listTitle}</p>
                                {
                                    showGreaterIcon && selectedIndex === index && <FontAwesomeIcon icon={faGreaterThan} className='parents-greater-than-icon' />
                                }
                                <div
                                    className='parents-content-left-side-span'
                                    style={{
                                        backgroundColor: data.spanBgColor,
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className='col-md-8 parents-home-page-section-content-right'>
                        <div className='parents-home-page-section-content-right-inner'>
                            <ParentsPageRightSection sectionData={parentsPageData[selectedIndex]} />
                        </div>
                        <ParentsPageRightBottomSection />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ParentsPage;
