import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Premium Haven</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Curating excellence for the discerning customer since 2018
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Premium Haven was founded with a simple yet powerful vision: to create a destination where quality, craftsmanship, and luxury converge. What began as a small passion project has grown into a curated marketplace offering the finest products across multiple categories.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our team scours the globe to find the most exceptional items, each meeting our rigorous standards for quality, design, and sustainability. We believe that everyone deserves access to premium products that not only look beautiful but are built to last.
          </p>
          <p className="text-gray-700 mb-12 leading-relaxed">
            Today, Premium Haven continues to grow, but our core principles remain unchanged: uncompromising quality, exceptional service, and a relentless pursuit of excellence in everything we offer.
          </p>
          
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-gray-700">
                Every product in our collection undergoes rigorous quality assessment. We don't compromise on materials, craftsmanship, or durability.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Thoughtful Curation</h3>
              <p className="text-gray-700">
                We carefully select each item in our catalog, ensuring it meets not just our quality standards but also provides genuine value to our customers.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
              <p className="text-gray-700">
                Your experience matters to us. From browsing to unboxing, we're committed to making every step of your journey with us exceptional.
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Behind Premium Haven is a dedicated team of professionals passionate about bringing the best products to our customers. Our diverse backgrounds in design, retail, and customer service create the perfect blend of expertise needed to deliver the Premium Haven experience.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-semibold">Haneef Ahmad</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-semibold">Bala I</h3>
              <p className="text-gray-600">Head of Curation</p>
            </div>
            <div className="text-center">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-semibold">Mukund A</h3>
              <p className="text-gray-600">Customer Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;