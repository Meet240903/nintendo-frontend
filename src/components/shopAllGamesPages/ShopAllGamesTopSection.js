import React from 'react';
import '../../assets/css/shopAllSectionPagecss/shopAllGameTopSection.css';
import topSectionImg1 from '../../assets/images/shopAllGamesImgs/topSectionImg1.avif';
import topSectionImg2 from '../../assets/images/shopAllGamesImgs/topSectionImg2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const ShopAllGamesTopSection = () => {
    const buttonData = [
        {
            title: "Best sellers",
        },
        {
            title: "Coming soon",
        },
        {
            title: "New Releases",
        },
        {
            title: "Mario",
        },
        {
            title: "Pokemon",
        },
        {
            title: "The Legend of Zelda",
        },
        {
            title: "Nintendo Switch Game Vouchers",
        },
    ];

    return (
        <>
            <div className='shop-all-games-top-section-container'>
                <div className='shop-all-games-top-section-img'>
                    <img src={topSectionImg1} className='img-fluid' alt='shop-all-top-section-img' />
                </div>
                <div className='row mx-0 shop-all-games-top-section-content'>
                    <div className='col-md-6 shop-all-games-top-section-content-left'>
                        <h2><FontAwesomeIcon icon={faPlusSquare} />&nbsp;&nbsp; Games</h2>
                        <p>Buy digital games here and download them directly to your Nintendo Switch™ system (no code required)! Plus, shop physical games, sales, new releases, and more.</p>
                    </div>
                    <div className='col-md-6 shop-all-games-top-section-content-right'>
                        {
                            buttonData?.map((data, index) => (
                                <div
                                    key={index}
                                    className={index > 4 ? 'item-merge' : ''} /* Condition to apply the merge class to the fourth item (Mario) */
                                >
                                    <button className='shop-all-games-btn'>{data?.title}</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='shop-all-games-sales-and-details-container'>
                    <div className='shop-all-games-sales-and-details-img'>
                        <img src={topSectionImg2} className='img-fluid' alt='shop-all-top-section-img' />
                    </div>
                    <div className='shop-all-games-sales-and-details-middle'>
                        <h2>Sales and Deals</h2>
                        <p className='my-4'>Save on select Nintendo Switch games, hardware, and more with the latest deals at the My Nintendo Store.</p>
                    </div>
                    <div className='shop-all-games-sales-and-details-right'>
                        <button>Shop sales and deals</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopAllGamesTopSection;
