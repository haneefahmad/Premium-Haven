import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartDropdownProps {
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ onClose }) => {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  return (
    <div 
      className="absolute right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl z-50 transform transition-all duration-300 ease-out"
      onMouseLeave={onClose}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Shopping Cart</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full transition-colors duration-200" 
            aria-label="Close cart"
          >
            &times;
          </button>
        </div>
        
        {items.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <Link 
              to="/shop" 
              className="text-black hover:underline"
              onClick={onClose}
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="max-h-96 overflow-y-auto space-y-4">
              {items.map(item => (
                <div key={item.id} className="flex items-center justify-between py-4 border-b border-gray-100">
                  <div className="flex items-center flex-1">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-lg mr-4" 
                    />
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 rounded-md transition-colors duration-200"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 rounded-md transition-colors duration-200"
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded-full transition-all duration-200"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Total</span>
                <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              
              <div className="space-y-3">
                <Link 
                  to="/checkout" 
                  className="block w-full bg-black text-white text-center py-3 rounded-lg hover:bg-gray-900 transform hover:translate-y-[-1px] transition-all duration-200"
                  onClick={onClose}
                >
                  Checkout
                </Link>
                <Link 
                  to="/cart" 
                  className="block w-full bg-gray-100 text-gray-900 text-center py-3 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  onClick={onClose}
                >
                  View Cart
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;