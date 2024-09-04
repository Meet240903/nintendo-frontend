import React from 'react'
import NintendoGameStoreTopSection from './myNintendoStoreGamePages/NintendoGameStoreTopSection';
import NintendoGameStoreSectionTwo from './myNintendoStoreGamePages/NintendoGameStoreSectionTwo';
import NintendoStoreBottomSection from './myNintendoStoreHardwarePages/NintendoStoreBottomSection';
import gameDropdownData from '../data/GameDropDownDataPages/GameDropdownData';
import headerData from '../data/MyNintendoStoreDropDownData';
import { useParams } from 'react-router-dom';
import CommingSoonGameData from '../data/GameDropDownDataPages/CommingSoonGameData';

const HeaderGamePage = () => {
    const { slug } = useParams();
    const { sectionTwoGameData } = headerData;
    // Find the relevant listData item that matches the slug    
    const data = gameDropdownData.find(item => item.slugs === slug); // Find the item with the matching slug

    var gameData = null
    if(slug === 'nintendo-switch-games' || slug === 'new-releases'){
        gameData = sectionTwoGameData
    }else if(slug === 'comming-soon'){
        gameData = CommingSoonGameData
    }
    
    return (
        <>
            <NintendoGameStoreTopSection sectionData={data} />
            <NintendoGameStoreSectionTwo sectionData={data?.sectionTwoFilterData} gameData={gameData} breadcrumpTitle={data?.listTitle} breadcrumpTitle2={data?.mainSlugs} />
            <NintendoStoreBottomSection />
        </>
    )
}

export default HeaderGamePage
