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
```

Why use Link?

1.Enables client-side navigation
2.Prevents full page reload
3.Keeps React state intact
4.Automatically prefetches pages
5.Makes navigation faster

## 📁 Route Groups (App Router)

Next.js allows creating **Route Groups** using folders wrapped in parentheses.

Example:
app/
└─ (auth)/
└─ login/
└─ page.js


Even though `login` is inside `(auth)`, the URL becomes:

/login


The `(auth)` folder does **not** appear in the URL.

---

### ✅ What is a Route Group?

A Route Group is a folder like:

(auth)
(dashboard)
(user)


These folders are used only for **organizing files and layouts**.  
They are ignored when Next.js generates routes.

In simple words:

> Route Groups help structure your app without changing the URL.

---

### 🎯 Why Route Groups are useful

- Keep large projects organized
- Separate sections like auth, dashboard, admin, etc.
- Apply different layouts to different parts of the app
- Maintain clean URLs
- Improve project readability as it grows

---

## Font Optimization
Normally in websites, we load fonts like this:
```html
<link href="https://fonts.googleapis.com/..." />
```
Problems:
1.External request
2.Slower load
3.Layout shift (font loads late)
4.SEO + performance issues

Next.js fixes this.

So Next.js gives:

```html
import { Inter } from "next/font/google";
```

Now:

👉 Font is downloaded at build time
👉 Hosted locally
👉 Optimized automatically

### What does “self-hosting fonts” mean?

Normally (classic way):

Your browser does this:

👉 Your website loads
👉 Browser asks Google: “give me Inter font”
👉 Google sends font files

So flow is:
Your site → Google Fonts → Browser

That means:
1.extra network request
2.depends on Google servers
3.slower first load

This is called NOT self-hosted.

Self-hosting = fonts live with YOUR app

With Next.js:

👉 Next.js downloads the font files ONCE (during build)
👉 Stores them inside your project output
👉 When users open your site, fonts come from YOUR server

So now:

Your site → Your server → Browser
No Google involved at runtime.

That’s self-hosted.

### How exactly does Next.js download fonts?
When you write:
```html
import { Inter } from "next/font/google";
```

Next.js sees this during build.

It automatically:
1.Contacts Google Fonts (server side, not browser)
2.Downloads the font files
3.Saves them inside .next/ build folder
4.Generates CSS classes
5.Links fonts locally

All before deployment.

When you write:
```html
import { Inter } from "next/font/google";
```
**Inter** is just a function
Like:
```html
function Inter() {
  return something;
}
```

Now when you call it:
```html
Inter({ subsets: ["latin"] })
```

It RETURNS something.

It does NOT directly apply font.

It RETURNS DATA.
That data is an object.

### Font subsets (Next.js)

Fonts support multiple languages / character sets, called subsets

Example: English uses the latin subset

In Next.js, subsets is required so it knows which characters to download

This helps:
1.reduce font size
2.improve performance
3.avoid downloading unused characters

Example:
```html
const inter = Inter({
  subsets: ["latin"],
});
```

### Font names with spaces (important)

If a font name has spaces, Next.js uses underscores in the import.

Example:

Font name: Work Sans

Import name: Work_Sans

## Image Component in Next.js 
Next.js provides a built-in Image component to handle images in an optimized way.

Compared to a normal <img> tag, it:
1.Automatically optimizes images
2.Prevents layout shift
3.Loads images faster
4.Supports lazy loading by default

```html
import Image from "next/image";
```

### Basic Image usage
```html
<Image
  src="/hero.jpg"
  alt="Explore beautiful places in India"
  width={1200}
  height={600}
/>
```

### Important:
1.alt is required (accessibility + SEO)
2.width & height define aspect ratio
3.They do NOT fix the image size on screen

## What is CSS Module

CSS Modules scope styles to one component only.

1.No class conflicts
2.Safer
3.More maintainable
4.Default choice in Next.js

File name rule:
```html
ComponentName.module.css
```

Example:
```html
Hero.module.css
```

### Using CSS Modules
CSS file:
``html
/* Hero.module.css */

.container {
  padding: 40px;
}

.title {
  font-size: 48px;
  font-weight: bold;
}
```

Component file:
```html
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
    </div>
  );
}
```

### How CSS Modules work internally

This:
```html
.title {
  color: red;
}
```

Becomes something like:
```html
.title__k3d92 {
  color: red;
}
```

