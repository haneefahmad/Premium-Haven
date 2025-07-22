

```markdown
# 🛍️ **Premium Haven – Full Stack eCommerce Website**

A high-performance, scalable, and responsive **eCommerce web application** built using **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Supabase**.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## ✨ Features

- ⚡ Super-fast development with **Vite**
- 🛒 **Complete eCommerce Workflow** – Shop, Cart, Orders, and Payments
- 🔐 **User Authentication** – Signup/Login/Logout using Supabase Auth
- 🧾 **Admin Features** – Add/Edit/Delete products
- 🧃 **Product Management** – Categorization, filtering, and searching
- 🛍️ **Cart System** – Add to cart, update quantity, remove items
- ✅ **Order Checkout** – Confirm orders with backend integration
- 🎯 **Responsive UI** – Fully optimized for mobile and desktop
- 🧠 **State Management** – Context API + Custom Hooks
- 📦 **Database Integration** – Supabase as backend (PostgreSQL)
- ✅ **Type-safe Development** – Powered by TypeScript + ESLint
- 🚀 **Easy Deployment** – Supports Vercel, Netlify, and others

---

## 🛠️ Tech Stack

| Layer      | Technologies                             |
|------------|------------------------------------------|
| **Frontend**   | React, Vite, TypeScript                |
| **Backend**    | Supabase (Auth + PostgreSQL)          |
| **Styling**    | Tailwind CSS, PostCSS                 |
| **State**      | React Context API, Custom Hooks       |
| **Tools**      | ESLint, Prettier, Git, GitHub         |
| **Deployment** | Vercel / Netlify / Supabase Hosting   |

---

## 🎥 Live Demo

🎬 **Watch the live walkthrough of Premium Haven:**

👉 [Click here to watch the demo](https://drive.google.com/file/d/1jYAmLT_0yivvEoo5G1fIw9uPgAHwBhO4/view?usp=sharing)

> _Note: Opens Google Drive in a new tab._

---

## 🧭 Project Structure

```

premium-haven/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons
│   ├── components/       # UI components (Navbar, ProductCard, etc.)
│   ├── context/          # Global state providers (Cart, Auth)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Page-level views (Home, Shop, Cart, etc.)
│   ├── services/         # Supabase API functions (Auth, DB ops)
│   ├── types/            # TypeScript interfaces/types
│   └── utils/            # Helper functions (formatters, validators)
├── supabase/             # Supabase setup and SQL schema
├── .env                  # Environment variables
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project metadata and dependencies

````

---

## 🚀 Getting Started

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/premium-haven.git
cd premium-haven
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```
VITE_SUPABASE_URL=your-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 4. Start the App

```bash
npm run dev
```

---

## ⚙️ Available Scripts

| Command          | Description                 |
| ---------------- | --------------------------- |
| `npm run dev`    | Start local dev server      |
| `npm run build`  | Build for production        |
| `npm run lint`   | Run ESLint for code quality |
| `npm run format` | Format code with Prettier   |

---

## 🔐 Supabase Setup

* Enable **Auth** (email/password)
* Create tables: `products`, `users`, `orders`, `cart_items`
* Configure RLS policies for secure access

📚 SQL schema and instructions can be found in the [`/supabase`](/supabase) folder.

---

## 💡 Future Improvements

* 🧾 Payment Gateway Integration (e.g., Stripe)
* 📦 Inventory Management System
* 🧠 AI Product Recommendations
* 🌐 Multi-language Support
* 📱 PWA Support

---

## 📃 License

This project is licensed under the [MIT License](LICENSE).

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

```


