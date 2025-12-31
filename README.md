# Dr. Pizza - JavaScript Final Project

## Project Description
The "Dr. Pizza" project is an e-commerce website simulating a pizza store with multiple interconnected pages. The website allows users to place orders, make payments, and manage their shopping cart. The project was built using JavaScript, HTML, and CSS.

## Key Features

### Login/Registration Page:
- Allows users to enter their name and phone number.
- Saves user details in sessionStorage for reuse.

### Orders Page:
- Displays available products categorized by type.
- Enables product search by name.
- Includes a dynamic shopping cart with options to add or remove products.
- Calculates the total order amount.

### Payment Page:
- Displays the total order amount.
- Automatically fills in user details if stored in sessionStorage.
- Allows users to enter credit card details and complete the payment.
- Shows a success message after payment and redirects the user to the homepage.

### Data Persistence Between Pages:
- Uses sessionStorage to save user details and shopping cart data.

### Timer:
- After completing the payment, a success message is displayed with a 7-second timer before redirecting to the homepage.

### Responsive Design:
- The website is optimized for various screen sizes.
- Includes a mobile-friendly navigation menu.

## Technologies
- **HTML**: Website structure.
- **CSS**: Website styling, including responsive design.
- **JavaScript**: Dynamic logic, event handling, and data management.
- **jQuery**: JavaScript library for DOM manipulation.

## Installation Instructions
1. Place all project files in a single directory.
2. Open the `home.html` file in a browser to start using the website.

## Usage
1. Log in through the login page (`login.html`).
2. Navigate to the orders page (`orders.html`) to select products and add them to the cart.
3. Click the payment button to proceed to the payment page (`pay.html`).
4. Enter credit card details and complete the payment.

