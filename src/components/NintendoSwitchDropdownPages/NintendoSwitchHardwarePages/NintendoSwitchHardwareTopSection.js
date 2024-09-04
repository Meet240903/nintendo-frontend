import React from 'react'
import '../../../assets/css/nintendoSwitchAccessoriesCSS/nintendoSwitchHardwareTopSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NintendoSwitchHardwareTopSection = ({ sectionData }) => {
    return (
        <>
            <div className='nitendo-switch-hardware-top-section-container'>
                <div className='nitendo-switch-hardware-top-section-img'>
                    <img src={sectionData?.topSectionImg} className='img-fluid' alt='nintendo-switch-accessories-top-img' />
                </div>
                <div className='row mx-0 nitendo-switch-hardware-top-section-content'>
                    <div className='col-md-6 nitendo-switch-hardware-top-section-content-left'>
                        <h2><FontAwesomeIcon icon={faGamepad} />&nbsp;&nbsp; {sectionData?.topSectionTwo?.title}</h2>
                        <p>{sectionData?.topSectionTwo?.content}</p>
                    </div>
                    <div className='col-md-6 nitendo-switch-hardware-top-section-content-right'>
                        {
                            sectionData?.topSectionTwo?.buttonData?.map((data, index) => (
                                <Link to={`/my-nintendo-store/${data?.mainSlug}/${data?.slugs}`}>
                                    <div key={index}>
                                        <button className='nitendo-switch-hardware-btn'>{data?.title}</button>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default NintendoSwitchHardwareTopSection
