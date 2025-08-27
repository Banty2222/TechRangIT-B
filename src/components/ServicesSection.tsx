import { 
  Users, 
  Globe, 
  Smartphone, 
  Code, 
  Brain, 
  Cloud 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: 'IT Consulting & Staffing',
      description: 'Expert IT consulting services and skilled professional staffing solutions to meet your technology and talent needs.'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.'
    },
    {
      icon: Code,
      title: 'Software Solutions',
      description: 'Custom software development and enterprise solutions tailored to streamline your business operations.'
    },
    {
      icon: Brain,
      title: 'AI and Automation',
      description: 'Intelligent automation solutions and AI-powered systems to enhance efficiency and drive innovation.'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Support',
      description: 'Cloud migration, infrastructure management, and DevOps implementation for scalable and reliable systems.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premier <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-feature group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <service.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {service.description}
              </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
  onClick={() =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  className=" bg-gradient-to-r from-accent to - corporate-blue-600 text-white font-bold py-5 px-6 rounded-lg
             shadow-lg transform transition duration-300
             hover:scale-105 hover:shadow-pl"
>
  Get Started Today
</button>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
