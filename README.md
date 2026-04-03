# 🚀 What is Next.js?

Next.js is a React framework that helps build fast, SEO-friendly, full-stack web applications.

React alone is mainly for building UI.
Next.js adds routing, server rendering, backend APIs, and performance optimizations on top of React.

In simple words:

> **Next.js = React + Routing + Backend + Server Rendering + Optimization**

---

## 🤔 Why do we need Next.js?

React (Vite/CRA) apps run fully in the browser and need extra setup for routing, SEO, and performance.
Next.js solves these problems out of the box.

---

## ✅ Why use Next.js?

### 1. File-Based Routing (No React Router needed)

Routes are created using folders and files:

```
app/page.js        → /
app/login/page.js  → /login
```

Each folder becomes a URL automatically. This makes routing simple and clean.

### 2. Performance Optimized

Next.js supports Static Site Generation (SSG) and Server Side Rendering (SSR).
This results in faster page loads and better SEO.

### 3. SEO Friendly

Since it supports server rendering, search engines can read your content better.

### 4. Full Stack Power

You can use database, authentication, and file uploads — all inside Next.js.

### 5. Extra Optimization

Next.js automatically handles:
- Image optimization
- Code splitting

---

## 🛠️ Installing Next.js

```bash
npx create-next-app@latest
```

---

## 🚀 App Router (Next.js)

Next.js uses the **App Router** (`/app` folder) for routing.

Each folder inside `app` automatically becomes a route.

```
app/
├── page.js         → /
├── about/
│   └── page.js    → /about
```

### Key Points

- Routing is folder-based
- `page.js` is required to render a route
- `layout.js` wraps pages and persists UI
- Supports Server Components by default
- Built-in SEO optimization

---

## 🔗 Link Component in Next.js

Next.js provides its own `Link` component for navigation between pages.

Instead of normal anchor tags:

```html
<a href="/about">About</a>
```

Next.js uses:

```jsx
import Link from "next/link";

<Link href="/about">About</Link>
```

**Why use Link?**

1. Enables client-side navigation
2. Prevents full page reload
3. Keeps React state intact
4. Automatically prefetches pages
5. Makes navigation faster

---

## 📁 Route Groups (App Router)

Next.js allows creating **Route Groups** using folders wrapped in parentheses.

```
app/
└── (auth)/
    └── login/
        └── page.js
```

Even though `login` is inside `(auth)`, the URL becomes `/login`.

The `(auth)` folder does **not** appear in the URL.

### ✅ What is a Route Group?

A Route Group is a folder like `(auth)`, `(dashboard)`, `(user)`.

These folders are used only for **organizing files and layouts**.
They are ignored when Next.js generates routes.

> Route Groups help structure your app without changing the URL.

### 🎯 Why Route Groups are useful

- Keep large projects organized
- Separate sections like auth, dashboard, admin, etc.
- Apply different layouts to different parts of the app
- Maintain clean URLs
- Improve project readability as it grows

---

## 🔤 Font Optimization in Next.js

### The Problem with Normal Font Loading

Normally in websites, fonts are loaded like this:

```html
<link href="https://fonts.googleapis.com/..." />
```

**Problems:**

1. External network request on every page load
2. Slower load time
3. Layout shift (page jumps when font loads late)
4. SEO + performance issues

---

### ⚡ Web Performance Metrics — FCP, LCP, CLS

Before understanding why Next.js font optimization matters, you need to know these 3 terms Google uses to measure your site's speed:

---

#### 🟡 FCP — First Contentful Paint

> "How fast does the user see SOMETHING on screen?"

FCP measures the time from when the page starts loading to when **any** text or image first appears.

- ✅ Good: under 1.8 seconds
- ❌ Bad: over 3 seconds

**Font problem:** If your font takes time to load, the browser either shows nothing (blank text) or shows a fallback font first — both hurt FCP.

---

#### 🟢 LCP — Largest Contentful Paint

> "How fast does the MAIN content appear?"

LCP measures when the **biggest visible element** (hero image, heading, etc.) loads on screen.

- ✅ Good: under 2.5 seconds
- ❌ Bad: over 4 seconds

**Font problem:** If your heading uses a custom font and it loads late, LCP score suffers because the main text appears late.

---

#### 🔵 CLS — Cumulative Layout Shift

> "Does the page jump around while loading?"

CLS measures how much the **layout shifts unexpectedly** while the page is loading.

- ✅ Good: under 0.1
- ❌ Bad: over 0.25

**Font problem:** When a fallback font loads first and then swaps to the real font, the text size changes slightly — this causes a layout shift and hurts CLS score.

---

**In simple words:**

| Metric | Measures | Font Impact |
|--------|----------|-------------|
| FCP | First thing visible on screen | Blank text delay |
| LCP | Main/biggest content visible | Heading appears late |
| CLS | Page jumping / shifting | Font swap causes layout shift |

Next.js font optimization **fixes all three** by self-hosting fonts. 👇

---

### ✅ How Next.js Fixes Font Loading

```jsx
import { Inter } from "next/font/google";
```

Now:
- 👉 Font is downloaded **at build time** (not at runtime)
- 👉 Hosted locally on **your server**
- 👉 Optimized automatically
- 👉 No layout shift, no extra network request

---

### 📦 What is "Self-Hosting Fonts"?

**Classic way (NOT self-hosted):**

```
Your site → Google Fonts Server → Browser
```

Problems:
1. Extra network request
2. Depends on Google's servers
3. Slower first load
4. Hurts FCP, LCP, and CLS scores

**Next.js way (Self-hosted):**

```
Your site → Your Server → Browser
```

Next.js downloads the font **once during build** and stores it inside your project output. When users open your site, fonts come from YOUR server — no Google involved at runtime.

---

### ⚙️ How Next.js Downloads Fonts Internally

When you write:

```jsx
import { Inter } from "next/font/google";
```

Next.js does this automatically **during build**:

1. Contacts Google Fonts (server-side, not browser)
2. Downloads the font files
3. Saves them inside `.next/` build folder
4. Generates CSS classes
5. Links fonts locally

All before deployment. Users never wait for fonts. ✅

---

### 🧱 Basic Font Setup

```jsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
```

> `Inter` is just a **function** that returns an object with font data (like `className`).
> It does NOT directly apply the font — you have to use the returned object.

---

### 🎯 Font Subsets

Fonts support multiple languages / character sets, called **subsets**.

- English uses the `latin` subset
- `subsets` is **required** in Next.js

**Why it matters:**
1. Reduces font file size
2. Improves performance
3. Avoids downloading unused characters

```jsx
const inter = Inter({
  subsets: ["latin"],
});
```

---

### ✏️ Font Names with Spaces

If a font name has spaces, Next.js uses **underscores** in the import.

| Font Name | Import Name |
|-----------|-------------|
| Work Sans | `Work_Sans` |
| Roboto Mono | `Roboto_Mono` |
| Open Sans | `Open_Sans` |

```jsx
import { Work_Sans } from "next/font/google";
```

---

### 🛠️ How to Use Fonts — 3 Ways

#### Method 1: Apply to Entire App (Recommended)

Add the font in `layout.js` so it applies to every page:

```jsx
// app/layout.js

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
```

> `inter.className` → Next.js gives you a CSS class that applies the font automatically.
> Wrap `<body>` with it and every component inside gets the font.

---

#### Method 2: Apply to a Specific Component

```jsx
// components/Hero.js

import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  return (
    <h1 className={roboto.className}>
      Welcome to Next.js
    </h1>
  );
}
```

---

#### Method 3: Use with Tailwind CSS (CSS Variable method) ⭐ Best Way

This is the **best and most flexible way** to use fonts with Tailwind.

**Step 1 — Create a CSS variable from the font in `layout.js`:**

```jsx
// app/layout.js

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",   // 👈 this creates a CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
```

**Step 2 — Register the variable in `tailwind.config.js`:**

```js
// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],   // 👈 maps the CSS variable to a Tailwind class
      },
    },
  },
};
```

**Step 3 — Use it anywhere with Tailwind:**

```jsx
<h1 className="font-inter text-4xl font-bold">
  Hello World
</h1>
```

> Now you can use `font-inter` as a Tailwind utility class anywhere in your app. 🎉

---

### 📌 Using Multiple Fonts

```jsx
// app/layout.js

import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

Then in `tailwind.config.js`:

```js
fontFamily: {
  inter: ["var(--font-inter)"],
  mono: ["var(--font-roboto-mono)"],
},
```

Now use both in your components:

```jsx
<h1 className="font-inter">Heading</h1>
<code className="font-mono">Code block</code>
```

---

### 🔑 Font Options Summary

```jsx
const inter = Inter({
  subsets: ["latin"],           // required — which characters to download
  weight: ["400", "700"],       // optional — which font weights to include
  style: ["normal", "italic"],  // optional — font styles
  variable: "--font-inter",     // optional — for Tailwind / CSS variable usage
  display: "swap",              // optional — show fallback font while loading (helps CLS)
});
```

> `display: "swap"` is automatically handled by Next.js. It ensures text is visible while the font loads, which improves CLS score.

---

## 🖼️ Image Component in Next.js

Next.js provides a built-in `Image` component to handle images in an optimized way.

Compared to a normal `<img>` tag, it:

1. Automatically optimizes images
2. Prevents layout shift
3. Loads images faster
4. Supports lazy loading by default

```jsx
import Image from "next/image";
```

### Basic Image Usage

```jsx
<Image
  src="/hero.jpg"
  alt="Explore beautiful places in India"
  width={1200}
  height={600}
/>
```

**Important:**
1. `alt` is required (accessibility + SEO)
2. `width` & `height` define aspect ratio
3. They do NOT fix the image size on screen

---

## 🎨 CSS Modules

CSS Modules scope styles to one component only.

1. No class conflicts
2. Safer
3. More maintainable
4. Default choice in Next.js

**File name rule:**

```
ComponentName.module.css
```

### Using CSS Modules

```css
/* Hero.module.css */

.container {
  padding: 40px;
}

.title {
  font-size: 48px;
  font-weight: bold;
}
```

```jsx
// Hero.js

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
    </div>
  );
}
```

### How CSS Modules Work Internally

This:

```css
.title {
  color: red;
}
```

Becomes something like:

```css
.title__k3d92 {
  color: red;
}
```

Classes get unique hashes → no conflicts between components. ✅

---

## 🔍 Metadata and SEO in Next.js

### What is Metadata?

Metadata = information **about** your page.

It tells:
- Google what this page is about
- Users what they'll see before clicking

### Metadata in Next.js (App Router)

Written in `page.js` or `layout.js` and exported as a `metadata` object:

```jsx
export const metadata = {
  title: 'Explore India',
  description: 'Explore India by discovering states, cities, culture, food, and famous travel destinations.',
}
```

### Keywords (optional)

```jsx
keywords: ['travel India', 'Indian cities', 'tourism in India'],
```

### Open Graph (Social Media Preview)

```jsx
openGraph: {
  title: 'Explore India',
  description: 'Discover Indian states, cities, culture, and travel destinations.',
  url: 'https://www.yoursite.com',
  images: ['/og-image.png'],
  type: 'website',
},
```

### Twitter Metadata

```jsx
twitter: {
  card: 'summary_large_image',
  title: 'Explore India',
  description: 'Discover Indian states, cities, culture, and travel destinations.',
  images: ['/twitter-image.png'],
},
```

### Robots Metadata

```jsx
robots: {
  index: true,   // Google can show this page in search results
  follow: true,  // Google can follow links on this page
},
```

> Only add `robots` when you want to **block** a page (like `/login`, `/admin`).
> Public pages don't need it — Google indexes them by default.

### robots.txt vs robots metadata

| robots.txt | robots metadata |
|------------|-----------------|
| Site-level | Page-level |
| Controls crawling | Controls indexing |
| Blocks bots | Blocks search results |
| Public file | Inside page metadata |

### Canonical URL

Tells Google which is the **original** version of a page when the same content appears at multiple URLs.

```jsx
alternates: {
  canonical: '/',
},
```

> Only add canonical when duplicate URLs are possible (filters, query params, pagination).

### ⚠️ Always put metadata in Server Components

---

## ⚛️ Client Components

A Client Component is a React component that **runs in the browser**.

### How Client Components Work

1. React sends JavaScript to the browser
2. The browser executes the code
3. The component renders HTML dynamically in the browser
4. Interactions (clicks, typing) update state locally without needing the server

### When to Use Client Components

You need a Client Component whenever you use:

1. State → `useState`
2. Side effects → `useEffect`
3. Event handling → clicks, form inputs, hover, drag, etc.
4. Browser-only APIs → `window`, `localStorage`, `navigator`, `document`

**To make a component a Client Component, add `'use client'` at the very top:**

```jsx
'use client';

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```