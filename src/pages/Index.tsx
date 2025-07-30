import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WelcomeSection from '@/components/WelcomeSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import NetworkBackground from '@/components/NetworkBackground';

const Index = () => {
  return (
    <div className="min-h-screen">
      <NetworkBackground />
      <Header />
      <HeroSection />
      <WelcomeSection />
      <WhyChooseSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
