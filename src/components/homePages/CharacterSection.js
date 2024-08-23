import React from 'react'
import '../../assets/css/homepagecss/characterSection.css'
import charImg1 from '../../assets/images/characterSection/Home_Characters_Mario.avif';
import charImg2 from '../../assets/images/characterSection/legendofZelda.avif';
import charImg3 from '../../assets/images/characterSection/Splatoon_character.avif';
import charImg4 from '../../assets/images/characterSection/Home_Characters_Kirby.avif';
import charImg5 from '../../assets/images/characterSection/Character-Pikmin.avif';
import charImg6 from '../../assets/images/characterSection/AnimalCrossing.avif';
import charImg7 from '../../assets/images/characterSection/Character-Metroid.avif';
import charImg8 from '../../assets/images/characterSection/Character-Pokemon.avif';
import charBgImg1 from '../../assets/images/characterSection/mario-bg.avif';
import charBgImg2 from '../../assets/images/characterSection/zelda_bg.avif';
import charBgImg3 from '../../assets/images/characterSection/Splatoon_BG.avif';
import charBgImg4 from '../../assets/images/characterSection/Kirby_BG.avif';
import charBgImg5 from '../../assets/images/characterSection/Background-Pikmin.avif';
import charBgImg6 from '../../assets/images/characterSection/Background-AnimalCrossing.avif';
import charBgImg7 from '../../assets/images/characterSection/Background-Metroid.avif';
import charBgImg8 from '../../assets/images/characterSection/Background-Pokemon.avif';

const CharacterSection = () => {
    const characterData = [
        {
            charImg: charImg1,
            charName: "Super Mario™",
            bgImg: charBgImg1,
        },
        {
            charImg: charImg2,
            charName: "The Legend of Zelda™",
            bgImg: charBgImg2,
        },
        {
            charImg: charImg3,
            charName: "Splatoon™",
            bgImg: charBgImg3,
        },
        {
            charImg: charImg4,
            charName: "Kirby™",
            bgImg: charBgImg4,
        },
        {
            charImg: charImg5,
            charName: "Pikmin™",
            bgImg: charBgImg5,
        },
        {
            charImg: charImg6,
            charName: "Animal Crossing™",
            bgImg: charBgImg6,
        },
        {
            charImg: charImg7,
            charName: "Metroid™",
            bgImg: charBgImg7,
        },
        {
            charImg: charImg8,
            charName: "Pokémon™",
            bgImg: charBgImg8,
        },
    ]
    return (
        <>
            <div className='character-section-container'>
                <h4 className='fw-bold'>Characters</h4>
                <div className='row'>
                    {
                        characterData?.map((data, index) => (
                            <div className='col-md-3' key={index}>
                                <div className='char-img-div' style={{ backgroundImage: `url(${data?.bgImg})` }}>
                                    <img src={data?.charImg} className='img-fluid char-img' alt='char-img' />
                                </div>
                                <h4>{data?.charName}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CharacterSection
