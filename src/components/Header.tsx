import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Projects', href: '/projects' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to the top of the page whenever the path changes.
  // This ensures that navigating to a new page starts from the beginning.
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 header-blur transition-all duration-300 ${
      isScrolled ? 'scrolled' : ''
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
 <Link to="/" onClick={scrollToTop} className="flex items-center">
 <img src="/src/assets/LOGO1.png" alt="TechRange IT Logo" className="h-8 w-auto mr-2" />
              <h1 className="text-2xl font-bold text-white">
 Tech<span className="text-accent">Range</span> IT
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center space-x-8 lg:space-x-12 xl:space-x-16">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={scrollToTop}
                className="text-foreground hover:text-primary font-medium transition-colors duration-200 hover:scale-105 transform"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}

          <div className="md:hidden">

            <button

              onClick={() => setIsMenuOpen(!isMenuOpen)}

              className="text-foreground hover:text-primary p-2"

            >

              {isMenuOpen ? (

                <X className="h-6 w-6" />

              ) : (

                <Menu className="h-6 w-6" />

              )}

            </button>

          </div>

        </div>



        {/* Mobile Navigation */}

        {isMenuOpen && (

          <div className="md:hidden bg-background border-t border-border">

            <div className="px-2 pt-2 pb-3 space-y-1">

              {navigation.map((item) => (

                <Link

                  key={item.name}

                  to={item.href}

                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToTop();
                  }}

                  className="block w-full text-left px-3 py-2 text-foreground hover:text-primary font-medium transition-colors duration-200"

                >

                  {item.name}

                </Link>

              ))}

            </div>

          </div>

        )}

      </div>

    </header>

  );

};


export default Header;
