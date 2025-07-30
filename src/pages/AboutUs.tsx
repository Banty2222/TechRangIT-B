import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NetworkBackground from '@/components/NetworkBackground';
import { Target, Users, Award, Globe } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver innovative technology solutions that empower businesses to achieve their digital transformation goals and drive sustainable growth in the modern economy."
    },
    {
      icon: Users,
      title: "Our Team",
      description: "Our team consists of experienced IT professionals, developers, and consultants who bring years of industry expertise and a passion for technological innovation."
    },
    {
      icon: Award,
      title: "Our Vision",
      description: "To be a globally recognized IT consulting and technology solutions provider that transforms businesses through cutting-edge digital innovations."
    },
    {
      icon: Globe,
      title: "Our Values",
      description: "Excellence, Innovation, Integrity, and Customer Success guide everything we do. We believe in building long-term partnerships with our clients."
    }
  ];

  return (
    <div className="min-h-screen">
      <NetworkBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              About <span className="gradient-text">TechRange IT</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Transforming businesses through innovative technology solutions and strategic IT consulting.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-4xl font-bold text-foreground">
                  Our Story
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  TechRange IT Solutions was founded with a vision to bridge the gap between cutting-edge technology and business success. Based in Hyderabad, we have grown from a small team of passionate technologists to a comprehensive IT solutions provider serving clients globally.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We specialize in offering comprehensive, industry-leading services to connect exceptional IT professionals with businesses in need of expertise. Our understanding of the ever-evolving technology landscape enables us to provide highly effective, bespoke solutions that meet both organizational and individual goals.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At TechRange IT Solutions, our commitment to excellence has made us a trusted partner for companies and professionals alike. We are more than just a staffing agency; we are architects of opportunity in the IT sector, delivering value through strategic workforce solutions and talent management.
                </p>
              </div>
              <div className="relative animate-scale-in">
                <div className="card-3d p-8 text-center">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-primary">5+ Years</h3>
                    <p className="text-muted-foreground">Industry Experience</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="card-3d p-6 text-center">
                    <h4 className="text-2xl font-bold text-accent">100+</h4>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="card-3d p-6 text-center">
                    <h4 className="text-2xl font-bold text-accent">50+</h4>
                    <p className="text-sm text-muted-foreground">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values and principles that guide our approach to technology solutions and client partnerships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-feature group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in technology, business strategy, and innovation.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="card-3d p-12">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Experienced Professionals
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our team consists of skilled developers, IT consultants, project managers, and business analysts who work collaboratively to deliver exceptional results. We combine technical expertise with business acumen to ensure every solution aligns with your strategic objectives.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-primary mb-2">15+</h4>
                  <p className="text-muted-foreground">IT Specialists</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-accent mb-2">10+</h4>
                  <p className="text-muted-foreground">Years Average Experience</p>
                </div>
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-primary mb-2">24/7</h4>
                  <p className="text-muted-foreground">Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;