import React from 'react'
import KidsNewsandTipsTopSection from './kidsNewsandTipsSectionPages/KidsNewsandTipsTopSection'
import bgImg from '../../assets/images/kidsComponentsImgs/kidsHomePageImgs/charactetSectionImgs/bgimg.png'

const KidsNewsAndTipsPage = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'repeat'
            }}>
                <KidsNewsandTipsTopSection />
            </div>
        </>
    )
}

export default KidsNewsAndTipsPage
