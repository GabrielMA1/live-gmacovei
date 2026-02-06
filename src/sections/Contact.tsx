import { useEffect, useRef, useState } from 'react';
import { Mail, Clock, Calendar, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const serviceOptions = [
    { value: '', label: 'Select a service...' },
    { value: 'rielart', label: 'RielArt Services (Web, Branding, Digital)' },
    { value: 'spotix', label: 'Spotix Services (Local Marketing, Postcards)' },
    { value: 'both', label: 'Both / Other' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 lg:py-40 bg-charcoal-dark overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Gradient */}
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        {/* Gradient Orbs */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, hsl(217 91% 60% / 0.2) 0%, transparent 60%)',
          }}
        />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
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
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-medium tracking-[0.2em] text-spotix-light bg-spotix/10 border border-spotix/20 rounded-full">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Ready to Grow Your <span className="text-spotix">Business</span>?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            I'm currently accepting new projects for Q1 2025. Let's discuss how I can help
            you achieve your goals.
          </p>
        </div>

        {/* Urgency Banner */}
        <div
          className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-xl bg-gradient-to-r from-rielart/10 via-charcoal-light to-spotix/10 border border-white/5">
            <div className="flex items-center gap-2 text-rielart-light">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Limited Availability</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/10" />
            <p className="text-sm text-white/60 text-center sm:text-left">
              Only <span className="text-white font-semibold">3 spots remaining</span> for Q1
              2025
            </p>
          </div>
        </div>

        {/* Contact Form & Info Grid */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Form Column */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="bg-charcoal-light/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/5">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/60">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-white/80 mb-2"
                      >
                        Name <span className="text-rielart">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-rielart/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white/80 mb-2"
                      >
                        Email <span className="text-rielart">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-rielart/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  {/* Company & Service Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-white/80 mb-2"
                      >
                        Company <span className="text-white/40">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-rielart/50 transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-white/80 mb-2"
                      >
                        Service Interest <span className="text-rielart">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-rielart/50 transition-colors appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 12px center',
                          backgroundSize: '16px',
                        }}
                      >
                        {serviceOptions.map((option) => (
                          <option
                            key={option.value}
                            value={option.value}
                            className="bg-charcoal-dark"
                          >
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/80 mb-2"
                    >
                      Message <span className="text-rielart">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:border-rielart/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-rielart to-rielart-light text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info Column */}
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Direct Email */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-rielart/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-rielart" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email Directly</h3>
                  <p className="text-white/50 text-sm mb-3">
                    Prefer to email? Reach me directly at:
                  </p>
                  <a
                    href="mailto:hi@GMACOVEI.com"
                    className="text-rielart-light hover:text-rielart transition-colors font-medium"
                  >
                    hi@GMACOVEI.com
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-spotix/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-spotix" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Fast Response</h3>
                  <p className="text-white/50 text-sm">
                    I usually respond within{' '}
                    <span className="text-spotix font-medium">24 hours</span> during business
                    days.
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule Call */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-spotix/10 to-spotix/5 border border-spotix/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-spotix/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-spotix" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Schedule a Call</h3>
                  <p className="text-white/50 text-sm mb-4">
                    Book a free 30-minute consultation to discuss your project.
                  </p>
                  <button
                    onClick={() => alert('Calendar integration coming soon!')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-spotix hover:bg-spotix-light text-white text-sm font-medium rounded-lg transition-all duration-300"
                  >
                    <span>Book a Call</span>
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-rielart/40 to-spotix/40 border-2 border-charcoal-dark flex items-center justify-center"
                    >
                      <span className="text-xs font-medium text-white">{i}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-white/50">
                  <span className="text-white font-medium">50+ clients</span> trust my
                  services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
