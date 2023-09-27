import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='w-full'>
                <nav>
                    <ul className='w-full h-16 items-center flex gap-12 bg-emerald-600 text-white text-xl pl-10'>
                        <Link href={'/router/homes'}><li>Home</li></Link>
                        <Link href={'/router/about'}><li>About</li></Link>
                        <Link href={'/router/contact'}><li>Contact</li></Link>
                        <Link href={'/api'}><li>Api</li></Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar