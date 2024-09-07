import React from 'react'
import '../../../assets/css/kidsComponentscss/kidsHomePagesectioncss/kidsHomePageCharacterSection.css'
import characterImg1 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/charactetSectionImgs/characterImg1.png'
import characterImg2 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/charactetSectionImgs/characterImg2.png'
import characterImg3 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/charactetSectionImgs/characterImg3.png'
import characterImg4 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/charactetSectionImgs/characterImg4.png'
import characterImg5 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/charactetSectionImgs/characterImg5.png'
import characterImg6 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/charactetSectionImgs/characterImg6.png'

const KidsHomePageCharacterSection = () => {
    const characterData = [
        {
            characterImg: characterImg1,
            title: "Mario",
        },
        {
            characterImg: characterImg2,
            title: "Princess Peach",
        },
        {
            characterImg: characterImg3,
            title: "Princess Zelda",
        },
        {
            characterImg: characterImg4,
            title: "Link",
        },
        {
            characterImg: characterImg5,
            title: "Donkey Kong",
        },
    ]
    return (
        <>
            <div className='kids-home-page-character-section-container'>
                <div className='kids-home-page-character-section-title'>
                    <h2>You can meet friends from the world of video games!</h2>
                </div>
                <div className='kids-home-page-character-section-content'>
                    {
                        characterData?.map((data, index) => (
                            <div className='kids-home-page-character-section-content-box' key={index}>
                                <img src={data?.characterImg} className='img-fluid' alt='character-img' />
                                <p>{data?.title}</p>
                            </div>
                        ))
                    }
                    <div className='kids-home-page-character-section-content-box-2'>
                        <img src={characterImg6} className='img-fluid' alt='character-img' />
                        <p>See more character</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KidsHomePageCharacterSection
