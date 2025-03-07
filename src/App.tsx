import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Workbench from './pages/Workbench';
import Logbook from './pages/Logbook';
import Library from './pages/Library';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import LogoGenerator from './components/LogoGenerator';
import './App.css';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Enhanced Dynamic Background */}
        <div className="dynamic-gradient" />

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <div className="content-wrapper">
              <AnimatePresence mode="wait">
                <Routes>
                  <Route path="/" element={
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Landing />
                    </motion.div>
                  } />
                  <Route path="/about" element={
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <About />
                    </motion.div>
                  } />
                  <Route path="/workbench" element={
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Workbench />
                    </motion.div>
                  } />
                  <Route path="/logbook" element={
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Logbook />
                    </motion.div>
                  } />
                  <Route path="/library" element={
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Library />
                    </motion.div>
                  } />
                  <Route path="/contact" element={
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Contact />
                    </motion.div>
                  } />
                  <Route path="/logo" element={<LogoGenerator />} />
                </Routes>
              </AnimatePresence>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
