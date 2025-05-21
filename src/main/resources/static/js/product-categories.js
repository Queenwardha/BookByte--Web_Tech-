/**
 * BookByte Product Categories
 * This file contains structured data for product categories and items that can be used
 * to populate category modals dynamically.
 */

const bookbyteCategories = {
  // Fiction Books category
  "fiction-books": {
    title: "Fiction Books",
    items: [
      {
        id: 1001,
        title: "The Midnight Library",
        author: "Matt Haig",
        price: 18.99,
        originalPrice: 24.99,
        coverImage:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop",
        hoverImage:
          "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1374&auto=format&fit=crop",
        category: "Literary Fiction",
        rating: 4.7,
        inStock: true,
        isNew: false,
        isBestseller: false,
        discount: 24,
        description:
          "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
      },
      {
        id: 1002,
        title: "Eternal Gardens",
        author: "Marcus Reid",
        price: 18.5,
        originalPrice: 22.0,
        coverImage:
          "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1374&auto=format&fit=crop",
        category: "Fantasy",
        rating: 4.8,
        inStock: true,
        isNew: true,
        isBestseller: false,
        description:
          "An epic fantasy tale of magic, betrayal, and ancient powers awakening in a world on the brink of war.",
      },
      {
        id: 1003,
        title: "Whispers of the Ocean",
        author: "Elizabeth Chen",
        price: 15.99,
        originalPrice: 19.99,
        coverImage:
          "https://images.unsplash.com/photo-1531072901881-d644216d4bf9?q=80&w=1374&auto=format&fit=crop",
        category: "Literary Fiction",
        rating: 4.5,
        inStock: true,
        isNew: false,
        isBestseller: false,
        description:
          "A beautifully written story about family secrets, forgiveness, and finding oneself on a remote island.",
      },
      {
        id: 1004,
        title: "The Last Stargazer",
        author: "James Peterson",
        price: 17.25,
        originalPrice: 21.5,
        coverImage:
          "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1374&auto=format&fit=crop",
        category: "Science Fiction",
        rating: 4.6,
        inStock: true,
        isNew: false,
        isBestseller: true,
        description:
          "Set in a distant future where humanity seeks new homes among the stars while facing extinction.",
      },
      {
        id: 1005,
        title: "The Midnight Chronicles",
        author: "Robert Blackwood",
        price: 18.99,
        originalPrice: 22.0,
        coverImage:
          "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1374&auto=format&fit=crop",
        category: "Mystery & Thriller",
        rating: 4.4,
        inStock: true,
        isNew: true,
        isBestseller: false,
        description:
          "A detective races against time to solve a series of ritualistic murders before the killer strikes again.",
      },
      {
        id: 1006,
        title: "Love in Paris",
        author: "Sophie Laurent",
        price: 14.99,
        originalPrice: 18.99,
        coverImage:
          "https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?q=80&w=1374&auto=format&fit=crop",
        category: "Romance",
        rating: 4.3,
        inStock: true,
        isNew: false,
        isBestseller: false,
        description:
          "A heartwarming romance set in the city of lights, where two strangers find an unexpected connection.",
      },
    ],
  },

  // Non-Fiction category
  "non-fiction": {
    title: "Non-Fiction",
    items: [
      {
        id: 2001,
        title: "The Power of Habits",
        author: "Dr. Michael Stevens",
        price: 24.99,
        originalPrice: 29.99,
        coverImage:
          "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1376&auto=format&fit=crop",
        category: "Self-Help",
        rating: 4.8,
        inStock: true,
        isNew: false,
        isBestseller: true,
        description:
          "Discover how to build positive habits and break negative ones to transform your life and achieve success.",
      },
      {
        id: 2002,
        title: "The Hidden History of Humanity",
        author: "Prof. Sarah Johnson",
        price: 32.5,
        originalPrice: 39.99,
        coverImage:
          "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=1474&auto=format&fit=crop",
        category: "History",
        rating: 4.7,
        inStock: true,
        isNew: true,
        isBestseller: false,
        description:
          "A groundbreaking exploration of forgotten civilizations and their lasting impact on our world today.",
      },
      {
        id: 2003,
        title: "Mindful Leadership",
        author: "Thomas Zhang",
        price: 26.99,
        originalPrice: 32.0,
        coverImage:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop",
        category: "Business",
        rating: 4.5,
        inStock: true,
        isNew: false,
        isBestseller: true,
        description:
          "Learn how to lead with compassion, presence, and purpose in today's fast-paced business environment.",
      },
      {
        id: 2004,
        title: "Cosmic Wonders: A Guide to the Universe",
        author: "Dr. Elena Rivera",
        price: 29.95,
        originalPrice: 36.5,
        coverImage:
          "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1427&auto=format&fit=crop",
        category: "Science",
        rating: 4.9,
        inStock: true,
        isNew: true,
        isBestseller: true,
        description:
          "An illustrated guide to the wonders of our universe, from quantum particles to distant galaxies.",
      },
      {
        id: 2005,
        title: "The Art of Slow Living",
        author: "Emma Williams",
        price: 19.99,
        originalPrice: 24.5,
        coverImage:
          "https://images.unsplash.com/photo-1598901865264-4f18cac7e204?q=80&w=1374&auto=format&fit=crop",
        category: "Lifestyle",
        rating: 4.6,
        inStock: true,
        isNew: false,
        isBestseller: false,
        description:
          "A practical guide to slowing down, finding balance, and embracing a more intentional and fulfilled life.",
      },
      {
        id: 2006,
        title: "Creativity and Innovation",
        author: "Dr. James Robinson",
        price: 45.99,
        originalPrice: 59.99,
        coverImage:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop",
        category: "Business",
        rating: 4.7,
        inStock: true,
        isNew: false,
        isBestseller: true,
        description:
          "A comprehensive handbook for business leaders looking to foster innovation and creative thinking.",
      },
    ],
  },

  // Children's Books category
  "children-books": {
    title: "Children's Books",
    items: [
      {
        id: 3001,
        title: "The Little Adventurer",
        author: "Lisa Morgan",
        price: 16.99,
        originalPrice: 19.5,
        coverImage:
          "https://images.unsplash.com/photo-1633477189729-9290b3261d0a?q=80&w=1374&auto=format&fit=crop",
        category: "Picture Book",
        rating: 4.9,
        inStock: true,
        isNew: true,
        isBestseller: true,
        description:
          "Join Sam on an exciting journey through magical lands filled with friendly creatures and valuable lessons.",
      },
      {
        id: 3002,
        title: "The Curious Caterpillar",
        author: "David Wilson",
        price: 14.5,
        originalPrice: 17.99,
        coverImage:
          "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1374&auto=format&fit=crop",
        category: "Early Readers",
        rating: 4.8,
        inStock: true,
        isNew: false,
        isBestseller: true,
        description:
          "A beautifully illustrated story about transformation, patience, and the wonders of nature.",
      },
      {
        id: 3003,
        title: "Dinosaur Detective",
        author: "Alex Thompson",
        price: 15.99,
        originalPrice: 19.99,
        coverImage:
          "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?q=80&w=1374&auto=format&fit=crop",
        category: "Middle Grade",
        rating: 4.7,
        inStock: true,
        isNew: true,
        isBestseller: false,
        description:
          "Tim and his dinosaur friend solve mysteries in this exciting adventure series that combines fun and learning.",
      },
      {
        id: 3004,
        title: "The Magic Paintbrush",
        author: "Sophia Lee",
        price: 13.95,
        originalPrice: 16.5,
        coverImage:
          "https://images.unsplash.com/photo-1471970471555-19d4b113e9ed?q=80&w=1430&auto=format&fit=crop",
        category: "Fantasy",
        rating: 4.6,
        inStock: true,
        isNew: false,
        isBestseller: false,
        description:
          "A magical tale about a young artist who discovers that her paintings come to life at night.",
      },
      {
        id: 3005,
        title: "Space Explorers",
        author: "Dr. Neil Adams",
        price: 18.99,
        originalPrice: 22.5,
        coverImage:
          "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=1470&auto=format&fit=crop",
        category: "Educational",
        rating: 4.8,
        inStock: true,
        isNew: true,
        isBestseller: true,
        description:
          "An interactive adventure through our solar system, perfect for young space enthusiasts.",
      },
    ],
  },

  // Book Accessories category
  "book-accessories": {
    title: "Book Accessories",
    items: [
      {
        id: 4001,
        title: "Modern Bookends Set",
        author: null,
        price: 24.99,
        originalPrice: 32.0,
        coverImage:
          "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=1470&auto=format&fit=crop",
        category: "Bookends",
        rating: 4.5,
        inStock: true,
        isNew: true,
        isBestseller: false,
        description:
          "Elegant metal bookends with a minimalist design, perfect for any bookshelf or desk.",
      },
      {
        id: 4002,
        title: "Oxford Premium Leather Bookmark Set",
        author: null,
        price: 18.99,
        originalPrice: 24.5,
        coverImage:
          "https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=1376&auto=format&fit=crop",
        category: "Bookmarks",
        rating: 4.8,
        inStock: true,
        isNew: false,
        isBestseller: true,
        description:
          "Set of 3 handcrafted leather bookmarks with classic designs and durable construction.",
      },
      {
        id: 4003,
        title: "Adjustable Book Stand",
        author: null,
        price: 32.5,
        originalPrice: 39.99,
        coverImage:
          "https://images.unsplash.com/photo-1598901865264-4f18cac7e204?q=80&w=1374&auto=format&fit=crop",
        category: "Reading Aids",
        rating: 4.7,
        inStock: true,
        isNew: true,
        isBestseller: false,
        description:
          "Ergonomic book stand with adjustable angles and page holders, perfect for hands-free reading.",
      },
      {
        id: 4004,
        title: "Literary Candle Collection",
        author: null,
        price: 28.99,
        originalPrice: 35.0,
        coverImage:
          "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1374&auto=format&fit=crop",
        category: "Home Decor",
        rating: 4.9,
        inStock: true,
        isNew: false,
        isBestseller: true,
        description:
          "Set of 3 scented candles inspired by classic novels, perfect for creating a cozy reading atmosphere.",
      },
      {
        id: 4005,
        title: "Vintage Book Cover Tote Bag",
        author: null,
        price: 19.99,
        originalPrice: 24.99,
        coverImage:
          "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1374&auto=format&fit=crop",
        category: "Book Bags",
        rating: 4.6,
        inStock: true,
        isNew: false,
        isBestseller: false,
        description:
          "Canvas tote bag featuring classic book cover designs, perfect for carrying your reading materials.",
      },
    ],
  },
};

/**
 * Loads products for a specific category into a modal
 * @param {string} categoryId - The ID of the category to load
 * @param {number} page - The page number to load (pagination)
 */
window.loadCategoryProducts = function (categoryId, page = 1) {
  console.log(`📚 Loading products for category: ${categoryId}, page: ${page}`);

  // Safety check for modal
  const modal = document.getElementById(`${categoryId}-modal`);
  if (!modal) {
    console.error(`❌ Modal with ID ${categoryId}-modal not found`);
    if (window.showToast) {
      window.showToast(
        `Error: Could not find modal for ${categoryId}`,
        "error"
      );
    }
    return;
  }

  // First make sure modal is visible
  modal.style.display = "block";
  modal.style.zIndex = "9999999";
  modal.style.visibility = "visible";

  // Find the products container
  const modalProducts = modal.querySelector(`.modal-products`);
  if (!modalProducts) {
    console.error(
      `❌ No .modal-products container found in modal #${categoryId}-modal`
    );
    return;
  }

  // Show loading indicator
  modalProducts.innerHTML = `
        <div class="modal-loading">
            <div class="spinner" style="width: 40px; height: 40px; border: 4px solid rgba(0, 0, 0, 0.1); border-left-color: var(--book-accent, #8a4f7d); border-radius: 50%; animation: spin 1s linear infinite;"></div>
        </div>
    `;

  // Define keyframes for spinner animation
  if (!document.getElementById("spinnerAnimation")) {
    const styleSheet = document.createElement("style");
    styleSheet.id = "spinnerAnimation";
    styleSheet.textContent = `
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        `;
    document.head.appendChild(styleSheet);
  }

  // Get category data with delay to ensure loading indicator is visible
  setTimeout(() => {
    try {
      // Get category data
      const category = bookbyteCategories[categoryId];
      if (!category) {
        modalProducts.innerHTML =
          '<div class="modal-error" style="text-align: center; padding: 30px;">Category not found</div>';
        console.error(
          `❌ Category ${categoryId} not found in bookbyteCategories data`
        );
        return;
      }

      // Pagination settings - always show exactly 3 products
      const itemsPerPage = 3; // Changed from 6 to 3 products
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedItems = category.items.slice(startIndex, endIndex);

      // Clear previous content
      modalProducts.innerHTML = "";

      // Create product grid with inline style for reliability
      const productGrid = document.createElement("div");
      productGrid.className = "modal-product-grid";
      productGrid.style.display = "grid";
      productGrid.style.gridTemplateColumns =
        "repeat(auto-fill, minmax(250px, 1fr))";
      productGrid.style.gap = "25px";
      productGrid.style.marginTop = "20px";

      if (paginatedItems.length === 0) {
        const noProductsMsg = document.createElement("div");
        noProductsMsg.className = "no-products-message";
        noProductsMsg.style.textAlign = "center";
        noProductsMsg.style.padding = "40px";
        noProductsMsg.style.gridColumn = "1 / -1";
        noProductsMsg.textContent = "No products found in this category";
        productGrid.appendChild(noProductsMsg);
      } else {
        console.log(
          `📚 Creating product elements for ${paginatedItems.length} items`
        );
        paginatedItems.forEach((product) => {
          try {
            const productElement = createProductElement(product);
            productGrid.appendChild(productElement);
          } catch (productErr) {
            console.error(`Error creating product element:`, productErr);
            // Create a simplified fallback product element
            const fallbackElement = document.createElement("div");
            fallbackElement.className = "modal-product";
            fallbackElement.style.padding = "15px";
            fallbackElement.innerHTML = `
                            <h3 style="margin-bottom: 10px;">${
                              product.title || "Product"
                            }</h3>
                            <p>$${
                              typeof product.price === "number"
                                ? product.price.toFixed(2)
                                : product.price
                            }</p>
                        `;
            productGrid.appendChild(fallbackElement);
          }
        });
      }

      modalProducts.appendChild(productGrid);

      // Update pagination
      updatePagination(
        categoryId,
        page,
        Math.ceil(category.items.length / itemsPerPage)
      );

      console.log(`✅ Successfully loaded products for ${categoryId}`);

      // Add toast container if it doesn't exist
      if (!document.querySelector(".toast-container")) {
        const toastContainer = document.createElement("div");
        toastContainer.className = "toast-container";
        document.body.appendChild(toastContainer);
      }
    } catch (err) {
      console.error(`❌ Error in loadCategoryProducts:`, err);
      modalProducts.innerHTML = `
                <div class="modal-error" style="text-align: center; padding: 30px; color: #d9534f;">
                    <p>Error loading products.</p>                <button onclick="window.loadCategoryProducts('${categoryId}', ${page})" style="margin-top: 15px; padding: 8px 16px; background: var(--book-accent, #8a4f7d); color: white; border: none; border-radius: 4px; cursor: pointer;">
                    Try Again
                </button>
                </div>
            `;
    }
  }, 200); // Short delay to ensure loading state is visible
};

/**
 * Creates a product element from product data
 * @param {Object} product - The product data
 * @returns {HTMLElement} - The product element
 */
window.createProductElement = function (product) {
  const productDiv = document.createElement("div");
  productDiv.className = "modal-product";
  productDiv.dataset.productId = product.id;

  // Create badge HTML - with fallbacks for different product formats
  let badgeHtml = "";
  if (product.isNew) {
    badgeHtml += '<span class="new-badge">NEW</span>';
  }
  if (product.isBestseller) {
    badgeHtml += '<span class="bestseller-badge">BESTSELLER</span>';
  }

  // Handle prices with safeguards
  const formattedPrice =
    typeof product.price === "number"
      ? `$${product.price.toFixed(2)}`
      : product.price;

  const formattedOriginalPrice =
    typeof product.originalPrice === "number"
      ? `$${product.originalPrice.toFixed(2)}`
      : product.originalPrice || "";

  const displayOriginalPrice = product.originalPrice
    ? `<span class="original-price">${formattedOriginalPrice}</span>`
    : "";

  // Handle image source with fallback
  const imageSource =
    product.coverImage ||
    product.image ||
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1374&auto=format&fit=crop";

  // Use custom style to ensure proper layout even if CSS has issues
  productDiv.style.display = "flex";
  productDiv.style.flexDirection = "column";
  productDiv.style.backgroundColor = "#fff";
  productDiv.style.borderRadius = "8px";
  productDiv.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
  productDiv.style.overflow = "hidden";
  productDiv.style.transition = "transform 0.2s, box-shadow 0.2s";

  productDiv.innerHTML = `
        <div class="modal-product-img" style="position: relative; overflow: hidden;">
            <img src="${imageSource}" alt="${
    product.title
  }" style="width: 100%; height: 200px; object-fit: cover; transition: transform 0.3s ease;">
            ${badgeHtml}
            ${
              product.discount
                ? `<span class="discount-badge" style="position: absolute; top: 10px; right: 10px; background-color: #e94560; color: white; padding: 5px 8px; font-size: 11px; font-weight: 600; border-radius: 4px;">${product.discount}% OFF</span>`
                : ""
            }
        </div>
        <div class="modal-product-info" style="padding: 15px;">
            <h3 style="margin: 0 0 5px; font-size: 16px; color: var(--book-primary);">${
              product.title
            }</h3>
            ${
              product.author
                ? `<p class="author" style="margin: 0 0 8px; font-size: 14px; color: #666;">by ${product.author}</p>`
                : ""
            }
            <div class="rating" style="margin-bottom: 10px; color: var(--book-accent);">
                ${getRatingStars(product.rating)}
            </div>
            <div class="price-container" style="display: flex; align-items: center; gap: 8px; margin-bottom: 15px;">
                <span class="current-price" style="font-weight: 700; color: var(--book-accent); font-size: 18px;">${formattedPrice}</span>
                ${
                  displayOriginalPrice
                    ? `<del style="color: #999; font-size: 14px;">${displayOriginalPrice}</del>`
                    : ""
                }
            </div>
            <div class="product-actions" style="display: flex; justify-content: space-between;">
                <button 
                    class="add-to-cart" 
                    style="padding: 8px 12px; background: var(--book-primary); color: white; border: none; border-radius: 4px; cursor: pointer;" 
                    onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
                <button 
                    class="add-to-wishlist" 
                    style="padding: 8px; background: transparent; border: 1px solid var(--book-primary); border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center;" 
                    onclick="addToWishlist(${product.id})">
                    <ion-icon name="heart-outline"></ion-icon>
                </button>
            </div>
        </div>
    `;

  return productDiv;
};

/**
 * Generates HTML for star ratings
 * @param {number} rating - The rating value
 * @returns {string} - HTML for star icons
 */
window.getRatingStars = function (rating) {
  let starsHtml = "";
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<ion-icon name="star"></ion-icon>';
  }

  if (hasHalfStar) {
    starsHtml += '<ion-icon name="star-half-outline"></ion-icon>';
  }

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<ion-icon name="star-outline"></ion-icon>';
  }

  return starsHtml;
};

/**
 * Updates the pagination controls for a category modal
 * @param {string} categoryId - The ID of the category
 * @param {number} currentPage - The current page number
 * @param {number} totalPages - The total number of pages
 */
function updatePagination(categoryId, currentPage, totalPages) {
  const paginationContainer = document.querySelector(
    `#${categoryId}-modal .modal-pagination`
  );
  if (!paginationContainer) return;

  paginationContainer.innerHTML = "";

  if (totalPages <= 1) return;

  // Previous button
  const prevButton = document.createElement("button");
  prevButton.className = "pagination-button prev";
  prevButton.disabled = currentPage === 1;
  prevButton.innerHTML = "&laquo; Prev";
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      window.loadCategoryProducts(categoryId, currentPage - 1);
    }
  });
  paginationContainer.appendChild(prevButton);

  // Page numbers
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  // First page button if not visible
  if (startPage > 1) {
    const firstPageBtn = document.createElement("button");
    firstPageBtn.className = "pagination-button";
    firstPageBtn.textContent = "1";
    firstPageBtn.addEventListener("click", () =>
      window.loadCategoryProducts(categoryId, 1)
    );
    paginationContainer.appendChild(firstPageBtn);

    if (startPage > 2) {
      const ellipsis = document.createElement("span");
      ellipsis.className = "pagination-ellipsis";
      ellipsis.textContent = "...";
      paginationContainer.appendChild(ellipsis);
    }
  }

  // Page buttons
  for (let i = startPage; i <= endPage; i++) {
    const pageButton = document.createElement("button");
    pageButton.className = `pagination-button ${
      i === currentPage ? "active" : ""
    }`;
    pageButton.textContent = i;
    pageButton.addEventListener("click", () =>
      window.loadCategoryProducts(categoryId, i)
    );
    paginationContainer.appendChild(pageButton);
  }

  // Last page button if not visible
  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      const ellipsis = document.createElement("span");
      ellipsis.className = "pagination-ellipsis";
      ellipsis.textContent = "...";
      paginationContainer.appendChild(ellipsis);
    }

    const lastPageBtn = document.createElement("button");
    lastPageBtn.className = "pagination-button";
    lastPageBtn.textContent = totalPages;
    lastPageBtn.addEventListener("click", () =>
      window.loadCategoryProducts(categoryId, totalPages)
    );
    paginationContainer.appendChild(lastPageBtn);
  }

  // Next button
  const nextButton = document.createElement("button");
  nextButton.className = "pagination-button next";
  nextButton.disabled = currentPage === totalPages;
  nextButton.innerHTML = "Next &raquo;";
  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      window.loadCategoryProducts(categoryId, currentPage + 1);
    }
  });
  paginationContainer.appendChild(nextButton);
}

/**
 * Opens a category modal and loads its products
 * @param {string} categoryId - The ID of the category to open
 */
window.openCategoryModal = function (categoryId) {
  console.log(`🔍 BookByte: Opening modal for category ${categoryId}`);

  // Prevent default behavior if called from an event
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const modal = document.getElementById(`${categoryId}-modal`);
  if (!modal) {
    console.error(`❌ Modal with ID ${categoryId}-modal not found`);
    if (window.showToast) {
      window.showToast(
        `Error: Could not find modal for ${categoryId}`,
        "error"
      );
    }
    return false;
  }

  // Close any open modals first to prevent stacking
  document.querySelectorAll(".modal").forEach((m) => {
    m.style.display = "none";
  });

  // Show the modal with forced styling to ensure visibility
  modal.style.display = "block";
  modal.style.zIndex = "9999999";
  modal.style.visibility = "visible";
  document.body.style.overflow = "hidden"; // Prevent page scrolling when modal is open

  // Add a class for animation
  modal.classList.add("modal-active");

  // Load products with a small delay to ensure modal is visible first
  setTimeout(() => {
    window.loadCategoryProducts(categoryId);
    console.log(`✅ Called loadCategoryProducts for ${categoryId}`);
  }, 50);

  // Close modal when clicked outside or on close button
  const closeBtn = modal.querySelector(".close-modal");
  if (closeBtn) {
    closeBtn.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      window.closeBookByteModal(modal);
      return false;
    };
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      window.closeBookByteModal(modal);
    }
  };

  // Add keyboard support for closing with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.keyCode === 27) {
      window.closeBookByteModal(modal);
    }
  });
};

/**
 * Closes a modal window
 * @param {HTMLElement} modal - The modal element to close
 */
window.closeBookByteModal = function (modal) {
  if (!modal) return;

  modal.classList.remove("modal-active");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // Restore scrolling
};

/**
 * Adds a product to the cart
 * @param {number} productId - The ID of the product to add
 */
function addToCart(productId) {
  console.log(`Adding product ${productId} to cart`);

  // Find the product in the categories
  const product = findProductById(productId);

  if (!product) {
    console.error(`Product with ID ${productId} not found`);
    showToast("Error: Product not found", "error");
    return;
  }

  // In a real application, you would call an API endpoint to add to cart
  // For now, just show a toast notification
  showToast(`${product.title} added to cart`, "success");

  // Update cart counter if it exists
  try {
    updateCartCounter(1);
  } catch (e) {
    console.log("Cart counter update function not available");
  }
}

/**
 * Adds a product to the wishlist
 * @param {number} productId - The ID of the product to add
 */
function addToWishlist(productId) {
  console.log(`Adding product ${productId} to wishlist`);

  // Find the product in the categories
  const product = findProductById(productId);

  if (!product) {
    console.error(`Product with ID ${productId} not found`);
    showToast("Error: Product not found", "error");
    return;
  }

  // In a real application, you would call an API endpoint to add to wishlist
  // For now, just show a toast notification
  showToast(`${product.title} added to wishlist`, "success");

  // Update wishlist counter if it exists
  try {
    updateWishlistCounter(1);
  } catch (e) {
    console.log("Wishlist counter update function not available");
  }
}

/**
 * Finds a product by its ID across all categories
 * @param {number} productId - The ID of the product to find
 * @returns {Object|null} - The product object or null if not found
 */
function findProductById(productId) {
  for (const categoryId in bookbyteCategories) {
    const category = bookbyteCategories[categoryId];
    const product = category.items.find((item) => item.id === productId);
    if (product) return product;
  }
  return null;
}

/**
 * Displays a toast notification
 * @param {string} message - The message to display
 * @param {string} type - The type of toast (success, error, info)
 */
function showToast(message, type = "info") {
  // Find or create toast container
  let toastContainer = document.querySelector(".toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.className = "toast-container";
    document.body.appendChild(toastContainer);
  }

  // Create toast element
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  // Add appropriate icon
  let icon = "";
  switch (type) {
    case "success":
      icon = '<ion-icon name="checkmark-circle"></ion-icon>';
      break;
    case "error":
      icon = '<ion-icon name="alert-circle"></ion-icon>';
      break;
    default:
      icon = '<ion-icon name="information-circle"></ion-icon>';
  }

  // Set toast content
  toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-message">${message}</div>
    `;

  // Add to container
  toastContainer.appendChild(toast);

  // Remove after delay
  setTimeout(() => {
    toast.classList.add("toast-hide");
    setTimeout(() => {
      if (toast.parentNode) {
        toastContainer.removeChild(toast);
      }
    }, 300); // Match the CSS transition time
  }, 3000);
}

/**
 * Updates the cart counter display
 * @param {number} count - The number to add to the counter
 */
function updateCartCounter(count = 1) {
  const cartCounters = document.querySelectorAll(".cart-counter");
  cartCounters.forEach((counter) => {
    let currentCount = parseInt(counter.textContent) || 0;
    currentCount += count;
    counter.textContent = currentCount;

    // Add animation
    counter.classList.add("cart-counter-update");

    // Remove animation class after animation completes
    setTimeout(() => {
      counter.classList.remove("cart-counter-update");
    }, 500);
  });
}

/**
 * Updates the wishlist counter display
 * @param {number} count - The number to add to the counter
 */
function updateWishlistCounter(count = 1) {
  const wishlistCounters = document.querySelectorAll(".wishlist-counter");
  wishlistCounters.forEach((counter) => {
    let currentCount = parseInt(counter.textContent) || 0;
    currentCount += count;
    counter.textContent = currentCount;

    // Add animation
    counter.classList.add("wishlist-counter-update");

    // Remove animation class after animation completes
    setTimeout(() => {
      counter.classList.remove("wishlist-counter-update");
    }, 500);
  });
}

// Make functions available globally for the modal system
// This ensures our functions are called correctly even if modal-unified.js tries to override them
window.loadProductsForCategory = function (categoryId, modalElement) {
  console.log(`Loading products for category: ${categoryId}`);

  // Ensure modal is visible first (fixes race conditions)
  const modal = document.getElementById(`${categoryId}-modal`) || modalElement;
  if (modal) {
    modal.style.display = "block";
    modal.style.zIndex = "9999999";
    modal.style.visibility = "visible";
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }

  // Load the products inside the modal
  try {
    // Call our specialized function directly to avoid any confusion
    window.loadCategoryProducts(categoryId, 1);
    console.log(
      `✅ Loaded products for ${categoryId} using loadCategoryProducts`
    );
  } catch (err) {
    console.error(`Error loading products for ${categoryId}:`, err);

    // Fallback - try direct rendering if our function fails
    try {
      const modalProducts = modal?.querySelector(".modal-products");
      if (
        modalProducts &&
        window.bookbyteCategories &&
        window.bookbyteCategories[categoryId]
      ) {
        console.log(`🔄 Attempting fallback rendering for ${categoryId}`);

        // Clear first
        modalProducts.innerHTML = "";

        // Create a simple grid
        const gridDiv = document.createElement("div");
        gridDiv.className = "modal-product-grid";

        // Get just the first 6 items
        const items = window.bookbyteCategories[categoryId].items.slice(0, 6);

        // Create simple product cards
        items.forEach((product) => {
          const productDiv = document.createElement("div");
          productDiv.className = "modal-product";
          productDiv.innerHTML = `
                        <div class="modal-product-img">
                            <img src="${product.coverImage}" alt="${
            product.title
          }">
                            ${
                              product.isNew
                                ? '<span class="new-badge">NEW</span>'
                                : ""
                            }
                            ${
                              product.isBestseller
                                ? '<span class="bestseller-badge">BESTSELLER</span>'
                                : ""
                            }
                            ${
                              product.discount
                                ? `<span class="discount-badge">${product.discount}% OFF</span>`
                                : ""
                            }
                        </div>
                        <div class="modal-product-info">
                            <h3>${product.title}</h3>
                            ${
                              product.author
                                ? `<p class="author">by ${product.author}</p>`
                                : ""
                            }
                            <div class="price-container">
                                <span class="current-price">$${product.price.toFixed(
                                  2
                                )}</span>
                            </div>
                        </div>
                    `;
          gridDiv.appendChild(productDiv);
        });

        modalProducts.appendChild(gridDiv);
        console.log(`✅ Used fallback rendering for ${categoryId}`);
      }
    } catch (fallbackErr) {
      console.error("Both rendering methods failed:", fallbackErr);
    }
  }
};

// Initialize event handlers when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // The onclick attributes in HTML are already set up to call openCategoryModal directly
  // But we'll still add event listeners for buttons that might not have onclick attributes
  const categoryButtons = document.querySelectorAll(
    ".category-btn:not([onclick])"
  );
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const categoryId = this.getAttribute("data-category");
      if (categoryId) {
        // We'll use the modal.js function which will call our loadProductsForCategory
        if (window.openCategoryModal) {
          window.openCategoryModal(categoryId);
        }
      }
    });
  });

  // Pre-load modal content for better UX (optional)
  setTimeout(() => {
    console.log("Pre-loading category data for faster response...");
    Object.keys(bookbyteCategories).forEach((categoryId) => {
      const modal = document.getElementById(`${categoryId}-modal`);
      if (modal && !modal._preloaded) {
        const modalProducts = modal.querySelector(".modal-products");
        if (modalProducts) {
          // Mark as preloaded so we don't do it twice
          modal._preloaded = true;
        }
      }
    });
  }, 2000); // Delay preloading to not interfere with initial page load
});
