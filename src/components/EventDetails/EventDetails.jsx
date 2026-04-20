import React from 'react';
import ReserveForm from '../ReserveForm/ReserveForm';

const EventDetails = () => {
  // 👉 Demo static data
  const event = {
    name: 'Elegant Wedding Ceremony',
    location: 'Dhaka Convention Center',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486',
    description:
      'A luxurious wedding event with premium decoration and full service. Experience a curated environment designed for unforgettable moments.',
    date: '2026-05-20',
    type: 'Wedding',
    maxCapacity: 150,
    availableSeats: 45,
    price: 500,
    status: 'available',
    features: [
      'AC',
      'Catering',
      'Live Music',
      'Catering Service',
      'Recording,Streaming',
      'Photography',
    ],
  };

  return (
    <div className='min-h-screen bg-[var(--primary-bg-color)] '>
      {/* HERO */}
      <div className='relative h-[320px] w-full overflow-hidden'>
        <img
          src={event.image}
          alt={event.name}
          className='w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent'></div>

        <div className='absolute bottom-6 left-8 text-white'>
          <h1 className='text-4xl font-bold'>{event.name}</h1>
          <p className='text-sm opacity-80'>{event.location}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className='max-w-[1400px] mx-auto px-6 border py-12 flex flex-col md:flex-row gap-10'>
        {/* LEFT */}
        <div className='md:col-span-2 space-y-6 max-w-[500px]'>
          <h2 className='text-2xl font-semibold text-[var(--primary-color)]'>
            About Event
          </h2>

          <p className='text-[var(--secondary-color)] leading-relaxed'>
            {event.description}
          </p>

          {/* INFO */}
          <div className='grid grid-cols-2 gap-4 text-sm text-[var(--secondary-color)]'>
            <p>
              <strong>Date:</strong> {event.date}
            </p>
            <p>
              <strong>Type:</strong> {event.type}
            </p>
            <p>
              <strong>Capacity:</strong> {event.maxCapacity}
            </p>
            <p>
              <strong>Available:</strong> {event.availableSeats}
            </p>
          </div>

          {/* FEATURES */}
          <div className='flex flex-wrap gap-2'>
            {event.features.map((f, i) => (
              <span
                key={i}
                className='border border-[var(--button-bg-color)] text-xs md:text-md font-bold text-[var(--primary-color)] px-3 py-4 rounded-md '>
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT (BOOKING UI ONLY) */}
        <ReserveForm></ReserveForm>
      </div>
    </div>
  );
};

export default EventDetails;
