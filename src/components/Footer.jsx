import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-slate-800 py-8 transition-colors">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-2xl font-bold text-gray-900 dark:text-white tracking-tighter">
          Port<span className="text-primary-500">folio</span>.
        </div>
        
        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        
        <div className="flex gap-6 text-sm font-medium">
          <a href="#home" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">Home</a>
          <a href="#projects" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">Projects</a>
          <a href="#contact" className="text-gray-500 dark:text-gray-400 hover:text-primary-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
