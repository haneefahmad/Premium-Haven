import React from 'react';
import Hero from '../components/Hero';
import FeaturedCollection from '../components/FeaturedCollection';
import PremiumExperience from '../components/PremiumExperience';
import SupabaseGallery from '../components/SupabaseGallery';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedCollection />
      <PremiumExperience />
      <SupabaseGallery />
    </div>
  );
};

export default HomePage;