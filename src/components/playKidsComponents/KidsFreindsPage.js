import React from 'react'
import characterImg1 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg1.png'
import characterImg2 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg2.png'
import characterImg3 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg3.png'
import characterImg4 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg4.png'
import characterImg5 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg5.png'
import characterImg6 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg6.png'
import characterImg7 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg7.png'
import characterImg8 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg8.png'
import characterImg9 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg9.png'
import characterImg10 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg10.png'
import characterImg11 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg11.jpg'
import characterImg12 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg12.jpg'
import characterImg13 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg13.jpg'
import characterImg14 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg14.png'
import characterImg15 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg15.jpg'
import characterImg16 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg16.png'
import characterImg17 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg17.png'
import characterImg18 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg18.png'
import characterImg19 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg19.png'
import characterImg20 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg20.png'
import characterImg21 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg21.png'
import characterImg22 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg22.png'
import characterImg23 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg23.png'
import characterImg24 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg24.jpg'
import characterImg25 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg25.jpg'
import characterImg26 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg26.jpg'
import characterImg27 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg27.jpg'
import characterImg28 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg28.jpg'
import characterImg29 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg29.jpg'
import characterImg30 from '../../assets/images/kidsComponentsImgs/kidsFriendsPageImgs/characterImg30.jpg'
import '../../assets/css/kidsComponentscss/kidsFriendsPage.css'

const KidsFreindsPage = () => {
    const characterData = [
        {
            characterImg: characterImg1,
            title: "Mario",
        },
        {
            characterImg: characterImg2,
            title: "Luigi",
        },
        {
            characterImg: characterImg3,
            title: "Princess Peach",
        },
        {
            characterImg: characterImg4,
            title: "Toad",
        },
        {
            characterImg: characterImg5,
            title: "Toadette",
        },
        {
            characterImg: characterImg6,
            title: "Bowser",
        },
        {
            characterImg: characterImg7,
            title: "Daisy",
        },
        {
            characterImg: characterImg8,
            title: "Wario",
        },
        {
            characterImg: characterImg9,
            title: "Waluigi",
        },
        {
            characterImg: characterImg10,
            title: "Rosalina",
        },
        {
            characterImg: characterImg11,
            title: "Pauline",
        },
        {
            characterImg: characterImg12,
            title: "Ninji",
        },
        {
            characterImg: characterImg13,
            title: "Birdo",
        },
        {
            characterImg: characterImg14,
            title: "Goomba",
        },
        {
            characterImg: characterImg15,
            title: "Bowser Jr.",
        },
        {
            characterImg: characterImg16,
            title: "Koopa Troopa",
        },
        {
            characterImg: characterImg17,
            title: "Koopalings",
        },
        {
            characterImg: characterImg18,
            title: "Yoshi",
        },
        {
            characterImg: characterImg19,
            title: "Poochy",
        },
        {
            characterImg: characterImg20,
            title: "Baby Mario",
        },
        {
            characterImg: characterImg21,
            title: "Baby Luigi",
        },
        {
            characterImg: characterImg22,
            title: "Kamek",
        },
        {
            characterImg: characterImg23,
            title: "Shy Guy",
        },
        {
            characterImg: characterImg24,
            title: "Polterpup",
        },
        {
            characterImg: characterImg25,
            title: "Professor E. Gadd",
        },
        {
            characterImg: characterImg26,
            title: "Cappy",
        },
        {
            characterImg: characterImg27,
            title: "Pikmin",
        },
        {
            characterImg: characterImg28,
            title: "Captain Olimar",
        },
        {
            characterImg: characterImg29,
            title: "Red Pikmin",
        },
        {
            characterImg: characterImg30,
            title: "Blue Pikmin",
        },
    ]
    return (
        <>
            <div className='kids-friends-page-section-container'>
                <div className='kids-friends-page-section-content'>
                    {
                        characterData?.map((data, index) => (
                            <div className='kids-friends-page-section-content-box' key={index}>
                                <img src={data?.characterImg} className='img-fluid' alt='character-img' />
                                <p>{data?.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default KidsFreindsPage
