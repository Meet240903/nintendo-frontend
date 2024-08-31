import React from 'react'
import NintendoGameTopSection from './NintendoGameDetailPages/NintendoGameTopSection'
import { useParams } from 'react-router-dom';
import headerData from '../data/MyNintendoStoreDropDownData';
import NintendoGameMiddleSection from './NintendoGameDetailPages/NintendoGameMiddleSection';
import NintendoGameCharacterSection from './NintendoGameDetailPages/NintendoGameCharacterSection';
import NintendoGameTableSection from './NintendoGameDetailPages/NintendoGameTableSection';

const NintendoGameDetail = () => {
    const { slug } = useParams();
    const {sectionTwoGameData} = headerData
    const data = sectionTwoGameData.find(item => item.slugs === slug);
    
  return (
    <>
      <NintendoGameTopSection data={data} />
      <NintendoGameMiddleSection sectionData={data?.middleSectionData} />
      <NintendoGameCharacterSection sectionData={data?.characterSectionData} />
      <NintendoGameTableSection />
    </>
  )
}

export default NintendoGameDetail
