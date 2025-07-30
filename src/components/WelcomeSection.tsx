import welcomeImage from '@/assets/welcome-partnership.jpg';

const WelcomeSection = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#welcome');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="welcome" className="py-20 text-white">
      <div className="w-1/2 mx-auto">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6">
                Welcome to{' '}
                <span className="gradient-text">TechRange IT Solutions</span>...!
              </h2>
              <h3 className="text-2xl font-semibold text-blue-300 mb-4 md:mb-6">
                Your Partner in Digital Transformation.
              </h3>
              <p className="text-lg text-blue-200 leading-relaxed mb-4 md:mb-6">
                At TechRange IT Solutions, we specialize in delivering innovative technology solutions{' '}
                that empower businesses to thrive in the digital age. From IT consulting and staffing{' '}
                to cutting-edge software development and AI-driven automation, we're your trusted{' '}
                partner for comprehensive digital transformation.
              </p>
              <p className="text-lg text-blue-200 leading-relaxed mb-4 md:mb-6">
                Based in Hyderabad, we combine local expertise with global standards to help{' '}
                organizations achieve their technological goals and drive sustainable growth.
              </p>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
              <img
                src={welcomeImage}
                alt="Welcome to TechRange IT Solutions"
                className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;