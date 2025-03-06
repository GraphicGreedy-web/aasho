import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, ArrowRight, MessageSquare, Users, Calendar, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'Email',
    subject: '',
    tour: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const GOOGLE_SHEET_URL = "PASTE_YOUR_GOOGLE_SHEET_WEBHOOK_URL_HERE"; // Paste your URL here

  const handleSubmit = async (e: React.FormEvent) => { 
    e.preventDefault(); 
  
    if (!GOOGLE_SHEET_URL) {
      alert("https://script.google.com/macros/s/AKfycbwczgyzs6iOTgSUKfXa--Lnf0swF5uG8d5y6hIr_Zr1NrJ5b1bGLmY3oZ2Xi4o6GtafRA/exec");
      return;
    }
  
    try {
      const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      setSubmitted(true);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form.");
    }
    console.log('Form submitted:', formData);
    setSubmitted(true);

    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        contactMethod: 'Email',
        subject: '',
        tour: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* Hero Section with Contact Us Title */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Contact <span className="text-[#ff6b6b]">Us</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're here to help you plan your spiritual journey. Reach out to us with any questions or to book a tour.
              </p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center space-x-4"
              >
                <a href="#contact-form" className="bg-[#ff6b6b] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#ff5b5b] transition duration-300 flex items-center">
                  Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#locations" className="bg-transparent border-2 border-[#ff6b6b] text-[#ff6b6b] px-6 py-3 rounded-lg font-medium hover:bg-[#ff6b6b]/10 transition duration-300">
                  Our Locations
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-[#ff6b6b] to-[#ff8e8e] rounded-2xl p-8 text-white shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <p className="text-white/90 mb-10">
                  We would love to hear from you. Our team of experts is always ready to assist you with your spiritual journey needs and help you plan a memorable pilgrimage.
                </p>

                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Our Location</h3>
                      <p className="text-white/90">123 Spiritual Avenue, Delhi, India - 110001</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start"
                  >
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone Number</h3>
                      <p className="text-white/90">+91 98765 43210</p>
                      <p className="text-white/90">+91 98765 43211</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start"
                  >
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Address</h3>
                      <p className="text-white/90">info@maaashodevi.com</p>
                      <p className="text-white/90">bookings@maaashodevi.com</p>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-start"
                  >
                    <div className="bg-white/20 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Business Hours</h3>
                      <p className="text-white/90">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                      <p className="text-white/90">Sunday: 10:00 AM - 2:00 PM</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-12"
                >
                  <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition duration-300">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                id="contact-form" 
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-green-700">Thank you for reaching out. We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name <span className="text-[#ff6b6b]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-[#ff6b6b]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                          placeholder="Enter your email"
                        />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number  <span className="text-[#ff6b6b]">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-700 mb-1">
                          Preferred Contact Method
                        </label>
                        <select
                          id="contactMethod"
                          name="contactMethod"
                          value={formData.contactMethod}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                        >
                          <option value="Email">Email</option>
                          <option value="Phone">Phone</option>
                          <option value="WhatsApp">WhatsApp</option>
                        </select>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                      >
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject <span className="text-[#ff6b6b]">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                          placeholder="Enter subject"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                      >
                        <label htmlFor="tour" className="block text-sm font-medium text-gray-700 mb-1">
                          Interested in Tour
                        </label>
                        <select
                          id="tour"
                          name="tour"
                          value={formData.tour}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                        >
                          <option value="">Select a tour (optional)</option>
                          <option value="Char Dham Yatra">Char Dham Yatra</option>
                          <option value="Vaishno Devi & Amarnath">Vaishno Devi & Amarnath</option>
                          <option value="Kashi Vishwanath">Kashi Vishwanath</option>
                          <option value="Tirupati Balaji">Tirupati Balaji</option>
                          <option value="Custom Tour">Custom Tour</option>
                        </select>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message <span className="text-[#ff6b6b]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ff6b6b] focus:border-transparent"
                        placeholder="Enter your message here..."
                      ></textarea>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                      className="flex items-center"
                    >
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-[#ff6b6b] focus:ring-[#ff6b6b] border-gray-300 rounded"
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                        I agree to the <a href="/privacy-policy" className="text-[#ff6b6b] hover:underline">privacy policy</a> and consent to being contacted.
                      </label>
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] text-white py-3 px-6 rounded-lg font-medium hover:from-[#ff5b5b] hover:to-[#ff7e7e] transition duration-300 flex items-center justify-center"
                    >
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section id="locations" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Locations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit us at one of our office locations or schedule a virtual meeting from anywhere in India.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-200 rounded-xl overflow-hidden h-96 shadow-lg"
            >
              {/* This would be replaced with an actual map component in a real application */}
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center relative">
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white p-6 rounded-lg shadow-lg max-w-md"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Headquarters</h3>
                    <p className="text-gray-600 mb-4">lal Ghati, Bhopal (MP) India </p>
                    <a href="#" className="text-[#ff6b6b] font-medium hover:underline flex items-center">
                      Get Directions <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ff6b6b] transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Delhi</h3>
                <p className="text-gray-600 mb-1">123 Spiritual Avenue</p>
                <p className="text-gray-600 mb-3">Delhi, India - 110001</p>
                <p className="text-gray-600 mb-1">+91 98765 43210</p>
                <p className="text-gray-600">delhi@maaashodevi.com</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ff6b6b] transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Varanasi</h3>
                <p className="text-gray-600 mb-1">456 Ganga Ghat Road</p>
                <p className="text-gray-600 mb-3">Varanasi, UP - 221001</p>
                <p className="text-gray-600 mb-1">+91 98765 43211</p>
                <p className="text-gray-600">varanasi@maaashodevi.com</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#ff6b6b] transition duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Haridwar</h3>
                <p className="text-gray-600 mb-1">789 Har Ki Pauri</p>
                <p className="text-gray-600 mb-3">Haridwar, UK - 249401</p>
                <p className="text-gray-600 mb-1">+91 98765 43212</p>
                <p className="text-gray-600">haridwar@maaashodevi.com</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're committed to providing exceptional service and delivering spiritual experiences that exceed your expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="bg-[#ff6b6b]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-[#ff6b6b]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our dedicated team is available around the clock to address your concerns and provide assistance throughout your spiritual journey.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="bg-[#ff6b6b]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#ff6b6b]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Guides</h3>
                <p className="text-gray-600">
                  Our team consists of knowledgeable guides with deep understanding of religious traditions and sacred sites across India.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="bg-[#ff6b6b]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[#ff6b6b]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Customized Tours</h3>
                <p className="text-gray-600">
                  We create personalized pilgrimage experiences tailored to your spiritual needs, preferences, and schedule.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our spiritual tours and how we can help you plan your pilgrimage.
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What types of tours do you offer?</h3>
                  <p className="text-gray-600">
                    We offer a wide range of spiritual tours including Char Dham Yatra, Vaishno Devi & Amarnath, Kashi Vishwanath, Tirupati Balaji, and many more sacred destinations across India. We also provide customized pilgrimage packages tailored to your specific requirements.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How large are your tour groups?</h3>
                  <p className="text-gray-600">
                    Our standard tour groups typically range from 15-30 people, providing a balance between personal attention and group camaraderie. We also offer private tours for families or smaller groups seeking a more intimate experience.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What is included in your tour packages?</h3>
                  <p className="text-gray-600">
                    Our comprehensive packages typically include accommodation, transportation, meals, guide services, and arrangements for special religious ceremonies. Specific inclusions vary by tour and are clearly detailed in each tour description.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How do I book a tour with you?</h3>
                  <p className="text-gray-600">
                    Booking is simple! You can contact us through this form, call our office, or visit one of our locations. We require a 25% deposit to secure your booking, with the balance due 45 days before departure.
                  </p>
                </motion.div>
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center mt-10"
              >
                <p className="text-gray-600 mb-4">Don't see your question here?</p>
                <a href="#contact-form" className="inline-flex items-center text-[#ff6b6b] font-medium hover:underline">
                  Contact us for more information <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e8e] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Spiritual Journey?</h2>
              <p className="text-xl opacity-90 mb-8">
                Take the first step towards a transformative spiritual experience. Contact us today to plan your sacred pilgrimage.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#contact-form" className="bg-white text-[#ff6b6b] px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
                  Get Started
                </a>
                <a href="tel:+919876543210" className="bg-transparent border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition duration-300">
                  Call Us Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;