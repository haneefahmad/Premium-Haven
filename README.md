

# Premium Haven – Full Stack eCommerce Website

**Premium Haven** is a fast, scalable, and fully responsive eCommerce web application built with modern web technologies like React, Vite, TypeScript, Tailwind CSS, and Supabase.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## Features

* Built with Vite for fast development and optimized builds
* User authentication (signup, login, logout) using Supabase Auth
* Complete eCommerce functionality: product browsing, search, filtering, cart, and checkout
* Admin dashboard to manage product catalog (add/edit/delete)
* Cart management with support for quantity updates and item removal
* Order review and confirmation with backend synchronization
* Fully responsive layout for desktop, tablet, and mobile
* Global state management using React Context API and custom hooks
* Supabase-integrated PostgreSQL database
* Type-safe codebase with TypeScript, Prettier, and ESLint
* Easily deployable to platforms like Vercel, Netlify, and Supabase

---

## Tech Stack

| Layer      | Technologies                           |
| ---------- | -------------------------------------- |
| Frontend   | React, Vite, TypeScript                |
| Backend    | Supabase (Authentication + PostgreSQL) |
| Styling    | Tailwind CSS, PostCSS                  |
| State      | Context API, Custom Hooks              |
| Dev Tools  | ESLint, Prettier, Git, GitHub          |
| Deployment | Vercel / Netlify / Supabase            |

---

## Live Demo

Watch a walkthrough of the Premium Haven eCommerce platform:

[View Demo on Google Drive](https://drive.google.com/file/d/1jYAmLT_0yivvEoo5G1fIw9uPgAHwBhO4/view?usp=sharing)

---

## Project Structure

```
premium-haven/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons
│   ├── components/       # Reusable UI components
│   ├── context/          # Global state (cart, auth)
│   ├── hooks/            # Custom React hooks
│   ├── pages/            # Route-based pages
│   ├── services/         # Supabase API integration
│   ├── types/            # TypeScript interfaces and types
│   └── utils/            # Utility functions
├── supabase/             # Supabase config and SQL schema
├── .env                  # Environment variables
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project metadata and dependencies
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/premium-haven.git
cd premium-haven
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Start the development server

```bash
npm run dev
```

---

## Available Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `npm run dev`    | Start the development server |
| `npm run build`  | Build for production         |
| `npm run lint`   | Run ESLint                   |
| `npm run format` | Format code using Prettier   |

---

## Supabase Setup

* Enable Email/Password authentication
* Create the following database tables:

  * `products`
  * `users`
  * `orders`
  * `cart_items`
* Define appropriate Row Level Security (RLS) policies for secure data access

Refer to the `supabase/` directory for schema definitions and setup instructions.

---

## Future Improvements

* Integration with Stripe or Razorpay for payments
* Inventory tracking and real-time stock management
* Personalized product recommendations
* Internationalization with multi-language and currency support
* Progressive Web App (PWA) conversion

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome. If you find a bug or have a feature suggestion, feel free to open an issue or submit a pull request.


