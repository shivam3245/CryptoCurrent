import React from 'react'
import pic1 from '../../public/Laptopimage.jpeg'
import pic2 from '../../public/Mobileimage.jpeg'

const Graphimg = () => {
    return (
        <div>
            <div className=' bg-gray-700'>
                <h1 className='text-white font-bold text-center md:px-0 px-2 text-sm md:text-2xl py-3'>You can check the latest graph stats of any cryptocurrency by one click</h1>
                <img src={pic1} />
            </div>
            <div className='md:hidden flex justify-center'>
                <img src={pic2} />
            </div>
        </div>
    )
}

export default Graphimg
