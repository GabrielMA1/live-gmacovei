import { ArrowUpRight, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const companyLinks = [
    { label: 'RielArt.com', href: 'https://rielart.com', external: true },
    { label: 'MySpotix.com', href: 'https://myspotix.com', external: true },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-charcoal-950 border-t border-white/5">
      {/* Main Footer Content */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="inline-block mb-6"
            >
              <span className="text-2xl font-bold tracking-[0.2em] text-white">
                GMACOVEI
              </span>
            </a>
            <p className="text-charcoal-400 max-w-md mb-8 leading-relaxed">
              Entrepreneur, digital strategist, and marketing innovator. 
              Building brands and driving growth through RielArt and Spotix.
            </p>
            
            {/* Company Badges */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://rielart.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 bg-rielart/10 border border-rielart/30 rounded-lg text-rielart text-sm font-medium transition-all duration-300 hover:bg-rielart/20"
              >
                RielArt
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://myspotix.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 bg-spotix/10 border border-spotix/30 rounded-lg text-spotix text-sm font-medium transition-all duration-300 hover:bg-spotix/20"
              >
                Spotix
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="group inline-flex items-center gap-2 text-charcoal-400 hover:text-white transition-colors duration-300"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">My Companies</h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-charcoal-400 hover:text-white transition-colors duration-300"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 lg:px-12 xl:px-20 py-6 border-t border-white/5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-charcoal-500 text-center md:text-left">
            © {currentYear} Gabriel Macovei. All rights reserved.
          </p>

          {/* Made With */}
          <p className="flex items-center gap-2 text-sm text-charcoal-500">
            made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and passion
          </p>

          {/* Back to Top */}
          <button
            onClick={() => scrollToSection('#home')}
            className="group inline-flex items-center gap-2 text-sm text-charcoal-400 hover:text-white transition-colors duration-300"
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <ArrowUpRight className="w-4 h-4 rotate-[-45deg]" />
            </div>
          </button>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div 
          className="text-[20vw] font-black text-white/[0.02] leading-none text-center whitespace-nowrap"
          style={{ transform: 'translateY(30%)' }}
        >
          GMACOVEI
        </div>
      </div>
    </footer>
  );
};

export default Footer;
