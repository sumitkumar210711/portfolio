import React, { useState, useEffect, useRef } from 'react';
import { Download, ArrowUp, Linkedin, Mail, Twitter } from 'lucide-react';
import Footer from '../components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';


import { Github,Phone } from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    skills: useRef(null),
    projects: useRef(null),
    contact: useRef(null)
  };


  // Download CV function
  const downloadCV = () => {
    // Replace with the actual path to your resume file
    const resumeUrl = '/Sumit Kumar Resume.pdf';
    
    // Create a link element
    const downloadLink = document.createElement('a');
    downloadLink.href = resumeUrl;
    downloadLink.download = 'Sumit_Kumar_Resume.pdf';
    
    // Append to the body, click the link, and remove it
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };


  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    sectionRefs[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const toggleScrollButton = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleScrollButton);
    return () => window.removeEventListener('scroll', toggleScrollButton);
  }, []);

  // Intersection Observer for fade-in effects
  useEffect(() => {
    const observers = {};
    const options = {
      threshold: 0.2
    };

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      observers[id] = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      }, options);

      if (ref.current) {
        observers[id].observe(ref.current);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      Object.entries(sectionRefs).forEach(([section, ref]) => {
        if (ref.current) {
          const element = ref.current;
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (mobileMenuOpen && !event.target.closest('nav')) {
          setMobileMenuOpen(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [mobileMenuOpen]);
  
    return (
      <div className="min-h-screen bg-gray-900">
        {/* Navigation with Mobile Menu */}
        <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                SK
              </span>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`text-gray-300 hover:text-white transition-colors relative group capitalize
                      ${activeSection === item ? 'text-white' : ''}`}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all
                      ${activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </button>
                ))}
              </div>
              
              {/* Mobile Menu Button - Hamburger Icon with Animation */}
              <button 
                className="md:hidden text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="w-6 flex mr-1 flex-col items-end space-y-1.5">
                  <span className={`block h-0.5 ${mobileMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'} bg-current transform transition-transform duration-300`}></span>
                  <span className={`block h-0.5 ${mobileMenuOpen ? 'opacity-0' : 'w-4'} bg-current transition-opacity duration-300`}></span>
                  <span className={`block h-0.5 ${mobileMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'} bg-current transform transition-transform duration-300`}></span>
                </div>
              </button>
            </div>
            
            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 pt-4' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col space-y-4 pb-4">
                {['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-gray-300 hover:text-white py-2 transition-colors capitalize
                      ${activeSection === item ? 'text-white' : ''}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
  

      {/* Home Section - Added fade and slide up animation */}
      <section 
        ref={sectionRefs.home} 
        className={`min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 transition-all duration-1000 transform
          ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <div className="text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-400/10 to-pink-600/10 text-purple-400 border border-purple-400/20">
              Full Stack Developer
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Sumit Kumar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Creating elegant solutions through code
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 rounded-full font-medium transition-all bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-purple-500/25"
            >
              View Projects
            </button>
            <button 
                          onClick={downloadCV}


            className="px-8 py-4 rounded-full font-medium transition-all border border-purple-400/20 hover:border-purple-400/40 text-purple-400 hover:bg-purple-400/10 flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* About Section - Added staggered fade-in effects */}
      <section 
        ref={sectionRefs.about}
        className={`transition-all duration-1000 transform
          ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <About />
      </section>

      {/* Professional Experience Section */}
      <section 
        ref={sectionRefs.experience} 
        className={`py-20 bg-gray-800/50 transition-all duration-1000 transform
          ${isVisible.experience ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <Experience />
      </section>

      {/* Education Section */}
      <section 
        ref={sectionRefs.education} 
        className={`py-20 transition-all duration-1000 transform
          ${isVisible.education ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <Education isVisible={isVisible} />
      </section>

      {/* Skills section */}
      <section
        ref={sectionRefs.skills}
        className={`py-20 relative bg-gray-800/50 transition-all duration-1000
          ${isVisible.skills ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <Skills isVisible={isVisible} />
      </section>

      {/* Projects Section - Added card hover effects */}
      <section 
        ref={sectionRefs.projects} 
        className={`py-20 transition-all duration-1000
          ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <Projects />
      </section>

      {/* Contact Section - Added form input animations */}
      <section 
        ref={sectionRefs.contact} 
        className={`py-20 bg-gray-800/50 transition-all duration-1000
          ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <Contact />
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About column */}
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4 block">
                Sumit Kumar
              </span>
              <p className="text-gray-400 mb-4">
                A passionate full-stack developer focused on creating intuitive and high-performance web applications.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/sumitkumar210711" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/sumit-kumar-4a2627311/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:sumitkumar210711@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['home', 'about', 'experience', 'projects', 'contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="text-gray-400 hover:text-purple-400 transition-colors capitalize"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">
                <span className="text-purple-400">Email:</span> sumitkumar210711@gmail.com
              </p>
              <p className="text-gray-400 mb-2">
                <span className="text-purple-400">Location:</span> Ghaziabad, India
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="mt-4 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Get in Touch
              </button>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Sumit Kumar. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed z-50 bottom-6 lg:right-6 p-3 right-10  rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default Portfolio;
