import React from 'react';

const Login = () => {
    return (
        <>
            <div className='h-[100vh] w-full bg-login-bg'>
                <div className='h-full w-full bg-darkBg/40 flex justify-around items-center px-25'>
                    <div>
                        <span className='text-5xl text-textLight font-medium'>What we Offer</span>
                        <ul className='mt-5 list-disc text-textLight text-2xl'>
                            <li className='mt-2'>Free listings for property owners—no middlemen, no brokerage fees.</li>
                            <li className='mt-2'>Powerful search filters to help tenants find exactly what they need.</li>
                            <li className='mt-2'>A dedicated section for local service providers to connect with renters and residents.</li>
                            <li className='mt-2'>  Market rent analytics to help users make smarter pricing decisions.</li>
                            <li className='mt-2'>A showcase of upcoming rental projects and new developments.</li>
                        </ul>
                    </div>
                    <div className='w-[35rem] h-[35rem] bg-cardBg flex flex-col gap-8 px-16 py-8 rounded-2xl'>
                        <span className='text-3xl font-medium text-textLight justify-center items-center flex'>Login</span>
                       <form className='flex flex-col gap-8'>
                         <input type="email" name="email" id="email" placeholder='Email' className='text-xl px-2 bg-lightBg h-14 rounded-2xl ' required/>
                        <input type="password" name="password" id="password" placeholder='password' className='text-xl px-2 bg-lightBg h-14 rounded-2xl' required />
                        <input type="text" name="phone" id="phone" placeholder='Phone' className='text-xl px-2 bg-lightBg h-14 rounded-2xl' required />
                        <div className='flex gap-5'>
                            <input type="checkbox" name="t&c" id="t&c" className='h-8 w-5' required/>
                            <p className='text-textLight text-xl'>I agree to Housely Terms& condition. </p>
                        </div>
                        <button type='submit' className='bg-lightBtn text-2xl font-medium text-textLight py-2'>Login</button>
                       </form>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;
