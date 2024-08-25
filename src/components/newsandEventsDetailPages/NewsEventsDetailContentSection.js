import React from 'react'
import '../../assets/css/newsEventDetailPageCSS/newsEventDetailContentSection.css'

const NewsEventsDetailContentSection = ({ sectionData, sectionTitle }) => {
    return (
        <>
            <div className='news-detail-content-section-container'>
                <h2>{sectionTitle}</h2>
                {
                    sectionData?.map((data, index) => (
                        <div key={index}>
                            {/* Conditionally render the main title if it exists */}
                            <h4 className='my-4'>{data?.contentMainTitle}</h4>
                            {
                                data?.content?.map((item, index) => (
                                    <div key={index}>
                                        <h6 className='news-detail-content-inner-title my-3'>{item?.contentInnerTitle}</h6>
                                        <p className='news-detail-content-data'>{item?.contentData}</p>
                                        <ul className='news-detail-content-list'>
                                            {
                                                item?.contentListData?.map((dataList,index)=>(
                                                    <div key={index}>
                                                        <li>{dataList?.contentList}</li>
                                                    </div>
                                                ))
                                            }
                                        </ul>
                                        {item?.contentImg && (
                                            <img src={item?.contentImg} className='content-img' alt='content-img' />
                                        )}
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default NewsEventsDetailContentSection
