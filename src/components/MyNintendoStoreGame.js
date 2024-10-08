import React from 'react'
import NintendoGameStoreTopSection from './myNintendoStoreGamePages/NintendoGameStoreTopSection'
import headerData from '../data/MyNintendoStoreDropDownData'
import { useParams } from 'react-router-dom';
import NintendoGameStoreSectionTwo from './myNintendoStoreGamePages/NintendoGameStoreSectionTwo';
import NintendoStoreBottomSection from './myNintendoStoreHardwarePages/NintendoStoreBottomSection';

const MyNintendoStoreGame = () => {
    const { slug } = useParams();
    // Find the relevant listData item that matches the slug
    const { MyNintendoStoreDropDownData, sectionTwoGameData } = headerData;
    const data = MyNintendoStoreDropDownData
        .flatMap(item => item.listData) // Flatten the listData arrays into a single array
        .find(item => item.slugs === slug); // Find the item with the matching slug

    return (
        <>
            <NintendoGameStoreTopSection sectionData={data} />
            <NintendoGameStoreSectionTwo sectionData={data?.sectionTwoFilterData} gameData={sectionTwoGameData} breadcrumpTitle={data?.listTitle} breadcrumpTitle2={data?.mainSlugs} />
            <NintendoStoreBottomSection />
        </>
    )
}

export default MyNintendoStoreGame;
