import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Award, Clock, MapPin, Heart, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedCard from '../components/AnimatedCard';

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
const teamMembers = [
  {
    name: 'Sunita Sharma',
    position: 'Customer Relations',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Sunita ensures that every pilgrim\'s needs are met with warmth and efficiency, from the first inquiry to post-tour follow-up.',
  },
  {
    name: 'Rahul Mehta',
    position: 'Tour Guide',
    image: 'https://images.unsplash.com/photo-1595436065982-e0884eb7c38b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Rahul brings history to life with his deep knowledge of pilgrimage sites and engaging storytelling.',
    }
  ];

  const milestones = [
    {
      year: '2005',
      title: 'Foundation',
      description: 'Maa Asho Devi was established with a mission to provide authentic spiritual experiences.'
    },
    {
      year: '2010',
      title: 'Expansion',
      description: 'Opened offices in Varanasi and Haridwar to better serve pilgrims across North India.'
    },
    {
      year: '2015',
      title: 'Recognition',
      description: 'Received the "Best Religious Tour Operator" award from the Tourism Association of India.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online booking and virtual tour previews to enhance the customer experience.'
    },
    {
      year: '2025',
      title: 'Global Reach',
      description: 'Expanded services to cater to the Indian diaspora worldwide, organizing group pilgrimages from overseas.'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-20">
        {/* Hero Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About <span className="text-primary">Maa Asho Devi</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Connecting devotees with sacred destinations since 2005
                </p>
                <p className="text-gray-600 mb-6">
                  Maa Asho Devi Dharam Yatra is a premier religious travel agency dedicated to providing 
                  authentic spiritual experiences across India's most sacred sites. With a deep understanding 
                  of Hindu traditions and rituals, we create journeys that nourish the soul and create 
                  lasting memories.
                </p>
                <p className="text-gray-600 mb-8">
                  Our team of experienced guides and travel experts ensures that every aspect of your 
                  pilgrimage is handled with care, allowing you to focus entirely on your spiritual journey.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Contact Us
                  </Link>
                  <Link to="/upcoming-plans" className="bg-transparent border border-primary text-primary hover:bg-primary/10 font-medium py-3 px-8 rounded-full transition-all duration-300">
                    View Our Tours
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Spiritual Journey" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <div className="flex items-center mb-3 text-primary">
                    <Award size={24} className="mr-2" />
                    <span className="text-xl font-bold">20+ Years</span>
                  </div>
                  <p className="text-gray-700">
                    Two decades of experience creating meaningful spiritual journeys across India
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">15K+</div>
                <div className="text-gray-600">Happy Pilgrims</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Sacred Destinations</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">20+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="order-2 lg:order-1"
              >
                <img 
                  src="https://images.unsplash.com/photo-1590077428593-a33c3fbbc6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Our Mission" 
                  className="rounded-lg shadow-xl w-full"
                />
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
                <div className="bg-primary/10 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To facilitate transformative spiritual journeys that connect devotees with India's sacred heritage, 
                    ensuring comfort, safety, and authentic religious experiences.
                  </p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    To be the most trusted name in religious travel, making spiritual pilgrimages accessible to devotees 
                    from all walks of life while preserving the sanctity and traditions of sacred sites.
                  </p>
                </div>
                <div className="bg-primary/10 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-primary mb-3">Our Values</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <Heart size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Devotion to spiritual authenticity in all our tours</span>
                    </li>
                    <li className="flex items-start">
                      <Heart size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Respect for diverse religious traditions and practices</span>
                    </li>
                    <li className="flex items-start">
                      <Heart size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Commitment to pilgrim safety, comfort, and satisfaction</span>
                    </li>
                    <li className="flex items-start">
                      <Heart size={18} className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>Integrity and transparency in all our operations</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                What sets Maa Asho Devi apart from other travel agencies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedCard delay={0.1}>
                <div className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Users size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert Guides</h3>
                  <p className="text-gray-600">
                    Our guides are not just travel experts but also knowledgeable about religious traditions, 
                    rituals, and the spiritual significance of each destination.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Hassle-Free Experience</h3>
                  <p className="text-gray-600">
                    We handle all aspects of your journey, from transportation and accommodation to 
                    special darshan arrangements and religious ceremonies.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="p-6">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Comprehensive Coverage</h3>
                  <p className="text-gray-600">
                    From the Himalayan temples to South Indian shrines, we cover all major 
                    pilgrimage destinations across India with detailed knowledge of each site.
                  </p>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The dedicated professionals who make your spiritual journey memorable
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedCard key={member.id} delay={index * 0.1}>
                  <div className="relative overflow-hidden rounded-t-xl h-64">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The milestones that have shaped Maa Asho Devi Dharam Yatra
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-1/2 px-4"></div>
                    <div className="z-10 flex-shrink-0 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                    <div className="w-1/2 px-4">
                      <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-primary mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">What Our Pilgrims Say</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from those who have experienced spiritual transformation through our guided tours
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedCard delay={0.1}>
                <div className="p-6">
                  <div className="flex mb-4">
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "The Char Dham Yatra organized by Maa Asho Devi was a life-changing experience. The guides were knowledgeable and the arrangements were perfect. I felt spiritually connected throughout the journey."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                      RS
                    </div>
                    <div>
                      <h4 className="font-semibold">Rajesh Sharma</h4>
                      <p className="text-gray-600 text-sm">Delhi</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.2}>
                <div className="p-6">
                  <div className="flex mb-4">
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "Our family trip to Tirupati was well organized. The accommodation and transportation were excellent. The special darshan arrangements saved us hours of waiting. Highly recommended!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                      PP
                    </div>
                    <div>
                      <h4 className="font-semibold">Priya Patel</h4>
                      <p className="text-gray-600 text-sm">Mumbai</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={0.3}>
                <div className="p-6">
                  <div className="flex mb-4">
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "The Varanasi trip was beyond my expectations. The guides were knowledgeable about the rituals and helped us participate in the Ganga Aarti. A truly transformative spiritual experience."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                      AS
                    </div>
                    <div>
                      <h4 className="font-semibold">Amit Singh</h4>
                      <p className="text-gray-600 text-sm">Jaipur</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
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

export default About;