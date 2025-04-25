import React from 'react';
import { ShieldCheck, Package, HeadphonesIcon } from 'lucide-react';

const PremiumExperience: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          The Premium Experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-6">
            <Package size={48} className="mb-4" />
            <h3 className="text-xl font-semibold mb-3">Curated Selection</h3>
            <p className="text-gray-300">
              Handpicked premium products for the discerning customer
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6">
            <ShieldCheck size={48} className="mb-4" />
            <h3 className="text-xl font-semibold mb-3">Quality Assured</h3>
            <p className="text-gray-300">
              Every item meets our strict quality standards
            </p>
          </div>
          
          <div className="flex flex-col items-center p-6">
            <HeadphonesIcon size={48} className="mb-4" />
            <h3 className="text-xl font-semibold mb-3">Exceptional Service</h3>
            <p className="text-gray-300">
              Dedicated support for a seamless shopping experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumExperience;