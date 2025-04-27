
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const routerFuture = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router future={routerFuture}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Toaster position="top-center" />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;