import React from 'react'
import NintendoStoreCharacterTopSection from './myNintendoStoreCharacterPages/NintendoStoreCharacterTopSection'
import { useParams } from 'react-router-dom';
import headerData from '../data/MyNintendoStoreDropDownData';
import NintendoStoreBottomSection from './myNintendoStoreHardwarePages/NintendoStoreBottomSection';
import NintendoStoreCharactersBottomSection from './myNintendoStoreCharacterPages/NintendoStoreCharactersBottomSection';
import NintendoStoreCharacterPikminData from '../data/NintendoStoreCharacterPikminData';
import NintendoStoreCharacterSplatoonData from '../data/NintendoStoreCharacterSplatoonData';
import NintendoStoreCharacterSuperMarioData from '../data/NintendoStoreCharacterSuperMarioData';
import NintendoStoreCharacterLegendOfZeldaData from '../data/NintendoStoreCharacterLegendOfZeldaData';

const MyNintendoStoreCharacters = () => {
    const { slug } = useParams();
    // Find the relevant listData item that matches the slug
    const { MyNintendoStoreDropDownData } = headerData;
    const data = MyNintendoStoreDropDownData
        .flatMap(item => item.listData) // Flatten the listData arrays into a single array
        .find(item => item.slugs === slug); // Find the item with the matching slug

    var characterData = null
    if (slug === 'pikmin-character') {
        characterData = NintendoStoreCharacterPikminData
    } else if (slug === 'splatoon-character') {
        characterData = NintendoStoreCharacterSplatoonData
    } else if (slug === 'super-mario-character') {
        characterData = NintendoStoreCharacterSuperMarioData
    } else if (slug === 'legend-of-zelda-character') {
        characterData = NintendoStoreCharacterLegendOfZeldaData
    }
    return (
        <>
            <NintendoStoreCharacterTopSection sectionData={data} />
            <NintendoStoreCharactersBottomSection sectionData={data?.sectionTwoFilterData} characterData={characterData} breadcrumpTitle={data?.listTitle} breadcrumpTitle2={data?.mainSlugs} />
            <NintendoStoreBottomSection />
        </>
    )
}

export default MyNintendoStoreCharacters
