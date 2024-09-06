import React from 'react'
import CompareSystemTopSection from './NintendoSwitchCompareSystemPages/CompareSystemTopSection'
import topSectionFirstRowImg1 from '../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/topSectionFirstRowImg1.avif';
import topSectionFirstRowImg2 from '../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/topSectionFirstRowImg2.avif';
import topSectionFirstRowImg3 from '../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/topSectionFirstRowImg3.avif';
import topSectionSecondRowImg1 from '../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/topSectionSecondRowImg1.png';
import topSectionSecondRowImg2 from '../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/topSectionSecondRowImg2.png';
import topSectionSecondRowImg3 from '../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/topSectionSecondRowImg3.png';
import topSectionFourthRowImg1 from '../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/topSectionFourthRowImg1.avif';
import topSectionFourthRowImg2 from '../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/topSectionFourthRowImg2.png';
import topSectionSixthRowImg1 from '../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/topSectionSixRowImg1.avif';
import topSectionSixthRowImg2 from '../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/topSectionSixRowImg2.avif';
import topSectionSixthRowImg3 from '../../assets/images/nintendoSwitchCompareSystemImgs/topSectionImgs/topSectionSixRowImg3.avif';
import GameCompabililtySection from './NintendoSwitchCompareSystemPages/GameCompabililtySection';
import gameCompabilitysectionImg1 from '../../assets/images/nintendoSwitchCompareSystemImgs/gameCompatibilitySectionImgs/sectionImg1.avif'
import gameCompabilitysectionImg2 from '../../assets/images/nintendoSwitchCompareSystemImgs/gameCompatibilitySectionImgs/sectionImg2.avif'
import gameCompabilitysectionImg3 from '../../assets/images/nintendoSwitchCompareSystemImgs/gameCompatibilitySectionImgs/handheldImg.svg'
import LineUpBottomSection from './NintendoSwitchLineupPage/LineUpBottomSection';
import sectionImg1 from '../../assets/images/nintendoSwitchLineUpImgs/bottomSectionImgs/sectionImg1.avif'
import sectionImg2 from '../../assets/images/nintendoSwitchLineUpImgs/bottomSectionImgs/sectionImg2.avif'
import sectionImg3 from '../../assets/images/nintendoSwitchLineUpImgs/bottomSectionImgs/sectionImg3.avif'

const NintendoSwitchCompareSystem = () => {
  const compareSystemTopSectionData = [
    {
      leftTitle: "See which Nintendo Switch system (or two) works for you.",
      backgroundColor: '#e60012',
      color: '#fff',
      className: 'first-row',
      rightContentData: [
        {
          sectionImg: topSectionFirstRowImg1,
          title: "Nintendo Switch – OLED Model",
        },
        {
          sectionImg: topSectionFirstRowImg2,
          title: "Nintendo Switch",
        },
        {
          sectionImg: topSectionFirstRowImg3,
          title: "Nintendo Switch Lite",
        },
      ]
    },
    {
      leftTitle: "Play Modes",
      backgroundColor: 'rgb(239, 239, 239)',
      className: 'second-row',
      rightContentData: [
        {
          sectionImg: topSectionSecondRowImg1,
          content: "TV mode",
        },
        {
          sectionImg: topSectionSecondRowImg1,
          content: "TV mode",
        },
        {
          sectionImg: topSectionSecondRowImg2,
          content: "Handheld mode",
        },
        {
          sectionImg: topSectionSecondRowImg3,
          content: "Tabletop mode",
        },
        {
          sectionImg: topSectionSecondRowImg3,
          content: "Tabletop mode",
        },
        {
          sectionImg: topSectionSecondRowImg2,
          content: "Handheld mode",
        },
        {
          sectionImg: topSectionSecondRowImg2,
          content: "Handheld mode",
        },
      ]
    },
    {
      leftTitle: "Compatible Games",
      backgroundColor: 'rgb(239, 239, 239)',
      className: 'third-row',
      rightContentData: [
        {
          title: "All Nintendo Switch games",
        },
        {
          title: "All Nintendo Switch games",
        },
        {
          title: "Nintendo Switch games that support Handheld mode",
        },
      ]
    },
    {
      leftTitle: "Joy-Con™ Controllers",
      backgroundColor: 'rgb(239, 239, 239)',
      className: 'fourth-row',
      rightContentData: [
        {
          sectionImg: topSectionFourthRowImg1,
          content: "Comes with a set of Joy-Con controllers",
        },
        {
          sectionImg: topSectionFourthRowImg1,
          content: "Comes with a set of Joy-Con controllers",
        },
        {
          sectionImg: topSectionFourthRowImg2,
          content: "Joy-Con controllers not included",
        },
      ]
    },
    {
      leftTitle: "Nintendo Switch Dock",
      backgroundColor: 'rgb(239, 239, 239)',
      className: 'fifth-row',
      rightContentData: [
        {
          sectionImg: topSectionFourthRowImg1,
          content: "Includes a Nintendo Switch dock and HDMI cable. Docking the system allows video output to a TV. Dock also has a built-in wired LAN port. (LAN cable sold separately.)",
        },
        {
          sectionImg: topSectionFourthRowImg1,
          content: "Includes a Nintendo Switch dock and HDMI cable. Docking the system allows video output to a TV.",
        },
        {
          sectionImg: topSectionFourthRowImg2,
          content: "Not compatible with Nintendo Switch dock. Does not support output to a TV. Does not come with a dock or HDMI cable.",
        },
      ]
    },
    {
      leftTitle: "Dimensions",
      backgroundColor: 'rgb(239, 239, 239)',
      className: 'sixth-row',
      rightContentData: [
        {
          sectionImg: topSectionSixthRowImg1,
          content: "4” high, 9.5” long, and .55” deep (with Joy-Con attached)",
        },
        {
          sectionImg: topSectionSixthRowImg1,
          content: "4” high, 9.5” long, and .55” deep (with Joy-Con attached)",
        },
        {
          sectionImg: topSectionSixthRowImg2,
          content: "3.6” high, 8.2” long, and .55” deep",
        },
      ]
    },
    {
      leftTitle: "Weight",
      backgroundColor: 'rgb(239, 239, 239)',
      className: 'seven-row',
      rightContentData: [
        {
          title: "Approx. .93 lbs",
          content: "with Joy-Con controllers attached",
        },
        {
          title: "Approx. .88 lbs",
          content: "with Joy-Con controllers attached",
        },
        {
          title: "Approx. .61 lbs",
        },
      ]
    },
    {
      leftTitle: "Screen",
      backgroundColor: 'rgb(239, 239, 239)',
      className: 'eight-row',
      rightContentData: [
        {
          content: '7.0" OLED touch screen',
        },
        {
          content: '6.2" LCD touch screen',
        },
        {
          content: '5.5" LCD touch screen',
        },
      ]
    },
    {
      leftTitle: "Storage",
      backgroundColor: 'rgb(239, 239, 239)',
      className: 'nine-row',
      rightContentData: [
        {
          content: '64 GB',
        },
        {
          content: '32 GB',
        },
        {
          content: '32 GB',
        },
      ]
    },
    {
      leftTitle: "Battery Life",
      backgroundColor: 'rgb(239, 239, 239)',
      className: 'tenth-row',
      rightContentData: [
        {
          title: "Model number: HEG-001",
          content: 'Approx. 4.5 – 9 hours',
          content2: 'The battery life will depend on the games you play. For instance, the battery will last approximately 5.5 hours for The Legend of Zelda: Breath of the Wild.',
        },
        {
          title: "Model number: HAC-001(-01)",
          content: 'Approx. 4.5 – 9 hours',
          content2: 'The battery life will depend on the games you play. For instance, the battery will last approximately 5.5 hours for The Legend of Zelda: Breath of the Wild.',
        },
        {
          title: "Model number: HDH-001",
          content: 'Approx. 3 – 7 hours',
          content2: 'The battery life will depend on the games you play. For instance, the battery will last approximately 4 hours for The Legend of Zelda: Breath of the Wild.',
        },
      ]
    },
  ]

  const gameCompabilitySectionData = [
    {
      sectionImg: gameCompabilitysectionImg1,
      title: "Nintendo Switch – OLED Model",
      contentData: [
        {
          content: "Nintendo Switch – OLED Model is compatible with the full library of Nintendo Switch games. However, the system will not cleanly fit within all the design parameters of the Nintendo Labo series. There may also be games where the game experience may differ due to the new capabilities of the console, such as the larger screen size.",
        },
        {
          content: "For more compatibility info, visit support.nintendo.com.",
        }
      ]
    },
    {
      sectionImg: gameCompabilitysectionImg2,
      title: "Nintendo Switch Lite",
      contentData: [
        {
          content: "Nintendo Switch Lite can play the games in the Nintendo Switch library that support handheld mode.",
        },
        {
          content: "For games that do not support handheld mode, players can wirelessly connect compatible controllers (sold separately) to Nintendo Switch Lite. If using separate Joy-Con controllers, users will need to have a device to recharge them, such as the Joy-Con charging grip.",
        },
        {
          content: "To find play mode compatibility information for specific games, please refer to the product packaging or Nintendo eShop.",
        },
        {
          content: "Just look for the “handheld mode” icon:",
          contentIcon: gameCompabilitysectionImg3,
        },
      ]
    },
  ]

  const lineUpBottomSectionData = {
    leftTitle: "Nintendo Switch Family",
    leftTitle2: "Three ways to play",
    listContent: [
      {
        content: "Compare features",
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
      <CompareSystemTopSection sectionData={compareSystemTopSectionData} />
      <GameCompabililtySection sectionData={gameCompabilitySectionData} />
      <LineUpBottomSection lineUpBottomSectionData={lineUpBottomSectionData} />
    </>
  )
}

export default NintendoSwitchCompareSystem
