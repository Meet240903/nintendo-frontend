import React from 'react'
import '../../../assets/css/nintendoSwitchLineupPagecss/lineUpCompareSystemSection.css';
import topSectionImg3 from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionImg3.avif';
import topSectionImg4 from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionImg4.avif';
import topSectionImg5 from '../../../assets/images/nintendoSwitchLineUpImgs/topSectionImgs/topSectionImg5.avif';

const LineUpCompareSystemSection = () => {
    const compareSystemData = [
        {
            sectionImg: topSectionImg3,
            title: "Nintendo Switch – OLED Model",
            content: "Level up with an OLED screen that makes colors pop.",
            price: "$349.99",
            listData: [
                {
                    listContent: "Vivid 7” OLED touchscreen",
                },
                {
                    listContent: "Three play modes: TV, tabletop, and handheld",
                },
                {
                    listContent: "Local co-op, local wireless, and online multiplayer",
                },
                {
                    listContent: "Enhanced audio in handheld and tabletop modes",
                },
            ]
        },
        {
            sectionImg: topSectionImg4,
            title: "Nintendo Switch",
            content: "Play at home or on the go with one system.",
            price: "$299.99",
            listData: [
                {
                    listContent: "6.2” LCD touchscreen",
                },
                {
                    listContent: "Three play modes: TV, tabletop, and handheld",
                },
                {
                    listContent: "Local co-op, local wireless, and online multiplayer",
                },
            ]
        },
        {
            sectionImg: topSectionImg5,
            title: "Nintendo Switch Lite",
            content: "Dedicated to portable play.",
            price: "$199.99",
            listData: [
                {
                    listContent: "Compact, lightweight handheld system",
                },
                {
                    listContent: "Available in a range of fun colors",
                },
                {
                    listContent: "Local wireless and online multiplayer",
                },
            ]
        },
    ]
    return (
        <>
            <div className='nintendo-switch-lineup-compare-system-section-container'>
                <div className='nintendo-switch-lineup-compare-system-section-content'>
                    <div className='nintendo-switch-lineup-compare-system-section-content-title'>
                        <h2>Which system suits you?</h2>
                    </div>
                    <div className='nintendo-switch-lineup-compare-system-section-content-flex'>
                        {
                            compareSystemData?.map((data, index) => (
                                <div className='nintendo-switch-lineup-compare-system-section-content-box' key={index}>
                                    <div className='nintendo-switch-lineup-compare-system-section-content-box-img'>
                                        <img src={data?.sectionImg} className='img-fluid' alt="lineup-top-two-section-img" />
                                    </div>
                                    <div className='nintendo-switch-lineup-compare-system-section-content-box-body'>
                                        <p>{data?.title}</p>
                                        <small>{data?.content}</small>
                                        <div className='compare-system-section-content-box-body-list'>
                                            <ul>
                                                {
                                                    data?.listData?.map((data, index) => (
                                                        <li key={index}>{data?.listContent}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className='nintendo-switch-lineup-compare-system-section-content-box-body-footer'>
                                            <h4>{data?.price}</h4>
                                            <button>Learn more</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='lineup-compare-system-btn'>
                        <button>Compare systems</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LineUpCompareSystemSection
