/**
 * Modal System for The Daily Grind E-commerce Website
 * Production Version: 1.0.0
 *
 * This script handles all modal functionality including opening, closing,
 * and loading product content within modals.
 * Now uses centralized configuration from app-config.js
 */

(function () {
  // Wait for DOM to be ready before initializing
  function ready(fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  ready(function () {
    // Get configuration values
    const config = window.APP_CONFIG
      ? window.APP_CONFIG.modal
      : {
          zIndex: { overlay: 999999, content: 1000000 },
          styles: {
            overlayBackground: "rgba(0, 0, 0, 0.5)",
            contentMargin: "5% auto",
          },
          features: {
            enableAnimation: true,
            enableKeyboardNavigation: true,
            closeOnBackgroundClick: true,
          },
        };

    // Browser compatibility check
    const browserCompatible = checkBrowserCompatibility();
    if (!browserCompatible) {
      // Use fallback modal functionality for older browsers
      applyFallbackStyling();
    }

    // Get reference to all modals
    const modals = document.querySelectorAll(".modal");

    // Apply consistent modal styling to ensure proper display
    modals.forEach((modal) => {
      try {
        // Ensure modals have proper styling for visibility
        modal.style.cssText = `
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          z-index: ${config.zIndex.overlay} !important;
          background-color: ${config.styles.overlayBackground} !important;
          display: none;
        `;

        // Fix the modal content
        const modalContent = modal.querySelector(".modal-content");
        if (modalContent) {
          modalContent.style.cssText = `
            position: relative !important;
            z-index: ${config.zIndex.content} !important;
            margin: ${config.styles.contentMargin} !important;
          `;
        }

        // Fix close buttons
        const closeButtons = modal.querySelectorAll(".close-modal");
        closeButtons.forEach((button) => {
          button.style.cssText = `
            position: absolute !important;
            top: 15px !important;
            right: 20px !important;
            font-size: 28px !important;
            cursor: pointer !important;
          `;

          // Ensure click handler works properly
          button.onclick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            closeModal(modal.id);
            return false;
          };
        });
      } catch (err) {
        // Apply minimal fallback styling if error occurs
        applyFallbackStyling(modal);
      }
    });

    // Define openCategoryModal function
    window.openCategoryModal = function (category) {
      try {
        // Prevent default behavior and propagation
        if (event) {
          event.preventDefault();
          event.stopPropagation();
        }

        const modalId = `${category}-modal`;
        const modal = document.getElementById(modalId);

        if (!modal) {
          return false;
        }

        // Close any open modals first
        document.querySelectorAll(".modal").forEach((m) => {
          m.style.display = "none";
        });

        // Show this modal with proper styling
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Prevent scrolling

        // Add event listeners for closing
        setupModalCloseHandlers(modal);

        // Load products for this category
        if (window.loadProductsForCategory) {
          window.loadProductsForCategory(category, modal);
        }
      } catch (err) {
        // Silently handle errors in production
      }

      return false;
    };

    // Define closeModal function
    window.closeModal = function (modalId) {
      try {
        const modal =
          typeof modalId === "string"
            ? document.getElementById(modalId)
            : modalId;

        if (!modal) {
          return;
        }

        // Hide modal
        modal.style.display = "none";

        // Re-enable scrolling
        document.body.style.overflow = "auto";
      } catch (err) {
        // Fallback: try to hide all modals on error
        document.querySelectorAll(".modal").forEach((m) => {
          m.style.display = "none";
        });
        document.body.style.overflow = "auto";
      }
    };

    // Setup consistent close handlers
    function setupModalCloseHandlers(modal) {
      try {
        // Close when clicking outside
        window.onclick = function (event) {
          if (event.target === modal) {
            closeModal(modal);
          }
        };

        // Close when pressing Escape
        document.onkeydown = function (event) {
          if (event.key === "Escape" || event.keyCode === 27) {
            closeModal(modal);
          }
        };
      } catch (err) {
        // Silently handle errors in production
      }
    }

    // Fix all category buttons to use our enhanced function
    const categoryButtons = document.querySelectorAll(".category-btn");
    categoryButtons.forEach((button) => {
      try {
        // Extract the category from the onclick attribute
        const onclickAttr = button.getAttribute("onclick");
        if (onclickAttr) {
          const match = /openCategoryModal\(['"]([^'"]+)['"]\)/.exec(
            onclickAttr
          );
          if (match && match[1]) {
            const category = match[1];

            // Replace with our enhanced function
            button.onclick = function (e) {
              e.preventDefault();
              e.stopPropagation();
              openCategoryModal(category);
              return false;
            };

            // Also add an href attribute if missing
            if (
              !button.getAttribute("href") ||
              button.getAttribute("href") === "#"
            ) {
              button.setAttribute("href", "javascript:void(0);");
            }
          }
        }
      } catch (err) {
        // Silently handle errors in production
      }
    });

    // Helper function to create a product card
    window.createProductCard = function (product) {
      try {
        return `
          <div class="modal-product">
            <img src="${product.image}" alt="${product.name}">
            <h3 class="modal-product-title">${product.name}</h3>
            <div class="modal-product-price">
              <span class="price">${product.price}</span>
              ${product.oldPrice ? `<del>${product.oldPrice}</del>` : ""}
            </div>
            <div class="modal-product-actions">
              <button class="modal-product-btn" data-cart-action="add" data-product-id="${
                product.id
              }">Add to Cart</button>
              <button class="modal-product-btn wishlist" onclick="addToWishlist(${
                product.id
              })">♡</button>
            </div>
          </div>
        `;
      } catch (err) {
        return `<div class="modal-product">Error loading product</div>`;
      }
    };

    // Fallback product loading function
    window.loadProductsForCategory = function (category, modal) {
      try {
        // Stop rendering any product data
        const productsContainer = modal.querySelector(".modal-products");
        if (productsContainer) {
          // Optionally, just show the loading spinner or clear the container
          productsContainer.innerHTML = "";
        }
      } catch (err) {
        // Silently handle errors
      }
    };

    // Check browser compatibility
    function checkBrowserCompatibility() {
      try {
        // Check for CSS Grid support (basic modern browser capability check)
        const gridSupport =
          window.CSS &&
          window.CSS.supports &&
          (window.CSS.supports("display", "grid") ||
            window.CSS.supports("display", "-ms-grid"));

        // Check for ES6 features
        const es6Support = (function () {
          try {
            new Function("(a = 0) => a");
            return true;
          } catch (e) {
            return false;
          }
        })();

        return gridSupport && es6Support;
      } catch (err) {
        return false;
      }
    }

    // Apply fallback styling for older browsers
    function applyFallbackStyling(modal) {
      try {
        if (modal) {
          // Basic styling with maximum compatibility for specific modal
          modal.style.position = "fixed";
          modal.style.top = "0";
          modal.style.left = "0";
          modal.style.width = "100%";
          modal.style.height = "100%";
          modal.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
          modal.style.display = "none";
          modal.style.zIndex = "9999";

          const content = modal.querySelector(".modal-content");
          if (content) {
            content.style.position = "relative";
            content.style.backgroundColor = "#fff";
            content.style.width = "80%";
            content.style.maxWidth = "900px";
            content.style.margin = "50px auto";
            content.style.padding = "20px";
          }

          const closeBtn = modal.querySelector(".close-modal");
          if (closeBtn) {
            closeBtn.style.position = "absolute";
            closeBtn.style.right = "10px";
            closeBtn.style.top = "10px";
            closeBtn.style.fontSize = "24px";
            closeBtn.style.cursor = "pointer";

            // Use old-style event handler for maximum compatibility
            closeBtn.onclick = function () {
              modal.style.display = "none";
              document.body.style.overflow = "auto";
              return false;
            };
          }
        } else {
          // Apply to all modals if no specific modal provided
          document.querySelectorAll(".modal").forEach((m) => {
            applyFallbackStyling(m);
          });
        }
      } catch (err) {
        // Silently handle errors in production
      }
    }
  });
})();
