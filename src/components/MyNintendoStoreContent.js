import React from 'react';
import { useParams } from 'react-router-dom';
import MyNintendoStoreHardware from './MyNintendoStoreHardware';
import MyNintendoStoreGame from './MyNintendoStoreGame';

const MyNintendoStoreContent = () => {
    const { slug1, slug } = useParams();

    // Conditional rendering based on the value of `slug1`
    return (
        <>
            {slug1 === 'games' && <MyNintendoStoreGame />}
            {slug1 === 'hardware' && <MyNintendoStoreHardware />}
            {/* Add more conditions if needed */}
        </>
    );
};

export default MyNintendoStoreContent;
