import React from 'react'
import Navbar from '../navbar/page'

const Homes = () => {
    return (
        <>
        <Navbar/>
            <div className='w-full bg-orange-700 h-screen'>
                <div className='w-full h-16 flex items-center text-xl  text-white font-serif'>
                    Welcome to my Home page</div>
            </div>
        </>
    )
}

export default Homes