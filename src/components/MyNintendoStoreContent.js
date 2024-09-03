import React from 'react';
import { useParams } from 'react-router-dom';
import MyNintendoStoreHardware from './MyNintendoStoreHardware';
import MyNintendoStoreGame from './MyNintendoStoreGame';
import MyNintendoStoreMerchandise from './MyNintendoStoreMerchandise';
import MyNintendoStoreExclusives from './MyNintendoStoreExclusives';
import MyNintendoStoreCharacters from './MyNintendoStoreCharacters';

const MyNintendoStoreContent = () => {
    const { slug1, slug } = useParams();

    // Conditional rendering based on the value of `slug1`
    return (
        <>
            {slug1 === 'games' && <MyNintendoStoreGame />}
            {slug1 === 'hardware' && <MyNintendoStoreHardware />}
            {slug1 === 'merchandise' && <MyNintendoStoreMerchandise />}
            {slug1 === 'store-exclusives' && <MyNintendoStoreExclusives />}
            {slug1 === 'characters' && <MyNintendoStoreCharacters />}
            {/* Add more conditions if needed */}
        </>
    );
};

export default MyNintendoStoreContent;
