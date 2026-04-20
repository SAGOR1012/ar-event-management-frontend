import React from 'react';
import { useForm } from 'react-hook-form';
import './reserve.css';
const ReserveForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='  flex items-center justify-center '>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-5xl bg-white rounded-xl   p-8 shadow-sm space-y-10'>
        {/* ===== Identity & Intent ===== */}
        <div>
          <h2 className='text-lg font-semibold text-[var(--primary-color)] mb-6'>
            — Identity & Intent
          </h2>

          <div className='grid md:grid-cols-2 gap-6'>
            <input
              {...register('eventTitle')}
              placeholder='Event Title'
              className='input'
            />

            <select
              {...register('category')}
              className='input'>
              <option>Corporate Gala</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Concert</option>
            </select>

            {/* Extra fields */}
            <input
              {...register('name')}
              placeholder='Your Name'
              className='input'
            />

            <input
              {...register('phone')}
              placeholder='Phone Number'
              className='input'
            />

            <input
              {...register('address')}
              placeholder='Address'
              className='input md:col-span-2'
            />

            <input
              {...register('reference')}
              placeholder='Reference (optional)'
              className='input md:col-span-2'
            />
          </div>
        </div>

        {/* ===== Temporal Logistics ===== */}
        <div>
          <h2 className='text-lg font-semibold text-[var(--primary-color)] mb-6'>
            — Temporal Logistics
          </h2>

          <div className='grid md:grid-cols-4 gap-6'>
            <input
              type='date'
              {...register('date')}
              className='input'
            />

            <input
              type='time'
              {...register('time')}
              className='input'
            />

            <input
              {...register('attendance')}
              placeholder='Guest Count'
              className='input'
            />

            <input
              {...register('duration')}
              placeholder='Duration (hours)'
              className='input'
            />
          </div>
        </div>

        {/* ===== Curated Tones ===== */}
        <div>
          <h2 className='text-lg font-semibold text-[var(--primary-color)] mb-6'>
            — Curated Tones
          </h2>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
            {['Catering', 'Production', 'Security', 'Styling'].map((tone) => (
              <label
                key={tone}
                className='cursor-pointer'>
                {/* checkbox */}
                <input
                  type='checkbox'
                  value={tone}
                  {...register('tones')}
                  className='peer hidden'
                />

                {/* card */}
                <div
                  className='
            flex flex-col items-center justify-center
            border rounded-lg p-5 text-center
            transition duration-200
            border-gray-200
            bg-white text-[var(--primary-color)]

            peer-checked:bg-[var(--button-bg-color)]
            peer-checked:text-white
            peer-checked:border-[var(--button-bg-color)]

            hover:bg-gray-50
          '>
                  <span className='text-sm font-medium'>{tone}</span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* ===== Footer ===== */}
        <div className='flex justify-between items-center pt-6 border-t '>
          <p className='text-xs text-gray-400'>
            * We keep your information secure.
          </p>

          <div className='flex '>
            <button
              type='submit'
              className='btn bg-[var(--button-bg-color)] text-white p-10 rounded-md hover:scale-105 transition duration-100 font-medium'>
              Confirm Booking
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReserveForm;
