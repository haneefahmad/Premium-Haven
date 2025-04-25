/*
  # Create products and categories tables

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `description` (text)
      - `image_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `image_url` (text)
      - `category_id` (uuid, foreign key)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated users to manage products and categories
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  image_url text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric(10,2) NOT NULL,
  image_url text,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Policies for categories
CREATE POLICY "Allow public read access to categories"
  ON categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage categories"
  ON categories
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for products
CREATE POLICY "Allow public read access to products"
  ON products
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage products"
  ON products
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert initial categories
INSERT INTO categories (name, description, image_url) VALUES
('Watches', 'Luxury timepieces for the discerning collector', 'https://images.pexels.com/photos/9978531/pexels-photo-9978531.jpeg'),
('Leather Goods', 'Handcrafted leather accessories', 'https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg'),
('Sunglasses', 'Designer eyewear and accessories', 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg'),
('Jewelry', 'Fine jewelry and precious pieces', 'https://images.pexels.com/photos/18105/pexels-photo.jpg'),
('Fashion', 'Premium clothing and accessories', 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg');

-- Insert initial products
INSERT INTO products (name, description, price, image_url, category_id) VALUES
('Luxury Chronograph', 'Swiss-made automatic chronograph with sapphire crystal', 2999.99, 'https://images.pexels.com/photos/9978531/pexels-photo-9978531.jpeg', (SELECT id FROM categories WHERE name = 'Watches')),
('Italian Leather Briefcase', 'Handcrafted full-grain leather briefcase', 899.99, 'https://images.pexels.com/photos/6624862/pexels-photo-6624862.jpeg', (SELECT id FROM categories WHERE name = 'Leather Goods')),
('Designer Aviator', 'Titanium frame with polarized lenses', 399.99, 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg', (SELECT id FROM categories WHERE name = 'Sunglasses')),
('Diamond Pendant', '18k gold pendant with brilliant-cut diamond', 1499.99, 'https://images.pexels.com/photos/18105/pexels-photo.jpg', (SELECT id FROM categories WHERE name = 'Jewelry')),
('Cashmere Overcoat', 'Pure cashmere coat in charcoal grey', 1299.99, 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg', (SELECT id FROM categories WHERE name = 'Fashion'));