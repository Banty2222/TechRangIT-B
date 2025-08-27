import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-corporate-blue"
      >
        <video
          src="/src/assets/hero-digital-transformation.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          aria-hidden="true"
          >
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight mb-12 animate-child delay-1 [text-shadow:4px_4px_0_rgba(0,0,0,0.4)]">
            INNOVATE. INTEGRATE. INSPIRE.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-200 max-w-3xl mx-auto mb-12 animate-child delay-2 [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
            We deliver cutting-edge technology solutions that drive growth, efficiency, and success for your business.
          </p>
          
          <div className="text-center mt-12"></div>
          <button
  
  onClick={() =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  className=" bg-gradient-to-r from-accent to- corporate-blue-600 text-white font-bold py-5 px-6 rounded-lg
             shadow-lg transform transition duration-300
             hover:scale-105 hover:shadow-pl"
>
  Get Started
  </button>
  
      </div>
    </section>
  );
};

export default Hero;
