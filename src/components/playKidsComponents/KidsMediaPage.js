import React from 'react';
import '../../assets/css/kidsComponentscss/kidsMediaPage.css';
import vdoPushIcon from '../../assets/images/kidsComponentsImgs/kidsMediaPageImgs/vdoPushIcon.png'
import kidsMediaPageData from '../../data/kidsComponentsData/KidsMediaPageData';

const KidsMediaPage = () => {
  return (
    <div className='kids-media-page-section-container'>
      <div className='kids-media-page-section-title'>
        <h2>Videos, images, and sounds</h2>
      </div>

      <div className='media-grid'>
        {kidsMediaPageData.map((media, index) => (
          <div
            key={index}
            className={`${media?.gridColumnSpan === 'span 2' && media?.gridRowSpan === 'span 1' ? 'media-flex-item' : 'media-item'}`}
            style={{
              backgroundColor: media.backgroundColor,
              gridColumn: media.gridColumnSpan,
              gridRow: media.gridRowSpan,
              color: media.color
            }}
          >
            {
              media?.type === 'video' && <div className={`${media?.gridColumnSpan === 'span 2' && media?.gridRowSpan === 'span 1' ? 'kids-media-flex-vdo-push-icon' : 'kids-media-vdo-push-icon'}`}>
                <img src={vdoPushIcon} alt='video-push-icon' />
              </div>
            }
            <div className='kids-media-img-section'>
              <img src={media.thumbnail} alt={media.title} className='media-thumbnail' />
            </div>
            <div className='media-content'>
              <h3>{media.title}</h3>
              {media.type === 'video' && <span className='media-type'>VIDEO</span>}
              {media.type === 'wallpaper' && <span className='media-type'>WALLPAPER</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidsMediaPage;
