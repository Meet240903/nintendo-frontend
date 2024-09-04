import React from 'react'
import ShopAllGamesTopSection from './shopAllGamesPages/ShopAllGamesTopSection'
import NintendoStoreBottomSection from './myNintendoStoreHardwarePages/NintendoStoreBottomSection'
import NintendoGameStoreSectionTwo from './myNintendoStoreGamePages/NintendoGameStoreSectionTwo'
import headerData from '../data/MyNintendoStoreDropDownData'
import gameDropdownData from '../data/GameDropDownDataPages/GameDropdownData'

const ShopAllGames = () => {
    const slug = 'nintendo-switch-games';
    const { sectionTwoGameData } = headerData;
    const data = gameDropdownData.find(item => item.slugs === slug);
  return (
    <>
        <ShopAllGamesTopSection />
        <NintendoGameStoreSectionTwo sectionData={data?.sectionTwoFilterData}  breadcrumpTitle2={data?.mainSlugs} gameData={sectionTwoGameData} />
        <NintendoStoreBottomSection />
    </>
  )
}

export default ShopAllGames
