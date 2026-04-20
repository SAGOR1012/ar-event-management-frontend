import React from 'react';

const HeadingTitle = ({ title, heading }) => {
  return (
    <div>
      <h1 className='text-2xl md:text-[48px] text-[var(--primary-color] font-bold mb-2'>
        {heading}
      </h1>
      <h3 className='mb-5 text-sm md:text-md text-[#4A200E] font-semibold'>
        {title}
      </h3>
    </div>
  );
};

export default HeadingTitle;
