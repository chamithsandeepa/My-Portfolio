import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Associate Software Engineer",
      company: "Surecore (Pvt) Ltd",
      companyUrl: "https://www.surecore.co/",
      location: "Colombo, Sri Lanka",
      duration: "Apr 2026 – Present",
      isCurrent: true,
      description: [
        "Develop and maintain enterprise insurance platform modules using Java Spring Boot — building RESTful APIs, business logic layers, and database integrations for core insurance workflows.",
        "Build responsive Angular web portals for sales staff, customers, service providers, and management across general, life, health, and marine insurance product suites.",
        "Implement end-to-end features across the Surecore cloud-native platform, connecting Angular frontends with Spring Boot microservices for policy, claims, and workflow management.",
        "Collaborate on workflow-oriented modules that automate manual insurance processes and optimize stakeholder-facing portals for faster task completion.",
        "Contribute to system integrations, API enhancements, and production bug fixes within a large-scale, multi-product insurance application suite.",
      ],
      technologies: [
        "Java",
        "Spring Boot",
        "Angular",
        "TypeScript",
        "REST APIs",
        "MySQL",
        "PostgreSQL",
        "Git",
        "Docker",
      ],
    },
    {
      id: 2,
      role: "Intern Software Engineer",
      company: "Cenzios (PVT) Ltd",
      location: "Sri Lanka | Remote",
      duration: "Sep 2025 – Mar 2026",
      description: [
        "Designed and built the Voyage Tourist Cab Booking System backend using NestJS — modular architecture, RESTful APIs, JWT authentication, and PostgreSQL integration.",
        "Integrated Next.js frontend for the Voyage platform with dynamic routing, React Query-powered API calls, and responsive Tailwind UI components.",
        "Implemented responsive frontend features and resolved critical UI rendering bugs for the SaaS Payroll platform (Dual Admin & User Portals) using React, TypeScript, and Tailwind CSS.",
        "Refactored core features in the SNP Holdings system (React.js + Node.js/Express), eliminating 3 critical UI bugs reported in production and improving component render efficiency.",
        "Built and deployed production-ready landing pages for 5 products (SNP, Cenzios Learning, CERT, Payroll, InterviewPro) using Next.js and TypeScript.",
        "Contributed responsive UI fixes and Shadcn/ui component enhancements to Travora 2.0 tourism platform, ensuring consistent mobile-to-desktop breakpoint behavior.",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "React Query",
        "Tailwind CSS",
        "Shadcn/ui",
        "Node.js",
        "Express.js",
        "Nest.js",
        "Go (Gin)",
        "PostgreSQL",
        "MongoDB",
        "Docker",
        "Git",
      ],
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

        <div className="max-w-5xl mx-auto relative">
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
                <div className="absolute left-[-8px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-[3px] border-black z-10 shadow-[0_0_10px_rgba(168,85,247,0.6)] group-hover:scale-125 transition-transform duration-300"></div>

                <div className="w-full md:w-[calc(50%-16px)] ml-8 md:ml-0">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-900/40 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50 hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors duration-500"></div>

                    <div className="relative z-10">
                      <div className="flex flex-col mb-4">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/30">
                              Current
                            </span>
                          )}
                        </div>
                        <h4 className="text-lg text-purple-200 font-medium">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-purple-400 transition-colors"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}
                        </h4>
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

                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800/50">
                        {exp.technologies &&
                          exp.technologies.map((tech, i) => (
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
