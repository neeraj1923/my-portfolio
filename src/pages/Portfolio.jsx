import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, Code2, Cpu, Rocket, Terminal, Computer } from 'lucide-react';
import ProjectCarousel from '../components/ProjectCarousel';
import myPic from '../assets/my-pic.png';


const Portfolio = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };


  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans selection:bg-blue-500/30">

      {/* --- Nav Bar --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            NC.dev
          </span>
          <div className="space-x-8 hidden md:flex text-sm font-medium text-slate-400 md:items-center">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a
              href="/resume-neeraj.pdf"
              download="Neeraj_Chaudhary_Resume.pdf"
              className="inline-block"
            >
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition shadow-lg shadow-blue-500/20 active:scale-95">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-32 pb-20 px-6" id="about">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-blue-400 font-mono mb-4 text-lg">Hi, my name is</h2>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Neeraj Chaudhary.</h1>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6 leading-tight">
              I build scalable Al-powered SaaS solutions.
            </h3>
            <p className="text-slate-400 max-w-xl text-lg mb-8 leading-relaxed">
              Software Developer with 4+ years of experience. I specialize in building
              high-performance applications using React, TypeScript, and Node.js,
              focusing on Al integration and system design.
            </p>
            <div className="flex gap-4">
              <a href="mailto:neerajchaudhary.dab@gmail.com" title='Mail' className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition"><Mail size={24} /></a>
              <a href="https://www.linkedin.com/in/neeraj-chaudhary-2953b91b0" target='_blank' className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition" title='Linkedin'><ExternalLink size={24} /></a>
              <a href="https://github.com/neeraj1923" target='_blank' title='Github' className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition"><Computer size={24} /></a>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-blue-500/50 shadow-[0_0_50px_-12px_rgba(59,130,246,0.5)]">
              {/* Replace with your local image path */}
              <img src={myPic} alt="Neeraj Chaudhary" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl">
              <span className="text-blue-400 font-bold text-xl">4+ Years</span>
              <p className="text-xs text-slate-500 uppercase tracking-wider">Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Skills Highlights --- */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition group">
              <div className="bg-blue-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition">
                <Code2 className="text-blue-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Frontend</h4>
              <p className="text-slate-400 text-sm">React, Next.js, TypeScript, Tailwind, Redux Toolkit, Zustand.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition group">
              <div className="bg-purple-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition">
                <Cpu className="text-purple-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Backend & AI</h4>
              <p className="text-slate-400 text-sm">Node.js, Express, MongoDB, OpenAI API Integration, Cron Jobs.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-blue-500/50 transition group">
              <div className="bg-green-500/10 p-3 rounded-lg w-fit mb-6 group-hover:scale-110 transition">
                <Rocket className="text-green-400" />
              </div>
              <h4 className="text-xl font-bold mb-3">Performance</h4>
              <p className="text-slate-400 text-sm">SSR/SSG/ISR, Lazy Loading, System Design, SEO Optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Featured Project --- */}
      <ProjectCarousel />

      {/* --- Experience Timeline --- */}
      <section id="experience" className="py-24 px-6 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Work History</h2>
          <div className="space-y-12 border-l border-slate-800 ml-4">
            {/* Dynamic Item */}
            {[
              { company: "Upwork", role: "Freelance Developer", date: "Oct 2025 - Present" },
              { company: "ChicMic Studios", role: "Software Developer", date: "Jan 2025 - Sept 2025" },
              { company: "Expandimo Technologies", role: "Frontend Developer", date: "Sept 2022 - Dec 2024" },
              { company: "Solitire Infosys", role: "MERN Stack Developer", date: "March 2022 - Sept 2022" }
            ].map((job, idx) => (
              <div key={idx} className="relative pl-8">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_#3b82f6]"></div>
                <span className="text-sm font-mono text-slate-500">{job.date}</span>
                <h4 className="text-xl font-bold">{job.role}</h4>
                <p className="text-blue-400 mb-2">{job.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-12 border-t border-slate-900 text-center text-slate-500 text-sm">
        <p>Built with React, Tailwind & Framer Motion</p>
        <p className="mt-2">© 2026 Neeraj Chaudhary</p>
      </footer>

    </div>
  );
};

export default Portfolio;