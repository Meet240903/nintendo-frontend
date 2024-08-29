import React from 'react'
import '../../assets/css/nintendoStoreGamePagecss/nintendoGameStoreTopSection.css'

const NintendoGameStoreTopSection = ({sectionData}) => {
    return (
        <>
            <div className='nintendo-store-game-top-section-container'>
                <div className='row m-0 store-game-top-section-content'>
                    <div className='col-md-6 store-game-top-section-left'>
                        <h2>{sectionData?.listTitle}</h2>
                        <p>{sectionData?.topSectionContent}</p>
                    </div>
                    <div className='col-md-6 store-game-top-section-right'>
                        <img src={sectionData?.topSectionImg} className='img-fluid top-section-img' alt='top-section-img' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NintendoGameStoreTopSection
