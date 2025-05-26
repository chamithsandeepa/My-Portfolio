import React from "react";
import { m, motion } from "framer-motion";
import { Zap, LayoutDashboard, Smartphone, Download } from "lucide-react";
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
    <section id="about" className="py-20 bg-black">
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
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-gray-300 mb-4 text-center lg:text-left">
              As an aspiring web developer, I focus on building responsive,
              accessible, and high-performance web applications using modern
              technologies. Through academic projects and self-driven learning,
              I’m honing my skills to create seamless digital experiences.
            </p>
            <p className="text-gray-300 mb-6 text-center lg:text-left">
              I'm passionate about crafting complete, user-centered products and
              staying current with industry trends. I’m always exploring new
              tools and techniques to grow as a developer in today’s
              fast-changing web ecosystem.
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
                  icon: <Zap className="w-6 h-6 text-blue-500" />,
                  title: "Web Development",
                  desc: "Creating responsive websites and web applications using modern frameworks.",
                  bg: "bg-blue-500/20",
                },
                {
                  icon: <LayoutDashboard className="w-6 h-6 text-purple-500" />,
                  title: "UI/UX Design",
                  desc: "Designing intuitive user interfaces and seamless user experiences.",
                  bg: "bg-purple-500/20",
                },
                {
                  icon: <Smartphone className="w-6 h-6 text-blue-500" />,
                  title: "Mobile App Development",
                  desc: "Building intuitive and high-performance mobile apps for Android and iOS platforms.",
                  bg: "bg-blue-500/20",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 flex items-start"
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
