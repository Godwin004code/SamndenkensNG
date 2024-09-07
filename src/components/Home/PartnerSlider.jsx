import React from 'react';
//import './PartnerSlider.css';

const images = [
  
  'https://ardovaplc.com/_nuxt/img/ardova.e1c5751.png',
  'https://vortexinoxindustries.com/assets/images/logo/vortexlogo.svg',
  'https://5.imimg.com/data5/SELLER/Logo/2024/5/417026460/XP/EU/RV/2200162/smc-logo-120x120.png',
  'https://www.blueflamebiodigesters.com/wp-content/uploads/2021/10/cropped-Biozone-Refined-Logo.png',
  // Add more partner image URLs
];

const PartnerSlider = () => {
  return (
    <div className="slider-container mt-10">
      <div className="slider-track">
        {/* Duplicate the image set to ensure smooth transitions */}
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Partner ${index + 1}`} className="slider-image" />
        ))}
      </div>
    </div>
  );
};

export default PartnerSlider;
