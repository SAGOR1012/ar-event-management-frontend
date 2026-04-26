import React from 'react';

const LoadingSpin = () => {
  const Loader = () => {
    return (
      <div className='flex items-center justify-center min-h-[60vh]'>
        <div className='flex space-x-2'>
          <div className='w-3 h-3 bg-[#153f35] rounded-full animate-bounce'></div>
          <div className='w-3 h-3 bg-[#153f35] rounded-full animate-bounce delay-150'></div>
          <div className='w-3 h-3 bg-[#153f35] rounded-full animate-bounce delay-300'></div>
        </div>
      </div>
    );
  };
};

export default LoadingSpin;
