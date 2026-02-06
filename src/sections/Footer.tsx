import { ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const externalLinks = [
    { label: 'RielArt.com', href: 'https://rielart.com' },
    { label: 'MySpotix.com', href: 'https://myspotix.com' },
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-charcoal-dark border-t border-white/5">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="inline-block text-2xl font-bold tracking-[0.2em] text-white hover:text-rielart transition-colors duration-300 mb-3"
            >
              GMACOVEI
            </a>
            <p className="text-sm text-white/40">
              Digital Excellence & Local Marketing
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* External Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-4">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 text-sm text-white/60 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-lg transition-all duration-300"
              >
                <span>{link.label}</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-white/40 text-center sm:text-left">
              &copy; {currentYear} Gabriel Macovei. All rights reserved.
            </p>

            {/* Made With */}
            <p className="flex items-center gap-2 text-sm text-white/40">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>in the digital space</span>
            </p>
          </div>
        </div>
      </div>

      {/* Background Gradient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, hsl(217 91% 60% / 0.3) 0%, transparent 70%)',
        }}
      />
    </footer>
  );
};

export default Footer;
