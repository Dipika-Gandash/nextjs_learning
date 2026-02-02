# 🚀 What is Next.js?

Next.js is a React framework that helps build fast, SEO-friendly, full-stack web applications.

React alone is mainly for building UI.  
Next.js adds routing, server rendering, backend APIs, and performance optimizations on top of React.

In simple words:

> Next.js = React + Routing + Backend + Server Rendering + Optimization

## 🤔 Why do we need Next.js?

React (Vite/CRA) apps run fully in the browser and need extra setup for routing, SEO, and performance.  
Next.js solves these problems out of the box.

## ✅ Why use Next.js?


### 1. File-Based Routing (No React Router needed)

Routes are created using folders and files:
app/page.js        → /
app/login/page.js → /login


Each folder becomes a URL automatically.
This makes routing simple and clean.

### 2. Performance Optimized

Next.js supports Static Site Generation (SSG) and Server Side Rendering (SSR).
This results in faster page loads and better SEO.

### 3. SEO Friendly

Since it supports server rendering, search engines can read your content better.

### 4. Full Stack Power

You can use database, authentication, and file uploads — all inside Next.js.

### 5. Extra Optimization

Next.js automatically handles:

Image optimization

Code splitting

## Installing Next.js

npx create-next-app@latest

## 🚀 App Router (Next.js)

Next.js uses the **App Router** (`/app` folder) for routing.

Each folder inside `app` automatically becomes a route.

Example:
app/
├─ page.js → /
├─ about/
│ └─ page.js → /about


### Key Points

- Routing is folder-based
- `page.js` is required to render a route
- `layout.js` wraps pages and persists UI
- Supports Server Components by default
- Built-in SEO optimization

---

## 🔗 Link Component in Next.js

Next.js provides its own `Link` component for navigation between pages.

Instead of using normal anchor tags:

```html
<a href="/about">About</a>

Next.js uses:
import Link from "next/link";

<Link href="/about">About</Link>

Why use Link?

1.Enables client-side navigation
2.Prevents full page reload
3.Keeps React state intact
4.Automatically prefetches pages
5.Makes navigation faster

