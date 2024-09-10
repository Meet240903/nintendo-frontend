import React from 'react';
import '../../assets/css/kidsComponentscss/kidsMediaPage.css';

const mediaData = [
  {
    type: 'video',
    title: 'Luigi’s Mansion 2 HD – Overview Trailer — Nintendo Switch',
    thumbnail: 'path_to_image_1',
    color: 'green',
    gridRowSpan: 'span 2',
  },
  {
    type: 'video',
    title: 'Paper Mario: The Thousand-Year Door — Launch Trailer — Nintendo Switch',
    thumbnail: 'path_to_image_2',
    color: 'gray',
    gridColumnSpan: 'span 1',
    gridRowSpan: 'span 2',
  },
  {
    type: 'video',
    title: 'Endless Ocean Luminous — Launch Trailer — Nintendo Switch',
    thumbnail: 'path_to_image_3',
    color: 'blue',
    gridColumnSpan: 'span 2',
    gridRowSpan: 'span 1',
  },
  {
    type: 'video',
    title: 'Yoshi & Yoshi & The Egg | LEGO Super Mario',
    thumbnail: 'path_to_image_4',
    color: 'red',
    gridColumnSpan: 'span 2',
    gridRowSpan: 'span 2',
  },
  {
    type: 'wallpaper',
    title: 'Underwater scene',
    thumbnail: 'path_to_image_5',
    color: 'white',
    gridColumnSpan: 'span 2',
    gridRowSpan: 'span 2',
  },
  {
    type: 'wallpaper',
    title: 'On display!',
    thumbnail: 'path_to_image_6',
    color: 'brown',
    gridColumnSpan: 'span 2',
    gridRowSpan: 'span 1',
  },
  {
    type: 'video',
    title: 'Bowser Gets Bounced! LEGO Super Mario',
    thumbnail: 'path_to_image_7',
    color: 'red',
    gridColumnSpan: 'span 1',
    gridRowSpan: 'span 1',
  },
  // Add more objects as needed
];

const KidsMediaPage = () => {
  return (
    // <div className='kids-media-page-section-container'>
    //   <div className='kids-media-page-section-title'>
    //     <h2>Videos, images, and sounds</h2>
    //   </div>

    //   <div className='media-grid'>
    //     {mediaData.map((media, index) => (
    //       <div
    //         key={index}
    //         className='media-item'
    //         style={{
    //           backgroundColor: media.color,
    //           gridColumn: media.gridColumnSpan,
    //           gridRow: media.gridRowSpan,
    //         }}
    //       >
    //         <img src={media.thumbnail} alt={media.title} className='media-thumbnail' />
    //         <div className='media-content'>
    //           <h3>{media.title}</h3>
    //           {media.type === 'video' && <span className='media-type'>VIDEO</span>}
    //           {media.type === 'wallpaper' && <span className='media-type'>WALLPAPER</span>}
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div>
        <h1>This page is undermaintainance.</h1>
    </div>
  );
};

export default KidsMediaPage;
