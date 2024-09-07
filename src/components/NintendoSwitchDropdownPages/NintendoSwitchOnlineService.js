import React from 'react'
import OnlineServiceTopSection from './NintendoSwitchOnlineServicePages/OnlineServiceTopSection'
import OnlineServiceMiddleSection from './NintendoSwitchOnlineServicePages/OnlineServiceMiddleSection'
import middleSectionImg1 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionImg1.avif'
import middleSectionImg2 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionImg2.avif'
import middleSectionImg3 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionImg3.avif'
import OnlineServiceCompareMembershipSection from './NintendoSwitchOnlineServicePages/OnlineServiceCompareMembershipSection'
import sectionRowImg1 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg1.png'
import sectionRowImg2 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg2.avif'
import sectionRowImg3 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg3.avif'
import sectionRowImg4 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg4.avif'
import sectionRowImg5 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg5.avif'
import sectionRowImg6 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg6.avif'
import sectionRowImg7 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg7.avif'
import sectionRowImg8 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg8.avif'
import sectionRowImg9 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg9.avif'
import sectionRowImg10 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg10.avif'
import sectionRowImg11 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg11.avif'
import sectionRowImg12 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg12.avif'
import sectionRowImg13 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg13.avif'
import sectionRowImg14 from '../../assets/images/nintendoSwitchOnlineServiceImgs/middleSectionImgs/sectionRowImg14.avif'
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import OnlineServiceFAQsSection from './NintendoSwitchOnlineServicePages/OnlineServiceFAQsSection'

const NintendoSwitchOnlineService = () => {
  const onlineServiceMiddleSectionData = [
    {
      sectionImg: middleSectionImg1,
      title: "Play online with friends, family, and other players around the world.",
      content: "Battle it out against other players around the world in the Super Smash Bros.™ Ultimate game. Or hang out with friends on your island paradise in the Animal Crossing™: New Horizons game.",
    },
    {
      sectionImg: middleSectionImg2,
      title: "100+ classic NES, Super NES, and Game Boy games at your fingertips",
      content: "Play old-school favorites like the Super Mario Bros.™ 3, Donkey Kong Country™, and The Legend of Zelda™: Link’s Awakening games. These games include added online functionality so you can compete (or cooperate) online with friends depending on the game.",
    },
    {
      sectionImg: middleSectionImg3,
      title: "Save on new games",
      content: "Nintendo Switch Online members can buy a pair of Nintendo Switch Game Vouchers* and redeem each one for a digital game in the voucher catalog to score savings. For example, get The Legend of Zelda: Tears of the Kingdom and one other game for up to $30 in savings with Game Vouchers!",
    },
  ]

  const compareMembershipData = [
    {
      sectionImg: sectionRowImg1,
      title: "Maximum Nintendo Account(s)",
      content: "See how many users are allowed with each type of membership.",
      individualValue: '1',
      familyValue: '8',
    },
    {
      sectionImg: sectionRowImg2,
      title: "Online Play",
      content: "Enjoy online play in compatible games like Splatoon™ 3 and Mario Kart™ 8 Deluxe.",
      fontIconMiddleCol: faCheckCircle,
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg3,
      title: "Nintendo Entertainment System™ - Nintendo Switch Online",
      content: "Play—or replay—classic games like Super Mario Bros.™, Metroid™, and more.",
      fontIconMiddleCol: faCheckCircle,
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg4,
      title: "Super Nintendo Entertainment System™ - Nintendo Switch Online",
      content: "Jump into favorites like Super Mario Kart™, Donkey Kong Country™, and more.",
      fontIconMiddleCol: faCheckCircle,
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg5,
      title: "Game Boy™ - Nintendo Switch Online",
      content: "Includes classics like Kirby’s Dream Land™, Metroid II - Return of Samus, and Super Mario Land™ 2 - 6 Golden Coins™.",
      fontIconMiddleCol: faCheckCircle,
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg6,
      title: "Save Data Cloud",
      content: "Your save data is automatically stored safely online for compatible games..",
      fontIconMiddleCol: faCheckCircle,
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg7,
      title: "Nintendo Switch Online App",
      content: "Open the app on your smartphone or tablet to access special features in supported games.",
      fontIconMiddleCol: faCheckCircle,
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg8,
      title: "Special Offers",
      content: "Enjoy exclusive deals and content with your membership, including Nintendo Switch Game Vouchers!",
      fontIconMiddleCol: faCheckCircle,
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg9,
      title: "Nintendo 64™ – Nintendo Switch Online",
      content: "Play classic Nintendo 64™ games like Mario Kart™ 64 online with friends.",
      fontIconMiddleCol: faClose,
      fontIconMiddleColor: 'rgb(114, 114, 114)',
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg10,
      title: "Game Boy Advance™ – Nintendo Switch Online",
      content: "Includes classics like The Legend of Zelda™: The Minish Cap and Super Mario™ Advance 4: Super Mario Bros.™ 3.",
      fontIconMiddleCol: faClose,
      fontIconMiddleColor: 'rgb(114, 114, 114)',
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg11,
      title: "Mario Kart™ 8 Deluxe – Booster Course Pass**",
      content: "Play additional courses from throughout the Mario Kart™ series.",
      fontIconMiddleCol: faClose,
      fontIconMiddleColor: 'rgb(114, 114, 114)',
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg12,
      title: "Animal Crossing™: New Horizons - Happy Home Paradise**",
      content: "Join Lottie and her team on a distant resort archipelago.",
      fontIconMiddleCol: faClose,
      fontIconMiddleColor: 'rgb(114, 114, 114)',
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg13,
      title: "Splatoon™ 2: Octo Expansion**",
      content: "Play as an Octoling in this full-on single-player adventure.",
      fontIconMiddleCol: faClose,
      fontIconMiddleColor: 'rgb(114, 114, 114)',
      fontIconRightCol: faCheckCircle,
    },
    {
      sectionImg: sectionRowImg14,
      title: "SEGA Genesis™ – Nintendo Switch Online",
      content: "Access a collection of SEGA Genesis games like Sonic the Hedgehog 2 and Golden Axe.",
      fontIconMiddleCol: faClose,
      fontIconMiddleColor: 'rgb(114, 114, 114)',
      fontIconRightCol: faCheckCircle,
    },
  ]

  const onlineServieFAQsData = [
    {
      title: 'What is Nintendo Switch Online?',
      contentData: [
        {
          content: "Nintendo Switch Online is a paid service that launched on September 18, 2018, that lets members enjoy online play in compatible Nintendo Switch games, access a selection of classic NES games with online functionality, back up save data for most games, and use additional features for the Nintendo Switch Online smartphone app.",
        },
        {
          content: "Additionally, Nintendo Switch Online members can take advantage of exclusive special offers from Nintendo.",
        },
      ]
    },
    {
      title: 'What is Nintendo Switch Online + Expansion Pack?',
      contentData: [
        {
          content: "A paid Nintendo Switch Online + Expansion Pack membership includes libraries of classic Nintendo 64 and SEGA Genesis games with added online play, access to the Animal Crossing: New Horizons - Happy Home Paradise and Mario Kart 8 Deluxe - Booster Course Pass DLCs at no additional cost, and all the benefits of a Nintendo Switch Online membership. Full version of game required to use DLC for that game. Sold separately.",
        },
      ]
    },
    {
      title: 'How do you cancel a Nintendo Switch Online membership?',
      contentData: [
        {
          content: 'Auto-renewal can be turned off through "Your Subscriptions" in your Nintendo eShop or Nintendo Account settings. Once its turned off, it cannot be turned on again.',
        },
      ]
    },
    {
      title: 'Can you change a Nintendo Switch Online membership to Nintendo Switch Online + Expansion Pack?',
      contentData: [
        {
          content: 'You can change an individual Nintendo Switch Online membership to an individual or family Nintendo Switch Online + Expansion Pack membership, or from a family Nintendo Switch Online membership to a family Nintendo Switch Online + Expansion Pack membership through "Your Subscriptions" in your Nintendo eShop or Nintendo Account settings. Additional cost may apply.',
        },
      ]
    },
    {
      title: 'Can I access Nintendo Switch Online from my Nintendo Switch?',
      contentData: [
        {
          content: 'Yes, you can get the latest info on Nintendo Switch Online, complete member-exclusive missions, and redeem Nintendo Platinum™ Points for icon elements, right from the Nintendo Switch HOME menu.',
        },
        {
          content: 'Want to know more about Nintendo Switch Online and Nintendo Switch Online + Expansion Pack? Head over to the Nintendo Support Page for lots of helpful information.',
        },
      ]
    },
  ]
  return (
    <>
      <OnlineServiceTopSection />
      <OnlineServiceMiddleSection sectionData={onlineServiceMiddleSectionData} />
      <OnlineServiceCompareMembershipSection sectionData={compareMembershipData} />
      <OnlineServiceFAQsSection sectionData={onlineServieFAQsData} />
    </>
  )
}

export default NintendoSwitchOnlineService
