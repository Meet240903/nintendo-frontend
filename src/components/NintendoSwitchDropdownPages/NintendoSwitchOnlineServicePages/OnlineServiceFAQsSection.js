import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../../../assets/css/nintendoSwitchOnlineServiceCSSpages/onlineServiceFAQsSection.css'

const OnlineServiceFAQsSection = ({ sectionData }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle FAQ section
    const toggleFAQ = (index) => {
        setActiveIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <>
            <hr />
            <div className='nintendo-switch-online-service-faqs-section-container'>
                <div className='nintendo-switch-online-service-faqs-section-title'>
                    <h4 className='my-3'>Frequently asked questions</h4>
                    <p className='my-4'>Here are some frequently asked questions (and answers!) about Nintendo Switch Online and Nintendo Switch Online + Expansion Pack.</p>
                </div>
                {
                    sectionData?.map((data, index) => (
                        <div className='online-service-faqs-section-content' key={index} onClick={() => toggleFAQ(index)}>
                            <div className='online-service-faqs-section-content-title'>
                                <h3>{data?.title}</h3>
                                <h2><FontAwesomeIcon icon={activeIndex === index ? faMinus : faPlus} /></h2>
                            </div>
                            <div className={`online-service-faqs-section-content-detail ${activeIndex === index ? 'show' : ''}`}>
                                {
                                    data?.contentData?.map((contentItem, i) => (
                                        <div key={i}>
                                            <p>{contentItem?.content}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default OnlineServiceFAQsSection;
