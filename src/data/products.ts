import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Watch',
    description: 'Elegant timepiece with premium craftsmanship',
    price: 299.99,
    image_url: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
    category_id: "1"
  },
  {
    id: '2',
    name: 'Leather Wallet',
    description: 'Handcrafted genuine leather wallet',
    price: 89.99,
    image_url: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg',
    category_id: "1"
  },
  {
    id: '3',
    name: 'Designer Sunglasses',
    description: 'Luxury sunglasses with UV protection',
    price: 199.99,
    image_url: 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg',
    category_id: "1"
  },
  {
    id: '4',
    name: 'Aviator Classic',
    description: 'UV protection with style',
    price: 456.78,
    image_url: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg',
    category_id: "1"
  },
  {
    id: '5',
    name: 'Belt Collection',
    description: 'Handcrafted from premium leather',
    price: 456.78,
    image_url: 'https://images.pexels.com/photos/45055/pexels-photo-45055.jpeg',
    category_id: "1"
  },
  {
    id: '6',
    name: 'Cashmere Sweater',
    description: 'Luxury item crafted with premium materials',
    price: 299.99,
    image_url: 'https://images.pexels.com/photos/6046235/pexels-photo-6046235.jpeg',
    category_id: "2"
  },
  {
    id: '7',
    name: 'Classic Oxford Shoes',
    description: 'Luxury item crafted with premium materials',
    price: 549.99,
    image_url: 'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg',
    category_id: "3"
  },
  {
    id: '8',
    name: 'Designer Silk Dress',
    description: 'Luxury item crafted with premium materials',
    price: 599.99,
    image_url: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg',
    category_id: "2"
  },
  {
    id: '9',
    name: 'Designer Sneakers',
    description: 'Luxury item crafted with premium materials',
    price: 399.99,
    image_url: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
    category_id: "3"
  },
  {
    id: '10',
    name: 'Executive Briefcase',
    description: 'Handcrafted from premium leather',
    price: 678.90,
    image_url: 'https://images.pexels.com/photos/1901403/pexels-photo-1901403.jpeg',
    category_id: "1"
  },
  {
    id: '11',
    name: 'Gold-plated Watch',
    description: 'Luxury item crafted with premium materials',
    price: 899.99,
    image_url: 'https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg',
    category_id: "1"
  },
  {
    id: '12',
    name: 'Italian Leather Loafers',
    description: 'Luxury item crafted with premium materials',
    price: 459.99,
    image_url: 'https://images.pexels.com/photos/1619652/pexels-photo-1619652.jpeg',
    category_id: "3"
  }
];

// Ensure featuredProducts use the same IDs as Supabase for correct navigation
export const featuredProducts = products.slice(0, 3);