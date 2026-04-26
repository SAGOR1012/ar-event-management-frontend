import React from 'react';
import UseAllTrend from '../../hooks/UseAllTrend';

const AllTrend = () => {
  const [trendingEvents] = UseAllTrend();

  // প্রথম ৪টি আইটেম নেওয়া হচ্ছে
  const firstFourEvents = trendingEvents?.slice(0, 4) || [];

  return (
    <div
      className='min-h-screen py-12 px-4 sm:px-6 lg:px-8'
      style={{ backgroundColor: 'var(--primary-bg-color)' }}>
      <div className='max-w-7xl mx-auto'>
        {/* হেডার সেকশন */}
        <div className='text-center mb-12'>
          <h1
            className='text-4xl md:text-5xl font-bold mb-4'
            style={{ color: 'var(--primary-color)' }}>
            ট্রেন্ডিং ইভেন্টসমূহ
          </h1>
          <p
            className='text-lg'
            style={{ color: 'var(--secondary-color)' }}>
            সবার আলোচিত ও জনপ্রিয় ইভেন্টগুলো দেখুন
          </p>
          <div
            className='w-24 h-1 mx-auto mt-4 rounded-full'
            style={{ backgroundColor: 'var(--primary-color)' }}></div>
        </div>

        {/* ইভেন্ট গ্রিড */}
        {firstFourEvents.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {firstFourEvents.map((event, index) => (
              <div
                key={event.id || index}
                className='rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'
                style={{
                  backgroundColor: 'var(--secondary-bg-color)',
                  border: `1px solid var(--span-color)`,
                }}>
                {/* ইমেজ সেকশন */}
                <div className='relative h-48 overflow-hidden'>
                  {event.image ? (
                    <img
                      src={event.image}
                      alt={event.title || event.name}
                      className='w-full h-full object-cover transition-transform duration-300 hover:scale-110'
                    />
                  ) : (
                    <div
                      className='w-full h-full flex items-center justify-center'
                      style={{ backgroundColor: 'var(--fourth-bg-color)' }}>
                      <svg
                        className='w-16 h-16 opacity-50'
                        style={{ color: 'var(--span-color)' }}
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
                        />
                      </svg>
                    </div>
                  )}

                  {/* ব্যাজ/ট্রেন্ডিং ইন্ডিকেটর */}
                  <div
                    className='absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg'
                    style={{
                      backgroundColor: 'var(--button-bg-color)',
                      color: 'var(--primary-bg-color)',
                    }}>
                    #{index + 1} ট্রেন্ডিং
                  </div>
                </div>

                {/* কন্টেন্ট সেকশন */}
                <div className='p-5'>
                  <h3
                    className='text-xl font-bold mb-2 line-clamp-1'
                    style={{ color: 'var(--primary-color)' }}>
                    {event.title || event.name || 'ইভেন্টের নাম'}
                  </h3>

                  <p
                    className='text-sm mb-3 line-clamp-2'
                    style={{ color: 'var(--span-color)' }}>
                    {event.description ||
                      'ইভেন্ট সম্পর্কে বিস্তারিত বিবরণ এখানে দেখানো হবে।'}
                  </p>

                  {/* ডিটেইলস */}
                  <div className='space-y-2 mb-4'>
                    {event.date && (
                      <div
                        className='flex items-center text-sm'
                        style={{ color: 'var(--secondary-color)' }}>
                        <svg
                          className='w-4 h-4 mr-2'
                          style={{ color: 'var(--primary-color)' }}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                          />
                        </svg>
                        <span>{event.date}</span>
                      </div>
                    )}

                    {event.location && (
                      <div
                        className='flex items-center text-sm'
                        style={{ color: 'var(--secondary-color)' }}>
                        <svg
                          className='w-4 h-4 mr-2'
                          style={{ color: 'var(--primary-color)' }}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    )}

                    {/* ভিউ কাউন্ট */}
                    {event.views && (
                      <div
                        className='flex items-center text-sm'
                        style={{ color: 'var(--secondary-color)' }}>
                        <svg
                          className='w-4 h-4 mr-2'
                          style={{ color: 'var(--primary-color)' }}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                          />
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                          />
                        </svg>
                        <span>{event.views} views</span>
                      </div>
                    )}
                  </div>

                  {/* বাটন */}
                  <button
                    className='w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105'
                    style={{
                      backgroundColor: 'var(--button-bg-color)',
                      color: 'var(--primary-bg-color)',
                    }}>
                    বিস্তারিত দেখুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // লোডিং বা খালি স্টেট
          <div className='text-center py-20'>
            <div
              className='inline-block animate-spin rounded-full h-12 w-12 border-4'
              style={{
                borderColor: 'var(--primary-color)',
                borderTopColor: 'transparent',
              }}></div>
            <p
              className='mt-4'
              style={{ color: 'var(--span-color)' }}>
              ইভেন্ট লোড হচ্ছে...
            </p>
          </div>
        )}

        {/* ফুটার সেকশন */}
        {firstFourEvents.length > 0 && (
          <div className='text-center mt-12'>
            <button
              className='px-6 py-2 rounded-full font-semibold transition-all duration-300 border-2'
              style={{
                backgroundColor: 'transparent',
                borderColor: 'var(--button-bg-color)',
                color: 'var(--button-bg-color)',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--button-bg-color)';
                e.target.style.color = 'var(--primary-bg-color)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--button-bg-color)';
              }}>
              আরও ইভেন্ট দেখুন →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTrend;
