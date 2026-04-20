import React, { useState, useEffect } from 'react';
import HeadingTitle from '../Heading_Title/HeadingTitle';
import { Link } from 'react-router-dom';

const TrendingEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/fackData.json'); // ✅ correct path
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);
  const sliceEvents = events.slice(3, 6);

  return (
    <section className='bg-surface-container-low py-24 px-8'>
      <div className='max-w-screen-2xl mx-auto'>
        {/* Header */}
        <div className='border-b border-gray-200 pb-6 mb-10'>
          <HeadingTitle
            title={'Real-Time Pulse'}
            heading={'Trending Now'}
          />
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {sliceEvents.map((event, index) => (
            <div
              key={index}
              className=' bg-white h-[600px] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300'>
              {/* Image */}
              <div className='relative h-96 overflow-hidden'>
                <img
                  src={event.image}
                  alt={event.name}
                  className='w-full h-full object-cover hover:scale-105 transition duration-500'
                />

                {/* Status badge */}
                <div className='absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded'>
                  {event.status === 'available' ? 'AVAILABLE' : 'SOLD OUT'}
                </div>
              </div>

              {/* Content */}
              <div className='p-6'>
                <div className='flex justify-between text-xs text-gray-500 mb-2'>
                  <span>{event.date}</span>
                  <span
                    className={
                      event.status === 'available'
                        ? 'text-green-600'
                        : 'text-red-500'
                    }>
                    {event.status}
                  </span>
                </div>

                <h3 className='text-lg font-semibold text-gray-900'>
                  {event.name}
                </h3>

                <p className='text-sm text-gray-500 mt-2 line-clamp-2'>
                  {event.description}
                </p>

                <div className='flex justify-between items-center mt-4'>
                  <span className='font-bold text-gray-900'>
                    ${event.price}
                  </span>
                  {/* <Link to ={`/event/${event.name}`}> */}
                  <Link to={`/event-details`}>
                    <button className='border btn border-gray-200 p-2 rounded-md bg-[var(--button-color)]  text-sm font-medium text-[var(--secondary-color)] '>
                      Reserve →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingEvents;
