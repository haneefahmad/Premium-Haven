import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowLeft, Star, Truck, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Product Not Found</h2>
        <p className="mb-6">The product you are looking for does not exist.</p>
        <button 
          onClick={() => navigate('/shop')}
          className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Shop
        </button>
      </div>
    );
  }
  
  // Get related products (same category)
  const relatedProducts = products
    .filter(p => p.category_id === product.category_id && p.id !== product.id)
    .slice(0, 3);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="inline-flex items-center mb-8 hover:underline"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src={product.image_url} 
            alt={product.name} 
            className="w-full h-full object-cover object-center" 
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
              <Star fill="currentColor" size={18} />
            </div>
            <span className="text-sm text-gray-500">(12 reviews)</span>
          </div>
          
          <p className="text-2xl font-bold mb-6">${product.price.toFixed(2)}</p>
          
          <p className="text-gray-700 mb-8">{product.description}</p>
          
          <div className="mb-8">
            <button 
              onClick={() => addToCart(product)}
              className="flex items-center justify-center w-full bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition mb-4"
            >
              <ShoppingCart size={18} className="mr-2" />
              Add to Cart
            </button>
            
            <button className="w-full border border-gray-900 px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
          
          <div className="border-t border-b py-4 space-y-4">
            <div className="flex items-start">
              <Truck size={20} className="mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">Free Shipping</h3>
                <p className="text-sm text-gray-500">Free standard shipping on orders over $100</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Shield size={20} className="mr-3 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium">1 Year Warranty</h3>
                <p className="text-sm text-gray-500">All our products include a 1-year warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map(relatedProduct => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;