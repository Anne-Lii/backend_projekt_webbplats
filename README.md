# Restaurant Etoile – Frontend
Frontend project for the course **Backend-Based Web Development** (Mid Sweden University).  

Developed by **Anne-Lii Hansen**  

---

## About
A web application that consumes the Restaurant Etoile backend API to present a dynamic menu with food and drinks.  

It includes an **administrator interface** protected by JWT authentication. Upon successful login, a JSON Web Token (JWT) is stored in localStorage and used to access the admin panel. From there, administrators can add, update, and delete menu items.  

---

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Backend API:** Node.js/Express + MongoDB (see [backend repository](https://github.com/Anne-Lii/backend_projekt_webbplats))  
- **Authentication:** JWT stored in localStorage  
- **Database:** MongoDB Atlas (for user credentials and menu data)  

---

## Features
- **Dynamic menu** – Menu is fetched from the API and displayed dynamically  
- **Admin panel (protected route)**  
  - Register new administrators  
  - Add, update, and delete food and drinks  
- **Authentication**  
  - Usernames and passwords are hashed and stored in MongoDB  
  - Successful login issues a JWT stored in localStorage  
  - JWT is required to access admin features  
- **Logout** – Removes JWT from localStorage and redirects to home page  

---

## Installation
Clone the repository and install dependencies:  
```bash
git clone https://github.com/Anne-Lii/backend_projekt_webbplats.git
cd restaurant-etoile-frontend
npm install
npm start
