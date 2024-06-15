import React from 'react'
import Link from 'next/link'

const MobileMenu = () => {
  return (
    <div className="text-white-600 body-font fixed bottom-0 left-0 w-full z-100 bg-white shadow-md md:hidden lg:hidden">
      <div className="flex justify-center items-center">
        <ul className="menu menu-horizontal">
          <li>
            <Link href='/'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href='/projects'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V9H7a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm-4 0v-4h2v4H5zm8 0h2V9a2 2 0 012-2h2a2 2 0 012 2v10h-2v-4h-2v4h-2a2 2 0 01-2-2zM7 17h2v-4H7v4zm10 0v-4h2v4h-2z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-2.21 0-4 1.79-4 4v3h8v-3c0-2.21-1.79-4-4-4z" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16.02 3h-8C6.61 3 5 4.61 5 6.02v11.96C5 19.39 6.61 21 8.02 21h7.96C17.39 21 19 19.39 19 17.98V6.02C19 4.61 17.39 3 16.02 3zM12 13.35L6.69 9.5l1.3-1.57 3.16 2.68 3.16-2.68 1.3 1.57L12 13.35z"/>
                </svg>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
