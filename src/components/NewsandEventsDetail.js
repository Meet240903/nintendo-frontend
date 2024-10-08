import React from 'react'
import NewsEventsDetailTopSection from './newsandEventsDetailPages/NewsEventsDetailTopSection'
import { useParams } from 'react-router-dom'
import newsEventsData from '../data/NewsandEventsData'
import NewsEventsDetailContentSection from './newsandEventsDetailPages/NewsEventsDetailContentSection'
import LearnMoreSection from './newsandEventsDetailPages/LearnMoreSection'
import MoreNewsSection from './newsandEventsDetailPages/MoreNewsSection'

const NewsandEventsDetail = () => {
    const { slug } = useParams();

    const data = newsEventsData.find(item => item.slugs === slug);

  return (
    <>
      <NewsEventsDetailTopSection data={data} />
      <NewsEventsDetailContentSection sectionData={data?.contentSection} sectionTitle={data?.newstitle} />
      <LearnMoreSection sectionData={data?.learnMoreSection} />
      <MoreNewsSection sectionData={data?.MoreNewsSection} />
    </>
  )
}

export default NewsandEventsDetail
