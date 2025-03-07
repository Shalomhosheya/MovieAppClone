import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='text-center p-4 bg-gray-800 bg-opacity-15 text-white'>
      <div className='flex items-center justify-center gap-4'>
      <Link>About</Link>
      <Link>Contact</Link>
      </div>
      <p className='text-sm'>�� 2023 MovieCloneSite. All rights reserved.Created by Shalom Hosheya</p>
    </footer>
  )
}

export default Footer
