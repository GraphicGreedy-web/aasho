import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Varanasi Ganga Aarti',
      category: 'varanasi',
      title: 'Ganga Aarti at Dashashwamedh Ghat'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1591777334841-b135c7348cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Haridwar Ghat',
      category: 'haridwar',
      title: 'Evening Prayers at Har Ki Pauri'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1566836610593-62a64888a216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Amarnath Cave',
      category: 'amarnath',
      title: 'Sacred Amarnath Cave'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1590077428593-a33c3fbbc6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Kedarnath Temple',
      category: 'kedarnath',
      title: 'Kedarnath Temple with Snow-capped Mountains'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1567501190443-d6fa360f3e63?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Rishikesh Ganga',
      category: 'rishikesh',
      title: 'Ganga River at Rishikesh'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Badrinath Temple',
      category: 'badrinath',
      title: 'Colorful Badrinath Temple'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1524492514790-8310bf594ea8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Tirupati Temple',
      category: 'tirupati',
      title: 'Tirupati Balaji Temple'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Varanasi Ghats',
      category: 'varanasi',
      title: 'Morning at Varanasi Ghats'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Haridwar Festival',
      category: 'haridwar',
      title: 'Kumbh Mela Celebration'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1626015442192-c4bd96321907?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Rishikesh Bridge',
      category: 'rishikesh',
      title: 'Laxman Jhula Bridge'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1600697230088-4992c83b2804?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Kedarnath Path',
      category: 'kedarnath',
      title: 'Trek to Kedarnath'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1618773128391-65ec1c9a2508?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      alt: 'Badrinath Landscape',
      category: 'badrinath',
      title: 'Scenic View of Badrinath'
    },
  ];

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'varanasi', name: 'Varanasi' },
    { id: 'haridwar', name: 'Haridwar' },
    { id: 'rishikesh', name: 'Rishikesh' },
    { id: 'kedarnath', name: 'Kedarnath' },
    { id: 'badrinath', name: 'Badrinath' },
    { id: 'amarnath', name: 'Amarnath' },
    { id: 'tirupati', name: 'Tirupati' },
  ];

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeFilter);

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-4"
            >
              Our <span className="text-primary">Gallery</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Explore the divine beauty of sacred places through our collection of stunning photographs
            </motion.p>
          </div>

          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden rounded-lg shadow-md bg-white cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => setSelectedImage(image.src)}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden group h-64">
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <h3 className="text-lg font-semibold">{image.title}</h3>
                        <p className="text-sm capitalize">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Inspired by these sacred places?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the divine beauty and spiritual energy of these destinations in person with our guided tours.
            </p>
            <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center">
              Start Your Yatra Now <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-4xl max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src={selectedImage} 
                    alt="Enlarged view" 
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:bg-gray-200 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  );
};

export default Gallery;