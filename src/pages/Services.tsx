
import React from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Physiotherapy",
      description: "Professional physiotherapy services to help patients recover movement and function after injury, illness, or disability.",
      isAvailableSoon: false
    },
    {
      title: "X-Ray",
      description: "Diagnostic imaging services using X-ray technology to examine bones, chest, and other areas of the body.",
      isAvailableSoon: false
    },
    {
      title: "Laboratory",
      description: "Comprehensive laboratory services for blood tests, urine tests, and other diagnostic procedures.",
      isAvailableSoon: false
    },
    {
      title: "Dental Care",
      description: "Complete dental services including check-ups, cleanings, fillings, and other dental procedures.",
      isAvailableSoon: false
    },
    {
      title: "Pharmacy",
      description: "On-site pharmacy providing prescribed medications and over-the-counter drugs at affordable prices.",
      isAvailableSoon: false
    },
    {
      title: "Operation Theatre",
      description: "Modern surgical facility for performing various surgical procedures under sterile conditions.",
      isAvailableSoon: true
    },
    {
      title: "ICU",
      description: "Intensive Care Unit equipped with advanced monitoring and life support systems for critical care patients.",
      isAvailableSoon: true
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h1>
          
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-center">
              Sugam Hospital offers a wide range of healthcare services to meet the needs of our community.
              Some services are currently available, while others are planned to be available before 2026.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                isAvailableSoon={service.isAvailableSoon}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
