// src/Pages/Projects.jsx
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Code2, Globe, Building2, ArrowRight } from "lucide-react";
import { projects } from "../assets/projects";

const IndustrialCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-500 shadow-xl"
    >
      <div className="flex flex-col md:flex-row h-full">
        {/* Visual Preview */}
        <div className="md:w-1/3 relative h-56 md:h-auto overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Industrial Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600/20 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest font-bold text-blue-400 border border-blue-500/30">
            Industrial
          </div>
        </div>

        {/* Content */}
        <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 5).map((tech, i) => (
              <span key={i} className="text-[10px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/10 px-2.5 py-0.5 rounded-md">
                {tech}
              </span>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="flex items-center gap-4">
             <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-white transition-colors group/link"
            >
              LIVE DEMO <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-white transition-colors"
            >
              <Github size={14} /> SOURCE
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CreativeCard = ({ project }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 20 });
  const spotlightX = useSpring(useMotionValue(0));
  const spotlightY = useSpring(useMotionValue(0));

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-500 flex flex-col h-[400px]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useTransform([spotlightX, spotlightY], ([x, y]) => 
            `radial-gradient(400px circle at ${x}px ${y}px, rgba(168, 85, 247, 0.1), transparent 80%)`
          ),
        }}
      />

      <div className="relative h-44 overflow-hidden">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-3 left-3">
           <span className="px-2.5 py-0.5 bg-purple-500/10 backdrop-blur-md rounded-md text-[9px] font-bold text-purple-300 border border-purple-500/20 uppercase tracking-widest">
             {project.category}
           </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow relative z-10" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-xs line-clamp-3 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-800/50">
          <div className="flex gap-2">
             <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/50 hover:bg-purple-600 rounded-lg text-gray-400 hover:text-white transition-all">
               <Github size={16} />
             </a>
             {project.demoLink && project.demoLink !== "N/A" && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800/50 hover:bg-blue-600 rounded-lg text-gray-400 hover:text-white transition-all">
                  <Globe size={16} />
                </a>
             )}
          </div>
          <a href={project.codeLink} className="text-[10px] font-bold text-gray-500 hover:text-purple-400 uppercase tracking-widest transition-colors flex items-center gap-1">
            VIEW <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [showAllPersonal, setShowAllPersonal] = useState(false);
  const internshipProjects = projects.filter(p => p.isInternship);
  const personalProjects = projects.filter(p => !p.isInternship);
  
  const displayedPersonal = showAllPersonal ? personalProjects : personalProjects.slice(0, 6);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* SECTION 1: INDUSTRIAL SHOWCASE */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industrial <span className="text-purple-500">Showcase</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
               Industrial-grade applications developed during my software engineering internship at Cenzios.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
             {internshipProjects.map((project) => (
               <IndustrialCard key={project.id} project={project} />
             ))}
          </div>
        </div>

        {/* SECTION 2: CREATIVE LAB */}
        <div className="pt-20 border-t border-gray-800/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Developer's <span className="text-purple-500">Sandbox</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base">
               Experimental projects and personal explorations where I push modern web boundaries.
            </p>
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {displayedPersonal.map((project) => (
                <CreativeCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {personalProjects.length > 6 && (
            <div className="flex justify-center mt-20">
              <button
                onClick={() => setShowAllPersonal(!showAllPersonal)}
                className="group relative px-12 py-4 rounded-full overflow-hidden bg-gray-900 border border-gray-800 text-gray-400 hover:text-white font-black transition-all duration-500"
              >
                <span className="relative z-10 uppercase tracking-widest text-xs">
                  {showAllPersonal ? "Condense Lab" : "Explore All Experiments"}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
