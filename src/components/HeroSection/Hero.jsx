import React from 'react';
import './style.css';
import DateSearch from '../DatePicker/DateSearch';

const Hero = () => {
  return (
    <div className=''>
      <div className='hero px-2 py-5'>
        {/* Background Image */}
        <div className='hero-bg'></div>

        {/* Overlay */}
        <div className='hero-overlay'></div>

        {/* Content */}
        <div className=' w-[1000px] relative flex flex-col gap-3'>
          <h1 className='text-[var(--primary-color) ] text-5xl md:text-8xl font-bold'>
            Curation <br />
          </h1>
          <h1 className='text-[var(--span-color)] text-4xl md:text-8xl font-bold'>
            in Motion.
          </h1>

          <p className='text-2xl'>
            Welcome to our event management platform.I hope you enjoy your
            moment with us
          </p>

          <div className='mt-10'>
            <DateSearch></DateSearch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
