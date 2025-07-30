import welcomeImage from '@/assets/welcome-partnership.jpg';

const WelcomeSection = () => {
  return (
    <section id="welcome" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Welcome to{' '}
              <span className="gradient-text">TechRange IT Solutions</span>...!
            </h2>
            <h3 className="text-2xl font-semibold text-primary">
              Your Partner in Digital Transformation.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At TechRange IT Solutions, we specialize in delivering innovative technology solutions 
              that empower businesses to thrive in the digital age. From IT consulting and staffing 
              to cutting-edge software development and AI-driven automation, we're your trusted 
              partner for comprehensive digital transformation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Hyderabad, we combine local expertise with global standards to help 
              organizations achieve their technological goals and drive sustainable growth.
            </p>
          </div>

          {/* Right side - Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-card-hover)]">
              <img
                src={welcomeImage}
                alt="Digital transformation and partnership"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 mix-blend-overlay"></div>
            </div>
            
            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;