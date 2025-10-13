import React, { useState } from "react";
import { motion } from "framer-motion";
import ThreeDMeshBackground from "./ThreeDMeshBackground";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "GoPlanAI",
      description:
        "GoPlan AI is a mobile-responsive travel planning web app designed to help users plan trips based on destinations 🗺️, duration ⏳, budget 💰, and activities 🎯. It provides smart travel suggestions, activity recommendations by category, estimated travel times, and direct navigation through Google Maps integration 🧭.",
      image: "/projects/GoPlanAI.jpeg",
      technologies: [
        "React",
        "Node.js",
        "Firebase",
        "GeminiAPI",
        "ShadcnUI",
        "GoogleAuth",
        "TailwindCsSS",
        "Git",
      ],
      category: "fullstack",
      github: "https://github.com/KTGamage/AI-Travel-Planner.git",
      live: "https://ai-travel-planner-six-cyan.vercel.app/",
      status: "Complete",
      type: "Individual",
    },
    {
      id: 2,
      title: "LuxuryJewellery – Modern E-Commerce Web Application",
      description:
        "💎 Luxury Jewellery is a modern, mobile-responsive 💍 e-commerce web app for jewellery shopping. It includes features like search 🔍, filters 🪄, and add-to-cart 🛒 for a smooth user experience. The admin dashboard ⚙️ lets admins manage users, products, and orders easily. Plus, the built-in Jewellery Assistant Chatbot 🤖 helps customers with product guidance and instant support ✨.",
      image: "/projects/LuxuryJewellery.png",
      technologies: ["React", "MongoDB", "TailwindCSS", "Gemini API", "Nodejs", "Express.js", "JWT Token", "Git"],
      category: "fullstack",
      github: "https://github.com",
      live: "https://demo.com",
      status: "Complete",
      type: "Individual",
    },
    {
      id: 3,
      title: "Teacher Management System",
      description:
        "📘 Teacher Management System is a web-based platform designed to simplify school management tasks. It allows admins, section heads, and principals 👩‍💼 to manage teacher records 👨‍🏫, prepare timetables 📅, handle student marks 🧾, and process leave requests 📝 efficiently. The system ensures smooth communication and organized administration within the school environment 🏫.",
      image: "/projects/TeacherManagementSystem.png",
      technologies: ["PHP", "Laraval", "MySql", "Postman"],
      category: "fullstack",
      github: "https://github.com/KTGamage/Teacher-management-system.git",
      // live: "https://demo.com",
      status: "Ongoing",
      type: "Group",
    },
    {
      id: 4,
      title: "AuraS-Skin Care App",
      description:
        "🌸 AuraS is an AI-powered skincare mobile app that helps users analyze skin conditions 🤳, get instant guidance from an AI skincare assistant chatbot 🤖, and book dermatologist appointments 🩺 easily. It also includes an admin portal ⚙️ to manage dermatologists and ensure smooth operations. AuraS brings smart technology and skincare together for a healthier, more confident you ✨.",
      image: "/projects/Auras.jpeg",
      technologies: ["Flutter", "Dart", "Firebase"],
      category: "mobile",
      github: "https://github.com/KTGamage/AuraS-Mobile-Application.git",
      // live: "https://demo.com",
      status: "Ongoing",
      type: "Group",
    },
    {
      id: 5,
      title: "UrbanBite",
      description:
        "🍴 UrbanBite is a modern, mobile-responsive restaurant landing page designed to give users a smooth browsing experience. Visitors can easily view menus 📜, explore special dishes 🍕, and find contact details 📞 of the restaurant. Its clean design and engaging layout make UrbanBite both stylish and user-friendly ✨.",
      image: "/projects/UrbanBite.jpeg",
      technologies: ["Javascript", "HTML", "CSS"],
      category: "web",
      github: "https://github.com/KTGamage/Restaurant-site.git",
      live: "https://ktgamage.github.io/Restaurant-site/",
      status: "Complete",
      type: "Individual",
    },
    {
      id: 6,
      title: "FoodieDelivery",
      description:
        "🍔 Food Delivery Site is a modern and mobile-responsive web application that lets users browse delicious food items 🍱, place online orders 🛒, and contact the restaurant 📞 directly through the website. It’s designed for a smooth and fast food-ordering experience anytime, anywhere ✨.",
      image: "/projects/FoodieDelivery.jpeg",
      technologies: ["Javascript", "HTML", "CSS"],
      category: "web",
      github: "https://github.com/KTGamage/Food-Deliery-Website.git",
      live: "https://ktgamage.github.io/Food-Deliery-Website/",
      status: "Complete",
      type: "Individual",
    },
    {
      id: 7,
      title: "Hostel Management System",
      description:
        "🏠 Hostel Management System is a secure web platform designed to manage and maintain student records 🧑‍🎓 efficiently. It helps keep student details organized and safe 🔐, while allowing the Subwarden 👨‍💼 to act as the admin and oversee all hostel activities smoothly.",
      image: "/projects/HMSystem.png",
      technologies: ["Laraval", "PHP", "Bootstrap", "MySql"],
      category: "fullstack",
      github: "https://github.com/KTGamage/susl-hostel-management-system.git",
      // live: "#",
      status: "Complete",
      type: "Group",
    },
  ];

  const filters = [
    { name: "All Projects", value: "all" },
    { name: "Full Stack", value: "fullstack" },
    { name: "Web Apps", value: "web" },
    { name: "Mobile", value: "mobile" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden"
    >
      {/* 3D Mesh Background */}
      <ThreeDMeshBackground />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm ${
                activeFilter === filter.value
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
              }`}
            >
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />

                {/* Fallback Icon (only shows if image fails to load) */}
                {/* <div className="absolute inset-0 flex items-center justify-center text-5xl text-white/90">
                  💻
                </div> */}

                {/* Status Badge - Top Right */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                    project.status === "Complete"
                      ? "bg-green-500 text-white"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {project.status}
                </motion.span>

                {/* Type Badge - Top Left */}
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                    project.type === "Individual"
                      ? "bg-blue-500 text-white"
                      : "bg-purple-500 text-white"
                  }`}
                >
                  {project.type}
                </motion.span>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/images/tech/github.png"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-lg">🌐</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-800 hover:bg-gray-900 text-white text-center py-2.5 rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center gap-2 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/images/tech/github.png"
                      alt="GitHub"
                      className="w-4 h-4 filter brightness-0 invert"
                    />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-center py-2.5 rounded-lg font-medium transition-colors shadow-lg flex items-center justify-center gap-2 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>🌐</span> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Try selecting a different filter category
            </p>
          </motion.div>
        )}

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/KTGamage"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-blue-400/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>🚀</span>
            View All Projects on GitHub
            <span>🔗</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
