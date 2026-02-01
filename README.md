# 🚀 What is Next.js?

Next.js is a React framework that helps build fast, SEO-friendly, full-stack web applications.

React alone is mainly for building UI.  
Next.js adds routing, server rendering, backend APIs, and performance optimizations on top of React.

In simple words:

> Next.js = React + Routing + Backend + Server Rendering + Optimization

---

## Why do we need Next.js?

React (Vite/CRA) apps run fully in the browser and need extra setup for routing, SEO, and performance.  
Next.js solves these problems out of the box.

---

## Why use Next.js?

### 1. File-Based Routing (No React Router needed)

Routes are created using folders and files:

```bash
app/page.js        → /
app/login/page.js → /login


Each folder becomes a URL automatically. This makes routing simple and clean.

### 2. Performance optimized 
Supports static generation(ssg) and server-side rendering(ssr) - fast page loads and better SEO

### 3. SEO friendly
since it supports server rendering search engines can read your content better

### 4. Full stack Power 
use database, authentication , file uploads - all inside next.js

### 5. Extra Optimization
Next.js automatically handles:

Image optimization

Code splitting

Lazy loading

Font optimization

Smaller JS bundles

No manual setup required.

## Installing Next.js

npx create-next-app@latest