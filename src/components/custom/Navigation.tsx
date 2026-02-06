import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll position for nav styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'RIELART', href: '#rielart' },
    { label: 'SPOTIX', href: '#spotix' },
    { label: 'ABOUT ME', href: '#about' },
    { label: 'CONTACT ME', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'nav-blur py-4 border-b border-white/5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="group relative"
            >
              <span className="text-xl lg:text-2xl font-bold tracking-[0.2em] text-white transition-all duration-300 group-hover:tracking-[0.25em]">
                GMACOVEI
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rielart to-spotix transition-all duration-300 group-hover:w-full" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="relative text-sm font-medium tracking-wider text-charcoal-300 hover:text-white transition-colors duration-300 link-underline"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden relative z-50 p-2 transition-colors duration-300 ${
                isMobileMenuOpen ? 'text-white' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu lg:hidden ${isMobileMenuOpen ? 'open' : ''}`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-3xl font-bold tracking-wider text-white hover:text-rielart transition-all duration-300"
              style={{
                animationDelay: `${index * 100}ms`,
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen
                  ? 'translateY(0)'
                  : 'translateY(20px)',
                transition: `all 0.4s ease ${index * 100}ms`,
              }}
            >
              {item.label}
            </a>
          ))}
          
          {/* Quick Links in Mobile Menu */}
          <div 
            className="mt-12 pt-8 border-t border-white/10 flex flex-col items-center gap-4"
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: 'opacity 0.4s ease 0.5s',
            }}
          >
            <span className="text-sm text-charcoal-400 uppercase tracking-wider">Visit My Companies</span>
            <div className="flex gap-6">
              <a
                href="https://rielart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rielart hover:text-rielart-light transition-colors"
              >
                RielArt.com
              </a>
              <a
                href="https://myspotix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-spotix hover:text-spotix-light transition-colors"
              >
                MySpotix.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
