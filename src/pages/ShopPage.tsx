import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts, fetchCategories } from '../lib/api';
import type { Product, Category } from '../lib/api';
import ProductCard from '../components/ProductCard';
import { Filter, SortAsc } from 'lucide-react';

const ShopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('category');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  

  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState(1000000);
  const [sortOption, setSortOption] = useState('name-asc');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts(categoryId || undefined),
          fetchCategories()
        ]);
        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        setError('Failed to load products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [categoryId]);

  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg h-64"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {categoryId 
          ? `${categories.find(c => c.id === categoryId)?.name || 'Products'}`
          : 'All Products'
        }
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters - Mobile Toggle */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg w-full"
          >
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>
        
        {/* Filters Sidebar */}
        <div className={`md:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Filter size={18} />
            </div>
            
            {/* Search */}
            <div className="mb-6">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="price-range" className="block text-sm font-medium text-gray-700">
                  Price Range
                </label>
                <span className="text-sm font-medium text-gray-700">
                  ${priceRange}
                </span>
              </div>
              <input
                type="range"
                id="price-range"
                min="0"
                max="100000"
                step="100"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>$0</span>
                <span>$100000</span>
              </div>
            </div>
            
            {/* Sort By */}
            <div>
              <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-1">
                Sort By
              </label>
              <div className="relative">
                <select
                  id="sort-by"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-gray-500 bg-white"
                >
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="name-desc">Name (Z-A)</option>
                  <option value="price-asc">Price (Low to High)</option>
                  <option value="price-desc">Price (High to Low)</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <SortAsc size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          {(() => {
            let filtered = [...products];
            if (searchTerm) {
              filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (product.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
              );
            }
            filtered = filtered.filter(product => product.price <= priceRange);
            switch (sortOption) {
              case 'name-asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
              case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
              case 'price-asc':
                filtered.sort((a, b) => a.price - b.price);
                break;
              case 'price-desc':
                filtered.sort((a, b) => b.price - a.price);
                break;
            }
            return filtered.length === 0 ? (
              <div className="flex justify-center items-center h-60 bg-gray-50 rounded-lg">
                <p className="text-gray-500">No products found.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;