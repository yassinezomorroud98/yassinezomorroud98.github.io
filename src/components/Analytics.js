import React from 'react'
import Laptop from '../assets/data2.png'
export default function Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/ ' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#1baaf7] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl ms:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi praesentium eligendi minima veniam iusto at? Quia pariatur ex nisi dicta,
                        nostrum quas repellat molestiae minima illum repudiandae aperiam veniam
                        reprehenderit? </p>
                    <button className='bg-black w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-[#1baaf7]'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
