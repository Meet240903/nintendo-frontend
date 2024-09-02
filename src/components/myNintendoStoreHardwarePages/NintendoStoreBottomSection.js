import { faClipboardQuestion, faGift, faReceipt, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../../assets/css/nintendoStoreHardwarePageCSS/nintendoStoreBottomSection.css'

const NintendoStoreBottomSection = () => {
    const bottomData = [
        {
            icon: faReceipt,
            title: "Order status",
        },
        {
            icon: faGift,
            title: "Redeem code",
        },
        {
            icon: faStar,
            title: "Top picks for you",
        },
        {
            icon: faClipboardQuestion,
            title: "Store support",
        },
    ]
    return (
        <>
            <div className='nintendo-store-bottom-section-container'>
                {
                    bottomData?.map((data, index) => (
                        <div className='nintendo-store-bottom-section-content-box' key={index}>
                            <h1><FontAwesomeIcon icon={data?.icon} /></h1>
                            <h5 className='nintendo-store-bottom-title'>{data?.title}</h5>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default NintendoStoreBottomSection
