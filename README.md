# **Quick Eats** - Food Delivery Platform

## **Overview**

Quick Eats is a comprehensive food delivery platform that allows customers to browse menus, place orders, and track deliveries in real time. Restaurant owners can manage their menus and view orders through an admin dashboard. The platform provides a seamless experience for both customers and restaurant owners, ensuring a smooth flow from order placement to delivery.

## **Table of Contents**
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing and Validation](#testing-and-validation)
- [Contributing](#contributing)
- [License](#license)

## **Features**

- **User Sign-Up & Authentication**: Secure user registration and login using JWT.
- **Browse Menus**: Customers can browse menus from multiple restaurants.
- **Place Orders**: Customers can place orders and pay securely via Stripe.
- **Order Tracking**: Real-time updates on order status and delivery tracking.
- **Admin Dashboard**: Restaurant owners can add/edit menu items, track orders, and manage their business.
- **Responsive Design**: Works seamlessly across desktop and mobile devices.
- **Secure Payment Gateway**: Payments processed securely via Stripe.

## **Technologies Used**

### **Backend**:
- **Node.js** & **Express.js**: For server-side logic and APIs.
- **MongoDB** & **Mongoose**: As the database and ODM for data management.
- **JWT (JSON Web Token)**: For secure user authentication.
- **Stripe API**: For handling secure payments.
- **Multer**: For file uploads, such as menu item images.
- **bcrypt**: For hashing user passwords securely.
- **CORS**: To handle cross-origin requests between frontend and backend.
  
### **Frontend**:
- **React.js**: For building the dynamic and responsive frontend interface.
- **HTML5, CSS3, JavaScript**: For structuring and styling the web pages.

### **Deployment**:
- **AWS**: Hosting the platform on AWS for scalability and reliability.

## **Installation**

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/quick-eats.git
   cd quick-eats
   ## **Installation**

### Install Dependencies:

#### **Backend**:

```bash
cd backend
npm install
### **Set up Environment Variables**:

Create a `.env` file in the backend directory and add the following:

```makefile
MONGO_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
### **Run the Application**:

#### **Backend**:

```bash
cd backend
npm start
### **Access the App**:

Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the frontend and [http://localhost:5000](http://localhost:5000) for the backend API.
## **Usage**

### **Customer Interface**:
- Customers can sign up, browse menus, add items to their cart, and place orders.
- Real-time notifications keep the customer informed about the status of their order, including when it is being processed, dispatched, and delivered.

### **Admin Portal**:
- Restaurant owners can log in and use the admin dashboard to manage their menu items (add, edit, or delete) and track incoming orders.

---

## **API Endpoints**

Here are some of the key API endpoints used in the backend:

### **Authentication**:
- **POST** `/api/auth/register`: Register a new user.
- **POST** `/api/auth/login`: Login an existing user.

### **Menu Management**:
- **GET** `/api/menus`: Fetch all menu items.
- **POST** `/api/menus`: Add a new menu item (Admin only).
- **PUT** `/api/menus/:id`: Edit a menu item (Admin only).
- **DELETE** `/api/menus/:id`: Delete a menu item (Admin only).

### **Orders**:
- **POST** `/api/orders`: Place a new order.
- **GET** `/api/orders`: Get all orders for a user.
- **PUT** `/api/orders/:id`: Update the status of an order (Admin only).

### **Payments**:
- **POST** `/api/payments`: Process a payment using Stripe.

---

## **Testing and Validation**

Extensive testing has been conducted to ensure the platform works smoothly:

### **Functional Testing**:
- Sign-up, login, and authentication flows.
- Menu management and order placement.
- Payment processing via Stripe.

### **Validation Testing**:
- Input validation using **Validator.js** to ensure data integrity.
- Tested for secure input handling to avoid SQL injections and XSS attacks.

---

## **Screenshots**:

- **Admin Portal - Add Items Page (Image 7)**:
  
  ![Add Items](link_to_image_7)

- **Admin Portal - List Items Page (Image 8)**:
  
  ![List Items](link_to_image_8)

- **Admin Portal - Order Page (Image 9)**:
  
  ![Order Page](link_to_image_9)

---

## **Contributing**

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Added new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new pull request.

