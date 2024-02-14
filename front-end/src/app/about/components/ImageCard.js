/* eslint-disable no-unused-vars */

import React from 'react';
import './ImageCard.css'; // Import your CSS file

const ImageCard = ({ src, alt, textBelowImage }) => {
  return (
    <div className="image-card">
      <img src={src} alt={alt} />
      <div className="text-below-image">{textBelowImage}</div>
    </div>
  );
}

export default ImageCard;
