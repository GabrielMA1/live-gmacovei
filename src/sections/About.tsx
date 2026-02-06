import { useEffect, useRef, useState } from 'react';
import { Briefcase, Users, Award, Rocket, ArrowRight } from 'lucide-react';

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
    { icon: Users, value: '50+', label: 'Projects Delivered', color: 'spotix' },
    { icon: Award, value: '30+', label: 'Happy Clients', color: 'rielart' },
    { icon: Rocket, value: '2', label: 'Active Ventures', color: 'spotix' },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-charcoal-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, hsl(217 91% 60% / 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, hsl(25 95% 53% / 0.3) 0%, transparent 70%)',
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-[0.2em] text-rielart-light bg-rielart/10 border border-rielart/20 rounded-full">
            GET TO KNOW ME
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Gabriel <span className="text-rielart">Macovei</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Entrepreneur, Digital Strategist & Marketing Professional
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Image/Visual */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Profile Card */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden group">
                {/* Gradient Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-rielart/30 via-charcoal-light to-spotix/30">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        radial-gradient(circle at 30% 20%, hsl(217 91% 60% / 0.2) 0%, transparent 40%),
                        radial-gradient(circle at 70% 80%, hsl(25 95% 53% / 0.2) 0%, transparent 40%)
                      `,
                    }}
                  />
                </div>

                {/* Abstract Pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-rielart/40 to-spotix/40 flex items-center justify-center">
                      <span className="text-5xl font-black text-white">GM</span>
                    </div>
                    <p className="text-white/60 text-sm tracking-wider">PHOTO PLACEHOLDER</p>
                  </div>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-rielart/30 transition-colors duration-500" />

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-rielart/40 rounded-tl-2xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-spotix/40 rounded-br-2xl" />
              </div>

              {/* Floating Badge */}
              <div
                className={`absolute -bottom-6 -right-6 lg:right-12 bg-charcoal-light border border-white/10 rounded-xl p-4 shadow-xl transition-all duration-1000 delay-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rielart to-spotix flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Available</p>
                    <p className="text-white/50 text-xs">For new projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Bio Content */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Bio Text */}
            <div className="space-y-6 mb-10">
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a passionate entrepreneur with a dual expertise in{' '}
                <span className="text-rielart font-semibold">digital innovation</span> and{' '}
                <span className="text-spotix font-semibold">local marketing</span>. Through
                RielArt and Spotix, I help businesses establish their digital presence and
                connect with their local communities.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                With over 5 years of experience in web development, brand identity, and
                targeted advertising, I've had the privilege of working with diverse clients
                ranging from startups to established local businesses. My approach combines
                creative design thinking with data-driven strategies to deliver measurable
                results.
              </p>
              <p className="text-base text-white/60 leading-relaxed">
                Whether you need a stunning website, a complete brand overhaul, or effective
                local marketing campaigns, I'm here to help you achieve your business goals.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`group relative p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 hover-lift ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        stat.color === 'rielart'
                          ? 'bg-rielart/10 text-rielart'
                          : 'bg-spotix/10 text-spotix'
                      }`}
                    >
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-xs text-white/50 tracking-wide">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rielart to-rielart-light text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-glow hover:scale-105"
            >
              <span>Let's Work Together</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
