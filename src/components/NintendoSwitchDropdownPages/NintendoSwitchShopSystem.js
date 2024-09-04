import React from 'react'
import NintendoSwitchHardwareTopSection from './NintendoSwitchHardwarePages/NintendoSwitchHardwareTopSection'
import NintendoSwitchHardwareSectionTwo from './NintendoSwitchHardwarePages/NintendoSwitchHardwareSectionTwo'
import NintendoStoreBottomSection from '../myNintendoStoreHardwarePages/NintendoStoreBottomSection'
import nintendoSwitchDropdownData from '../../data/NintendoSwitchDropdownDataPages/NintendoSwitchLineupDrowpdownData'
import hardwareNintendoSwitchSystemData from '../../data/HardwareNintendoSwitchSystemData'

const NintendoSwitchShopSystem = () => {
    const link = "nintendo-switch-shop-system";
    const data = nintendoSwitchDropdownData.find(item => item.link === link)
    const hardwareData1 = hardwareNintendoSwitchSystemData
  return (
    <>
      <NintendoSwitchHardwareTopSection sectionData={data} />
      <NintendoSwitchHardwareSectionTwo sectionData={data?.sectionTwoFilterData}  hardwareData1={hardwareData1} breadcrumpTitle2="Hardware" breadcrumpTitle="Nintendo Switch System" />
      <NintendoStoreBottomSection />
    </>
  )
}

export default NintendoSwitchShopSystem
