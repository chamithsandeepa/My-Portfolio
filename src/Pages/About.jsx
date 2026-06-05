import React from "react";
import { motion } from "framer-motion";
import { Server, Layers, Code2, Download } from "lucide-react";
import mycv from "../assets/CV.pdf";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-purple-500">Me</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-center lg:text-left">
              Associate Software Engineer & Full Stack Developer
            </h3>
            <p className="text-gray-300 mb-4 text-center lg:text-left">
              I'm an Associate Software Engineer at Surecore, building enterprise
              insurance solutions with Java Spring Boot and Angular. I design
              scalable backend services, RESTful APIs, and responsive web portals
              that power real-world business workflows — from policy management
              to stakeholder-facing dashboards.
            </p>
            <p className="text-gray-300 mb-6 text-center lg:text-left">
              Beyond my current role, I bring strong experience across the modern
              JavaScript ecosystem — React, Next.js, Node.js, and NestJS — for
              both professional projects and personal builds. I care about clean
              architecture, maintainable code, and delivering performant
              applications that work reliably from database to UI.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <button
                onClick={scrollToContact}
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition-colors duration-300"
              >
                Get In Touch
              </button>
              <a
                href={mycv}
                download
                className="border border-gray-600 hover:border-purple-500 text-white py-2 px-6 rounded-full transition-colors duration-300 flex items-center"
              >
                Download CV
                <Download className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Server className="w-6 h-6 text-blue-500" />,
                  title: "Backend Development",
                  desc: "Building robust APIs and services with Java Spring Boot, Node.js, NestJS, and Express.",
                  bg: "bg-blue-500/20",
                },
                {
                  icon: <Layers className="w-6 h-6 text-purple-500" />,
                  title: "Frontend Development",
                  desc: "Crafting responsive UIs with Angular, React, Next.js, TypeScript, and Tailwind CSS.",
                  bg: "bg-purple-500/20",
                },
                {
                  icon: <Code2 className="w-6 h-6 text-blue-500" />,
                  title: "Full Stack Solutions",
                  desc: "Delivering end-to-end features — from database design and API integration to polished user interfaces.",
                  bg: "bg-blue-500/20",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 flex items-start hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`mr-4 ${item.bg} p-3 rounded-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
