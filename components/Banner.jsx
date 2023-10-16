import React from 'react';

const Banner = ({ parentStyle, childStyle, bannerName }) => (
  <div className={`relative ${parentStyle} w-full flex items-center 
  z-0 overflow-hidden nft-gradient`}
  >
    <p className={`font-bold text-5xl font-poppins leading-70 ${childStyle}`}>{bannerName}</p>
    <div className="absolute w-48 h-48 sm:w-36 sm:h-36 rounded-full white-bg sm:-top-9 sm:-left-10
     -left-12 -top-9 -z-5"
    />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full white-bg sm:-bottom-9 sm:-right-10
     -right-24 -bottom-24 -z-5"
    />
  </div>
);
export default Banner;
