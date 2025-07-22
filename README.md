# 🛍️ **PREMIUM HAVEN – FULL STACK ECOMMERCE WEBSITE**

A high-performance, scalable, and responsive **eCommerce web application** built using **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Supabase**.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## ✨ Features

- ⚡ **Lightning-fast development** with Vite  
- 🔐 **User authentication** – Signup, login, logout via Supabase Auth  
- 🛒 **Full eCommerce flow** – Browse, search, filter, add to cart, checkout  
- 🧾 **Admin dashboard** – Add, edit, and delete products  
- 🛍️ **Cart system** – Add to cart, update quantity, remove items  
- ✅ **Order checkout** – Confirm and review orders with backend sync  
- 🎯 **Responsive design** – Optimized for mobile, tablet, and desktop  
- 🧠 **State management** – Built with Context API and custom hooks  
- 📦 **Database integration** – PostgreSQL via Supabase  
- 🧹 **Clean and type-safe code** – TypeScript + ESLint + Prettier  
- 🚀 **Ready to deploy** – Vercel, Netlify, Supabase Hosting  

---

## 🛠️ Tech Stack

| Layer        | Technologies                             |
|-------------|-------------------------------------------|
| **Frontend** | React, Vite, TypeScript                  |
| **Backend**  | Supabase (Auth + PostgreSQL)             |
| **Styling**  | Tailwind CSS, PostCSS                    |
| **State**    | React Context API, Custom Hooks          |
| **Dev Tools**| ESLint, Prettier, Git, GitHub            |
| **Deploy**   | Vercel / Netlify / Supabase              |

---

## 🎥 Live Demo

Check out the walkthrough of **Premium Haven** in action:

👉 [Watch demo on Google Drive](https://drive.google.com/file/d/1jYAmLT_0yivvEoo5G1fIw9uPgAHwBhO4/view?usp=sharing)

---

## 🧭 Project Structure

```

premium-haven/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons
│   ├── components/       # Reusable UI components
│   ├── context/          # Global state providers (Cart, Auth)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page-level components (Home, Cart, etc.)
│   ├── services/         # Supabase API functions (Auth, DB ops)
│   ├── types/            # TypeScript interfaces and types
│   └── utils/            # Helper/utility functions
├── supabase/             # Supabase setup, schema, and SQL
├── .env                  # Environment variables
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and metadata

````

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/premium-haven.git
cd premium-haven
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Start the Development Server

```bash
npm run dev
```

---

## ⚙️ Available Scripts

| Command          | Description                    |
| ---------------- | ------------------------------ |
| `npm run dev`    | Run the development server     |
| `npm run build`  | Build the app for production   |
| `npm run lint`   | Run ESLint to check code style |
| `npm run format` | Format code using Prettier     |

---

## 🔐 Supabase Setup

* Enable **Authentication** (Email/Password)
* Create the following tables:

  * `products`
  * `users`
  * `orders`
  * `cart_items`
* Define appropriate **Row Level Security (RLS)** policies for secure data access

📂 SQL schema and detailed setup instructions can be found inside the [`/supabase`](./supabase) folder.

---

## 💡 Future Improvements

* 🧾 Integrate Stripe or Razorpay for payments
* 📦 Inventory tracking and stock management
* 🧠 AI-driven product recommendations
* 🌐 Multi-language and currency support
* 📱 Convert to Progressive Web App (PWA)

---

## 📃 License

Licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome!
If you'd like to suggest a feature or fix a bug, feel free to [open an issue](https://github.com/your-username/premium-haven/issues) or submit a pull request.

---


