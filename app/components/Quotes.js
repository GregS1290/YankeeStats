import React from 'react';

const quotes = [
  { name: 'Yogi Berra', quote: "It's gettin' late early" },
  {
    name: 'Lou Gehrig',
    quote: 'I consider myself the luckiest man on the face of the earth',
  },
  {
    name: 'Reggie Jackson',
    quote: "If I played in New York, they'd name a candy bar after me",
  },
  {
    name: 'Derek Jeter',
    quote: "You don't just accidentally show up in the World Series.",
  },
];

const Quotes = () => {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <blockquote className='blockquote'>
          <p>"It's gettin late early."</p>
          <footer className='blockquote-footer'>Yogi Berra</footer>
        </blockquote>
        <button className='btn btn-lg btn-info'>Next Quote</button>
      </div>
    </div>
  );
};

export default Quotes;
