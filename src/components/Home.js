import React from 'react'
import HomeSliderSection from './homePages/HomeSliderSection'
import FeatureSection from './homePages/FeatureSection'
import OnlineStoreSection from './homePages/OnlineStoreSection'
import GamingSystemSection from './homePages/GamingSystemSection'
import NewsSection from './homePages/NewsSection'
import CharacterSection from './homePages/CharacterSection'
import BestSellerSection from './homePages/BestSellerSection'
import NewReleaseSection from './homePages/NewReleaseSection'
import RecentlyViewedSection from './homePages/RecentlyViewedSection'

const Home = () => {
    return (
        <>
            <HomeSliderSection />
            <hr />
            <FeatureSection />
            <hr />
            <OnlineStoreSection />
            <hr />
            <GamingSystemSection />
            <hr />
            <NewsSection />
            <hr />
            <CharacterSection />
            <hr />
            <BestSellerSection />
            <hr />
            <NewReleaseSection />
            <hr />
            <RecentlyViewedSection />
        </>
    )
}

export default Home
