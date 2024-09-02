import React from 'react';
import pic1 from '../../public/Laptopimage.jpeg';
import pic2 from '../../public/Mobileimage.jpeg';

const Graphimg = () => {
    return (
        <div>
            <div className='bg-blue-100 mt-5 md:mt-0'>
                <h1 className='text-white font-bold text-center bg-gray-800 md:px-0 px-2 text-sm md:text-2xl py-3'>
                    You can check the latest graph stats of any cryptocurrency by one click
                </h1>
                <div className='flex justify-center p-2'>
                    <img className='border border-spacing-5 border-black p-5' src={pic1} height={1000} width={1000} alt="Laptop view" />
                </div>
            </div>
            <div className='md:hidden flex justify-center'>
                <img src={pic2} alt="Mobile view" />
            </div>
        </div>
    );
}

export default Graphimg;
