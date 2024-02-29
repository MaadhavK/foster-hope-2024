/* eslint-disable no-unused-vars */

import React from 'react';
import './ImageCard.css'; // Import your CSS file
import { Cabin, Lora } from 'next/font/google';

const cabin = Cabin({weight:'400', subsets:['latin']})
const lora = Lora({weight:'400', subsets:['latin']})

// image card
const ImageCard = ({ src, alt, textBelowImage }) => {
  return (
    <div className="image-card">
      <img src={src} alt={alt} />
      <div className="text-below-image"><div className={lora.className}>{textBelowImage}</div></div>
    </div>
  );
}

export default ImageCard;
