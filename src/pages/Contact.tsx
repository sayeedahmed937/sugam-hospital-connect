
import React from 'react';
import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <ContactForm />
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col">
              {/* Contact details */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-6">
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-hospital-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-medium mb-1">Phone</h3>
                      <p className="text-lg">04188 223435</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-hospital-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-medium mb-1">Email</h3>
                      <p className="text-lg">sughcgm@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-hospital-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-medium mb-1">Address</h3>
                      <address className="not-italic text-lg">
                        Bengaluru Main Road, Thukkapettai, Chengam, Tiruvannamalai – 606701
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-hospital-600 mr-3 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-medium mb-1">Opening Hours</h3>
                      <p className="text-lg">8:00 AM - 9:00 PM</p>
                      <p className="text-hospital-600">(Soon to become 24/7)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md flex-grow">
                <h2 className="text-2xl font-semibold mb-6">Location</h2>
                <div className="h-full min-h-[300px] bg-gray-200 rounded-lg">
                  <iframe 
                    className="w-full h-full min-h-[300px] rounded-lg"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.004346732338!2d78.79129!3d12.10022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac17f690000001%3A0x3c2676e5acd6a5b2!2sChengam%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1683792023284!5m2!1sen!2sus"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sugam Hospital Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
