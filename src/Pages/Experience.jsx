import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Intern Software Engineer",
      company: "Cenzios Pvt Ltd",
      location: "Remote",
      duration: "Sep 2025 – Present",
      description: [
        "Resolved critical UI bugs and data fetching issues in production systems (LMS, SNP Holdings), significantly improving application stability.",
        "Refactored React components using Redux Toolkit and Tailwind CSS to enhance mobile rendering and cross-browser compatibility.",
        "Debugged complex API integrations between React frontend and backend microservices (Go/Gin, Node.js), reducing failure rates.",
        "Designed and deployed production-ready landing pages using Next.js 15 and TypeScript, achieving high performance and SEO optimization.",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Redux Toolkit", "React Query", "Node.js", "Go (Gin)", "Docker"],
    },
    
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-purple-500">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
           {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } items-center w-full group`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-[3px] border-black z-10 shadow-[0_0_10px_rgba(168,85,247,0.6)] group-hover:scale-125 transition-transform duration-300"></div>

                {/* Content Card */}
                <div className="w-full md:w-[calc(50%-32px)] ml-8 md:ml-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50 hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Decorative gradient blob */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex flex-col mb-4">
                         <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">{exp.role}</h3>
                         <h4 className="text-lg text-purple-200 font-medium">{exp.company}</h4>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                        <div className="flex items-center gap-1.5 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                          <Calendar className="w-3.5 h-3.5 text-purple-400" />
                          <span>{exp.duration}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-1.5 bg-gray-800/50 px-3 py-1 rounded-full border border-gray-700">
                            <span>📍</span>
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>

                      <ul className="list-none space-y-3 mb-6 text-gray-300 text-base leading-relaxed">
                        {exp.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800/50">
                        {exp.technologies && exp.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-xs font-medium px-3 py-1 rounded-full bg-purple-900/20 text-purple-300 border border-purple-800/30 hover:bg-purple-900/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
