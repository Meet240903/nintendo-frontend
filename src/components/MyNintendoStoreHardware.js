import React from 'react'
import NintendoHardwareTopSection from './myNintendoStoreHardwarePages/NintendoHardwareTopSection'
import headerData from '../data/MyNintendoStoreDropDownData';
import { useParams } from 'react-router-dom';
import NintendoHardwareSectionTwo from './myNintendoStoreHardwarePages/NintendoHardwareSectionTwo';
import hardwareNintendoSwitchSystemData from '../data/HardwareNintendoSwitchSystemData';
import hardwareJoyConControllerData from '../data/HardwareJoyConControllersData';
import hardwareCaseandMoreData from '../data/HardwareCaseMoreData';
import hardwareAmiiboData from '../data/HardwareAmiiboData';
import NintendoStoreBottomSection from './myNintendoStoreHardwarePages/NintendoStoreBottomSection';

const MyNintendoStoreHardware = () => {
    const { slug } = useParams();
    // Find the relevant listData item that matches the slug
    const { MyNintendoStoreDropDownData } = headerData;
    const data = MyNintendoStoreDropDownData
        .flatMap(item => item.listData) // Flatten the listData arrays into a single array
        .find(item => item.slugs === slug); // Find the item with the matching slug

    var hardwareData = null
    if(slug === 'nintendo-switch-systems'){
        hardwareData = hardwareNintendoSwitchSystemData
    }else if(slug === 'joy-con-controllers'){
        hardwareData = hardwareJoyConControllerData
    }else if(slug === 'cases-and-more'){
        hardwareData = hardwareCaseandMoreData
    }else if(slug === 'amiibo'){
        hardwareData = hardwareAmiiboData
    }

    return (
        <>
            <NintendoHardwareTopSection sectionData={data} />
            <NintendoHardwareSectionTwo sectionData={data?.sectionTwoFilterData} hardwareData={hardwareData} breadcrumpTitle={data?.listTitle} breadcrumpTitle2={data?.mainSlugs} />
            <NintendoStoreBottomSection />
        </>
    )
}

export default MyNintendoStoreHardware
