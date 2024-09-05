import React from 'react'
import LineUpTopSection from './NintendoSwitchLineupPage/LineUpTopSection'
import LineUpSectionTwo from './NintendoSwitchLineupPage/LineUpSectionTwo'
import LineUpSectionTopBottomSection from './NintendoSwitchLineupPage/LineUpSectionTopBottomSection'
import LineUpPortabilitySection from './NintendoSwitchLineupPage/LineUpPortabilitySection'
import LineUpMiddleSection from './NintendoSwitchLineupPage/LineUpMiddleSection'
import LineUpHomeofMarioSection from './NintendoSwitchLineupPage/LineUpHomeofMarioSection'
import LineUpCompareSystemSection from './NintendoSwitchLineupPage/LineUpCompareSystemSection'
import LineUpGetStartedSection from './NintendoSwitchLineupPage/LineUpGetStartedSection'
import hardwareNintendoSwitchSystemData from '../../data/HardwareNintendoSwitchSystemData'
import hardwareJoyConControllerData from '../../data/HardwareJoyConControllersData'
import hardwareCaseandMoreData from '../../data/HardwareCaseMoreData'
import LineUpOnlineServiceSection from './NintendoSwitchLineupPage/LineUpOnlineServiceSection'

const NintendoSwitchLineup = () => {
  return (
    <>
      <LineUpTopSection />
      <LineUpSectionTwo />
      <LineUpSectionTopBottomSection />
      <LineUpPortabilitySection />
      <LineUpMiddleSection />
      <LineUpHomeofMarioSection />
      <LineUpCompareSystemSection />
      <LineUpGetStartedSection hardwareData={hardwareNintendoSwitchSystemData} controllerData={hardwareJoyConControllerData} accessoriesData={hardwareCaseandMoreData} />
      <LineUpOnlineServiceSection />
    </>
  )
}

export default NintendoSwitchLineup
