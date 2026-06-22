import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../data/portfolioData';

const SkillBar = ({ name, level, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="mb-6" ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm font-semibold">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
        <motion.div 
          className="bg-gradient-to-r from-primary-400 to-primary-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-500 uppercase mb-2">My Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
            <div className="w-20 h-1.5 bg-primary-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Web Development</h4>
              {skills.technical.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>

            <div className="glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">AI & Machine Learning</h4>
              {skills.aiMl.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>

            <div className="glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Electronics & IoT</h4>
              {skills.electronics.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
