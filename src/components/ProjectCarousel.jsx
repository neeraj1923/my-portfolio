import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  {
    title: "AI-Powered Lead Management (SaaS)",
    description: "Built a full-stack system with automated follow-ups using cron jobs and intelligent message generation via OpenAI APIs.",
    tech: ["React", "Node.js", "MongoDB", "OpenAI", "Cron Jobs"],
    link:''
  },
  {
    title: "The PartyPlatform",
    description: "Launched a cross-platform mobile app using React Native for booking events like weddings, catering, and photographers.",
    tech: ["React Native", "iOS", "Android", "State Management"],
    link: 'https://www.thepartyplatform.com/'
  },
  {
    title: "Rockon Recreation Rentals",
    description: "Responsive Next.js website for boat and ATV rentals using dynamic routing, SSR, SSG, and ISR for performance[cite: 1].",
    tech: ["Next.js", "Redux", "SSR/ISR", "Zest Testing"],
    link: 'https://experiences.rockonrr.com/'
  },
  {
    title: "Kala Estate Masterplan",
    description: "Developed an interactive real estate masterplan with dynamic filtering and a visually rich UI[cite: 1].",
    tech: ["React", "REST APIs", "Custom UI Components"],
    link: 'https://kalaestate.com.au/now-selling/'
  },
  {
    title: "Sporttips",
    description: "Platform showcasing sports gear recommendations from top athletes with optimized image loading for better UX[cite: 1].",
    tech: ["React", "UI/UX Optimization", "Dynamic Rendering"],
    link: 'https://sporttips.se/'
  }
];

const ProjectCarousel = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-950 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold flex items-center gap-4">
            <span className="text-blue-500 font-mono text-2xl">02.</span> Projects & Work
          </h2>
          <p className="text-slate-400 mt-2">Swipe to explore my latest builds.</p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={true}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 }
          }}
          className="pb-16 !overflow-hidden md:!overflow-visible"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-3xl h-[400px] flex flex-col justify-between hover:border-blue-500/40 transition-all duration-500 backdrop-blur-sm group">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:bg-blue-500/20 transition">
                      <Code2 className="text-blue-400" size={28} />
                    </div>
                    {
                      project.link &&
                    <a href={project.link} target='_blank'><ExternalLink size={22} className="text-slate-500 hover:text-blue-400 cursor-pointer" /></a>
                    }
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed text-base">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[11px] font-mono py-1.5 px-3 bg-slate-950 rounded-lg border border-slate-800 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Custom styles for Swiper Navigation/Pagination */}
      <style underline>{`
        .swiper-button-next, .swiper-button-prev { color: #3b82f6 !important; transform: scale(0.7); }
        .swiper-pagination-bullet { background: #475569 !important; }
        .swiper-pagination-bullet-active { background: #3b82f6 !important; }
      `}</style>
    </section>
  );
};

export default ProjectCarousel;