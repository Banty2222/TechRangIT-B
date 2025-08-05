import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import TwitterIcon from './Icon/TwitterIcon';
import FacebookIcon from './Icon/FacebookIcon';
import LinkedInIcon from './Icon/LinkedInIcon';
import InstagramIcon from './Icon/InstagramIcon';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const services = [
    { name: 'Application Development', href: '/services' },
    { name: 'Cloud Solutions', href: '/services' },
    { name: 'Cybersecurity', href: '/services' },
    { name: 'Data & Analytics', href: '/services' }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-footer-blue text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" onClick={scrollToTop}>
              <h3 className="text-2xl font-bold">
                Tech<span className="text-accent">Range</span> IT
              </h3>
            </Link>
            <p className="text-gray-400 mb-4">
              Your partner in digital innovation. We build solutions that drive progress and inspire change.
            </p>
            <div className="flex space-x-4">
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-teal transition-colors"><LinkedInIcon /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-teal transition-colors"><InstagramIcon /></a>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-teal transition-colors"><FacebookIcon /></a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent-teal transition-colors"><TwitterIcon /></a>  
                        </div>
                    </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    onClick={scrollToTop}
                    className="text-gray-300 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-gray-300">
                123 Innovation Drive, Tech City, 54321
              </p>
              <p className="text-gray-300">
                contact@techrangeit.clone
              </p>
              <p className="text-gray-300">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 TechRangeIT Solutions. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Innovate. Integrate. Inspire.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
