import React from "react";
import { motion } from "framer-motion";
import meImage from "../assets/mynew1.png";
import { ChevronDown } from "lucide-react"; // Lucide icon import

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 lg:pt-0 lg:pb-0"
      id="home"
    >
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 text-white leading-tight">
                Hi, I'm{" "}
                <span className="relative">
                  <span className="text-purple-500">
                    {"Chamith ".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: 0.5 + index * 0.1 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  <span>
                    {"Sandeepa".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: 1.3 + index * 0.1 }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  <motion.span
                    className="inline-block w-1 h-10 md:h-14 bg-purple-500 ml-1 align-middle"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  />
                </span>
              </h1>
            </motion.div>

            <h1 className="text-2xl md:text-3xl font-semibold text-purple-400 mb-4">
              Software Engineer
            </h1>

            <motion.p
              className="text-gray-300 text-lg md:text-lg max-w-2xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I build dynamic, end-to-end web applications using modern full
              stack technologies. From crafting seamless user experiences on the
              front end to architecting robust, scalable back-end systems, I’m
              passionate about delivering performant, clean, and maintainable
              solutions that make a real impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#projects">
                <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full font-medium transition-colors duration-300">
                  View My Work
                </button>
              </a>
            </motion.div>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0 lg:ml-12">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Seamless Photo Container - Enhanced Left-side Blend */}
              <div 
                className="relative w-80 h-[28rem] md:w-[28rem] md:h-[34rem] lg:w-[32rem] lg:h-[40rem] transition-all duration-700"
                style={{
                   maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
                   WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 30%, black 70%, transparent)',
                   WebkitMaskComposite: 'source-in',
                   maskComposite: 'intersect'
                }}
              >
                <img
                  src={meImage}
                  alt="Chamith Sandeepa"
                  className="w-full h-full object-cover object-top grayscale-[0.1] contrast-[1.1] brightness-[1.1] transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
                
                {/* Layered Overlays for Background Matching */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a40]/40 via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a40]/30 via-transparent to-transparent" />
              </div>

            </motion.div>
          </div>
        </div>
      </div>

      {/* Replaced SVG with Lucide ChevronDown */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <p className="text-gray-400 mb-2">Scroll</p>
        <div className="animate-bounce text-gray-400">
          <ChevronDown className="w-6 h-6 mx-auto" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
