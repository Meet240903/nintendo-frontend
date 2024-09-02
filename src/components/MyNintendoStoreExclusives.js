import React from 'react'
import NintendoExclusiveTopSection from './myNintendoStoreExclusivePages/NintendoExclusiveTopSection'
import { useParams } from 'react-router-dom';
import headerData from '../data/MyNintendoStoreDropDownData';
import NintendoExclusiveSectionTwo from './myNintendoStoreExclusivePages/NintendoExclusiveSectionTwo';
import exclusiveProductsData from '../data/ExclusiveProductsData';
import exclusiveRewardsData from '../data/ExclusiveRewardsData';
import exclusiveOnlineOffersData from '../data/ExclusiveOnlineOffersData';

const MyNintendoStoreExclusives = () => {
    const { slug } = useParams();
    // Find the relevant listData item that matches the slug
    const { MyNintendoStoreDropDownData } = headerData;
    const data = MyNintendoStoreDropDownData
        .flatMap(item => item.listData) // Flatten the listData arrays into a single array
        .find(item => item.slugs === slug); // Find the item with the matching slug

    var exclusiveData = null
    if (slug === 'exclusive-products') {
        exclusiveData = exclusiveProductsData
    } else if (slug === 'nintendo-rewards') {
        exclusiveData = exclusiveRewardsData
    } else if (slug === 'online-offers') {
        exclusiveData = exclusiveOnlineOffersData
    }
    return (
        <>
            <NintendoExclusiveTopSection sectionData={data} />
            <NintendoExclusiveSectionTwo sectionData={data?.sectionTwoFilterData} exclusiveData={exclusiveData} breadcrumpTitle={data?.listTitle} breadcrumpTitle2={data?.mainSlugs} />
        </>
    )
}

export default MyNintendoStoreExclusives
