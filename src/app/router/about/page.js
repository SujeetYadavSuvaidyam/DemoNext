import React from 'react'
import Navbar from '../navbar/page'

const About = () => {
  return (
    <><Navbar />
      <div className='w-full bg-red-300 h-screen'>
        <div className='w-full h-16 flex items-center text-xl  text-white font-serif'>
          Welcome to my About page</div>
      </div>
    </>)
}

export default About