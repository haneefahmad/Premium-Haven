import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchProducts } from '../lib/api';
import type { Product } from '../lib/api';

const FeaturedCollection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts()
      .then(data => {
        // Shuffle the products array
        const shuffled = [...data].sort(() => Math.random() - 0.5);
        setProducts(shuffled.slice(0, 3));
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-12">Loading...</div>;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;