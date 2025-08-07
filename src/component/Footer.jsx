import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='bg-darkBg/70  grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 px-26 py-14'>
                <div>
                    <span className='text-5xl font-medium text-lightBtn'>Housely</span>
                    <p className='text-xl mt-2 text-textLight w-100'>Your trusted partner in finding  the perfect  property and services.</p>
                </div>
                <div>
                    <span className='text-2xl font-medium text-textLight'>Quick Link</span>
                    <ul className='mt-3'>
                        <li className='text-xl font-regular text-textLight mt-2'>Buy Property</li>
                        <li className='text-xl font-regular text-textLight mt-2'>Rent Property</li>
                        <li className='text-xl font-regular text-textLight mt-2'>Services</li>
                    </ul>
                </div>
                <div>
                    <span className='text-2xl font-medium text-textLight'>Support</span>
                    <ul className='mt-3'>
                        <li className='text-xl font-regular text-textLight mt-2'>Help Center</li>
                        <li className='text-xl font-regular text-textLight mt-2'>Contact Us</li>
                        <li className='text-xl font-regular text-textLight mt-2'>Term of Services</li>
                        <li className='text-xl font-regular text-textLight mt-2'>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <span className='text-2xl font-medium text-textLight'>Contact us</span>
                </div>
            </div>

        </>
    );
}

export default Footer;
