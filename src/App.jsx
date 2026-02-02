import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Stats from './components/Stats';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-white selection:bg-neon-blue selection:text-black">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Stats />
      <Waitlist />
      <Footer />
    </div>
  );
}

export default App;
