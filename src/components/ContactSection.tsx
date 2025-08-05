import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
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
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-12 ">
      <div className="container mx-auto px-6">
        <div className="bg-black/20 p-6 sm:p-8 md:p-12 rounded-lg shadow-xl animate-child delay-5">
          <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you transform your business with innovative technology solutions. Reach out to us and let's discuss how we can accelerate your digital journey.
          </p>
      
        </div>
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h3 className="text-3xl font-semibold text-foreground mb-4">Contact Information</h3>
              <p className="text-lg text-muted-foreground mb-4">
                Have a project in mind or just want to say hello? We'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 9999999999</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">contact@techrangeit.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">123 Innovation Drive, Tech City, 54321</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                  placeholder="Your First Name"
                />
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastemail}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                  placeholder="Your Last Name"
                />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-white/5 text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                placeholder="Your Email"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full bg-white/5 text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500"
                placeholder="Your Message"
              />
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
