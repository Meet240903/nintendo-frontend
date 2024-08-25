import { faBullhorn, faComment, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../assets/css/newsandEvents.css'
import newsEventsData from '../data/NewsandEventsData'
import { Link } from 'react-router-dom'

const NewsandEvents = () => {
    return (
        <>
            <div className='news-events-section-container'>
                <div className='news-events-section-header'>
                    <h1><FontAwesomeIcon icon={faComment} />&nbsp; News</h1>
                </div>
                <div className='news-filter-section'>
                    <h5>Filter Articles:</h5>
                    <button className='all-news-btn'><FontAwesomeIcon icon={faComment} />&nbsp; All News</button>
                    <button className='game-news-btn'><FontAwesomeIcon icon={faPlusSquare} />&nbsp; Game News</button>
                    <button className='event-promotion-btn'><FontAwesomeIcon icon={faBullhorn} />&nbsp; Events and Promotions</button>
                </div>
                <div className={`row mx-0 ${newsEventsData?.newsContent} ? 'news-main-articles-section' : 'news-other-articles-section'`}>
                    {
                        newsEventsData?.map((data, index) => (
                            data?.newsContent ? (
                                <div className='col-md-6 news-main-articles-box' key={index}>
                                    <Link to={`/news-and-events-details/${data?.slugs}`} className='router-link'>
                                        <div className='articles-img-div'>
                                            <img src={data?.articleImg} className='articles-img' alt='articles-img' />
                                        </div>
                                        <p className='my-3'>{data?.date}</p>
                                        <h5>{data?.newstitle}</h5>
                                        <div className='article-box-footer'>
                                            <p>{data?.newsContent}</p>
                                            <a className='read-more-link' href='#'>Read more</a>
                                        </div>
                                    </Link>
                                </div>
                            ) : (
                                <div className='col-md-3 news-other-articles-box my-4' key={index}>
                                    <Link to={`/news-and-events-details/${data?.slugs}`} className='router-link'>
                                        <div className='news-other-articles-img-div'>
                                            <img src={data?.articleImg} className='img-fluid' alt='articles-img' />
                                        </div>
                                        <p className='my-3'>{data?.date}</p>
                                        <p className='fw-bold'>{data?.newstitle?.length > 20 ? `${data?.newstitle.slice(0, 55)}...` : data?.newstitle}</p>
                                        <div className='news-other-articles-box-footer'>
                                            <a className='read-more-link' href='#'>Read more</a>
                                        </div>
                                    </Link>
                                </div>
                            )
                        ))
                    }

                </div>
            </div>
        </>
    )
}

export default NewsandEvents
