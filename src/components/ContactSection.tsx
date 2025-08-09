import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstname || !formData.lastname || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to submit the form.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="w-full px-4">
        <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help you transform your business with innovative technology solutions. Reach out to us and let's discuss how we can accelerate your digital journey.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-15 bg-black/20 p-6 sm:p-8 md:p-12 rounded-lg shadow-xl">
            {/* Contact Information */}
            <div className="lg:w-1/3 space-y-8">
              <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
              <p className="text-lg text-muted-foreground">
                Have a project in mind or just want to say hello? We'd love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+91 9999999999</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">contact@techrangeit.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">123 Innovation Drive, Tech City, 54321</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <input
                      placeholder="Your First Name"
                      className="w-full bg-white/10 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 transition-shadow"
                      type="text"
                      value={formData.firstname}
                      name="firstname"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full">
                    <input
                      placeholder="Your Last Name"
                      className="w-full bg-white/10 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 transition-shadow"
                      type="text"
                      value={formData.lastname}
                      name="lastname"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <input
                   placeholder="Your Email"
                   className="w-full bg-white/10 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 transition-shadow"
                   type="email"
                   value={formData.email}
                   name="email"
                   onChange={handleInputChange}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    className="w-full bg-white/10 text-white p-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 transition-shadow"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 px-6 rounded-md hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  Send Message
                </button>
              </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
