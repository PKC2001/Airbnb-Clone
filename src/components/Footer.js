/* eslint-disable react/no-unescaped-entities */
import React from 'react'

const Footer = () => {
  return (
        <footer className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 bg-gray-100 text-gray-600 gap-y-10 px-32 py-14'>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real Site</p>
                <p>It's a pretty Awesome Clone.</p>
                <p>Referrals Accepted</p>
                <p>PKC</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>HOST</h5>
                <p>Pranav</p>
                <p>presents</p>
                <p>Airbnb</p>
                <p>clone</p>
                <p>:</p>
            </div>
            <div className='space-y-4 text-xs text-gray-800'>
                <h5 className='font-bold'>SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust & Saftey</p>
                <p></p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
        </footer>
  )
}

export default Footer