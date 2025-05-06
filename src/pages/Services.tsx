
import React from 'react';
import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Physiotherapy",
      description: "Professional physiotherapy services to help patients recover movement and function after injury, illness, or disability.",
      isAvailableSoon: false,
      imageSrc: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "X-Ray",
      description: "Diagnostic imaging services using X-ray technology to examine bones, chest, and other areas of the body.",
      isAvailableSoon: false,
      imageSrc: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Laboratory",
      description: "Comprehensive laboratory services for blood tests, urine tests, and other diagnostic procedures.",
      isAvailableSoon: false,
      imageSrc: "https://images.unsplash.com/photo-1579165466949-3180a3d056d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Dental Care",
      description: "Complete dental services including check-ups, cleanings, fillings, and other dental procedures.",
      isAvailableSoon: false,
      imageSrc: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Pharmacy",
      description: "On-site pharmacy providing prescribed medications and over-the-counter drugs at affordable prices.",
      isAvailableSoon: false,
      imageSrc: "https://images.unsplash.com/photo-1624958723474-564d8770ebe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Operation Theatre",
      description: "Modern surgical facility for performing various surgical procedures under sterile conditions.",
      isAvailableSoon: true,
      imageSrc: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "ICU",
      description: "Intensive Care Unit equipped with advanced monitoring and life support systems for critical care patients.",
      isAvailableSoon: true,
      imageSrc: "https://images.unsplash.com/photo-1516549655266-d4a20e25daaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <Layout>
      <div 
        className="bg-hospital-50 py-10 relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Our Services</h1>
          <p className="text-lg text-center text-white max-w-2xl mx-auto">
            Sugam Hospital offers a wide range of healthcare services to meet the needs of our community.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-center">
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
                imageSrc={service.imageSrc}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
