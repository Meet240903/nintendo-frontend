import React from 'react'
import NintendoSwitchHardwareTopSection from './NintendoSwitchHardwarePages/NintendoSwitchHardwareTopSection'
import { useParams } from 'react-router-dom'
import nintendoSwitchDropdownData from '../../data/NintendoSwitchDropdownDataPages/NintendoSwitchLineupDrowpdownData'
import NintendoSwitchHardwareSectionTwo from './NintendoSwitchHardwarePages/NintendoSwitchHardwareSectionTwo'
import NintendoStoreBottomSection from '../myNintendoStoreHardwarePages/NintendoStoreBottomSection'
import hardwareNintendoSwitchSystemData from '../../data/HardwareNintendoSwitchSystemData'
import hardwareJoyConControllerData from '../../data/HardwareJoyConControllersData'
import hardwareCaseandMoreData from '../../data/HardwareCaseMoreData'
import hardwareAmiiboData from '../../data/HardwareAmiiboData'

const NintendoSwitchHardware = () => {
    const link = "nintendo-switch-hardware";
    const data = nintendoSwitchDropdownData.find(item => item.link === link)    
    const hardwareData1 = hardwareNintendoSwitchSystemData
    const hardwareData2 = hardwareJoyConControllerData
    const hardwareData3 = hardwareCaseandMoreData
    const hardwareData4 = hardwareAmiiboData

  return (
    <>
      <NintendoSwitchHardwareTopSection sectionData={data} />
      <NintendoSwitchHardwareSectionTwo sectionData={data?.sectionTwoFilterData} hardwareData1={hardwareData1} hardwareData2={hardwareData2} hardwareData3={hardwareData3} hardwareData4={hardwareData4} breadcrumpTitle='Hardware' />
      <NintendoStoreBottomSection />
    </>
  )
}

export default NintendoSwitchHardware
