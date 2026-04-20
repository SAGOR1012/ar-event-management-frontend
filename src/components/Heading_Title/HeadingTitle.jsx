import React from 'react';

const HeadingTitle = ({ title, heading }) => {
  return (
    <div className=''>
      <h3 className=' mb-2 text-sm md:text-[17px] text-[#4A200E] font-semibold'>
        {title}
      </h3>
      <h1 className=' text-2xl md:text-[48px] text-[var(--primary-color)] font-bold mb-2'>
        {heading}
      </h1>
    </div>
  );
};

export default HeadingTitle;
