import React from 'react'
import sectionImg1 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg1.jpg'
import sectionImg2 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg2.jpg'
import sectionImg3 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg3.jpg'
import sectionImg4 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg4.jpg'
import sectionImg5 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg5.png'
import sectionImg6 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg6.jpg'
import sectionImg7 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg7.jpg'
import sectionImg8 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg8.png'
import sectionImg9 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg9.jpg'
import sectionImg10 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg10.jpg'
import sectionImg11 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg11.jpg'
import sectionImg12 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg12.png'
import sectionImg13 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/bottomSectionImgs/sectionImg13.jpg'
import sectionIcon1 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg2.png'
import sectionIcon2 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg5.png'
import sectionIcon3 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg12.png'
import sectionIcon4 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg3.png'
import sectionIcon5 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg7.png'
import sectionIcon6 from '../../../assets/images/kidsComponentsImgs/kidsHomePageImgs/sliderSectionImgs/sectionImg6.png'
import '../../../assets/css/kidsComponentscss/kidsHomePagesectioncss/kidsHomePageBottomSection.css'

const KidsHomePageBottomSection = () => {
    const bottomSectionData = [
        {
            sectionImg: sectionImg1,
            sectionIcon: sectionIcon1,
            spanTitle: "Personality Quiz",
            title: "Powerful and rare!",
            content: "Which Legendary Pokémon do you think might best match your personality? You can find out with our legendary personality quiz!",
            backgroundColor: '#b42ff5',
            color: '#fff',
        },
        {
            sectionImg: sectionImg2,
            title: "Who’s got spirit?",
            content: "You can get in the back-to-school spirit with an easy-peasy pop quiz, two new fun printable crafts, and more!",
            backgroundColor: '#00d2ff',
            color: '#000',
        },
        {
            sectionImg: sectionImg3,
            sectionIcon: sectionIcon1,
            spanTitle: "Personality Quiz",
            title: "Just a splash of Wario",
            content: "Do you love garlic? You might be a little bit like Wario!",
            backgroundColor: '#fff000',
            color: '#000',
        },
        {
            sectionImg: sectionImg4,
            sectionIcon: sectionIcon2,
            spanTitle: "Paint-by-number",
            title: "Purple project",
            content: "The scheming Waluigi has gone from purple to blank! Can you fill in his missing colors in this paint-by-number activity?",
            backgroundColor: '#b42ff5',
            color: '#fff',
        },
        {
            sectionImg: sectionImg5,
            sectionIcon: sectionIcon3,
            spanTitle: "CRAFTS",
            title: "Mario marks the spot!",
            content: "Elephant Mario and Red Yoshi printable bookmarks are here—and you can download and print them to use at school or home!",
            backgroundColor: '#ee0500',
            color: '#fff',
        },
        {
            sectionImg: sectionImg6,
            sectionIcon: sectionIcon3,
            spanTitle: "CRAFTS",
            title: "Is that Mario?!",
            content: "No! It’s a Mario mask you can download, print, and wear!",
            backgroundColor: '#1dd47c',
            color: '#000',
        },
        {
            sectionImg: sectionImg7,
            sectionIcon: sectionIcon4,
            spanTitle: "Skill Quiz",
            title: "Super Mario trivia time!",
            content: "How much do you know about these characters from Super Mario games?",
            backgroundColor: '#00d2ff',
            color: '#000',
        },
        {
            sectionImg: sectionImg8,
            sectionIcon: sectionIcon1,
            spanTitle: "Personality Quiz",
            title: "What Minecraft Mob might you be?",
            content: "You can take this personality quiz to discover who might be your counterpart in the Minecraft universe!",
            backgroundColor: '#484848',
            color: '#fff',
        },
        {
            sectionImg: sectionImg9,
            sectionIcon: sectionIcon2,
            spanTitle: "Paint-by-number",
            title: "Bowser Jr. is blank!",
            content: "The mischievous son of Bowser is missing his many colors. Can you help him in this Paint-by-Number activity?",
            backgroundColor: '#00d2ff',
            color: '#000',
        },
        {
            sectionImg: sectionImg10,
            sectionIcon: sectionIcon5,
            spanTitle: "POLL",
            title: "Bad to the bone",
            content: "Which of these Mushroom Kingdom enemies would you want to defeat first?",
            backgroundColor: '#b42ff5',
            color: '#fff',
        },
        {
            sectionImg: sectionImg11,
            sectionIcon: sectionIcon6,
            spanTitle: "Puzzle",
            title: "A LEGO Peach puzzle? Yes!",
            content: "This fun online jigsaw puzzle features the Adventures with Peach Starter Course from the LEGO Super Mario universe.",
            backgroundColor: '#1ddb81',
            color: '#000',
        },
        {
            sectionImg: sectionImg12,
            sectionIcon: sectionIcon3,
            spanTitle: "Print & Play",
            title: "Crowning touch",
            content: "You can rule your own kingdom with our printable Princess Peach Crown DIY craft!",
            backgroundColor: '#b42ff5',
            color: '#fff',
        },
        {
            sectionImg: sectionImg13,
            sectionIcon: sectionIcon3,
            spanTitle: "Print & Play",
            title: "Print & play with Peach",
            content: "You can take on puzzles and other fun activities with Peach in this free printable activity book inspired by the Princess Peach: Showtime! game.",
            backgroundColor: '#b42ff5',
            color: '#fff',
        },
    ]
    return (
        <>
            <div className='kids-home-page-bottom-section-container'>
                <div className='kids-home-page-bottom-section-content'>
                    {
                        bottomSectionData?.map((data, index) => (
                            <div className='kids-home-page-bottom-section-content-boxs' key={index}>
                                <div className='kids-home-page-bottom-section-content-boxs-img'>
                                    <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                </div>
                                {
                                    data?.sectionIcon && <div className="kids-home-page-bottom-section-icon">
                                        <img src={data?.sectionIcon} alt='bottom-icon' />
                                    </div>
                                }
                                <div className='kids-home-page-bottom-section-content-boxs-body'
                                    style={{
                                        backgroundColor: data?.backgroundColor ? data?.backgroundColor : 'none',
                                        color: data?.color ? data?.color : '#000'
                                    }}
                                >

                                    <div className='kids-home-page-bottom-section-content-boxs-body-span'>
                                        <p>{data?.spanTitle}</p>
                                    </div>
                                    <p className='fw-bold'>{data?.title}</p>
                                    <p className='body-content'>{data?.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default KidsHomePageBottomSection
