import React from 'react'
import sectionIcon from '../../../assets/images/kidsComponentsImgs/kidsNewsTipsPagesImgs/topSectionImgs/sectionIcon1.png'
import sectionImg2 from '../../../assets/images/kidsComponentsImgs/kidsNewsTipsPagesImgs/topSectionImgs/sectionImg2.jpg'
import sectionImg3 from '../../../assets/images/kidsComponentsImgs/kidsNewsTipsPagesImgs/topSectionImgs/sectionImg3.jpg'
import '../../../assets/css/kidsComponentscss/kidsNewsTipsSectionCSSpages/kidsNewsTipsTopSection.css'

const KidsNewsandTipsTopSection = () => {
    return (
        <>
            <div className='kids-news-tips-top-section-container'>
                <div className='kids-news-tips-top-section-title'>
                    <h2>News, gaming tips & tricks, and more</h2>
                </div>
                <div className='kids-news-tips-top-section-content'>
                    <div className='kids-news-tips-top-section-content-news-boxs'>
                        <div className='kids-news-tips-top-section-content-news-boxs-span'>
                            <p>NEWS</p>
                        </div>
                        <div className='kids-news-tips-top-section-content-title-content-section'>
                            <p className='kids-news-tips-top-section-content-news-boxs-title'>Grand Festival news</p>
                            <p className='kids-news-tips-top-section-content-news-boxs-content'>The Splatoon 3 game’s grandest event of the year is almost here with an exciting Splatfest!</p>
                        </div>
                        <div className='kids-news-tips-top-section-content-img'>
                            <img src={sectionIcon} alt='section-img' />
                        </div>
                    </div>
                    <div className='kids-news-tips-top-section-content-game-release-box'>
                        <div className='kids-news-tips-top-section-content-game-release-box-body'>
                            <div className='kids-news-tips-top-section-content-game-release-box-body-part'>
                                <div className='kids-news-tips-top-section-content-game-release-box-body-span'>
                                    <p>GAME RELEASE</p>
                                </div>
                                <p className='kids-news-tips-top-section-content-game-release-box-body-title'>Scary fun with Luigi!</p>
                                <p className='kids-news-tips-top-section-content-game-release-box-body-content'>Luigi faces friendly ghosts turned fiendish in the Luigi’s Mansion 2 HD game, available now for the Nintendo Switch family of systems.</p>
                            </div>
                        </div>
                        <div className='kids-news-tips-top-section-content-game-release-box-img'>
                            <img src={sectionImg2} className='img-fluid' alt='top-section-img' />
                        </div>
                        <div className='kids-news-tips-top-section-content-game-release-box-icon'>
                            <img src={sectionIcon} alt='top-section-icon' />
                        </div>
                    </div>
                    <div className='kids-news-tips-top-section-content-tips-tricks-box'>
                        <div className='kids-news-tips-top-section-content-tips-tricks-box-img'>
                            <img src={sectionImg3} className='img-fluid' alt='top-section-img' />
                        </div>
                        <div className='kids-news-tips-top-section-content-tips-tricks-box-body'>
                            <div className='kids-news-tips-top-section-content-tips-tricks-box-body-part'>
                                <div className='kids-news-tips-top-section-content-tips-tricks-box-body-span'>
                                    <p>Tips & Tricks</p>
                                </div>
                                <p className='kids-news-tips-top-section-content-tips-tricks-box-body-title'>Multiplayer mayhem</p>
                                <p className='kids-news-tips-top-section-content-tips-tricks-box-body-content'>Tips and tricks on tackling the ScareScraper together with friends in the Luigi’s Mansion 2 HD game.</p>
                            </div>
                        </div>
                        <div className='kids-news-tips-top-section-content-tips-tricks-box-icon'>
                            <img src={sectionIcon} alt='top-section-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KidsNewsandTipsTopSection
