/*
  # Update products with premium images and descriptions

  1. Changes
    - Update existing products with unique, high-quality images
    - Enhance product descriptions to be more luxurious and detailed
    - Add new premium products to each category
*/

-- Update existing products with better images and descriptions
UPDATE products SET
  name = 'Royal Oak Chronograph',
  description = 'Masterfully crafted Swiss automatic chronograph featuring a grand tapisserie dial, 18k rose gold case, and perpetual calendar. A true testament to horological excellence.',
  image_url = 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
  price = 32500.00
WHERE category_id = (SELECT id FROM categories WHERE name = 'Watches')
RETURNING id;

UPDATE products SET
  name = 'Artisan Leather Portfolio',
  description = 'Hand-stitched in Florence using full-grain Tuscan leather, featuring solid brass hardware and dedicated compartments for your essentials. A sophisticated companion for the modern executive.',
  image_url = 'https://images.pexels.com/photos/2252287/pexels-photo-2252287.jpeg',
  price = 1295.00
WHERE category_id = (SELECT id FROM categories WHERE name = 'Leather Goods')
RETURNING id;

UPDATE products SET
  name = 'Monaco Aviator Limited Edition',
  description = 'Precision-engineered titanium aviators with polarized sapphire crystal lenses, hand-finished with 24k gold accents. The epitome of luxury eyewear.',
  image_url = 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg',
  price = 895.00
WHERE category_id = (SELECT id FROM categories WHERE name = 'Sunglasses')
RETURNING id;

UPDATE products SET
  name = 'Celestial Diamond Necklace',
  description = 'A stunning 18k white gold pendant featuring a 2-carat brilliant-cut diamond surrounded by constellation-inspired smaller diamonds. Each stone hand-selected for exceptional clarity.',
  image_url = 'https://images.pexels.com/photos/11144261/pexels-photo-11144261.jpeg',
  price = 12500.00
WHERE category_id = (SELECT id FROM categories WHERE name = 'Jewelry')
RETURNING id;

UPDATE products SET
  name = 'Mongolian Cashmere Overcoat',
  description = 'Tailored from the finest Mongolian cashmere, this double-breasted overcoat exemplifies luxury with its hand-finished details and silk lining. A masterpiece of craftsmanship.',
  image_url = 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg',
  price = 3895.00
WHERE category_id = (SELECT id FROM categories WHERE name = 'Fashion')
RETURNING id;

-- Insert additional premium products
INSERT INTO products (name, description, price, image_url, category_id) VALUES
-- Watches
('Nautilus Perpetual Calendar', 'A horological masterpiece featuring a perpetual calendar, moon phase indicator, and self-winding movement. Crafted in platinum with a blue sunburst dial.', 125000.00, 'https://images.pexels.com/photos/9978722/pexels-photo-9978722.jpeg', (SELECT id FROM categories WHERE name = 'Watches')),
('Tourbillon Skeleton', 'Hand-finished skeleton tourbillon movement visible through sapphire crystal. Limited edition of 25 pieces worldwide.', 185000.00, 'https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg', (SELECT id FROM categories WHERE name = 'Watches')),

-- Leather Goods
('Crocodile Briefcase', 'Handcrafted from sustainably sourced Nile crocodile leather, featuring palladium hardware and suede lining.', 18500.00, 'https://images.pexels.com/photos/1901403/pexels-photo-1901403.jpeg', (SELECT id FROM categories WHERE name = 'Leather Goods')),
('Heritage Weekend Duffle', 'Shell cordovan leather duffle with antiqued brass hardware and hand-burnished edges. Perfect for the discerning traveler.', 3250.00, 'https://images.pexels.com/photos/2534961/pexels-photo-2534961.jpeg', (SELECT id FROM categories WHERE name = 'Leather Goods')),

-- Sunglasses
('Carbon Fiber Wayfarers', 'Aerospace-grade carbon fiber frame with platinum-coated polarized lenses. Unparalleled lightness meets timeless style.', 1250.00, 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg', (SELECT id FROM categories WHERE name = 'Sunglasses')),
('Rose Gold Navigator', 'Hand-polished 18k rose gold frame with gradient photochromic lenses. The ultimate in luxury eyewear.', 2450.00, 'https://images.pexels.com/photos/1362558/pexels-photo-1362558.jpeg', (SELECT id FROM categories WHERE name = 'Sunglasses')),

-- Jewelry
('Sapphire Tennis Bracelet', 'Channel-set royal blue sapphires in platinum, featuring 25 perfectly matched stones totaling 10 carats.', 28500.00, 'https://images.pexels.com/photos/10984851/pexels-photo-10984851.jpeg', (SELECT id FROM categories WHERE name = 'Jewelry')),
('Emerald Cut Diamond Ring', 'Flawless 5-carat emerald cut diamond set in platinum with trapezoid side stones. A masterpiece of precision.', 185000.00, 'https://images.pexels.com/photos/12018486/pexels-photo-12018486.jpeg', (SELECT id FROM categories WHERE name = 'Jewelry')),

-- Fashion
('Vicuña Dinner Jacket', 'Tailored from rare vicuña wool, featuring hand-rolled silk lapels and mother of pearl buttons. Limited availability.', 21500.00, 'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg', (SELECT id FROM categories WHERE name = 'Fashion')),
('Bespoke Silk Evening Gown', 'Hand-embroidered Italian silk with crystal beading and a sweeping train. Each piece made to order.', 12500.00, 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg', (SELECT id FROM categories WHERE name = 'Fashion'));

-- Update category descriptions to be more premium
UPDATE categories SET
  description = 'Exceptional timepieces that represent the pinnacle of watchmaking artistry and mechanical innovation'
WHERE name = 'Watches';

UPDATE categories SET
  description = 'Exquisite leather goods crafted by master artisans using the world''s finest materials'
WHERE name = 'Leather Goods';

UPDATE categories SET
  description = 'Sophisticated eyewear that combines cutting-edge technology with timeless elegance'
WHERE name = 'Sunglasses';

UPDATE categories SET
  description = 'Extraordinary pieces that showcase the finest gems and precious metals, each telling its own story'
WHERE name = 'Jewelry';

UPDATE categories SET
  description = 'Meticulously crafted garments that define contemporary luxury through superior materials and craftsmanship'
WHERE name = 'Fashion';