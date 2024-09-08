import React from 'react'
import KidsHomePageTopSection from './kidsHomeSectionPages/KidsHomePageTopSection'
import KidsHomePageCharacterSection from './kidsHomeSectionPages/KidsHomePageCharacterSection';
import KidsHomePageSliderSection from './kidsHomeSectionPages/KidsHomePageSliderSection';

const KidsHomePage = () => {
    return (
        <>
            <KidsHomePageTopSection />
            <KidsHomePageCharacterSection />
            <KidsHomePageSliderSection />
        </>
    )
}

export default KidsHomePage;
