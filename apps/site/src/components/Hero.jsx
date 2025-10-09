// import React, { useRef } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { TypeAnimation } from 'react-type-animation'
// import { motion } from 'framer-motion'

// const RotatingCube = () => {
//   const meshRef = useRef()
  
//   useFrame(() => {
//     meshRef.current.rotation.x += 0.01
//     meshRef.current.rotation.y += 0.01
//   })

//   return (
//     <mesh ref={meshRef}>
//       <boxGeometry args={[2, 2, 2]} />
//       <meshStandardMaterial color="#3B82F6" wireframe />
//     </mesh>
//   )
// }

// const FloatingParticles = () => {
//   const particlesRef = useRef()
  
//   useFrame((state) => {
//     particlesRef.current.children.forEach((particle, index) => {
//       particle.position.y = Math.sin(state.clock.elapsedTime + index) * 0.5
//       particle.rotation.x += 0.01
//       particle.rotation.y += 0.01
//     })
//   })

//   return (
//     <group ref={particlesRef}>
//       {[...Array(20)].map((_, i) => (
//         <mesh key={i} position={[
//           (Math.random() - 0.5) * 10,
//           (Math.random() - 0.5) * 10,
//           (Math.random() - 0.5) * 10
//         ]}>
//           <sphereGeometry args={[0.05, 8, 8]} />
//           <meshBasicMaterial color="#ffffff" />
//         </mesh>
//       ))}
//     </group>
//   )
// }

// const Hero = () => {
//   const handleDownloadCV = () => {
//     // This would typically download a file
//     const link = document.createElement('a')
//     link.href = '/cv.pdf'
//     link.download = 'YourName_CV.pdf'
//     link.click()
//   }

//   return (
//     <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
//       {/* 3D Background */}
//       <div className="absolute inset-0 opacity-30">
//         <Canvas>
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} />
//           <RotatingCube />
//           <FloatingParticles />
//         </Canvas>
//       </div>
      
//       <div className="text-center text-white z-10 container mx-auto px-6">
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="mb-8"
//         >
//           <img
//             src="/profile.jpg"
//             alt="Profile"
//             className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-white shadow-2xl"
//           />
//         </motion.div>
        
//         <motion.h1
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-6xl md:text-7xl font-bold mb-6"
//         >
//           <TypeAnimation
//             sequence={[
//               'Hi, I\'m John',
//               2000,
//               'Full Stack Developer',
//               2000,
//               'AI/ML Enthusiast',
//               2000,
//               'Mobile Developer',
//               2000,
//             ]}
//             speed={50}
//             repeat={Infinity}
//             className="gradient-text"
//           />
//         </motion.h1>
        
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
//         >
//           Computing & Information Systems Undergraduate at Sabaragamuwa University of Sri Lanka
//         </motion.p>
        
//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//         >
//           <button 
//             onClick={handleDownloadCV}
//             className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
//           >
//             📄 Download CV
//           </button>
//           <button className="border-2 border-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
//             🚀 View Projects
//           </button>
//         </motion.div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
//           >
//             <motion.div
//               animate={{ y: [0, 12, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//               className="w-1 h-3 bg-white rounded-full mt-2"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Hero








// components/Hero.jsx
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 dark:bg-purple-800 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-200 dark:bg-pink-800 rounded-full blur-3xl opacity-40 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto lg:mx-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full p-1 shadow-2xl">
                <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">KT</span>
                </div>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white"
            >
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    'Kasun Tharak',
                    2000,
                    'Full Stack Developer',
                    2000,
                    'UI/UX Enthusiast',
                    2000,
                    'Problem Solver',
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
            >
              Passionate developer creating digital experiences with modern technologies. 
              Currently pursuing Computing & Information Systems at Sabaragamuwa University.
            </motion.p>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                📄 Download CV
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300"
              >
                🚀 View Projects
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0"
            >
              {[
                { number: '20+', label: 'Projects Done' },
                { number: '15+', label: 'Tech Stack' },
                { number: '2+', label: 'Years Learning' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl rotate-6 animate-pulse"></div>
              <div className="absolute inset-0 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl -rotate-6 animate-pulse delay-1000"></div>
              <div className="absolute inset-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">💻</div>
                  <div className="text-xl font-semibold text-gray-700 dark:text-gray-300">Code • Create • Innovate</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-500 dark:text-gray-400"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero