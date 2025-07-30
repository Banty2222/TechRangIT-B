import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NetworkBackground from '@/components/NetworkBackground';
import { ExternalLink, Github, Calendar, Users, Tag } from 'lucide-react';

const OurProjects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      duration: "4 months",
      teamSize: "5 developers",
      features: [
        "Multi-vendor marketplace",
        "Real-time inventory tracking",
        "Advanced analytics",
        "Mobile-responsive design"
      ],
      status: "Completed",
      year: "2024"
    },
    {
      title: "Healthcare Management System",
      category: "Software Solutions",
      description: "Custom healthcare management platform for patient records, appointment scheduling, and billing integration.",
      technologies: ["React", "Python", "PostgreSQL", "AWS"],
      duration: "6 months",
      teamSize: "8 developers",
      features: [
        "Patient management",
        "Appointment scheduling",
        "Electronic health records",
        "Billing integration"
      ],
      status: "Completed",
      year: "2024"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT"],
      duration: "5 months",
      teamSize: "6 developers",
      features: [
        "Biometric authentication",
        "Real-time transactions",
        "Account management",
        "Security monitoring"
      ],
      status: "Completed",
      year: "2023"
    },
    {
      title: "AI-Powered Analytics Platform",
      category: "AI & Analytics",
      description: "Machine learning platform for business intelligence with predictive analytics and automated reporting.",
      technologies: ["Python", "TensorFlow", "React", "Docker"],
      duration: "8 months",
      teamSize: "10 developers",
      features: [
        "Predictive analytics",
        "Automated reporting",
        "Data visualization",
        "ML model deployment"
      ],
      status: "Completed",
      year: "2023"
    },
    {
      title: "Cloud Infrastructure Migration",
      category: "Cloud & DevOps",
      description: "Complete cloud migration project with containerization, CI/CD pipeline setup, and monitoring solutions.",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins"],
      duration: "3 months",
      teamSize: "4 specialists",
      features: [
        "Cloud migration",
        "Container orchestration",
        "CI/CD automation",
        "Performance monitoring"
      ],
      status: "Completed",
      year: "2023"
    },
    {
      title: "Enterprise CRM System",
      category: "Software Solutions",
      description: "Custom CRM solution with advanced lead management, sales pipeline tracking, and integration capabilities.",
      technologies: ["Angular", "Java", "MySQL", "Spring Boot"],
      duration: "7 months",
      teamSize: "9 developers",
      features: [
        "Lead management",
        "Sales pipeline",
        "Customer analytics",
        "Third-party integrations"
      ],
      status: "In Progress",
      year: "2024"
    }
  ];

  const categories = ["All", "Web Development", "Mobile Development", "Software Solutions", "AI & Analytics", "Cloud & DevOps"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <NetworkBackground />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Showcasing our successful implementations and innovative solutions across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="card-3d p-8">
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="card-3d p-8">
              <h3 className="text-4xl font-bold text-accent mb-2">50+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="card-3d p-8">
              <h3 className="text-4xl font-bold text-primary mb-2">98%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="card-3d p-8">
              <h3 className="text-4xl font-bold text-accent mb-2">24/7</h3>
              <p className="text-muted-foreground">Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className="card-3d overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      <Tag className="w-3 h-3 mr-1" />
                      {project.category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Duration: {project.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2" />
                      <span>Team: {project.teamSize}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm rounded-lg hover:bg-primary/90 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4" />
                      View Details
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-lg hover:bg-secondary/80 transition-colors duration-300">
                      <Github className="w-4 h-4" />
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss your requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="btn-primary"
                onClick={() => window.location.href = '/contact'}
              >
                Start a Project
              </button>
              <button 
                className="btn-secondary"
                onClick={() => window.location.href = '/services'}
              >
                View Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurProjects;