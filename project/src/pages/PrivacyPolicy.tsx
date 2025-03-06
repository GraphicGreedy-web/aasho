import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';

const PrivacyPolicy: React.FC = () => {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-8">Last Updated: May 1, 2025</p>

            <div className="prose prose-lg max-w-none">
              <p>
                At Maa Asho Devi Dharam Yatra, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website 
                or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, postal address, and other 
                  information you provide when filling out forms on our website, particularly when booking tours or 
                  contacting us.
                </li>
                <li>
                  <strong>Payment Information:</strong> Credit card details, bank account information, or other payment 
                  details when you make a purchase. Note that we use secure third-party payment processors and do not 
                  store complete payment information on our servers.
                </li>
                <li>
                  <strong>Identification Information:</strong> Passport details, government ID information, or other 
                  identification required for booking travel arrangements.
                </li>
                <li>
                  <strong>Automatically Collected Information:</strong> Device information, IP address, browser type, 
                  operating system, referring URLs, and other technical information when you visit our website.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies:</strong> Information collected through cookies, web beacons, 
                  and similar technologies to analyze website traffic and improve user experience.
                </li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>Processing and confirming your travel bookings and arrangements</li>
                <li>Communicating with you about your bookings, inquiries, or account</li>
                <li>Providing customer support and responding to your requests</li>
                <li>Sending you promotional materials and newsletters (if you've opted in)</li>
                <li>Improving our website, services, and customer experience</li>
                <li>Complying with legal obligations and protecting our rights</li>
                <li>Detecting and preventing fraud or other unauthorized activities</li>
              </ul>

              <h2>Information Sharing and Disclosure</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such as 
                  payment processing, data analysis, email delivery, hosting, and customer service.
                </li>
                <li>
                  <strong>Travel Partners:</strong> Hotels, transportation providers, tour operators, and other travel 
                  partners necessary to fulfill your booking requests.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets.
                </li>
              </ul>
              <p>
                We do not sell your personal information to third parties for marketing purposes.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Your Rights and Choices</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
              <ul>
                <li>Accessing, correcting, or deleting your personal information</li>
                <li>Withdrawing consent for processing your data</li>
                <li>Objecting to certain processing activities</li>
                <li>Requesting restriction of processing</li>
                <li>Data portability</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>

              <h2>Cookies Policy</h2>
              <p>
                Our website uses cookies and similar technologies to enhance your browsing experience. You can manage 
                your cookie preferences through your browser settings. Please note that disabling certain cookies may 
                affect the functionality of our website.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal 
                information from children. If you believe we have inadvertently collected information from a child, 
                please contact us immediately.
              </p>

              <h2>International Data Transfers</h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence, 
                particularly where our servers and service providers are located. We ensure appropriate safeguards are 
                in place to protect your information when transferred internationally.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
                requirements. We will notify you of any material changes by posting the updated policy on our website 
                with a revised "Last Updated" date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
                please contact us at:
              </p>
              <p>
                Maa Asho Devi Dharam Yatra<br />
                123 Spiritual Avenue, Delhi, India - 110001<br />
                Email: privacy@maaashodevi.com<br />
                Phone: +91 98765 43210
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default PrivacyPolicy;