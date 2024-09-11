import React from 'react'
import '../../assets/css/kidsComponentscss/parentsPageRightSection.css'
import borderImg from '../../assets/images/kidsComponentsImgs/parentsPageImgs/borderImg.png'
import { Link } from 'react-router-dom'

const ParentsPageRightSection = ({ sectionData }) => {
    return (
        <>
            {
                sectionData?.rightSectionData?.mainSectionImg && <div className='parents-home-page-section-content-right-img'>
                    <img src={sectionData?.rightSectionData?.mainSectionImg} className='img-fluid' alt='parent-img' />
                </div>
            }
            <h1 className='my-5'>{sectionData?.rightSectionData?.mainTitle}</h1>
            <p>{sectionData?.rightSectionData?.mainContent}</p>
            <img src={borderImg} className='img-fluid' alt='border-img' />
            {
                sectionData?.rightSectionData?.mainSectionImg2 &&
                <>
                    <div className='parents-home-page-section-content-right-img'>
                        <img src={sectionData?.rightSectionData?.mainSectionImg2} className='img-fluid' alt='parent-img' />
                    </div>
                    <div className='parents-home-page-section-content-right-game-finder-link'>
                        <Link to={`/my-nintendo-store/${sectionData?.rightSectionData?.slug1}/${sectionData?.rightSectionData?.slug2}`}>
                            <h2>See all Nintendo Switch games at My Nintendo Store</h2>
                        </Link>
                    </div>
                </>
            }
            {
                sectionData?.rightSectionData?.contentSectionData?.map((data, index) => (
                    <div className='parents-home-page-section-content-right-content' key={index}>
                        <div className='parents-home-page-section-content-right-content-img'>
                            <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                        </div>
                        <div className='parents-home-page-section-content-right-content-body'>
                            <h3>{data?.sectionTitle}</h3>
                            <p>{data?.sectionContent}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ParentsPageRightSection
