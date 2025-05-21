Deployed:http://174.138.68.166/
# E-Commerce Application - Exam Submission

This document serves as the official submission for the E-Commerce Application developed as part of the exam/project requirement.

---

## Application Overview

This project is a comprehensive e-commerce platform built using **Spring Boot** and **Thymeleaf**, designed to demonstrate advanced features and industry-standard practices for modern web applications.

### Key Functionalities

- **Product Catalog**: Supports advanced filtering, search, categories, tags, multiple images, sale prices, and stock management.
- **Shopping Cart**: Real-time updates, persistent storage, mini-cart preview, and quantity/stock validation.
- **Wishlist System**: Works for both anonymous and authenticated users, with browser-based and server-side synchronization.
- **User Authentication**: Custom session-based system for login, registration, and profile management.
- **Order Management**: Multi-step checkout, address management, order tracking, and support for multiple payment methods.
- **Admin Dashboard**: Catalog and order management capabilities.
- **Responsive UI**: Modern, mobile-friendly design using HTML, CSS, and JavaScript.

---

## Technology Stack

- **Backend**: Spring Boot 3.1.5, Java 17
- **Frontend**: Thymeleaf, HTML, CSS, JavaScript
- **Database**: MySQL
- **Build Tool**: Maven
- **Other Tools**: Lombok

---

## Project Structure

```
src/
 └─ main/
     ├─ java/com/ecommerce/app/
     │    ├─ controller/         # MVC web controllers
     │    ├─ controller/api/     # REST API controllers
     │    ├─ model/              # Domain entities
     │    ├─ repository/         # Data access interfaces
     │    ├─ service/            # Business logic interfaces
     │    ├─ service/impl/       # Service implementations
     │    ├─ dto/                # Data Transfer Objects
     │    ├─ config/             # App configuration
     │    └─ util/               # Utility classes
     ├─ resources/
     │    ├─ templates/          # Thymeleaf templates
     │    ├─ static/
     │    │    ├─ js/            # JavaScript modules
     │    │    ├─ css/           # Stylesheets
     │    │    └─ images/        # Static images
     │    └─ application.properties # Main configuration
```

---

## Configuration

- **Environment variables** or `.env` file are used for sensitive and environment-specific settings (e.g., database credentials, JWT secret, debug mode).
- Example configuration:
  ```
  DB_URL=jdbc:mysql://localhost:3306/ecommercedb
  DB_USERNAME=your_username
  DB_PASSWORD=your_password
  JWT_SECRET=your_jwt_secret
  DEBUG_MODE=false
  ```
- Application properties can also be set in `application.properties` (not recommended for production).

---

## Setup & Running

1. **Prerequisites**: Java 17+, Maven 3.6.3+, MySQL 8.0+
2. **Database**: Tables are auto-created at startup; sample data loads if available.
3. **Run Application**:
   - With Maven:  
     ```bash
     mvn spring-boot:run
     ```
   - Or via VS Code Task:  
     Use "Tasks: Run Task" → "Run Spring Boot Application"
4. **Access**: Default at [http://localhost:8080](http://localhost:8080)

---

## REST API Endpoints (Examples)

**Cart API** (`/api/cart`)
- `GET /api/cart` – Get cart contents
- `POST /api/cart/add` – Add item
- `POST /api/cart/update` – Update item quantity
- `DELETE /api/cart/remove` – Remove item

**Wishlist API** (`/api/wishlist`)
- `GET /api/wishlist` – Get wishlist
- `POST /api/wishlist/add` – Add item
- `DELETE /api/wishlist/remove` – Remove item

**Product API** (`/api/products`)
- `GET /api/products` – Paginated products
- `GET /api/products/all` – All products
- `GET /api/products/{id}` – Product details

---

## Domain Model Highlights

- **Product**: Linked to Category, ProductImage, Tag, Review
- **Cart/CartItem**: Supports multiple carts per user, price tracking
- **Wishlist/WishlistItem**: Linked one-to-one with User
- **Order/OrderItem**: Captures addresses, supports multiple payment methods
- **User**: Custom authentication (no Spring Security), manages orders, carts, wishlist, and reviews

---

## Security Approach

- Session-based authentication (custom, not Spring Security)
- Admin access via session attributes
- API authentication checks
- CSRF protection for forms
- Session timeout configurable
- Database credentials via environment variables
- Debug mode must be disabled in production
- Rate limiting and file upload restrictions enforced

---

## Development Guidelines

- **Branching**: Use feature branches from `main`
- **Contribution**: Submit pull requests for review
- **Style**: Standard Java code conventions

---

## License

This project is licensed under the MIT License.

---

**End of Exam Submission**
