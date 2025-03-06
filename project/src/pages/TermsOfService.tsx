import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const TermsOfService: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last Updated: May 1, 2025</p>

            <div className="prose prose-lg max-w-none">
              <p>
                Welcome to Maa Asho Devi Dharam Yatra. These Terms of Service ("Terms") govern your use of our website 
                and services. By accessing or using our website, you agree to be bound by these Terms. If you do not 
                agree with any part of these Terms, please do not use our services.
              </p>

              <h2>1. Services Overview</h2>
              <p>
                Maa Asho Devi Dharam Yatra provides religious travel services, including but not limited to organizing 
                pilgrimages, spiritual tours, and related travel arrangements across India. Our services include:
              </p>
              <ul>
                <li>Planning and organizing religious tours to sacred destinations</li>
                <li>Arranging transportation, accommodation, and meals during tours</li>
                <li>Providing guides and assistance for religious ceremonies and rituals</li>
                <li>Offering information about spiritual sites and practices</li>
              </ul>

              <h2>2. Booking and Payments</h2>
              <h3>2.1 Booking Process</h3>
              <p>
                To book a tour, you must complete our booking form and provide all required information. Bookings are 
                subject to availability and confirmation. We reserve the right to refuse any booking at our discretion.
              </p>

              <h3>2.2 Payment Terms</h3>
              <p>
                A non-refundable deposit of 25% of the total tour cost is required to secure your booking. The remaining 
                balance must be paid at least 45 days before the tour departure date. For bookings made within 45 days 
                of departure, full payment is required at the time of booking.
              </p>

              <h3>2.3 Payment Methods</h3>
              <p>
                We accept payments via credit/debit cards, bank transfers, and other specified payment methods. All 
                payments must be made in Indian Rupees (INR) unless otherwise specified.
              </p>

              <h2>3. Cancellation and Refund Policy</h2>
              <h3>3.1 Cancellation by Customer</h3>
              <p>Cancellation charges apply as follows:</p>
              <ul>
                <li>More than 45 days before departure: Deposit is forfeited</li>
                <li>30-45 days before departure: 50% of total tour cost</li>
                <li>15-29 days before departure: 75% of total tour cost</li>
                <li>Less than 15 days before departure: 100% of total tour cost</li>
              </ul>
              <p>
                All cancellations must be made in writing and sent to our official email address.
              </p>

              <h3>3.2 Cancellation by Maa Asho Devi Dharam Yatra</h3>
              <p>
                We reserve the right to cancel any tour due to insufficient participants, force majeure events, or 
                circumstances beyond our control. In such cases, we will offer you the option of an alternative tour 
                (subject to price adjustment) or a full refund of the amount paid to us.
              </p>

              <h3>3.3 Refund Processing</h3>
              <p>
                Refunds, when applicable, will be processed within 30 business days from the date of cancellation. 
                Refunds will be made using the same payment method used for the original transaction unless otherwise agreed.
              </p>

              <h2>4. Tour Modifications</h2>
              <h3>4.1 Changes by Customer</h3>
              <p>
                If you wish to make changes to your booking (such as dates, accommodation, or tour options), we will 
                make reasonable efforts to accommodate your request. Changes are subject to availability and may incur 
                additional charges. Change requests must be submitted in writing at least 30 days before departure.
              </p>

              <h3>4.2 Changes by Maa Asho Devi Dharam Yatra</h3>
              <p>
                We reserve the right to modify tour itineraries, accommodations, transportation arrangements, or other 
                services due to weather conditions, religious events, safety concerns, or other circumstances. We will 
                make reasonable efforts to provide services of equal or similar standard and to notify you of any 
                significant changes before departure.
              </p>

              <h2>5. Travel Documents and Requirements</h2>
              <h3>5.1 Documentation Responsibility</h3>
              <p>
                You are responsible for obtaining and maintaining all necessary travel documents, including valid 
                passports, visas, permits, and health certificates. We are not liable for any issues arising from 
                inadequate documentation.
              </p>

              <h3>5.2 Health and Fitness</h3>
              <p>
                Many of our tours involve physical activities such as walking, climbing stairs, and high-altitude travel. 
                You must ensure that you are physically fit to participate in the tour. You must inform us of any medical 
                conditions or special requirements at the time of booking.
              </p>

              <h2>6. Liability and Insurance</h2>
              <h3>6.1 Limitation of Liability</h3>
              <p>
                While we take all reasonable care to ensure the safety and comfort of our customers, we cannot accept 
                liability for any illness, injury, death, loss, damage, expense, cost, or other claim of any description.
              </p>

              <h3>6.2 Travel Insurance</h3>
              <p>
                We strongly recommend that all customers obtain comprehensive travel insurance covering medical 
                emergencies, evacuation, trip cancellation, loss of baggage, and personal belongings.
              </p>

              <h2>7. Conduct and Behavior</h2>
              <p>
                Our tours visit places of religious significance, and appropriate behavior and dress are required. 
                You agree to:
              </p>
              <ul>
                <li>Respect local customs, traditions, and religious practices</li>
                <li>Dress modestly as required at religious sites</li>
                <li>Follow instructions from tour guides and local authorities</li>
                <li>Not engage in any illegal, disruptive, or offensive behavior</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TermsOfService;
