import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className='bg-gray-700 w-full pt-16 pb-5'>
            <p className='text-white text-center text-4xl lg:text-5xl font-licorice'>Shea's Esthetics</p>
            <div className='flex justify-center items-center mt-5 flex-col md:flex-row'>
                <Link to='/services' className='text-gray-400 text text-center lg:text-xl md:mx-10'>SERVICES</Link>
                <Link to='/about' className='text-gray-400 text text-center lg:text-xl md:mx-10 '>ABOUT</Link>
                <Link to='/contact' className='text-gray-400 text text-center lg:text-xl md:mx-10'>CONTACT</Link>
            </div>
            <div className='flex justify-center items-center mt-5 flex-col'>
            <div className='flex flex-row'>
                <p className='text-white text-sm md:text-xl'>&copy;</p><p className='text-white text-sm md:text-xl'>SHEA'S ESTHETICS | ALL RIGHTS RESERVED</p>
            </div>
            <div>
            <p className='text-white text-sm md:text-xl'>BRANDING & WEBSITE BY: <a className='underline' href="mailto:mlarson.dev@gmail.com">MATT LARSON</a></p>
            </div>
            
            </div>

        </div>
    )
}

export default Footer
