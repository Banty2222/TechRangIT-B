import { Award, Users, Target, Layers } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Deep knowledge across multiple industries with proven track record in delivering successful IT solutions and consulting services.'
    },
    {
      icon: Users,
      title: 'Personalized Services',
      description: 'Tailored solutions that meet your unique business requirements, ensuring maximum value and ROI for your technology investments.'
    },
    {
      icon: Target,
      title: 'Commitment to Excellence',
      description: 'Unwavering dedication to quality, innovation, and customer satisfaction in every project we undertake.'
    },
    {
      icon: Layers,
      title: 'End-to-End Solutions',
      description: 'Comprehensive technology services from consultation and development to deployment and ongoing support.'
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-secondary/30 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="gradient-text">TechRangeIT</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what sets us apart in the competitive world of IT consulting and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-feature animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;