import React from 'react';

const quotes = [
  {
    name: 'Yogi Berra',
    quote: "It's gettin' late early",
    image:
      'https://cdn11.bigcommerce.com/s-3kwrgfp6rz/images/stencil/original/uploaded_images/yogi-berra.jpg?t=1535410358',
  },
  {
    name: 'Lou Gehrig',
    quote: 'I consider myself the luckiest man on the face of the earth',
    image:
      'https://www.pbs.org/wgbh/americanexperience/media/filer_public_thumbnails/filer_public/89/a3/89a34b3c-e3a2-4762-894f-39e17ddc36d1/dimaggio-gehrig.jpg__400x511_q85_crop_subsampling-2_upscale.jpg',
  },
  {
    name: 'Reggie Jackson',
    quote: "If I played in New York, they'd name a candy bar after me",
    image:
      'https://bsp-static.playbill.com/18/f4/47f6da9e4160963f65c2df16cb49/7reggiejackson.jpg',
  },
  {
    name: 'Derek Jeter',
    quote: "You don't just accidentally show up in the World Series.",
    image:
      'https://nypost.com/wp-content/uploads/sites/2/2020/01/derek-jeter-8.jpg?quality=80&strip=all',
  },
];

let yankee = quotes[Math.floor(Math.random() * quotes.length)];

const Quotes = () => {
  return (
    <div className='container'>
      <div className='jumbotron border'>
        <blockquote className='blockquote'>
          <img src={yankee.image} alt={yankee.name} />
          <p>{yankee.quote}</p>
          <footer className='blockquote-footer'>{yankee.name}</footer>
        </blockquote>
      </div>
    </div>
  );
};

// class Quotes extends React.Component {
//   constructor(){

//   }
//   componentDidMount() {
//     let yankee = quotes[Math.floor(Math.random() * quotes.length)];
//   }

//   render() {
//     return (
//       <div className='container'>
//         <div className='jumbotron border'>
//           <blockquote className='blockquote'>
//             <img src={yankee.image} alt={yankee.name} />
//             <p>{yankee.quote}</p>
//             <footer className='blockquote-footer'>{yankee.name}</footer>
//           </blockquote>
//         </div>
//       </div>
//     );
//   }
// }

export default Quotes;
