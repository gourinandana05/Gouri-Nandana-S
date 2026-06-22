import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background blobs for Apple-inspired glassmorphism look */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <p className="text-primary-500 font-semibold tracking-wider uppercase mb-4">Welcome to my world</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-medium text-gray-700 dark:text-gray-300 mb-6 h-12">
            a {' '}
            <span className="text-primary-500 font-semibold">
              <Typewriter
                words={['Electronics and Communication Engineer.', 'Analog Circuit Developer.', 'Web Developer.']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
            {personalInfo.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a href="#projects" className="px-8 py-4 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors shadow-lg hover:shadow-primary-500/30 flex items-center gap-2">
              View Work <ArrowRight size={20} />
            </a>
            <a href="/resume.pdf" download className="px-8 py-4 bg-white dark:bg-slate-800 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors shadow-lg border border-gray-100 dark:border-slate-700 flex items-center gap-2">
              Download CV <Download size={20} />
            </a>
          </div>

          <div className="flex gap-6 items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">Find me on</p>
            <div className="w-10 h-[1px] bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow hover:-translate-y-1 transition-transform text-gray-700 dark:text-gray-300 hover:text-primary-500">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow hover:-translate-y-1 transition-transform text-gray-700 dark:text-gray-300 hover:text-primary-500">
                <Linkedin size={20} />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-slate-800 rounded-full shadow hover:-translate-y-1 transition-transform text-gray-700 dark:text-gray-300 hover:text-primary-500">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="w-full aspect-square max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-purple-500 rounded-[40px] rotate-6 opacity-20 blur-xl"></div>
            <div className="absolute inset-0 bg-white dark:bg-slate-800 rounded-[40px] shadow-2xl overflow-hidden border-8 border-white dark:border-slate-800 rotate-3 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt={personalInfo.name} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
