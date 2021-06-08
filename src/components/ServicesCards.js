import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function ServicesCards() {
  return (
    <div className='services__cards'>
      <h1 className="services__title">These are our services:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/ski.jpg'
              text='Skiing services in several Scottish locations'
              label='Ski'
              path='/services'
            />
            <CardItem
              src='images/snowboard.jpg'
              text='Snowboarding services near Aviemore'
              label='Snowboarding'
              path='/services'
            />
            <CardItem
              src='images/hiking.jpg'
              text='Have a nice hike in the Highlands'
              label='Hiking'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/concert.jpg'
              text='Come to Glasgow to see your favourite artists'
              label='Music'
              path='/services'
            />
            <CardItem
              src='images/standup.jpg'
              text='Are you fan of stand-up, come to Aberdeen'
              label='Comedy'
              path='/services'
            />
            <CardItem
              src='images/animals.jpg'
              text='Enjoy seeing animals, visit our zoos'
              label='Animals'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesCards;
