import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import TwitterIcon from './Icon/TwitterIcon';
import FacebookIcon from './Icon/FacebookIcon';
import LinkedInIcon from './Icon/LinkedInIcon';
import InstagramIcon from './Icon/InstagramIcon';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <TwitterIcon />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FacebookIcon />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <InstagramIcon />
      </a>
    </div>
  );
};

export default SocialSidebar;
