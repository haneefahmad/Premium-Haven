import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-md mx-auto">
          <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={32} />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            to="/shop" 
            className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-12 p-4 bg-gray-50 text-sm font-semibold">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Total</div>
            </div>
            
            {items.map(item => (
              <div 
                key={item.id} 
                className="grid grid-cols-1 md:grid-cols-12 p-4 border-b last:border-b-0 items-center"
              >
                {/* Product */}
                <div className="col-span-6 flex items-center mb-4 md:mb-0">
                  <div className="w-20 h-20 rounded overflow-hidden mr-4">
                    <img 
                      src={item.image_url} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm flex items-center mt-1 hover:underline"
                    >
                      <Trash2 size={14} className="mr-1" />
                      Remove
                    </button>
                  </div>
                </div>
                
                {/* Price */}
                <div className="col-span-2 text-center">
                  <span className="md:hidden inline-block mr-2 font-medium">Price:</span>
                  ${item.price.toFixed(2)}
                </div>
                
                {/* Quantity */}
                <div className="col-span-2 flex items-center justify-center my-4 md:my-0">
                  <div className="flex items-center border rounded-md">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-3 py-1">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                      aria-label="Increase quantity"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                
                {/* Total */}
                <div className="col-span-2 text-center font-semibold">
                  <span className="md:hidden inline-block mr-2 font-medium">Total:</span>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <Link 
              to="/shop" 
              className="inline-flex items-center text-gray-700 hover:text-gray-900"
            >
              <ArrowRight size={16} className="mr-2 transform rotate-180" />
              Continue Shopping
            </Link>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Free</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold">Total</span>
              <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            
            <button
              className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
              onClick={() => navigate('/checkout')}
              disabled={items.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;