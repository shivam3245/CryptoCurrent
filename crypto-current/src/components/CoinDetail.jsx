import React from 'react';
import { useParams } from 'react-router-dom';
import useAxios from '../hooks/useAxios';
import Skeleton from './Skeleton';

const addTargetBlank = (htmlString) => {
    return htmlString.replace(/<a /g, '<a target="_blank" rel="noopener noreferrer" ');
};

const CoinDetail = () => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);

    if (!response) {
        return (
            <div className="wrapper-container mt-8">
                <Skeleton className="h-8 w-32 mb-4" />
                <Skeleton className="h-72 w-full mb-10" />
            </div>
        );
    }

    const modifiedDescription = addTargetBlank(response.description.en);

    return (
        <div className='border border-2 border-gray-600 mx-1 my-2 p-2 md:mx-10 md:my-5 md:p-5'>
            <div className='flex gap-2 items-center'>
                <img src={response.image.small} alt={response.name} />
                <h1 className='text-2xl mb-2 capitalize font-bold'>{response.name}</h1>
            </div>
            <p className='mt-6 text-black text-xs text-justify md:text-lg font-serif [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: modifiedDescription }}></p>
        </div>
    );
};

export default CoinDetail;
