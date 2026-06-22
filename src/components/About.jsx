import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/portfolioData';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const highlights = [
    "5+ Years Experience",
    "Completed 50+ Projects",
    "Passionate about UI/UX",
    "Open Source Contributor"
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-bg transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-2">Get to know me</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">About Me</h3>
            <div className="w-20 h-1.5 bg-primary-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square md:aspect-auto md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop" 
                  alt="Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 dark:bg-slate-800 rounded-2xl -z-10 hidden md:block"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 dark:bg-slate-800/50 rounded-full -z-10 hidden md:block"></div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">A brief introduction</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
                {personalInfo.bio}
              </p>
              
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Career Objective</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {personalInfo.objective}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-primary-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
