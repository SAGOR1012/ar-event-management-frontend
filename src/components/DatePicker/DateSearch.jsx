import React, { useState } from 'react';
import './date.css';

const DateSearch = () => {
  const [date, setDate] = useState('');

  return (
    <div className='search-wrapper'>
      {/* Search input */}
      <div className='search-left'>
        <span className='icon'>🔍</span>
        <input
          type='text'
          placeholder='Search for events (Birthday, Concert, Meeting, Wedding)'
        />
      </div>

      {/* Divider */}
      <div className='divider'></div>

      {/* Date input */}
      <div className='date-box'>
        <span className='icon'>📅</span>

        <input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {!date && <span className='placeholder'>Any Date</span>}
      </div>

      {/* Button */}
      <button className='btn'>Find</button>
    </div>
  );
};

export default DateSearch;
