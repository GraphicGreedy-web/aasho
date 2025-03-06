import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Star, ArrowRight } from 'lucide-react';
import ThreeJSBackground from '../components/ThreeJSBackground';
import AnimatedCard from '../components/AnimatedCard';
import PageTransition from '../components/PageTransition';

const Home: React.FC = () => {
  const whyChooseUsRef = useRef<HTMLDivElement>(null);
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const scrollToWhyChooseUs = () => {
    whyChooseUsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const destinations = [
    {
      id: 1,
      name: 'Varanasi',
      image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Experience the spiritual essence of the holy city on the banks of the Ganges.',
      rating: 4.9,
      duration: '3 Days',
    },
    {
      id: 2,
      name: 'Haridwar',
      image: 'https://images.unsplash.com/photo-1591777334841-b135c7348cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Visit the gateway to the Gods and witness the mesmerizing Ganga Aarti.',
      rating: 4.8,
      duration: '2 Days',
    },
    {
      id: 3,
      name: 'Amarnath',
      image: 'https://images.unsplash.com/photo-1566836610593-62a64888a216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      description: 'Embark on a sacred journey to the holy cave shrine in the Himalayas.',
      rating: 4.9,
      duration: '7 Days',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      location: 'Delhi',
      quote: 'The Varanasi trip was beyond my expectations. The guides were knowledgeable and the arrangements were perfect.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Patel',
      location: 'Mumbai',
      quote: 'Our family trip to Tirupati was well organized. The accommodation and transportation were excellent.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Amit Singh',
      location: 'Jaipur',
      quote: 'The Char Dham <i>Yatra</i> was a life-changing experience. Thank you for making it so smooth and comfortable.',
      rating: 5,
    },
  ];

  return (
    <PageTransition>
      <div className="relative">
        <ThreeJSBackground />
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
          
          <div className="container mx-auto px-4 z-10 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Discover Sacred <span className="gradient-text">Journeys</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            >
              Experience spiritual enlightenment with our carefully curated religious tours across India
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Journey
              </Link>
              <button 
                onClick={scrollToWhyChooseUs}
                className="bg-transparent hover:bg-white/10 text-gray-800 font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-300"
              >
                Explore Our Services
              </button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-0 right-0 flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={30} className="transform rotate-90 text-primary" />
            </motion.div>
          </motion.div>
        </section>
        
        {/* Featured Destinations */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Popular <span className="text-primary">Destinations</span>
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-600 max-w-2xl mx-auto"
              >
                Explore our most sought-after spiritual destinations that offer profound experiences and divine blessings
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <AnimatedCard key={destination.id} delay={index * 0.1}>
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 flex items-center shadow-md">
                      <Star size={16} className="text-yellow-500 mr-1" fill="#FBBF24" />
                      <span className="font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-1" />
                        <span>{destination.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <Link 
                      to={`/destinations/${destination.name.toLowerCase()}`}
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Explore More <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section ref={whyChooseUsRef} className="py-20" id="why-choose-us">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose <span className="text-primary">Maa Asho Devi</span> for Your Spiritual Journey</h2>
                <p className="text-gray-600 mb-8">
                  With over 15 years of experience in organizing religious tours, we ensure that your spiritual journey is comfortable, enriching, and hassle-free.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Users size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Experienced Guides</h3>
                      <p className="text-gray-600">Our knowledgeable guides provide deep insights into the religious significance of each destination.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Comprehensive Coverage</h3>
                      <p className="text-gray-600">We cover all major religious destinations across India, offering diverse spiritual experiences.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Calendar size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Customized Itineraries</h3>
                      <p className="text-gray-600">We tailor our tours to meet your specific requirements and preferences.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Spiritual Journey" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <div className="flex items-center mb-3">
                    <Star size={20} className="text-yellow-500 mr-1" fill="#FBBF24" />
                    <Star size={20} className="text-yellow-500 mr-1" fill="#FBBF24" />
                    <Star size={20} className="text-yellow-500 mr-1" fill="#FBBF24" />
                    <Star size={20} className="text-yellow-500 mr-1" fill="#FBBF24" />
                    <Star size={20} className="text-yellow-500 mr-1" fill="#FBBF24" />
                  </div>
                  <p className="text-gray-700 italic">"The best spiritual tour operator I've ever experienced. Truly life-changing journeys."</p>
                  <div className="mt-3 font-medium">- Sunita Verma, Delhi</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-testimonial-pattern bg-cover bg-fixed relative">
          <div className="absolute inset-0 bg-gray-900/70"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-white mb-4"
              >
                What Our <span className="text-primary">Pilgrims Say</span>
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-300 max-w-2xl mx-auto"
              >
                Hear from those who have experienced spiritual transformation through our guided tours
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <AnimatedCard key={testimonial.id} delay={index * 0.1} className="bg-white/95">
                  <div className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-yellow-500 mr-1" fill="#FBBF24" />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4" dangerouslySetInnerHTML={{ __html: testimonial.quote }}></p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity:  0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 md:p-16 text-center text-white"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Spiritual Journey?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join us for a transformative experience that will nourish your soul and create memories to last a lifetime.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="bg-white text-primary hover:bg-white/90 font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Contact Us
                </Link>
                <Link to="/upcoming-plans" className="bg-transparent hover:bg-white/10 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg border border-white">
                  View Upcoming Tours
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;