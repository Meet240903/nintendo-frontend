import React from 'react'
import '../../assets/css/kidsComponentscss/parentsRightBottomSection.css'
import sectionImg1 from '../../assets/images/kidsComponentsImgs/parentsPageImgs/bottomSectionImgs/sectionImg1.png'
import sectionImg2 from '../../assets/images/kidsComponentsImgs/parentsPageImgs/bottomSectionImgs/sectionImg2.png'
import sectionImg3 from '../../assets/images/kidsComponentsImgs/parentsPageImgs/bottomSectionImgs/sectionImg3.png'
import sectionImg4 from '../../assets/images/kidsComponentsImgs/parentsPageImgs/bottomSectionImgs/sectionImg4.png'

const ParentsPageRightBottomSection = () => {
    const imgData = [
        {
            sectionImg: sectionImg1,
        },
        {
            sectionImg: sectionImg2,
        },
        {
            sectionImg: sectionImg3,
        },
        {
            sectionImg: sectionImg4,
        },
    ]
  return (
    <>
      <div className='parents-page-right-bottom-section-container'>
        <div className='parents-page-right-bottom-section-title'>
            <h4>Connect with us and learn more about our products.</h4>
        </div>
        <div className='parents-page-right-bottom-section-imgs'>
            {
                imgData?.map((data,index)=>(
                    <div key={index}>
                        <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                    </div>
                ))
            }
        </div>
      </div>
    </>
  )
}

export default ParentsPageRightBottomSection
