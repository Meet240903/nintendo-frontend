import React from 'react'
import '../../assets/css/homepagecss/newsSection.css'
import Newsimg1 from '../../assets/images/newsSection/PaperCapers_EN.avif';
import Newsimg2 from '../../assets/images/newsSection/baby_peach_gp.avif';
import Newsimg3 from '../../assets/images/newsSection/emio_smiling_man.avif';
import Newsimg4 from '../../assets/images/newsSection/NWC_NES_CC.avif';
import Newsimg5 from '../../assets/images/newsSection/fire-emblem-heroes.jpg';
import Newsimg6 from '../../assets/images/newsSection/MonthlyNewsletter.avif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const NewsSection = () => {
    const newsData = [
        {
            newsImg: Newsimg1,
            date: '08/21/24',
            newsTitle: "Choose the write paper-inspired game for you!",
            newsContent: "Looking to tear into a few games wrapped in a papery art style? We’ve got a list for you! In each of the games below, you’ll be treated to an art style that may have you feeling like you’ve been placed in a paper-cut diorama. From stickers to cutout…",
        },
        {
            date: '08/14/24',
            newsImg: Newsimg2,
            newsTitle: "3, 2, 1… GO! The LEGO Group Reveals First-Ever LEGO Super Mario: Mario Kart Sets ",
            newsContent: "The LEGO® Super Mario™: Mario Kart™ sets were officially revealed at gamescom, an annual trade show for gamers held in Cologne, alongside three new LEGO® Animal Crossing™ sets. Today at gamescom, the LEGO Group revealed six never-before-seen LEGO® S…",
        },
        {
            date: '08/12/24',
            newsImg: Newsimg3,
            newsTitle: "Who is Emio? Begin your investigation with the free episodic demo",
        },
        {
            date: '08/22/24',
            newsImg: Newsimg4,
            newsTitle: "Competition #6 is on now in Nintendo World Championships: NES Edition",
        },
        {
            date: '08/21/24',
            newsImg: Newsimg5,
            newsTitle: "Chosen legends arrive in Fire Emblem Heroes",
        },
        {
            date: '08/21/24',
            newsImg: Newsimg6,
            newsTitle: "Check out the latest news about Nintendo Switch Online!",
        },
    ]
    return (
        <>
            <div className='news-section-container'>
                <h4>News</h4>
                <div className='row'>
                    {
                        newsData?.map((data, index) => (
                            data?.newsContent ? (
                                <div className='col-md-6' key={index} style={{cursor:'pointer'}}>
                                    <img src={data?.newsImg} className='img-fluid mb-2 news-img rounded-3' alt='news-img' />
                                    <small>{data?.date}</small>
                                    <h4>{data?.newsTitle}</h4>
                                    <div className='my-4'>
                                        <p>{data?.newsContent}</p><br />
                                        <a className='read-more-link'>Read more</a>
                                    </div>
                                </div>
                            ) : (
                                <div className='col-md-3 news-section-two' key={index} style={{cursor:'pointer'}}>
                                    <img src={data?.newsImg} className='img-fluid news-img mb-2' alt='news-img' />
                                    <small>{data?.date}</small>
                                    <h6 className='fw-bold'>{data?.newsTitle}</h6>
                                    <div className='my-4'>
                                        <a className='read-more-link'>Read more</a>
                                    </div>
                                </div>
                            )
                        ))
                    }

                </div>
                <div className='my-4'>
                    <button className='news-section-btn'><FontAwesomeIcon icon={faMessage} />&nbsp;&nbsp;See all news articles</button>
                </div>
            </div>
        </>
    )
}

export default NewsSection
