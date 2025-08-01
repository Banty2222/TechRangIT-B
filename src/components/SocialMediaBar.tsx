import React, { useState, useEffect } from 'react';
import InstagramIcon from './Icon/InstagramIcon';
import FacebookIcon from './Icon/FacebookIcon';
import LinkedInIcon from './Icon/LinkedInIcon';
import TwitterIcon from './Icon/TwitterIcon';

const SocialMediaBar = () => {
  const [isVisible, setIsVisible] = useState(true); // Start visible

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(prev => !prev); // Toggle visibility
    }, 6000); // 6000ms = 6 seconds

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      className={`fixed top-1/2 transform -translate-y-1/2 right-0 z-50 flex flex-col space-y-4 p-3 bg-gray-0 bg-opacity-50 rounded-l-lg transition-opacity duration-1000 ${
        isVisible ? 'opacity-50' : 'opacity-0 pointer-events-none'
      }`}
    >
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
        <InstagramIcon className="w-2 h-2"/>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
        <FacebookIcon className="w-2 h-2"/>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
        <LinkedInIcon className="w-2 h-2"/>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent">
        <TwitterIcon className="w-2 h-2"/>
      </a>
    </div>
  );
};

export default SocialMediaBar;