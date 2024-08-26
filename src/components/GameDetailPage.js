import React from 'react'
import featureData from '../data/HomeFeatureData';
import { useParams } from 'react-router-dom';
import GameDetailTopSection from './gameDetailPages/GameDetailTopSection';

const GameDetailPage = () => {
    const { slug } = useParams();

    const data = featureData.find(item => item.slugs === slug);
    return (
        <>
            <GameDetailTopSection data={data} />
        </>
    )
}

export default GameDetailPage
