import { faGreaterThan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import '../../assets/css/nintendoStoreGamePagecss/nintendoGameStoreSectionTwo.css'
import { Link } from 'react-router-dom'

const NintendoGameStoreSectionTwo = ({ sectionData, gameData, breadcrumpTitle,breadcrumpTitle2 }) => {
    const [activeFilterIndex, setActiveFilterIndex] = useState(null);

    const handleFilterClick = (index) => {
        if (activeFilterIndex === index) {
            // If the clicked filter is already active, collapse it
            setActiveFilterIndex(null);
        } else {
            // Otherwise, set the clicked filter as active
            setActiveFilterIndex(index);
        }
    };
    // Utility function to capitalize the first letter
    const capitalize = (str) => {
        if (typeof str !== 'string') return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    return (
        <>
            <div className='game-store-section-two-container'>
                <div className='game-store-section-two-breadcrump'>
                    <span>Home</span>
                    <span><FontAwesomeIcon icon={faGreaterThan} style={{ fontSize: 'smaller', color: 'lightgray' }} /></span>
                    <span>My Nintendo Store</span>
                    <span><FontAwesomeIcon icon={faGreaterThan} style={{ fontSize: 'smaller', color: 'lightgray' }} /></span>
                    <span>{capitalize(breadcrumpTitle2)}</span>
                    <span><FontAwesomeIcon icon={faGreaterThan} style={{ fontSize: 'smaller', color: 'lightgray' }} /></span>
                    <span className='fw-bold'>{breadcrumpTitle ? capitalize(breadcrumpTitle) : 'Shop all'}</span>
                </div>
                <div className='row mx-0 game-store-section-two-content' style={{ marginTop: '2rem' }}>
                    <div className='col-md-3 game-store-section-two-content-left'>
                        <div className='game-store-section-two-left-inner-div'>
                            {
                                sectionData?.defaultFilterData?.map((data, index) => (
                                    <div key={index} className='form-check my-3'>
                                        <input
                                            type='checkbox'
                                            className='form-check-input'
                                            id={`filter-checkbox-${index}`}
                                            value={data?.filterTitle}
                                        />
                                        <label
                                            className='form-check-label mx-3'
                                            htmlFor={`filter-checkbox-${index}`}
                                        >
                                            {data?.filterTitle}
                                        </label>
                                    </div>
                                ))
                            }
                            {
                                sectionData?.otherFilterData?.map((data, index) => (
                                    <div className='other-feature-div' key={index} onClick={() => handleFilterClick(index)}>
                                        <h6>{data?.filterTitle}</h6>
                                        {
                                            activeFilterIndex === index && (
                                                <div className='other-feature-content'>
                                                    {
                                                        data?.innerFilterData?.map((data, index) => (
                                                            <div className='form-check my-3'>
                                                                <input
                                                                    type='checkbox'
                                                                    className='form-check-input'
                                                                    id={`other-filter-checkbox-${index}-1`}
                                                                />
                                                                <label
                                                                    className='form-check-label mx-3'
                                                                    htmlFor={`other-filter-checkbox-${index}-1`}
                                                                >
                                                                    {data?.innerFilterTitle}
                                                                </label>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='col-md-9 game-store-section-two-content-right'>
                        {
                            gameData?.map((data, index) => (
                                <Link
                                    to={`/nintendo-game-detail/${data?.slugs}`}
                                    className='router-link'
                                    key={index}
                                >
                                    <div className='game-store-section-two-content-right-boxs'>
                                        <div className='game-store-two-div-box-img'>
                                            <img src={data?.sectionImg} className='fluid-img' alt='section-img' />
                                        </div>
                                        <div className='game-store-two-div-box-body'>
                                            <h6 className='fw-bold'>{data?.gameTitle}</h6>
                                            <p>{data?.date}</p>
                                            {data?.newLaunch && <span>Free Demo</span>}
                                            <p className='fw-bold'>{data?.price}</p>
                                            <small>| Nintendo Switch</small>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default NintendoGameStoreSectionTwo;
