import React from 'react'
import NintendoMerchandiseTopSection from './myNintendoStoreMerchandisePages/NintendoMerchandiseTopSection'
import headerData from '../data/MyNintendoStoreDropDownData';
import { useParams } from 'react-router-dom';
import NintendoMerchandiseSectionTwo from './myNintendoStoreMerchandisePages/NintendoMerchandiseSectionTwo';
import MerchandiseApparelData from '../data/MerchandiseApparelData';
import MerchandiseHomeandOfficeData from '../data/MerchandiseHomeandOfficeData';
import MerchandisePlushData from '../data/MerchandisePlushData';
import MerchandiseToysData from '../data/MerchandiseToysData';

const MyNintendoStoreMerchandise = () => {
    const { slug } = useParams();
    // Find the relevant listData item that matches the slug
    const { MyNintendoStoreDropDownData } = headerData;
    const data = MyNintendoStoreDropDownData
        .flatMap(item => item.listData) // Flatten the listData arrays into a single array
        .find(item => item.slugs === slug); // Find the item with the matching slug

    var merchandiseData = null
    if (slug === 'apparel-and-accessories') {
        merchandiseData = MerchandiseApparelData
    } else if (slug === 'home-and-office') {
        merchandiseData = MerchandiseHomeandOfficeData
    } else if (slug === 'plush') {
        merchandiseData = MerchandisePlushData
    } else if (slug === 'toys') {
        merchandiseData = MerchandiseToysData
    }
    return (
        <>
            <NintendoMerchandiseTopSection sectionData={data} />
            <NintendoMerchandiseSectionTwo sectionData={data?.sectionTwoFilterData} merchandiseData={merchandiseData} breadcrumpTitle={data?.listTitle} breadcrumpTitle2={data?.mainSlugs} />
        </>
    )
}

export default MyNintendoStoreMerchandise
