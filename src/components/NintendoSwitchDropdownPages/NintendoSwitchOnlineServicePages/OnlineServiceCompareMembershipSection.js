import React, { useState } from 'react'
import '../../../assets/css/nintendoSwitchOnlineServiceCSSpages/onlineServiceCompareMembershipSection.css'
import sectionImg4 from '../../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionImg4.avif'
import sectionImg5 from '../../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionImg5.avif'
import sectionRowImg1 from '../../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const OnlineServiceCompareMembershipSection = ({ sectionData }) => {
    const [isIndividual, setIsIndividual] = useState(false);

    const handleToggle = () => {
        setIsIndividual((prev) => !prev);
    };
    return (
        <>
            <div className='nintendo-switch-online-service-compare-mambership-section-container'>
                <div className='nintendo-switch-online-service-compare-mambership-section-title'>
                    <h5>Compare membership plans</h5>
                    <p>Wondering which Nintendo Switch Online membership you should purchase? See what each plan offers and decide which one fits you best.</p>
                    <p>Don’t forget—you can team up with seven other people with a Family Membership! Each of you can enjoy all the benefits of a Nintendo Switch Online + Expansion Pack for only about $10 per person a year—share the fun and share the savings!</p>
                </div>
                <div className='row mx-0 online-service-compare-mambership-section-table-header'>
                    <div className='col-md-6 online-service-compare-mambership-section-table-header-left'>
                        <h5>Membership type</h5>
                        <div className='pricing-toggle'>
                            <span className={`pricing-label ${!isIndividual ? 'active' : ''}`}>Individual</span>
                            <div className='switch' onClick={handleToggle}>
                                <div className={`toggle ${isIndividual ? 'on' : 'off'}`}></div>
                            </div>
                            <span className={`pricing-label ${isIndividual ? 'active' : ''}`}>Family</span>
                        </div>
                    </div>
                    <div className='col-6 col-md-3 online-service-compare-mambership-section-table-header-middle'>
                        <h5>Nintendo Switch Online</h5>
                        <button>
                            {isIndividual ? '$34.99 USD / year' : '$19.99 USD / year'}
                        </button>
                    </div>
                    <div className='col-6 col-md-3 online-service-compare-mambership-section-table-header-right'>
                        <h5>Nintendo Switch Online + Expansion Pack</h5>
                        <button>
                            {isIndividual ? '$79.99 USD / year' : '$49.99 USD / year'}
                        </button>
                    </div>
                </div>
                {
                    sectionData?.map((data, index) => (
                        <div className='row mx-0 online-service-compare-mambership-section-table-first-row' key={index}>
                            <div className='col-12 col-md-6 online-service-compare-mambership-section-table-first-row-left'>
                                <img src={data?.sectionImg} className='img-fluid' alt='row-img' />
                                <div className='online-service-compare-mambership-section-table-first-row-left-content'>
                                    <h4>{data?.title}</h4>
                                    <p className='m-0'>{data?.content}</p>
                                </div>
                            </div>
                            <div className='col-6 col-md-3 online-service-compare-mambership-section-table-first-row-middle'>
                                <h2>
                                    {isIndividual ? data?.familyValue : data?.individualValue}
                                    <FontAwesomeIcon icon={data?.fontIconMiddleCol}
                                        style={{ color: data?.fontIconMiddleColor ? data.fontIconMiddleColor : '#e60012' }} />
                                </h2>
                            </div>
                            <div className='col-6 col-md-3 online-service-compare-mambership-section-table-first-row-right'>
                                <h2>
                                    {isIndividual ? data?.familyValue : data?.individualValue}
                                    <FontAwesomeIcon icon={data?.fontIconRightCol} style={{ color: '#e60012' }} />
                                </h2>
                            </div>
                        </div>
                    ))
                }
                <div className='row mx-0 online-service-compare-mambership-section-table-bottom-row'>
                    <div className='col-12 col-md-6 online-service-compare-mambership-section-table-bottom-row-left'>
                        <p>Watch these videos to learn more about the features included in each membership option.</p>
                    </div>
                    <div className='col-6 col-md-3 online-service-compare-mambership-section-table-bottom-row-middle'>
                        <img src={sectionImg4} className='img-fluid' alt='img' />
                    </div>
                    <div className='col-6 col-md-3 online-service-compare-mambership-section-table-bottom-row-right'>
                        <img src={sectionImg5} className='img-fluid' alt='img' />
                    </div>
                </div>
                <div className='nintendo-switch-online-service-compare-mambership-section-two-container'>
                    <div className='online-service-compare-mambership-section-two-img'>
                        <img src={sectionRowImg1} className='img-fluid' alt='online-nintendo' />
                    </div>
                    <div className='online-service-compare-mambership-section-two-middle'>
                        <h5>Try Nintendo Switch Online for free!</h5>
                        <p>Want to try before you buy? Test out a Nintendo Switch Online membership with a free 7-day trial.</p>
                    </div>
                    <div className='online-service-compare-mambership-section-two-right'>
                        <button>Get started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnlineServiceCompareMembershipSection
