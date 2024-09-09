import React from 'react'
import KidsHomePageTopSection from './kidsHomeSectionPages/KidsHomePageTopSection'
import KidsHomePageCharacterSection from './kidsHomeSectionPages/KidsHomePageCharacterSection';
import KidsHomePageSliderSection from './kidsHomeSectionPages/KidsHomePageSliderSection';
import KidsHomePageBottomSection from './kidsHomeSectionPages/KidsHomePageBottomSection';

const KidsHomePage = () => {
    return (
        <>
            <KidsHomePageTopSection />
            <KidsHomePageCharacterSection />
            <KidsHomePageSliderSection />
            <KidsHomePageBottomSection />
        </>
    )
}

export default KidsHomePage;
