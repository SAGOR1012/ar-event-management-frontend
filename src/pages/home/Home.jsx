import React from 'react';
import './style.css';
import Hero from '../../components/HeroSection/Hero';
import EventCategories from '../../components/EventCategories/EventCategories';
import events from '../../../public/fackData.json';
const Home = () => {
  return (
    <div>
      {console.log(events)}
      <Hero></Hero>
      <div className='px-4 md:px-10 lg:px-20'>
        <EventCategories></EventCategories>
      </div>
    </div>
  );
};

export default Home;
