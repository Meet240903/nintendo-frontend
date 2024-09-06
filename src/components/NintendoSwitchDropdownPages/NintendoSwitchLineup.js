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
import LineUpBottomSection from './NintendoSwitchLineupPage/LineUpBottomSection'
import sectionImg1 from '../../assets/images/nintendoSwitchLineUpImgs/bottomSectionImgs/sectionImg1.avif'
import sectionImg2 from '../../assets/images/nintendoSwitchLineUpImgs/bottomSectionImgs/sectionImg2.avif'
import sectionImg3 from '../../assets/images/nintendoSwitchLineUpImgs/bottomSectionImgs/sectionImg3.avif'

const NintendoSwitchLineup = () => {
  const lineUpBottomSectionData = {
    leftTitle: "Find the Nintendo Switch system that's right for you and your family",
    listContent: [
      {
        content: "Compare features",
      },
      {
        content: "Shop all systems",
      },
      {
        content: "Find family-friendly games",
      },
    ],
    rightContent: [
      {
        sectionImg: sectionImg1,
        title: "Nintendo Switch – OLED Model",
      },
      {
        sectionImg: sectionImg2,
        title: "Nintendo Switch",
      },
      {
        sectionImg: sectionImg3,
        title: "Nintendo Switch Lite",
      },
    ]
  }

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
      <LineUpBottomSection lineUpBottomSectionData={lineUpBottomSectionData} />
    </>
  )
}

export default NintendoSwitchLineup
