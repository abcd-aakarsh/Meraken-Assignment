# Meraken Assignment

This is a Vite-based React project for a frontend assignment.

## Libraries Used
- **React**: A modern library for building user interfaces.
- **Redux Toolkit**: For state management.
- **React Router**: For routing and navigation.
- **Tailwind CSS**: For styling.

---

## Getting Started

Follow the steps below to run this project locally.

### Prerequisites
- **Node.js**: Ensure you have Node.js installed (v16+ recommended).
- **npm or yarn**: Package manager to install dependencies.

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/<your-username>/meraken-assignment.git
   cd meraken-assignment
2. **Install dependencies**:
   npm install

3. **Start the development server**:
   npm run dev

## Application Features

### Core Features
1. **Product Listing**
   - Displays all products in a grid or list layout.
   - Each product item shows:
     - Product image
     - Name
     - Price
     - A "View Details" button.

2. **Product Details**
   - Clicking "View Details" shows:
     - A detailed product view with its description and a larger image.
   - Navigation back to the product listing is implemented using **React Router**.

3. **Search Functionality**
   - Includes a search bar to allow users to search for products by name.
   - Updates product listings in real-time as the user types.

4. **Category Filter**
   - Provides a list of categories.
   - Allows users to filter products by selecting one or more categories.

5. **Responsive Design**
   - The application is responsive and works seamlessly on desktops, tablets, and mobile devices.

6. **State Management**
   - Utilizes **React Hooks** (`useState`, `useEffect`) for managing component state.

7. **Styling**
   - Focuses on clean and user-friendly interface designs.
   - Styling is implemented using **Tailwind CSS**.

### Other Features (Bonus Features)
1. **Sorting**
   - Allows users to sort products by price (ascending or descending).

2. **Add to Cart Functionality**
   - Enables users to add products to a cart.
   - Displays the number of items in the cart.

3. **Animations**
   - Adds hover effects and transitions to improve user experience.

4. **Custom Styles**
   - Relies on lightweight frameworks like Tailwind CSS instead of comprehensive UI libraries like MaterialUI.


## Challenges Faced
1. Adding multiple category filter and sorting by price.
2. Setting up redux store for cart.

##AI Promts Used
1. How to apply filtering options.
2. How to setup redux store.

   ### Homepage
![Homepage Screenshot](public/assets/cart.png)

