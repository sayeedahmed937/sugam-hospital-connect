
import React from 'react';
import Layout from '@/components/Layout';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Sugam Hospital</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Our History</h2>
                <p className="text-lg mb-4">
                  Sugam Hospital was established in 2019 with a mission to provide quality and affordable healthcare 
                  to the residents of Chengam and surrounding areas. Since our inception, we have been dedicated to 
                  delivering compassionate care and excellent medical services to our community.
                </p>
                <p className="text-lg mb-4">
                  We began as a small clinic and have steadily grown to offer a wide range of services including 
                  physiotherapy, diagnostic services, laboratory tests, dental care, and pharmacy services.
                </p>
              </div>
              <div className="relative h-full min-h-[250px] rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
                  alt="Hospital building" 
                  className="absolute w-full h-full object-cover"
                />
              </div>
            </div>
            <p className="text-lg">
              Our facility is designed to provide a comfortable and healing environment for all our patients. 
              We take pride in maintaining high standards of cleanliness and utilizing modern medical equipment 
              for diagnosis and treatment.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg mb-6">
              At Sugam Hospital, our mission is to deliver high-quality healthcare services at affordable rates, 
              ensuring that everyone in our community has access to the medical care they need. We believe that 
              healthcare should be accessible to all, regardless of their economic status.
            </p>
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80" 
                alt="Doctors team" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg mb-6">
              We are committed to:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
              <li>Providing compassionate care with dignity and respect</li>
              <li>Maintaining affordable healthcare services</li>
              <li>Expanding our services to meet the evolving needs of our community</li>
              <li>Ensuring high standards of medical practice and patient safety</li>
              <li>Creating a supportive and healing environment for all patients</li>
            </ul>
            <p className="text-lg">
              Our goal is to become a comprehensive healthcare provider that can address all the medical needs 
              of our community. We are working towards offering 24/7 services and adding advanced facilities 
              like an Operation Theatre and ICU before 2026.
            </p>
          </div>

          <Card className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-6">Meet Our Chief Doctor</h2>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
              <div className="flex-shrink-0">
                <Avatar className="h-40 w-40 border-2 border-gray-200">
                  <AvatarImage src="/lovable-uploads/c089a8be-9b76-4ce9-bfac-36603b24564c.png" alt="Dr. K. Syed Madhar Shah" className="object-cover" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-center md:text-left">Dr. K. Syed Madhar Shah</h3>
                <p className="text-lg">
                  Dr. K. Syed Madhar Shah is the Chief Doctor at Sugam Hospital. With extensive medical experience and 
                  a deep commitment to community healthcare, Dr. Shah leads our medical team with expertise and compassion. 
                  Under his guidance, Sugam Hospital continues to deliver quality care while maintaining affordable rates 
                  for all patients.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default About;
