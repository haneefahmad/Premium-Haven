import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartDropdown from './CartDropdown';
import AuthModal from './AuthModal';

const Header = () => {
  const { totalItems } = useCart();
  const { user, signOut } = useAuth();
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      setAuthModalOpen(true);
    }
  };

  return (
    <>
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
      <header className="bg-white backdrop-blur-md bg-opacity-90 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
          >
            PREMIUM HAVEN
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['SHOP', 'CATEGORIES', 'ABOUT'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="font-medium text-gray-800 hover:text-black relative group"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <button 
              onClick={handleAuthClick}
              className="flex items-center space-x-2 font-medium text-gray-800 hover:text-black transition-colors group"
            >
              <User size={20} className="group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden md:inline">
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </button>
            
            <div className="relative">
              <button 
                className="flex items-center text-gray-800 hover:text-black transition-colors group"
                onClick={toggleCart}
                aria-label="Shopping cart"
              >
                <ShoppingCart size={20} className="group-hover:scale-110 transition-transform duration-300" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {totalItems}
                  </span>
                )}
              </button>
              
              {cartOpen && <CartDropdown onClose={() => setCartOpen(false)} />}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4">
            {['SHOP', 'CATEGORIES', 'ABOUT'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="block font-medium text-gray-800 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;