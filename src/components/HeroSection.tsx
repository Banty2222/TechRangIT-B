const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#welcome');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-corporate-blue">
        <video
          src="/home/user/techrangeit-test1/public/HomePage_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          Your browser does not support the video tag.
        </video>
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto animate-fade-in-up">
            <h1 className="hero-text mb-8">
              <span className="gradient-text">INNOVATE.</span>
              <br />
              <span className="gradient-text">INTEGRATE.</span>
              <br />
              <span className="gradient-text">INSPIRE.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge technology solutions that drive growth, efficiency, and success for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToNext}
                className="btn-primary animate-scale-in"
              >
                Get Started
              </button>
              <button
                onClick={() => document.querySelector('#why-choose')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary animate-scale-in"
                style={{ animationDelay: '0.2s' }}
              >
                Why Choose Us
              </button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;