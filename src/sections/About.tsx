import { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, Users, Zap, Target, TrendingUp, ArrowRight } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Briefcase, value: '5+', label: 'Years Experience', color: 'rielart' },
    { icon: Target, value: '50+', label: 'Projects Delivered', color: 'spotix' },
    { icon: Users, value: '30+', label: 'Happy Clients', color: 'rielart' },
    { icon: Award, value: '100%', label: 'Client Satisfaction', color: 'spotix' },
  ];

  const services = [
    {
      title: 'RielArt Digital',
      description: 'Full-service digital agency crafting stunning websites, powerful brands, and results-driven marketing campaigns.',
      icon: Zap,
      color: 'rielart',
      link: 'https://rielart.com',
    },
    {
      title: 'Spotix Local',
      description: 'Revolutionary postcard marketing platform helping local businesses reach their community with precision.',
      icon: TrendingUp,
      color: 'spotix',
      link: 'https://myspotix.com',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-charcoal-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
          }}
        />
        
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-charcoal-400 mb-6">
            About Me
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Behind the Brands
          </h2>
          <p className="text-lg lg:text-xl text-charcoal-400 max-w-2xl mx-auto">
            Entrepreneur, Digital Strategist & Marketing Innovator
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          {/* Left - Image/Visual */}
          <div 
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Profile Card */}
            <div className="relative">
              {/* Background Glow */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%)',
                }}
              />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-charcoal-900 to-charcoal-950 border border-white/10 rounded-2xl p-8 lg:p-12">
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-rielart/20 to-spotix/20 border-2 border-white/10 flex items-center justify-center">
                  <span className="text-5xl lg:text-6xl font-bold gradient-text-rielart">GM</span>
                </div>

                {/* Name & Title */}
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">Gabriel Macovei</h3>
                  <p className="text-charcoal-400">Founder & CEO</p>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-rielart/10 border border-rielart/30 rounded-full text-rielart text-sm font-medium animate-float">
                Digital Expert
              </div>
              <div 
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-spotix/10 border border-spotix/30 rounded-full text-spotix text-sm font-medium animate-float"
                style={{ animationDelay: '1s' }}
              >
                Marketing Pro
              </div>
            </div>
          </div>

          {/* Right - Bio Text */}
          <div 
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="space-y-6 text-charcoal-300 leading-relaxed">
              <p className="text-lg">
                I'm a passionate entrepreneur with a dual expertise in digital innovation and local marketing. 
                Over the past 5+ years, I've built two successful ventures that help businesses thrive in 
                today's competitive landscape.
              </p>
              
              <p>
                Through <a href="https://rielart.com" target="_blank" rel="noopener noreferrer" className="text-rielart hover:text-rielart-light transition-colors font-medium">RielArt</a>, 
                I deliver cutting-edge web development, brand identity, and digital marketing solutions 
                that transform how companies present themselves online.
              </p>
              
              <p>
                With <a href="https://myspotix.com" target="_blank" rel="noopener noreferrer" className="text-spotix hover:text-spotix-light transition-colors font-medium">Spotix</a>, 
                I'm revolutionizing local advertising through innovative postcard marketing campaigns 
                that connect businesses with their communities effectively.
              </p>

              <p>
                My approach combines creative thinking with data-driven strategies, ensuring every project 
                delivers measurable results. Whether you're looking to establish a powerful online presence 
                or dominate your local market, I'm here to make it happen.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-charcoal-950 font-bold rounded-lg transition-all duration-300 hover:bg-charcoal-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-1"
              >
                Let's Work Together
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          className={`grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card group hover:border-rielart/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon 
                className={`w-8 h-8 mb-4 ${
                  stat.color === 'rielart' ? 'text-rielart' : 'text-spotix'
                }`} 
              />
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-charcoal-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Companies Section */}
        <div 
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-10">
            My Companies
          </h3>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-8 bg-charcoal-900/50 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-rielart/30 hover:-translate-y-2"
              >
                {/* Hover Glow */}
                <div 
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    service.color === 'rielart' 
                      ? 'bg-gradient-to-br from-rielart/5 to-transparent'
                      : 'bg-gradient-to-br from-spotix/5 to-transparent'
                  }`}
                />

                <div className="relative z-10">
                  <div 
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      service.color === 'rielart'
                        ? 'bg-rielart/10 text-rielart'
                        : 'bg-spotix/10 text-spotix'
                    }`}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h4>

                  <p className="text-charcoal-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium">
                    <span className={service.color === 'rielart' ? 'text-rielart' : 'text-spotix'}>
                      Visit Website
                    </span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                      service.color === 'rielart' ? 'text-rielart' : 'text-spotix'
                    }`} />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
