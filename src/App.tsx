import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout & UI
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import ScrollToTop from './components/ui/ScrollToTop';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative font-sans bg-dark-bg text-slate-200">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-dark-bg flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-4xl font-black text-gradient"
            >
              AK.
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ScrollProgress />
            <Navbar />

            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Education />
            <Contact />

            <Footer />
            <ScrollToTop />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
