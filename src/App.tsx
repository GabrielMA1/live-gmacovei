import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-charcoal-dark text-white custom-scrollbar">
      {/* SEO Meta Tags - These will be injected via index.html */}
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section - Diagonal Split Screen */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Contact Me Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
