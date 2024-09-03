import React from 'react'
import '../../assets/css/nintendoStoreCharacterPageCSS/nintendoStoreCharacterTopSection.css'

const NintendoStoreCharacterTopSection = ({ sectionData }) => {
    return (
        <>
            <div className='nintendo-store-characters-top-section-container'
                style={{
                    backgroundImage: sectionData?.characterTopSectionData?.backgroundImg
                        ? `url(${sectionData.characterTopSectionData.backgroundImg})`
                        : 'none',
                    backgroundSize: 'cover', // Optional: ensures the image covers the whole div
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className='row mx-0 nintendo-store-characters-content'>
                    <div className={`nintendo-store-characters-content-left ${sectionData?.characterTopSectionData?.sectionImg2 ? 'col-md-6' : 'col-md-12'}`}>
                        <img src={sectionData?.characterTopSectionData?.sectionImg1} className='img-fluid' alt='nintendo-character-top-img' />
                    </div>
                    {
                        sectionData?.characterTopSectionData?.sectionImg2 && <div className='col-md-6 nintendo-store-characters-content-right'>
                            <img src={sectionData?.characterTopSectionData?.sectionImg2} className='img-fluid' alt='nintendo-character-top-img' />
                        </div>
                    }
                </div>
            </div>
            <div className={`nintendo-store-characters-${sectionData?.characterTopSectionData?.titleDivData?.className}-top-section-title-div`}>
                <h4 className='text-center'>
                    <img src={sectionData?.characterTopSectionData?.titleDivData?.titleIcon} className='title-decorate-img' alt='title-decorate-img' />&nbsp;&nbsp;
                    {sectionData?.characterTopSectionData?.titleDivData?.title}&nbsp;&nbsp;
                    <img src={sectionData?.characterTopSectionData?.titleDivData?.titleIcon} className='title-decorate-img' alt='title-decorate-img' />
                </h4>
                <p>{sectionData?.characterTopSectionData?.titleDivData?.content}</p>
            </div>
            {
                sectionData?.characterTopSectionData?.characterList && <div className='nintendo-store-characters-list-section-container'
                    style={{
                        backgroundImage: sectionData?.characterTopSectionData?.characterList?.backgroundImg
                            ? `url(${sectionData.characterTopSectionData.characterList.backgroundImg})`
                            : 'none',
                        backgroundSize: 'auto', // or a specific size like '50px' to make it small
                        backgroundRepeat: 'repeat',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className={`nintendo-store-characters-${sectionData?.characterTopSectionData?.titleDivData?.className}-list-section-content`}>
                        {
                            sectionData?.characterTopSectionData?.characterList?.characterListData?.map((data, index) => (
                                <div className='nintendo-store-characters-list-section-content-box' key={index}>
                                    <img src={data?.characterImg} className='img-fluid character-list-img mb-4' alt='character-img' />
                                    <p className={`${sectionData?.characterTopSectionData?.titleDivData?.className}-character-list-span`}>{data?.characterName}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }

            <div className='nintendo-store-characters-featured-category-section-container'
                style={{
                    backgroundImage: sectionData?.characterTopSectionData?.featuredCategorySection?.backgroundImg
                        ? `url(${sectionData.characterTopSectionData.featuredCategorySection.backgroundImg})`
                        : 'none',
                    backgroundSize: 'auto', // or a specific size like '50px' to make it small
                    backgroundRepeat: 'repeat',
                    backgroundPosition: 'center',
                }}
            >
                <h5 className='my-4 fw-bold'>Featured Category</h5>
                <div className='nintendo-store-characters-featured-category-filter-content'>
                    {
                        sectionData?.characterTopSectionData?.featuredCategorySection?.featuredFilterData?.map((data, index) => (
                            <div key={index}>
                                <button className={`store-characters-${sectionData?.characterTopSectionData?.titleDivData?.className}-featured-cateogry-filter-btn`}>{data?.title}</button>
                            </div>
                        ))
                    }
                </div>
                <div className='nintendo-store-characters-featured-category-section-content'>
                    <img src={sectionData?.characterTopSectionData?.featuredCategorySection?.sectionImg} className='img-fluid' alt='featured-cateogry-img' />
                    <div className='nintendo-store-characters-featured-category-section-content-body'>
                        <h5 className={`characters-${sectionData?.characterTopSectionData?.titleDivData?.className}-featured-content-h5`}>
                            {sectionData?.characterTopSectionData?.featuredCategorySection?.gameTitle}
                        </h5>
                        <button className={`store-characters-${sectionData?.characterTopSectionData?.titleDivData?.className}-featured-cateogry-btn`}>{sectionData?.characterTopSectionData?.featuredCategorySection?.btnContent}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NintendoStoreCharacterTopSection
