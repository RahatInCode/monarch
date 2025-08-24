# 🛒 Next.js 15 E-Commerce App

A modern, full-stack e-commerce web application built with **Next.js 15 (App Router)**, **TypeScript**, and **MongoDB**.  
The app provides a seamless shopping experience with secure authentication, product browsing, and a protected dashboard for product management.

---

## 🚀 Features

- **Next.js 15 (App Router)** – Latest Next.js architecture with server & client components  
- **TypeScript** – Strict typing for scalability and maintainability  
- **Clerk Authentication** – Secure user authentication and session management  
- **MongoDB + Mongoose** – Database integration for products and user data  
- **Tailwind CSS + shadcn/ui** – Modern UI components and styling  
- **Dynamic Routing** – Individual product detail pages  
- **Protected Dashboard** – Role-based access for adding & managing products  
- **Responsive Design** – Fully mobile-friendly and optimized  

---

## 📂 Project Structure

.
├── app/ # App Router pages (landing, products, dashboard, etc.)
├── components/ # Reusable UI components (Navbar, Footer, Cards, etc.)
├── lib/ # Database connection & helper functions
├── models/ # Mongoose models (Product, User, etc.)
├── public/ # Static assets
├── styles/ # Global styles
├── data/ # Dummy data / seed files
├── package.json
└── README.md 

---

## 🔑 Authentication

This project uses **[Clerk](https://clerk.com/)** for authentication:  
- Sign up / Login flow  
- Session management  
- Protected routes (e.g., `/dashboard`)  

---

## 🖥️ Pages Overview

- `/` – **Landing Page** with hero, product highlights, and footer  
- `/products` – Product listing page  
- `/products/[id]` – Dynamic product detail page  
- `/dashboard` – Protected product management page (add, update, delete)  

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)  
- **Language:** TypeScript  
- **Auth:** Clerk  
- **Database:** MongoDB (Mongoose ODM)  
- **Styling:** Tailwind CSS + shadcn/ui  
- **Deployment:** Vercel  

---

## ⚡ Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/nextjs-ecommerce.git
cd nextjs-ecommerce
2️⃣ Install dependencies
bash
Copy
Edit
npm install
# or
yarn install
3️⃣ Set environment variables
Create a .env.local file and add the following:

env
Copy
Edit
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
4️⃣ Run the development server
bash
Copy
Edit
npm run dev
Your app will be running on http://localhost:3000.

📦 Deployment
This project is ready to be deployed on Vercel.
Make sure to add your environment variables in the Vercel dashboard.

🔮 Future Improvements
🛒 Shopping cart with checkout

💳 Payment integration (Stripe)

📦 Order management system

👤 User profile page with order history

📸 Screenshots


👨‍💻 Author
Ashik – Full-Stack Web Developer (MERN + Next.js)
Portfolio | LinkedIn | Fiverr

yaml
Copy
Edit

