/**
 * Modal System Diagnostic Script
 * This helps identify issues with the modal system and product loading
 */

document.addEventListener("DOMContentLoaded", function () {
  console.log("📚 BookByte Modal Diagnostic: Initializing...");

  // Check if the modal exists
  const modals = {
    fiction: document.getElementById("fiction-books-modal"),
    nonFiction: document.getElementById("non-fiction-modal"),
    childrenBooks: document.getElementById("children-books-modal"),
    accessories: document.getElementById("book-accessories-modal"),
  };

  // Log modal existence
  Object.entries(modals).forEach(([category, modal]) => {
    console.log(
      `📚 Modal check [${category}]: ${modal ? "✅ Found" : "❌ Missing"}`
    );

    if (modal) {
      const productsContainer = modal.querySelector(".modal-products");
      console.log(
        `📚 Products container for [${category}]: ${
          productsContainer ? "✅ Found" : "❌ Missing"
        }`
      );
    }
  });

  // Check if bookbyteCategories exists
  if (window.bookbyteCategories) {
    console.log("📚 Product categories data: ✅ Found");
    console.log(
      `📚 Categories available: ${Object.keys(bookbyteCategories).join(", ")}`
    );

    // Check each category has items
    Object.entries(bookbyteCategories).forEach(([category, data]) => {
      console.log(
        `📚 Category [${category}]: ${data.items?.length || 0} items`
      );
    });
  } else {
    console.log(
      "📚 Product categories data: ❌ Missing - Check if product-categories.js is loaded"
    );
  }

  // Check if necessary functions exist
  console.log(
    `📚 openCategoryModal function: ${
      typeof window.openCategoryModal === "function"
        ? "✅ Available"
        : "❌ Missing"
    }`
  );
  console.log(
    `📚 loadProductsForCategory function: ${
      typeof window.loadProductsForCategory === "function"
        ? "✅ Available"
        : "❌ Missing"
    }`
  );

  // Check click handlers
  const categoryButtons = document.querySelectorAll(".category-btn");
  console.log(`📚 Category buttons found: ${categoryButtons.length}`);

  categoryButtons.forEach((button, index) => {
    const hasOnclick = button.hasAttribute("onclick");
    const onclickValue = button.getAttribute("onclick");
    console.log(
      `📚 Button ${index + 1}: onclick=${hasOnclick ? "✅" : "❌"} ${
        onclickValue || ""
      }`
    );
  });

  console.log("📚 BookByte Modal Diagnostic: Complete");

  // Check loadCategoryProducts function
  console.log(
    `📚 loadCategoryProducts function: ${
      typeof window.loadCategoryProducts === "function"
        ? "✅ Available"
        : "❌ Missing"
    }`
  );

  // Add test modal buttons for direct testing
  console.log("📚 Adding test buttons for direct modal testing...");

  // Run a quick test to fix any possible race conditions
  setTimeout(() => {
    // Try to pre-cache product data
    if (typeof window.bookbyteCategories !== "undefined") {
      console.log("📚 Pre-caching product data");
      for (const categoryId in window.bookbyteCategories) {
        if (!document.getElementById(`${categoryId}-modal`)) {
          console.warn(`📚 Modal with ID ${categoryId}-modal not found!`);
        }
      }
    }
  }, 500);

  // Add a small visual indicator that diagnostics ran
  const body = document.body;
  const indicator = document.createElement("div");
  indicator.style.position = "fixed";
  indicator.style.bottom = "10px";
  indicator.style.right = "10px";
  indicator.style.background = "rgba(0,0,0,0.7)";
  indicator.style.color = "white";
  indicator.style.padding = "8px 12px";
  indicator.style.borderRadius = "4px";
  indicator.style.fontSize = "12px";
  indicator.style.zIndex = "9999";
  indicator.style.display = "flex";
  indicator.style.flexDirection = "column";
  indicator.style.gap = "10px";
  indicator.innerHTML = `
    <div>📚 Modal diagnostics complete. Check console.</div>
    <div style="display: flex; gap: 5px; flex-wrap: wrap;">
      <button id="test-fiction">Test Fiction</button>
      <button id="test-nonfiction">Test Non-Fiction</button>
      <button id="test-children">Test Children's</button>
      <button id="test-accessories">Test Accessories</button>
    </div>
  `;

  body.appendChild(indicator);

  // Add event listeners to test buttons
  document.getElementById("test-fiction").addEventListener("click", () => {
    if (typeof window.openCategoryModal === "function") {
      window.openCategoryModal("fiction-books");
    }
  });

  document.getElementById("test-nonfiction").addEventListener("click", () => {
    if (typeof window.openCategoryModal === "function") {
      window.openCategoryModal("non-fiction");
    }
  });

  document.getElementById("test-children").addEventListener("click", () => {
    if (typeof window.openCategoryModal === "function") {
      window.openCategoryModal("children-books");
    }
  });

  document.getElementById("test-accessories").addEventListener("click", () => {
    if (typeof window.openCategoryModal === "function") {
      window.openCategoryModal("book-accessories");
    }
  });

  setTimeout(() => {
    indicator.style.opacity = "0";
    indicator.style.transition = "opacity 0.5s";

    setTimeout(() => {
      body.removeChild(indicator);
    }, 500);
  }, 5000);
});
