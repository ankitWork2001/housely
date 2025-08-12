import React from 'react';

const Navbar = () => {
    return (
        <>
            <div className='bg-darkBg/72 h-20 w-full flex justify-between px-16 py-4'>
                <div className=''>
                    <span className='text-4xl text-lightBtn font-medium'>Housely</span>
                </div>
                <div>
                    <ul className='flex gap-8 text-2xl font-medium text-textLight mt-1'>
                        <li className='cursor-pointer'>Buy</li>
                        <li className='cursor-pointer'>Rent</li>
                        <li className='cursor-pointer'>Services</li>
                        <li className='cursor-pointer'>About</li>
                    </ul>
                </div>
                <div>
                    <button className='text-2xl font-medium text-textLight cursor-pointer bg-lightBtn px-6 py-2 rounded-2xl'>Login</button>
                    <button className='hidden text-2xl font-medium text-textLight cursor-pointer bg-lightBtn px-6 py-2 rounded-2xl'>Add Property</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;
