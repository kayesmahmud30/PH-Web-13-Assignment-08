# 📚 My Online Book Borrowing Platform

A modern book borrowing web application built with **Next.js**, **React**, **Tailwind CSS**, and **Better Auth**.

This project includes book browsing, search, category filtering, detail pages, authentication, and responsive navigation.

---

## ✨ Key Features

- ✅ Home page with featured books and categories
- 🔎 Search books by title, author, or description
- 📚 Browse all books with category filtering
- 📖 Book detail page with borrow action
- 🔐 Authentication using Better Auth and MongoDB
- 💬 Toast notifications for user actions
- 📱 Responsive mobile and desktop navigation

---

## 🛠️ Tech Stack

- **Next.js 16.2.4**
- **React 19.2.4**
- **Tailwind CSS 4**
- **Better Auth** for session and auth flows
- **MongoDB** with `@better-auth/mongo-adapter`
- **react-toastify** for toast notifications
- **framer-motion** for UI motion effects
- **Animate.css** for UI shaking effects
- **react-icons** and **@gravity-ui/icons** for iconography

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Create environment variables

Create a `.env` file in the project root and set the following values:

```env
BETTER_AUTH_URL=http://localhost:3000
AUTH_DB_URI=mongodb+srv://<username>:<password>@<cluster>/<db>?retryWrites=true&w=majority
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

> Note: Adjust `BETTER_AUTH_URL` for your deployment environment.

### 3. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

- `src/app/` — Next.js app routes and pages
- `src/components/` — Reusable UI components
- `src/lib/` — Auth helpers and client utilities
- `public/` — Static assets and JSON data files

---

## ⚙️ Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build production app
- `npm start` — Start production server
- `npm run dev:ter` — Start dev server with webpack fallback

---

## 💡 Notes

- Book data is loaded from `public/data.json`.
- Category values are stored in `public/category.json`.
- The `ToastProvider` is mounted in `src/app/layout.js`.
- The borrow button requires authentication and redirects to `/signin` when unauthenticated.

---

## 📌 Recommended Improvements

- Add real borrow request persistence
- Improve UX on profile and loan history
- Add search auto-suggestions
- Add pagination for book listings

---

## 🌐 Live Demo

View the deployed version here: [https://ph-web-13-assignment-08.vercel.app](https://ph-web-13-assignment-08.vercel.app)
