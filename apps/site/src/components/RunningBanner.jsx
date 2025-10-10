// import React from 'react'
// import { motion } from 'framer-motion'

// const RunningBanner = () => {
//   const technologies = [
//     { name: "React", icon: "⚛️" },
//     { name: "Node.js", icon: "🟢" },
//     { name: "Python", icon: "🐍" },
//     { name: "MongoDB", icon: "🍃" },
//     { name: "TypeScript", icon: "🔷" },
//     { name: "Tailwind CSS", icon: "💨" },
//     { name: "Express.js", icon: "🚂" },
//     { name: "Firebase", icon: "🔥" },
//     { name: "AWS", icon: "☁️" },
//     { name: "Docker", icon: "🐳" },
//     { name: "Git", icon: "📚" },
//     { name: "JavaScript", icon: "💛" }
//   ]

//   return (
//     <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-4 overflow-hidden mt-10">
//       <motion.div
//         className="flex whitespace-nowrap"
//         animate={{
//           x: [0, -window.innerWidth]
//         }}
//         transition={{
//           x: {
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 40,
//             ease: "linear"
//           }
//         }}
//       >
//         {[...technologies, ...technologies].map((tech, index) => (
//           <div key={index} className="inline-flex items-center mx-8 text-white font-semibold text-lg">
//             <span className="text-2xl mr-3">{tech.icon}</span>
//             <span className="text-white/90">{tech.name}</span>
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   )
// }

// export default RunningBanner

// components/RunningBanner.jsx
import React from "react";
import { motion } from "framer-motion";

const RunningBanner = () => {
  const technologies = [
    { name: "React", image: "/images/tech/react.png" },
    { name: "Node.js", image: "/images/tech/nodejs.png" },
    { name: "Python", image: "/images/tech/python.png" },
    { name: "MongoDB", image: "/images/tech/mongodb.png" },
    { name: "Java", image: "/images/tech/java.png" },
    { name: "php", image: "/images/tech/php.png" },
    { name: "MySql", image: "/images/tech/mysql.png" },
    { name: "Flutter", image: "/images/tech/flutter.png" },
    { name: "Tailwind CSS", image: "/images/tech/tailwind.png" },
    { name: "Express.js", image: "/images/tech/express.png" },
    { name: "Firebase", image: "/images/tech/firebase.png" },
    { name: "AWS", image: "/images/tech/aws.png" },
    { name: "Docker", image: "/images/tech/docker.png" },
    { name: "Git", image: "/images/tech/git.png" },
    { name: "JavaScript", image: "/images/tech/javascript.png" },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-4 overflow-hidden mt-10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -window.innerWidth],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="inline-flex items-center mx-8 text-white font-semibold text-lg"
          >
            <img
              src={tech.image}
              alt={tech.name}
              className="w-8 h-8 object-contain mr-3 " // Consistent sizing and white color
            />
            <span className="text-white/90">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default RunningBanner;
