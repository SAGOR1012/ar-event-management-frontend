import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className='bg-[#153f35] text-white px-6 md:px-16 py-16'>
      <div className='max-w-7xl mx-auto'>
        {/* Top Section */}
        <div className='grid md:grid-cols-3 gap-10'>
          {/* Left */}
          <div>
            <h1 className='text-4xl md:text-5xl font-serif mb-6'>
              AR Convention
            </h1>
            <p className='text-gray-300 leading-relaxed max-w-md'>
              A curated platform for extraordinary gatherings — from intimate
              salons to immersive cultural happenings.
            </p>
          </div>

          {/* Discover */}
          <div>
            <h3 className='text-sm tracking-widest text-gray-400 mb-4'>
              DISCOVER
            </h3>
            <ul className='space-y-3 text-gray-200'>
              <li className='hover:text-white cursor-pointer'>All events</li>
              <li className='hover:text-white cursor-pointer'>Curation</li>
              <li className='hover:text-white cursor-pointer'>Host</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className='text-sm tracking-widest text-gray-400 mb-4'>
              CONNECT
            </h3>
            <div className='flex items-center gap-4 text-xl'>
              <a
                href='https://www.facebook.com/arsagor212'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-300'>
                <FaFacebookF />
              </a>

              <a
                href='https://www.linkedin.com/in/mdabdurrahmansagor/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-300'>
                <FaLinkedinIn />
              </a>

              <FaInstagram className='cursor-pointer hover:text-gray-300' />
              <FaTwitter className='cursor-pointer hover:text-gray-300' />
              <HiOutlineMail className='cursor-pointer hover:text-gray-300' />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-gray-600 my-12'></div>

        {/* Bottom */}
        <div className='flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm'>
          <p>© 2026 AR Convention. All rights reserved.</p>
          <p className='italic mt-4 md:mt-0'>Designed with care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
