
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-hospital-600 mr-2 shrink-0 mt-1" />
                <span>04188 223435</span>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-hospital-600 mr-2 shrink-0 mt-1" />
                <span>sughcgm@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-hospital-600 mr-2 shrink-0 mt-1" />
                <address className="not-italic">
                  Bengaluru Main Road, Thukkapettai, Chengam, Tiruvannamalai – 606701
                </address>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-hospital-600 text-lg">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-hospital-600 text-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-hospital-600 text-lg">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-hospital-600 text-lg">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
            <div className="flex items-start">
              <Clock className="h-5 w-5 text-hospital-600 mr-2 shrink-0 mt-1" />
              <div>
                <p className="text-lg">8:00 AM - 9:00 PM</p>
                <p className="text-gray-500 text-sm">Soon to become 24/7</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 text-center">
          <p>&copy; {new Date().getFullYear()} Sugam Hospital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
