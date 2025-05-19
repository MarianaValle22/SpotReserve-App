import React from 'react';
import '../assets/styles/ImageWithText.css';

const ImageWithText = ({ src, alt, hoverText }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="hover-image" />
      <div className="hover-overlay"></div> 
      <div className="hover-text">{hoverText}</div>
    </div>
  );
};

export default ImageWithText;
