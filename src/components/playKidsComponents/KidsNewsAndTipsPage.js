import React, { useState } from 'react';
import KidsNewsandTipsTopSection from './kidsNewsandTipsSectionPages/KidsNewsandTipsTopSection';
import bgImg from '../../assets/images/kidsComponentsImgs/kidsHomePageImgs/charactetSectionImgs/bgimg.png';
import '../../assets/css/kidsComponentscss/kidsNewsTipsSectionCSSpages/kidsNewsTipsBottomSection.css';
import kidsNewsTipsPageData from '../../data/kidsComponentsData/KidsNewsTipsPageData';

const KidsNewsAndTipsPage = () => {
    // State to store selected category
    const [selectedCategoryId, setSelectedCategoryId] = useState(kidsNewsTipsPageData[0].categoryId); // Default to first category

    // Find the data for the selected category
    const selectedCategoryData = kidsNewsTipsPageData.find(category => category.categoryId === selectedCategoryId);

    return (
        <>
            <div style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat'
            }}>
                {
                    selectedCategoryData?.categoryId !== 5 &&
                    <KidsNewsandTipsTopSection />
                }
                <div className='kids-news-tips-bottom-section-container'>
                    <div className='kids-news-tips-bottom-section-title'>
                        <h2>More news and tips to explore</h2>
                    </div>
                    <div className='row mx-0 kids-news-tips-bottom-section-content'>
                        {/* Left side: Filter and display data for the selected category */}
                        <div className='col-md-9 kids-news-tips-bottom-section-content-left'>
                            {
                                selectedCategoryData?.leftSideSectionData?.map((data, index) => (
                                    <div className='kids-news-tips-bottom-section-content-boxs' key={index}
                                        style={{
                                            backgroundColor: data?.backgroundColor ? data.backgroundColor : 'none',
                                            color: data?.color ? data.color : 'none'
                                        }}>
                                        <div className='kids-news-tips-bottom-section-content-left-boxs-img'>
                                            <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                        </div>
                                        <div className='kids-news-tips-bottom-section-content-left-boxs-body'>
                                            <div className='kids-news-tips-bottom-section-content-left-boxs-body-span'>
                                                <p>{data?.spanTitle?.toUpperCase()}</p>
                                            </div>
                                            <p className='kids-news-tips-bottom-section-content-left-boxs-body-title'>
                                                {data?.title}
                                            </p>
                                            <p className='kids-news-tips-bottom-section-content-left-boxs-body-content'>
                                                {data?.content}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        {/* Right side: Category and Most Popular */}
                        <div className='col-md-3 kids-news-tips-bottom-section-content-right'>
                            {/* Category List */}
                            <div className='kids-news-tips-bottom-section-content-right-category-section'>
                                <div className='kids-news-tips-bottom-section-content-right-cateogory-title'>
                                    <h4>By Category</h4>
                                </div>
                                <div className='kids-news-tips-bottom-section-content-right-cateogory-content'>
                                    {
                                        kidsNewsTipsPageData.map((data, index) => (
                                            <div key={index}>
                                                <li
                                                    onClick={() => setSelectedCategoryId(data.categoryId)}
                                                    style={{
                                                        cursor: 'pointer',
                                                        fontWeight: data.categoryId === selectedCategoryId ? 'bold' : 'normal',
                                                        backgroundColor: data.categoryId === selectedCategoryId ? 'black' : 'transparent', // Set transparent for non-selected
                                                        color: data.categoryId === selectedCategoryId ? '#fff' : 'black' // Set text color for selected
                                                    }}
                                                >
                                                    {data.categoryTitle}
                                                </li>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>

                            {/* Most Popular Section */}
                            <div className='kids-news-tips-bottom-section-content-right-most-popular-section'>
                                <div className='kids-news-tips-bottom-section-content-right-most-popular-section-title'>
                                    <h4>Most Popular</h4>
                                </div>
                                {
                                    selectedCategoryData?.popularSectionData?.map((data, index) => (
                                        <div className='kids-news-tips-bottom-section-content-right-most-popular-section-content-boxs' key={index}>
                                            <div className='kids-news-tips-bottom-section-content-right-most-popular-section-content-boxs-img'>
                                                <img src={data?.sectionImg} className='img-fluid' alt='popular-img' />
                                            </div>
                                            <p>{data?.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default KidsNewsAndTipsPage;
