import { faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/newsEventDetailPageCSS/newsEventDetailTopSection.css'

const NewsEventsDetailTopSection = ({ data }) => {
    return (
        <>
            <div className='news-events-details-section-header'>
                <h1><FontAwesomeIcon icon={faComment} /> News</h1>
                <Link to='/news-and-events' className='see-all-news-link'>See all news articles</Link>
            </div>
            <div className='news-details-top-section-container'>
                <div className='news-details-top-section-content'>
                    <img src={data?.articleImg} className='news-details-top-img' alt='news-details-img' /><br /><br />
                    <span>{data?.date}</span>&nbsp;&nbsp;&nbsp;&nbsp;<small>| Nintendo Switch</small>
                </div>
            </div>
        </>
    )
}

export default NewsEventsDetailTopSection
