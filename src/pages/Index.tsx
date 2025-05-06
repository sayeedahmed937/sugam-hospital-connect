
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Calendar, MapPin } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-hospital-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-hospital-900 mb-6">
              Welcome to Sugam Hospital
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Quality and affordable healthcare for everyone
            </p>
            <div className="p-3 bg-white rounded-lg inline-block shadow-sm mb-8">
              <p className="text-hospital-700 font-semibold text-xl">Lowest cost in town</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="text-lg py-6 px-8">
                <Link to="/services">Our Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
              <div className="h-14 w-14 bg-hospital-100 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-7 w-7 text-hospital-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Operating Hours</h3>
              <p className="text-gray-700 text-center text-lg">8:00 AM to 9:00 PM</p>
              <p className="text-hospital-600 mt-1 text-center">(Soon to become 24/7)</p>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
              <div className="h-14 w-14 bg-hospital-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-hospital-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <address className="text-gray-700 text-center text-lg not-italic">
                Bengaluru Main Road, Thukkapettai, Chengam, Tiruvannamalai – 606701
              </address>
            </div>

            {/* Contact */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center">
              <div className="h-14 w-14 bg-hospital-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-7 w-7 text-hospital-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-700 text-center text-lg">Call: 04188 223435</p>
              <p className="text-gray-700 text-center">Email: sughcgm@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Sugam Hospital</h2>
            <p className="text-xl text-gray-700 mb-8">
              Established in 2019, Sugam Hospital is committed to providing quality healthcare 
              at affordable rates for the community of Chengam and surrounding areas.
            </p>
            <Button asChild size="lg" className="text-lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
