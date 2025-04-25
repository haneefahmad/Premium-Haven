import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-900 min-h-[80vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg)` 
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Elevate Your Style
        </h1>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl">
          Discover our curated collection of premium products
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link 
            to="/shop" 
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-md font-semibold transition-colors duration-300"
          >
            Shop Now
          </Link>
          <Link 
            to="/categories" 
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-md font-semibold transition-colors duration-300"
          >
            Explore Categories
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;