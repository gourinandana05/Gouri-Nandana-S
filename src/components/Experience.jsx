import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experience, education } from '../data/portfolioData';

const TimelineItem = ({ item, icon: Icon, isLast }) => (
  <div className="relative pl-8 md:pl-0">
    <div className="md:hidden absolute left-0 top-1 w-6 h-6 rounded-full bg-primary-100 dark:bg-slate-800 border-2 border-primary-500 flex items-center justify-center z-10">
      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
    </div>
    
    <div className="md:flex items-center justify-between md:odd:flex-row-reverse group">
      {/* Icon for Desktop */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-100 dark:border-slate-800 items-center justify-center z-10 group-hover:border-primary-300 dark:group-hover:border-slate-700 transition-colors">
        <Icon size={20} className="text-primary-500" />
      </div>

      {/* Content Box */}
      <div className="md:w-[45%] mb-8 md:mb-12 glass p-6 rounded-2xl group-hover:-translate-y-1 transition-transform duration-300">
        <span className="inline-block px-3 py-1 bg-primary-50 dark:bg-slate-800 text-primary-600 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
          {item.period}
        </span>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title || item.degree}</h4>
        <h5 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">{item.company || item.institution}</h5>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  </div>
);

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-2">My Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Experience & Education</h3>
            <div className="w-20 h-1.5 bg-primary-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line for Desktop, Left Line for Mobile */}
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-slate-700 md:-translate-x-1/2"></div>
            
            <div className="mb-12 text-left md:text-center relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-full font-bold shadow-sm border border-gray-100 dark:border-slate-700">
                <Briefcase size={18} className="text-primary-500" /> Work Experience
              </span>
            </div>

            {experience.map((exp, index) => (
              <TimelineItem key={`exp-${exp.id}`} item={exp} icon={Briefcase} isLast={index === experience.length - 1} />
            ))}

            <div className="mt-20 mb-12 text-left md:text-center relative z-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 rounded-full font-bold shadow-sm border border-gray-100 dark:border-slate-700">
                <GraduationCap size={18} className="text-primary-500" /> Education
              </span>
            </div>

            {education.map((edu, index) => (
              <TimelineItem key={`edu-${edu.id}`} item={edu} icon={GraduationCap} isLast={index === education.length - 1} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
