import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ThreeDMeshBackground from "./ThreeDMeshBackground";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null); 
  const [isSubscribing, setIsSubscribing] = useState(false);

  // EmailJS configuration for newsletter
  const NEWSLETTER_CONFIG = {
    SERVICE_ID: "service_86rjb3p", 
    TEMPLATE_ID: "template_p77jwhi",
    PUBLIC_KEY: "S7MEM65j3dvM5bZHT", 
  };

  // Auto-hide status messages
  useEffect(() => {
    if (subscribeStatus) {
      const timer = setTimeout(() => {
        setSubscribeStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [subscribeStatus]);

  // Newsletter subscription handler
  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubscribing(true);
    setSubscribeStatus(null);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeStatus("error");
      setIsSubscribing(false);
      return;
    }

    try {
      const templateParams = {
        email: email,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        to_name: "Kasun Tharaka",
        subscriber_count: Math.floor(Math.random() * 100) + 1, // Simulated subscriber count
      };

      console.log("Sending newsletter subscription:", templateParams);

      const result = await emailjs.send(
        NEWSLETTER_CONFIG.SERVICE_ID,
        NEWSLETTER_CONFIG.TEMPLATE_ID,
        templateParams,
        NEWSLETTER_CONFIG.PUBLIC_KEY
      );

      console.log("✅ Newsletter subscription sent successfully:", result);

      setSubscribeStatus("success");
      setEmail("");
    } catch (error) {
      console.error("❌ Newsletter subscription error:", error);
      console.error("Error details:", {
        status: error?.status,
        text: error?.text,
        message: error?.message,
      });
      setSubscribeStatus("error");
    } finally {
      setIsSubscribing(false);
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "Eat",
      image: "/images/social/eat.png",
      url: "#",
      color: "hover:bg-red-600",
    },
    {
      name: "Sleep",
      image: "/images/social/sleep.png",
      url: "#",
      color: "hover:bg-blue-600",
    },
    {
      name: "Code",
      image: "/images/social/code.png",
      url: "#",
      color: "hover:bg-green-600",
    },
    {
      name: "Repeat",
      image: "/images/social/repeat.png",
      url: "#",
      color: "hover:bg-purple-600",
    },
  ];

  const contactInfo = [
    { icon: "📧", text: "kasuntharaka18628@gmail.com" },
    { icon: "📱", text: "+94 76 626 5387" },
    { icon: "📍", text: "Ambalangoda, Sri Lanka" },
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* 3D Mesh Background */}
      <ThreeDMeshBackground />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-mono">
                  Kasun
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Full Stack Developer & AI/ML Enthusiast passionate about
                creating innovative digital solutions and exploring cutting-edge
                technologies.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.name}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                  >
                    <img
                      src={social.image}
                      alt={social.name}
                      className="w-5 h-5 object-contain filter brightness-0 invert"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: "#60A5FA" }}
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 cursor-pointer"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3 text-gray-400">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg">{info.icon}</span>
                    <span>{info.text}</span>
                  </div>
                ))}
              </div>
              <motion.a
                href="/files/cv.pdf"
                download="Kasun_Tharaka_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg backdrop-blur-sm inline-block text-center"
              >
                Download CV
              </motion.a>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
              <p className="text-gray-400 text-sm">
                Subscribe to get notified about my latest projects and updates.
              </p>

              {/* Status Messages */}
              {subscribeStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-900/50 border border-green-600 text-green-400 rounded-lg text-sm text-center"
                >
                  ✅ Thank you for subscribing! You'll hear from me soon.
                </motion.div>
              )}

              {subscribeStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-900/50 border border-red-600 text-red-400 rounded-lg text-sm text-center"
                >
                  ❌{" "}
                  {email
                    ? "Subscription failed. Please try again."
                    : "Please enter a valid email address."}
                </motion.div>
              )}

              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubscribing}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubscribing || !email}
                  whileHover={{ scale: isSubscribing || !email ? 1 : 1.02 }}
                  whileTap={{ scale: isSubscribing || !email ? 1 : 0.98 }}
                  className={`w-full py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm ${
                    isSubscribing || !email
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl"
                  } text-white`}
                >
                  {isSubscribing ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Subscribing...
                    </div>
                  ) : (
                    "Subscribe to Newsletter"
                  )}
                </motion.button>
              </form>

              <p className="text-gray-500 text-xs text-center">
                No spam. Unsubscribe at any time.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-gray-400 text-sm"
              >
                © {currentYear} Kasun Tharaka Gamage. All rights reserved.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex space-x-6 text-sm text-gray-400"
              >
                <motion.a
                  href="#"
                  whileHover={{ color: "#60A5FA" }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ color: "#60A5FA" }}
                  className="hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-xl shadow-lg z-40 hover:shadow-xl transition-all duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer;
