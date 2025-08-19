import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NetworkBackground from '@/components/CanvasBackground';
import { Code, Smartphone, Cloud, Shield, BarChart3, Headphones, Cpu, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "IT Consulting & Staffing",
      description: "Expert IT consulting services and strategic workforce solutions to help your business find the right technology talent and optimize your IT infrastructure.",
      features: ["Technical Recruitment", "IT Strategy Consulting", "Team Augmentation", "Project Management"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies, responsive design, and optimized for performance and user experience.",
      features: ["Responsive Web Design", "E-commerce Solutions", "Progressive Web Apps", "CMS Development"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android, designed to engage users and drive business growth.",
      features: ["Native iOS/Android Apps", "Cross-platform Solutions", "UI/UX Design", "App Store Optimization"]
    },
    {
      icon: Cpu,
      title: "Software Solutions",
      description: "Custom software development tailored to your business needs, from enterprise applications to specialized industry solutions.",
      features: ["Enterprise Software", "API Development", "Legacy System Modernization", "Software Integration"]
    },
    {
      icon: BarChart3,
      title: "AI and Automation",
      description: "Intelligent automation solutions and AI-powered applications to streamline processes and enhance business efficiency.",
      features: ["Process Automation", "Machine Learning", "Chatbot Development", "Data Analytics"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Support",
      description: "Cloud migration, infrastructure management, and DevOps practices to ensure scalable, reliable, and secure operations.",
      features: ["Cloud Migration", "Infrastructure as Code", "CI/CD Pipelines", "Monitoring & Logging"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets, including threat analysis, risk management, and compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response"]
    },
    {
      icon: Headphones,
      title: "IT Support & Managed Services",
      description: "24/7 IT support and managed services to ensure your technology infrastructure runs smoothly and efficiently.",
      features: ["24/7 Technical Support", "System Monitoring", "Maintenance Services", "Help Desk Support"]
    }
  ];

  return (
    <div className="min-h-screen">
      <NetworkBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card-service group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "We analyze your requirements and understand your business goals." },
              { step: "02", title: "Planning", description: "We create a detailed project roadmap and technical specifications." },
              { step: "03", title: "Development", description: "Our expert team builds your solution using best practices." },
              { step: "04", title: "Delivery", description: "We deploy, test, and provide ongoing support for your solution." }
            ].map((process, index) => (
              <div
                key={process.step}
                className="card-feature text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl font-bold text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {process.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how our services can help transform your business and achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Us Today
              </button>
              <button 
                className="btn-secondary"
                onClick={() => window.location.href = '/'}
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;