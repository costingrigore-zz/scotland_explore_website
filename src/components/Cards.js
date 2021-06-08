import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/dundee.jpg'
              text='Explore the sunniest city in Scotland'
              label='Dundee'
              path='/services'
            />
            <CardItem
              src='images/edinburgh.jpg'
              text='Fancy a city break? visit Edinburgh'
              label='Edinburgh'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/glasgow.jpg'
              text='Come to Glasgow to find out more about our new music venues'
              label='Glasgow'
              path='/services'
            />
            <CardItem
              src='images/glamis.jpg'
              text='Have a break away from the city in Glamis'
              label='Glamis'
              path='/products'
            />
            <CardItem
              src='images/aberdeen.jpg'
              text='Have a nice winter break in Aberdeen'
              label='Aberdeen'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
