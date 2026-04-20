import React, { useEffect, useState } from 'react';
import HeadingTitle from '../Heading_Title/HeadingTitle';
import TrendingEvents from '../Trending/TrendingEvents';
// import events from '../../../public/fackData.json';

const EventCategories = () => {
  const url = '../../../public/fackData.json';
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}`)
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData));
  }, [url]);

  const limitedData = data.slice(0, 3);
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      {/* Header Section - Minimal & Editorial */}
      <div className='border-b border-gray-200 pb-6 mb-10'>
        <div>
          <HeadingTitle title={' EXCLUSIVE SPACES'}></HeadingTitle>
        </div>

        <div className='flex justify-between items-end'>
          <h2>
            <HeadingTitle heading={'Featured Categories'}></HeadingTitle>
          </h2>
          <button className='text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-500 transition'>
            Explore All →
          </button>
        </div>
      </div>

      {/* Minimal Grid Layout - Reduced Image Sizes */}
      <div className='grid md:grid-cols-12 gap-6'>
        {/* LEFT BIG CARD - Reduced height */}
        <div className='md:col-span-7 group'>
          <div className='relative overflow-hidden bg-gray-100 rounded-sm h-[380px]'>
            <img
              src={limitedData[0]?.image}
              alt={limitedData[0]?.name}
              className='w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out'
            />
            {/* Minimal overlay - lighter gradient */}
            <div className='absolute inset-0 bg-gradient-to-t from-[var(--primary-container)]/90 via-transparent to-transparent'></div>

            {/* Minimal text treatment */}
            <div className='absolute bottom-0 left-0 right-0 p-5 text-[var(--secondary-color)]'>
              <h3 className='text-2xl font-light tracking-wide'>
                {limitedData[0]?.name}
              </h3>
              <p className='text-xs uppercase tracking-wider text-white/70 mt-1'>
                {limitedData[0]?.description?.substring(0, 80)}...
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Two stacked cards with smaller images */}
        <div className='md:col-span-5 space-y-6'>
          {limitedData.slice(1).map((event, idx) => (
            <div
              key={event.id}
              className='group'>
              <div className='relative overflow-hidden bg-gray-100 rounded-sm h-[182px]'>
                <img
                  src={event.image}
                  alt={event.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition duration-500 ease-out'
                />
                {/* Minimal overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-[var(--primary-container)]/90 via-transparent to-transparent'></div>

                {/* Minimal text - smaller typography */}
                <div className='absolute bottom-0 left-0 right-0 p-4 text-text-[var(--span-color)]'>
                  <h3 className='text-lg font-light tracking-wide'>
                    {event.name}
                  </h3>
                  <p className='text-xs uppercase tracking-wider text-[var(--span-color)] mt-0.5'>
                    {idx === 0
                      ? 'Orchestrating timeless unions'
                      : 'Curated experiences'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=''>
        <TrendingEvents></TrendingEvents>
      </div>
      {/* Minimal Footer / Pulse Section */}
      <div className='mt-12 pt-8 border-t border-gray-100'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-8'>
            <span className='text-xs font-medium tracking-wider text-gray-400 uppercase'>
              REAL-TIME PULSE
            </span>
            <span className='text-xs font-medium text-gray-900'>
              Trending Now
            </span>
            <div className='flex gap-4 text-xs text-gray-500'>
              <span className='border-b border-gray-300 pb-0.5'>This Week</span>
              <span>London</span>
              <span>Paris</span>
            </div>
          </div>
          <div className='text-xs text-gray-400'>
            {new Date()
              .toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })
              .toUpperCase()}
          </div>
        </div>
      </div>

      {/* Upcoming Events - Minimal Cards */}
      <div className='mt-12'>
        <div className='flex justify-between items-center mb-6'>
          <h3 className='text-sm font-medium tracking-wider text-gray-900 uppercase'>
            Upcoming Experiences
          </h3>
          <span className='text-xs text-gray-400'>SOLID QAT 80%</span>
        </div>

        <div className='grid md:grid-cols-3 gap-6'>
          {/* Event 1 */}
          <div className='group border border-gray-100 hover:border-gray-200 transition p-4 rounded-sm'>
            <div className='text-xs text-gray-400 mb-2'>24 OCT 2024</div>
            <h4 className='text-base font-light tracking-wide text-gray-900 mb-1'>
              The Brutalist Symphony
            </h4>
            <p className='text-xs text-gray-500 mb-4'>Architecture & Sound</p>
            <div className='flex justify-between items-center'>
              <span className='text-sm font-medium text-gray-900'>$120.00</span>
              <button className='text-xs font-medium text-gray-900 border-b border-gray-300 pb-0.5 hover:border-gray-900 transition'>
                Reserve →
              </button>
            </div>
          </div>

          {/* Event 2 */}
          <div className='group border border-gray-100 hover:border-gray-200 transition p-4 rounded-sm'>
            <div className='text-xs text-gray-400 mb-2'>
              12 NOV 2024 | NEWLY ADDED
            </div>
            <h4 className='text-base font-light tracking-wide text-gray-900 mb-1'>
              Vogue & Structure
            </h4>
            <p className='text-xs text-gray-500 mb-4'>2024 Gala</p>
            <div className='flex justify-between items-center'>
              <span className='text-sm font-medium text-gray-900'>$450.00</span>
              <button className='text-xs font-medium text-gray-900 border-b border-gray-300 pb-0.5 hover:border-gray-900 transition'>
                Reserve →
              </button>
            </div>
          </div>

          {/* Event 3 */}
          <div className='group border border-gray-100 hover:border-gray-200 transition p-4 rounded-sm'>
            <div className='text-xs text-gray-400 mb-2'>
              05 DEC 2024 | SEATS OPEN
            </div>
            <h4 className='text-base font-light tracking-wide text-gray-900 mb-1'>
              Gastronomy & Form
            </h4>
            <p className='text-xs text-gray-500 mb-4'>A Table Experience</p>
            <div className='flex justify-between items-center'>
              <span className='text-sm font-medium text-gray-900'>$295.00</span>
              <button className='text-xs font-medium text-gray-900 border-b border-gray-300 pb-0.5 hover:border-gray-900 transition'>
                Reserve →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCategories;
