import welcomeImage from '@/assets/welcome-partnership.jpg';

const WelcomeSection = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#welcome');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 ">
      <div className="Fullwidth px-4">
        <div className="bg-black/20 p-6 sm:p-8 md:p-12 rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Left Text Section */}
            <div className="md:w-1/2">
              <h2 className="font-bold text-white mb-2">
                <span className="text-3xl md:text-2xl align-bottom">Welcome to </span>
                <span className="text-4xl md:text-3xl">Tech<span className="text-accent">Range</span> IT</span>
                <span className="text-3xl md:text-2xl align-bottom"> Solution's...!</span>
              </h2>
              
              <h3 className="text-lg font-bold text-white mb-8">
                Your Partner in Digital Transformation
              </h3>

              
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                At TechRange IT Solutions, we are dedicated to transforming technology into powerful business solutions. 
                With a focus on innovation, precision, and expertise, we partner with businesses to provide tailored IT 
                solutions that drive efficiency and growth. We are more than just a staffing agency; we are architects of 
                opportunity in the IT sector, delivering value through strategic workforce solutions and talent management.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                We specialize in offering comprehensive, industry-leading services to connect exceptional IT professionals 
                with businesses in need of expertise. Our understanding of the ever-evolving technology landscape enables 
                us to provide highly effective, bespoke solutions that meet both organizational and individual goals. At 
                TechRange IT Solutions, our commitment to excellence has made us a trusted partner for companies and 
                professionals alike.
              </p>
            </div>

            {/* Right Image Section */}
            <div className="md:w-1/2 md-mask-fade-left">
              <img
                src="src/assets/representation-user-experience-interface-design.jpg"
                alt="Our team collaborating"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
