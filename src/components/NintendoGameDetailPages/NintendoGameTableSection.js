import React from 'react'
import tvIcon from '../../assets/images/mynintendostoreGameImgs/nintendoSwitchImgs/tvIcon.svg';
import tableTopIcon from '../../assets/images/mynintendostoreGameImgs/nintendoSwitchImgs/tabletopIcon.svg';
import handleHeldIcon from '../../assets/images/mynintendostoreGameImgs/nintendoSwitchImgs/handleheldIcon.svg';
import '../../assets/css/gameDetailPagecss/gameDetailTableSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faCalendarAlt, faDatabase, faEarDeaf, faGamepad, faGear, faGlobe, faPlusSquare, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faInternetExplorer } from '@fortawesome/free-brands-svg-icons';

const NintendoGameTableSection = () => {
    const supportData = [
        {
            svgIcon: tvIcon,
            title: "TV",
        },
        {
            svgIcon: tableTopIcon,
            title: "Tabletop",
        },
        {
            svgIcon: handleHeldIcon,
            title: "Handheld",
        },
    ]
    return (
        <>
            <div className='nintendo-game-detail-table-section-container'>
                <div className='game-detail-rating-support-section'>
                    <h5 className='mb-5'>Supported play modes</h5>
                    <div className='game-detail-support-section-flex'>
                        {
                            supportData?.map((data, index) => (
                                <div className='game-detail-support-section' key={index}>
                                    <div className='game-detail-support-inner-section'>
                                        <img src={data?.svgIcon} className='img-fluid' alt={`${data?.title}`} />
                                    </div>
                                    <p className='mt-4 fw-bold'>{data?.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='nintendo-game-detail-table-section-content'>
                    <table className='game-detail-table'>
                        <tbody>
                            <tr>
                                <td className='game-detail-table-heading'><FontAwesomeIcon icon={faCalendarAlt} />&nbsp; Release date</td>
                                <td className='game-detail-table-value'>October 20, 2023</td>
                            </tr>
                            <tr>
                                <td className='game-detail-table-heading'><FontAwesomeIcon icon={faUsers} />&nbsp; No. of players</td>
                                <td className='game-detail-table-value' style={{color:'#e60012',textDecoration:'underline',fontWeight:'bold'}}>
                                    Single System (1-4) &nbsp;
                                    Online (1-4)
                                </td>
                            </tr>
                            <tr>
                                <td className='game-detail-table-heading'><FontAwesomeIcon icon={faPlusSquare} />&nbsp; Genre</td>
                                <td className='game-detail-table-value' style={{color:'#e60012',textDecoration:'underline',fontWeight:'bold'}}>
                                    Platformer &nbsp;
                                    Action
                                </td>
                            </tr>
                            <tr>
                                <td className='game-detail-table-heading'><FontAwesomeIcon icon={faBuilding} />&nbsp; Publisher</td>
                                <td className='game-detail-table-value' style={{color:'#e60012',textDecoration:'underline',fontWeight:'bold'}}>Nintendo</td>
                            </tr>
                            <tr>
                                <td className='game-detail-table-heading'><FontAwesomeIcon icon={faGear} />&nbsp; ESRB rating</td>
                                <td className='game-detail-table-value' style={{color:'#e60012',textDecoration:'underline',fontWeight:'bold'}}>Everyone</td>
                            </tr>
                            <tr>
                                <td className='game-detail-table-heading'><FontAwesomeIcon icon={faGamepad} />&nbsp; Supported play modes</td>
                                <td className='game-detail-table-value'>
                                    TV mode &nbsp;
                                    Tabletop mode &nbsp;
                                    Handheld mode
                                </td>
                            </tr>
                            <tr>
                                <td className='game-detail-table-heading'><FontAwesomeIcon icon={faDatabase} />&nbsp; Game file size</td>
                                <td className='game-detail-table-value'>3.6 GB</td>
                            </tr>
                            <tr>
                                <td className='game-detail-table-heading'><FontAwesomeIcon icon={faGlobe} />&nbsp; Supported languages</td>
                                <td className='game-detail-table-value'>
                                    Dutch, English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>



            </div>
        </>
    )
}

export default NintendoGameTableSection
