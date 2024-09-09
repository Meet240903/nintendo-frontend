import React from 'react'
import kidsActivitiesData from '../../data/kidsComponentsData/KidsActivitiesSectionData'

const KidsPrintablePage = () => {

    return (
        <>
            <div className='kids-activities-page-section-container'>
                <div className='kids-activities-page-section-title'>
                    <h2>Printable cards, crafts, and other activities</h2>
                </div>
                <div className='kids-activities-page-section-content'>
                    {
                        kidsActivitiesData?.map((data, index) => (
                            (data?.spanTitle?.toLowerCase() === 'print & play' ||
                                data?.spanTitle?.toLowerCase() === 'crafts' ||
                                data?.spanTitle?.toLowerCase() === 'cards') && (
                                <div className='kids-activities-page-section-content-boxs' key={index}
                                    style={{
                                        backgroundImage: data?.backgroundImg
                                            ? `url(${data.backgroundImg})` : 'none',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        color: data?.color ? data.color : 'none'
                                    }}
                                >
                                    <div className='kids-activities-page-section-content-boxs-span'>
                                        <p>{data?.spanTitle?.toUpperCase()}</p>
                                    </div>
                                    <div className='kids-activities-page-section-content-title-content-section'>
                                        <p className='kids-activities-page-section-content-boxs-title'>{data?.title}</p>
                                        <p className='kids-activities-page-section-content-boxs-content'>{data?.content}</p>
                                    </div>
                                    <div className='kids-activities-page-section-content-img'>
                                        <img src={data?.sectionIcon} alt='section-img' />
                                    </div>
                                </div>
                            )
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default KidsPrintablePage
