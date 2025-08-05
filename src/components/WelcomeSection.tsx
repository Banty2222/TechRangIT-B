import welcomeImage from '@/assets/welcome-partnership.jpg';

const WelcomeSection = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#welcome');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black/20 p-8 md:p-12 rounded-lg shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">
            <div className="md:col-span-7">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Welcome to <span className="text-accent">TechRange</span> IT Solution's...!
              </h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-200 mb-4">
                Your Partner in Digital Transformation
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                At TechRange IT Solutions, we are dedicated to transforming technology into powerful business solutions. With a focus on innovation, precision, and expertise, we partner with businesses to provide tailored IT solutions that drive efficiency and growth. We are more than just a staffing agency; we are architects of opportunity in the IT sector, delivering value through strategic workforce solutions and talent management.
              </p>
              <p className="text-sm text-gray-300">
                We specialize in offering comprehensive, industry-leading services to connect exceptional IT professionals with businesses in need of expertise. Our understanding of the ever-evolving technology landscape enables us to provide highly effective, bespoke solutions that meet both organizational and individual goals. At TechRange IT Solutions, our commitment to excellence has made us a trusted partner for companies and professionals alike.
              </p>
            </div>
            <div className="md:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
