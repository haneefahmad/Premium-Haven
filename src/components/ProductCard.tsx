import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../lib/api';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({
      id: product.id,
      name: product.name,
      description: product.description || '',
      price: product.price,
      image: product.image_url || '',
      category: product.category?.name || ''
    });
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="relative pb-[100%] overflow-hidden">
          <img 
            src={product.image_url || 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg'} 
            alt={product.name} 
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
            
            <button 
              onClick={handleAddToCart}
              className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transform hover:translate-y-[-1px] transition-all duration-200"
              aria-label="Add to cart"
            >
              <ShoppingCart size={18} />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;