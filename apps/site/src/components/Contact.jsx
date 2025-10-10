import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ThreeDMeshBackground from './ThreeDMeshBackground'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'kasun.tharaka@example.com',
      link: 'mailto:kasun.tharaka@example.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+94 77 123 4567',
      link: 'tel:+94771234567',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Sabaragamuwa University, Sri Lanka',
      link: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/kasuntharaka',
      link: 'https://linkedin.com/in/kasuntharaka',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: '💻', url: 'https://github.com/kasuntharaka', color: 'hover:bg-gray-900' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/kasuntharaka', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/kasuntharaka', color: 'hover:bg-sky-500' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/kasuntharaka', color: 'hover:bg-pink-600' }
  ]

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
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
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, and technology partnerships
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the following channels.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {info.title}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4"
            >
              <h4 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Follow Me</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center text-lg ${social.color} text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 shadow-md backdrop-blur-sm`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 resize-vertical"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-xl font-semibold shadow-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact