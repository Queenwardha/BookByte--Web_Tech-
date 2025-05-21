-- Categories
INSERT INTO categories (id, name, description, image_url) VALUES
(1, 'Fiction Books', 'A diverse collection of fictional works including novels and short stories', 'https://images.unsplash.com/photo-1544947950-fa07a98d237f'),
(2, 'Non-Fiction', 'Educational and informative books across various topics', 'https://images.unsplash.com/photo-1461360370896-922624d12aa1'),
(3, 'Children''s Books', 'Books for young readers of all ages', 'https://images.unsplash.com/photo-1633477189729-9290b3261d0a'),
(4, 'Book Accessories', 'Essential accessories for book lovers', 'https://images.unsplash.com/photo-1610116306796-6fea9f4fae38');

-- Fiction Books
INSERT INTO products (id, name, description, price, sale_price, stock_quantity, is_subscription, category_id, created_at, updated_at, active) VALUES
(1001, 'The Midnight Library', 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.', 18.99, 24.99, 100, false, 1, NOW(), NOW(), true),
(1002, 'Eternal Gardens', 'An epic fantasy tale of magic, betrayal, and ancient powers awakening in a world on the brink of war.', 18.50, 22.00, 75, false, 1, NOW(), NOW(), true),
(1003, 'Whispers of the Ocean', 'A beautifully written story about family secrets, forgiveness, and finding oneself on a remote island.', 15.99, 19.99, 85, false, 1, NOW(), NOW(), true),
(1004, 'The Last Stargazer', 'Set in a distant future where humanity seeks new homes among the stars while facing extinction.', 17.25, 21.50, 60, false, 1, NOW(), NOW(), true),
(1005, 'The Midnight Chronicles', 'A detective races against time to solve a series of ritualistic murders before the killer strikes again.', 18.99, 22.00, 90, false, 1, NOW(), NOW(), true),
(1006, 'Love in Paris', 'A heartwarming romance set in the city of lights, where two strangers find an unexpected connection.', 14.99, 18.99, 120, false, 1, NOW(), NOW(), true);

-- Non-Fiction Books
INSERT INTO products (id, name, description, price, sale_price, stock_quantity, is_subscription, category_id, created_at, updated_at, active) VALUES
(2001, 'The Power of Habits', 'Discover how to build positive habits and break negative ones to transform your life and achieve success.', 24.99, 29.99, 150, false, 2, NOW(), NOW(), true),
(2002, 'The Hidden History of Humanity', 'A groundbreaking exploration of forgotten civilizations and their lasting impact on our world today.', 32.50, 39.99, 45, false, 2, NOW(), NOW(), true),
(2003, 'Mindful Leadership', 'Learn how to lead with compassion, presence, and purpose in today''s fast-paced business environment.', 26.99, 32.00, 80, false, 2, NOW(), NOW(), true),
(2004, 'Cosmic Wonders: A Guide to the Universe', 'An illustrated guide to the wonders of our universe, from quantum particles to distant galaxies.', 29.95, 36.50, 65, false, 2, NOW(), NOW(), true),
(2005, 'The Art of Slow Living', 'A practical guide to slowing down, finding balance, and embracing a more intentional and fulfilled life.', 19.99, 24.50, 110, false, 2, NOW(), NOW(), true);

-- Children's Books
INSERT INTO products (id, name, description, price, sale_price, stock_quantity, is_subscription, category_id, created_at, updated_at, active) VALUES
(3001, 'The Little Adventurer', 'Join Sam on an exciting journey through magical lands filled with friendly creatures and valuable lessons.', 16.99, 19.50, 200, false, 3, NOW(), NOW(), true),
(3002, 'The Curious Caterpillar', 'A beautifully illustrated story about transformation, patience, and the wonders of nature.', 14.50, 17.99, 175, false, 3, NOW(), NOW(), true),
(3003, 'Dinosaur Detective', 'Tim and his dinosaur friend solve mysteries in this exciting adventure series that combines fun and learning.', 15.99, 19.99, 150, false, 3, NOW(), NOW(), true),
(3004, 'The Magic Paintbrush', 'A magical tale about a young artist who discovers that her paintings come to life at night.', 13.95, 16.50, 160, false, 3, NOW(), NOW(), true),
(3005, 'Space Explorers', 'An interactive adventure through our solar system, perfect for young space enthusiasts.', 18.99, 22.50, 140, false, 3, NOW(), NOW(), true);

-- Book Accessories
INSERT INTO products (id, name, description, price, sale_price, stock_quantity, is_subscription, category_id, created_at, updated_at, active) VALUES
(4001, 'Modern Bookends Set', 'Elegant metal bookends with a minimalist design, perfect for any bookshelf or desk.', 24.99, 32.00, 100, false, 4, NOW(), NOW(), true),
(4002, 'Oxford Premium Leather Bookmark Set', 'Set of 3 handcrafted leather bookmarks with classic designs and durable construction.', 18.99, 24.50, 250, false, 4, NOW(), NOW(), true),
(4003, 'Adjustable Book Stand', 'Ergonomic book stand with adjustable angles and page holders, perfect for hands-free reading.', 32.50, 39.99, 80, false, 4, NOW(), NOW(), true),
(4004, 'Literary Candle Collection', 'Set of scented candles inspired by classic literature, perfect for creating a cozy reading atmosphere.', 28.99, 35.00, 120, false, 4, NOW(), NOW(), true);

-- Product Images
INSERT INTO product_images (product_id, image_url, is_primary, display_order) VALUES
-- Fiction Books
(1001, 'https://images.unsplash.com/photo-1544947950-fa07a98d237f', true, 0),
(1001, 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb', false, 1),
(1002, 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf', true, 0),
(1003, 'https://images.unsplash.com/photo-1531072901881-d644216d4bf9', true, 0),
(1004, 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb', true, 0),
(1005, 'https://images.unsplash.com/photo-1512820790803-83ca734da794', true, 0),
-- Non-Fiction Books
(2001, 'https://images.unsplash.com/photo-1589998059171-988d887df646', true, 0),
(2002, 'https://images.unsplash.com/photo-1461360370896-922624d12aa1', true, 0),
(2003, 'https://images.unsplash.com/photo-1544947950-fa07a98d237f', true, 0),
(2004, 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564', true, 0),
-- Children's Books
(3001, 'https://images.unsplash.com/photo-1633477189729-9290b3261d0a', true, 0),
(3002, 'https://images.unsplash.com/photo-1629992101753-56d196c8aabb', true, 0),
(3003, 'https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf', true, 0),
-- Accessories
(4001, 'https://images.unsplash.com/photo-1610116306796-6fea9f4fae38', true, 0),
(4002, 'https://images.unsplash.com/photo-1589998059171-988d887df646', true, 0),
(4003, 'https://images.unsplash.com/photo-1598901865264-4f18cac7e204', true, 0);

-- Tags
INSERT INTO tags (id, name) VALUES
(1, 'Bestseller'),
(2, 'New Release'),
(3, 'Award Winner'),
(4, 'Coming Soon'),
(5, 'Limited Edition'),
(6, 'Staff Pick');

-- Product Tags
INSERT INTO product_tags (product_id, tag_id) VALUES
(1001, 1), -- Midnight Library - Bestseller
(1001, 2), -- Midnight Library - New Release
(1004, 1), -- Last Stargazer - Bestseller
(2001, 1), -- Power of Habits - Bestseller
(2004, 2), -- Cosmic Wonders - New Release
(3001, 2), -- Little Adventurer - New Release
(3002, 1), -- Curious Caterpillar - Bestseller
(4002, 1); -- Oxford Premium Leather Bookmark Set - Bestseller

-- Reviews (Sample reviews for products)
INSERT INTO reviews (product_id, user_id, rating, comment, created_at) VALUES
(1001, 1, 5, 'A life-changing book that makes you think about all the possibilities in life.', NOW()),
(1001, 2, 4, 'Beautifully written with an interesting concept.', NOW()),
(2001, 1, 5, 'Practical advice that actually works. Highly recommended!', NOW()),
(3001, 3, 5, 'My kids absolutely love this book. The illustrations are beautiful.', NOW()),
(4001, 2, 4, 'Great quality bookends, really sturdy and look fantastic.', NOW());
