import React from 'react'
import '../../../assets/css/kidsComponentscss/kidsHomePagesectioncss/kidsHomePageTopSection.css'
import topSectionImg1 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/topSectionImgs/topSectionImg1.avif'
import topSectionImg2 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/topSectionImgs/topSectionImg2.png'
import topSectionImg3 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/topSectionImgs/topSectionImg3.png'
import topSectionImg4 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/topSectionImgs/topSectionImg4.png'
import topSectionImg5 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/topSectionImgs/topSectionImg5.png'
import topSectionImg6 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/topSectionImgs/topSectionImg6.png'

const KidsHomePageTopSection = () => {
    return (
        <>
            <div className='kids-home-page-top-section-container'>
                <div className='kids-home-page-top-section-title'>
                    <h2>You can jump into worlds of FUN on</h2>
                    <h1>PLAY NINTENDO</h1>
                    <img src={topSectionImg1} className='img-fluid kids-home-top-section-img' alt='home-top-img' />
                    <h4>Quizzes, puzzles, crafts, and more!</h4>
                    <button>Skip</button>
                    <img src={topSectionImg2} className='kids-home-top-section-img1' alt='home-top-img' />
                    <img src={topSectionImg3} className='kids-home-top-section-img2' alt='home-top-img' />
                    <img src={topSectionImg4} className='kids-home-top-section-img3' alt='home-top-img' />
                    <img src={topSectionImg5} className='kids-home-top-section-img4' alt='home-top-img' />
                    <img src={topSectionImg6} className='kids-home-top-section-img5' alt='home-top-img' />
                </div>
            </div>
        </>
    )
}

export default KidsHomePageTopSection;
