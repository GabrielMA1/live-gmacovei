import { useEffect, useRef, useState } from 'react';
import { 
  Send, 
  Mail, 
  Clock, 
  Calendar, 
  CheckCircle, 
  ArrowRight,
  MessageSquare,
  Briefcase,
  User,
  Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xjgebdgg', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          service: formData.service,
          message: formData.message,
        }),
      });
      
      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', company: '', service: '', message: '' });
      } else {
        alert('Something went wrong. Please try again or email me directly at hi@GMACOVEI.com');
      }
    } catch (error) {
      alert('Something went wrong. Please try again or email me directly at hi@GMACOVEI.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-24 lg:py-32 bg-charcoal-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 60%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 60%)',
          }}
        />
        
        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-2 bg-rielart/10 border border-rielart/30 rounded-full text-rielart text-sm font-medium mb-6">
            Let's Connect
          </span>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
            Ready to Grow Your <span className="gradient-text-rielart">Business</span>?
          </h2>
          <p className="text-lg lg:text-xl text-charcoal-400 max-w-2xl mx-auto">
            I'm currently available for new projects and collaborations. 
            Let's discuss how we can work together to achieve your goals.
          </p>
        </div>

        {/* Availability Banner */}
        <div 
          className={`max-w-4xl mx-auto mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8 p-6 bg-charcoal-900/50 border border-white/10 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white font-medium">Available for Q1 2025</span>
            </div>
            <div className="hidden lg:block w-px h-6 bg-white/20" />
            <div className="flex items-center gap-2 text-charcoal-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Usually respond within 24 hours</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <div 
            className={`lg:col-span-2 space-y-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Direct Email */}
            <div className="p-6 bg-charcoal-900/50 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-rielart/10 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-rielart" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email Me Directly</h3>
                  <p className="text-charcoal-400 text-sm">For quick inquiries</p>
                </div>
              </div>
              <a 
                href="mailto:hi@GMACOVEI.com"
                className="text-lg text-rielart hover:text-rielart-light transition-colors font-medium"
              >
                hi@GMACOVEI.com
              </a>
            </div>

            {/* Schedule Call */}
            <div className="p-6 bg-charcoal-900/50 border border-white/10 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-spotix/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-spotix" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Schedule a Call</h3>
                  <p className="text-charcoal-400 text-sm">Book a free consultation</p>
                </div>
              </div>
              <button className="group inline-flex items-center gap-2 px-6 py-3 bg-spotix text-charcoal-950 font-semibold rounded-lg transition-all duration-300 hover:bg-spotix-light hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                Book a Meeting
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold mb-4">Why Work With Me?</h4>
              {[
                '5+ years of proven experience',
                'Results-driven approach',
                'Clear communication',
                'On-time delivery guarantee',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-charcoal-300">
                  <CheckCircle className="w-5 h-5 text-rielart flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Urgency Element */}
            <div className="p-4 bg-gradient-to-r from-rielart/10 to-spotix/10 border border-white/10 rounded-xl">
              <p className="text-sm text-charcoal-300">
                <span className="text-rielart font-semibold">Limited availability:</span> Currently accepting only 3 new projects for Q1 2025.
              </p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div 
            className={`lg:col-span-3 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="p-8 lg:p-10 bg-charcoal-900/50 border border-white/10 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-charcoal-400 mb-8">Fill out the form below and I'll get back to you shortly.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-charcoal-300 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-charcoal-950 border-charcoal-700 rounded-lg text-white placeholder:text-charcoal-500 focus:border-rielart focus:ring-rielart/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-charcoal-300 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-charcoal-950 border-charcoal-700 rounded-lg text-white placeholder:text-charcoal-500 focus:border-rielart focus:ring-rielart/20"
                    />
                  </div>
                </div>

                {/* Company & Service Row */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-charcoal-300 flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      Company (Optional)
                    </label>
                    <Input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 bg-charcoal-950 border-charcoal-700 rounded-lg text-white placeholder:text-charcoal-500 focus:border-rielart focus:ring-rielart/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-charcoal-300 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Service Interest *
                    </label>
                    <Select 
                      value={formData.service} 
                      onValueChange={(value) => handleInputChange('service', value)}
                      required
                    >
                      <SelectTrigger className="w-full px-4 py-3 bg-charcoal-950 border-charcoal-700 rounded-lg text-white focus:border-rielart focus:ring-rielart/20">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-charcoal-900 border-charcoal-700">
                        <SelectItem value="rielart" className="text-white hover:bg-charcoal-800">
                          RielArt Services (Digital)
                        </SelectItem>
                        <SelectItem value="spotix" className="text-white hover:bg-charcoal-800">
                          Spotix Services (Local Marketing)
                        </SelectItem>
                        <SelectItem value="both" className="text-white hover:bg-charcoal-800">
                          Both / Other
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-charcoal-300 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Your Message *
                  </label>
                  <Textarea
                    required
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about your project, goals, and timeline..."
                    rows={5}
                    className="w-full px-4 py-3 bg-charcoal-950 border-charcoal-700 rounded-lg text-white placeholder:text-charcoal-500 focus:border-rielart focus:ring-rielart/20 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-rielart to-rielart-dark text-charcoal-950 font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Message
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="bg-charcoal-900 border-white/10 text-white max-w-md">
          <DialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <DialogTitle className="text-2xl font-bold">Message Sent!</DialogTitle>
            <DialogDescription className="text-charcoal-400">
              Thank you for reaching out. I'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6">
            <Button
              onClick={() => setShowSuccess(false)}
              className="w-full py-3 bg-rielart text-charcoal-950 font-semibold rounded-lg hover:bg-rielart-light"
            >
              Got it!
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Contact;
