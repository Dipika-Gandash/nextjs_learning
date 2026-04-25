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

## 🖥️ Server Components

A Server Component is a React component that **runs on the server** (never sent to the browser).

### How Server Components Work

1. React renders the component on the server
2. The server fetches data directly (DB, APIs, filesystem)
3. The server sends finished HTML to the browser
4. No JavaScript is shipped to the client for this component

### When to Use Server Components

Server Components are the **default** in Next.js App Router. Use them when you need:

1. Data fetching → databases, REST APIs, GraphQL
2. Access to server-only resources → env variables, secrets, filesystem
3. Heavy dependencies → libraries that shouldn't bloat the client bundle
4. SEO-critical content → fully rendered HTML on first load

**Server Components have no special directive — they are the default:**

```jsx
import { db } from "@/lib/db";

export default async function UserList() {
  const users = await db.query("SELECT * FROM users");

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## 🔀 Dynamic Segments

### 🔹 1. What are Dynamic Segments?

Dynamic segments are parts of a route that **change based on the URL**.

Instead of creating a separate file for every route:

```
/blog/post1
/blog/post2
/blog/post3
```

You define **one dynamic route**:

```
/blog/[slug]
```

Here, `[slug]` is a dynamic segment — it captures whatever value is in that position of the URL.

---

### 🔹 2. Folder Structure (App Router)

```
app/
  blog/
    [slug]/
      page.js       ← handles /blog/anything
```

```
app/
  shop/
    [category]/
      [productId]/
        page.js     ← handles /shop/electronics/123
```

---

### 🔹 3. How the Page Receives the Segment → `params`

In the App Router, dynamic segments are passed as **`params`** prop automatically.

```jsx
// app/blog/[slug]/page.js

export default async function BlogPost({ params }) {
  const { slug } = await params;   // slug = whatever is in the URL

  return <h1>Post: {slug}</h1>;
}
```

> ⚠️ In Next.js 15+, `params` is a **Promise** — always `await` it.

---

### 🔹 4. Rendering Strategies — Build Time vs Request Time

When you don't know exact segment names ahead of time and want to create routes from dynamic data, Next.js gives you two strategies:

---

#### ⚡ Static Rendering (Build Time)

> Pages are generated **once at build time** and served as static HTML. Super fast.

```
Developer runs → npm run build
                      ↓
         Next.js fetches data at build
                      ↓
         Generates HTML for each page
                      ↓
         Saves static files to server
                      ↓
  User visits → gets pre-built HTML instantly
```

To statically pre-render dynamic routes, export `generateStaticParams`:

```jsx
// app/blog/[slug]/page.js

export async function generateStaticParams() {
  const posts = await fetch('/api/posts').then(r => r.json());

  return posts.map((post) => ({
    slug: post.slug,   // generates /blog/post-1, /blog/post-2 ...
  }));
}

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await fetch(`/api/posts/${slug}`).then(r => r.json());

  return <h1>{post.title}</h1>;
}
```

**✅ Use Static when:**
- Content doesn't change often (blog posts, docs, product pages)
- You want maximum performance
- Data is known at build time

---

#### 🔄 Dynamic Rendering (Request Time)

> Page is generated **on every request** — fresh data every time.

```
User visits /blog/my-post
      ↓
Request sent to server
      ↓
Server runs your component code
      ↓
Fetches fresh data (DB, API, etc.)
      ↓
Generates HTML on the fly
      ↓
Sends HTML → Browser paints
```

Next.js automatically switches to dynamic rendering when it detects:
- `cookies()` or `headers()` usage
- `searchParams` access
- `fetch()` with `cache: 'no-store'`

Or you can force it manually:

```jsx
export const dynamic = 'force-dynamic';

export default async function BlogPost({ params }) {
  const { slug } = await params;
  const post = await fetch(`/api/posts/${slug}`, {
    cache: 'no-store'   // fresh data on every request
  }).then(r => r.json());

  return <h1>{post.title}</h1>;
}
```

**✅ Use Dynamic when:**
- Data changes frequently (dashboards, feeds, stock prices)
- Content is user-specific (profiles, orders)
- You need real-time accuracy

---

#### 📊 Quick Comparison

| | Static (Build Time) | Dynamic (Request Time) |
|---|---|---|
| When rendered | `npm run build` | Every request |
| Speed | ⚡ Fastest | 🐢 Slower |
| Data freshness | Stale until rebuild | Always fresh |
| Use `generateStaticParams` | Yes | No |
| Good for | Blogs, docs, marketing | Dashboards, user pages |

---

### 🔹 5. Catch-All Segments

Capture **multiple segments** in one route using `[...slug]`:

```
app/
  docs/
    [...slug]/
      page.js
```

```jsx
// URL: /docs/guide/setup/windows
// params.slug = ['guide', 'setup', 'windows']

export default async function DocsPage({ params }) {
  const { slug } = await params;
  // slug is an array: ['guide', 'setup', 'windows']
}
```

Use **optional catch-all** `[[...slug]]` to also match the root `/docs`:

```
[[...slug]] → matches /docs AND /docs/anything/deep
```

---

### 🔹 6. Accessing `params` in Server Components

In Server Components, Next.js automatically passes `params` as a **prop** to your page.

```jsx
// app/blog/[slug]/page.js
// URL: /blog/my-first-post

export default async function BlogPost({ params }) {
  const { slug } = await params;
  // slug = 'my-first-post'  ← string

  const post = await fetch(`/api/posts/${slug}`).then(r => r.json());

  return <h1>{post.title}</h1>;
}
```

For **nested dynamic segments**:

```jsx
// app/shop/[category]/[productId]/page.js
// URL: /shop/electronics/42

export default async function ProductPage({ params }) {
  const { category, productId } = await params;
  // category = 'electronics', productId = '42'
}
```

> ✅ `params` only works as a prop in **page.js**, **layout.js**, and **generateStaticParams**.  
> ✅ Always `await params` in Next.js 15+ — it's a Promise.  
> ❌ Cannot use `params` prop directly inside a nested child component — pass it down as a regular prop or use `useParams()` in a Client Component.

---

### 🔹 7. Accessing `params` in Client Components

You have **two ways** to get dynamic segment values in a Client Component:

---

#### Option A → `useParams()` hook (recommended)

```jsx
'use client';

import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const { slug } = params;
  // slug = 'my-first-post'

  return <h1>{slug}</h1>;
}
```

> ✅ Works anywhere in the component tree — no need to pass props down.  
> ✅ Automatically updates if the URL changes (navigation).

---

#### Option B → Pass `params` down from Server Component as a prop

```jsx
// app/blog/[slug]/page.js  (Server Component)
import BlogPost from '@/components/BlogPost';

export default async function Page({ params }) {
  const { slug } = await params;
  return <BlogPost slug={slug} />;   // pass as regular prop
}
```

```jsx
// components/BlogPost.jsx  (Client Component)
'use client';

export default function BlogPost({ slug }) {
  // slug = 'my-first-post' — received as a normal prop
  return <h1>{slug}</h1>;
}
```

> ✅ Useful when the parent already has `params` and the child just needs one value.  
> ✅ No extra hook needed.

---

### 🔹 8. Reading Search Params (Query Strings)

**Search params** are the `?key=value` part of the URL — e.g., `/blog?page=2&sort=latest`.

They are **not** part of the file/folder structure. They are optional and can be anything.

```
/blog?page=2&sort=latest
        ↑         ↑
   searchParam  searchParam
```

---

#### In Server Components → `searchParams` prop

Next.js passes search params as a **prop** automatically, just like `params`.

```jsx
// app/blog/page.js
// URL: /blog?page=2&sort=latest

export default async function BlogPage({ searchParams }) {
  const { page, sort } = await searchParams;
  // page = '2'   ← always a string, never a number
  // sort = 'latest'

  const posts = await fetch(`/api/posts?page=${page}&sort=${sort}`)
    .then(r => r.json());

  return <p>Showing page {page}</p>;
}
```

> ⚠️ Values are always **strings** — convert with `Number(page)` or `parseInt(page)` when needed.  
> ⚠️ Accessing `searchParams` **automatically opts the page into dynamic rendering** (every request). Next.js cannot statically pre-render a page when its output depends on query strings.  
> ❌ `searchParams` prop is only available in `page.js` — not in layouts.

---

#### In Client Components → `useSearchParams()` hook

```jsx
'use client';

import { useSearchParams } from 'next/navigation';

export default function Filters() {
  const searchParams = useSearchParams();

  const page = searchParams.get('page');     // '2' or null if missing
  const sort = searchParams.get('sort');     // 'latest' or null

  return <p>Page {page}, sorted by {sort}</p>;
}
```

**Useful `useSearchParams` methods:**

```jsx
searchParams.get('page')        // → '2'           single value
searchParams.get('missing')     // → null           if key doesn't exist
searchParams.getAll('tag')      // → ['js', 'css']  for ?tag=js&tag=css
searchParams.has('sort')        // → true/false      check if key exists
searchParams.toString()         // → 'page=2&sort=latest'
```

> ✅ Reactive — component **re-renders automatically** when the URL query string changes.  
> ✅ Works anywhere in the client component tree (no prop drilling needed).

---

### 🔹 9. How Re-rendering Works (Important)

This is where Server and Client Components behave very differently:

**Server Component with `searchParams`:**
```
User changes URL → full server round trip → server re-runs the component
→ fetches fresh data → sends new HTML → browser updates
```

**Client Component with `useSearchParams()`:**
```
User changes URL → no server trip → hook detects URL change
→ React re-renders the component in the browser → UI updates instantly
```

This is why `useSearchParams()` feels instant — it's pure client-side reactivity.  
But it means the data it uses must already be in the browser (no direct DB access).

---

### 🔹 10. When to Use What — Full Reference

| What you need | Component Type | How to access |
|---|---|---|
| Dynamic segment (`[slug]`) | Server Component | `params` prop → `await params` |
| Dynamic segment (`[slug]`) | Client Component | `useParams()` hook |
| Dynamic segment (`[slug]`) | Client Component (via parent) | pass as prop from Server Component |
| Search param (`?key=val`) | Server Component | `searchParams` prop → `await searchParams` |
| Search param (`?key=val`) | Client Component | `useSearchParams()` hook |
| Pre-render dynamic routes | Server Component | `generateStaticParams` |
| Force fresh data per request | Server Component | `cache: 'no-store'` or `dynamic = 'force-dynamic'` |

> 💡 **Rule of thumb:** prefer Server Components for data fetching. Drop to Client Components only when you need interactivity, hooks, or reactive URL changes.

## Fetching Data in Next.js

### 🟢 Server Component — Fetching Data

Server components run **only on the server** — they never ship to the browser.

**What you can do:**
- Directly query a database (Prisma, Drizzle, raw SQL)
- Read secret env vars like `process.env.DB_SECRET`
- Call internal APIs not exposed to users
- Use `async/await` at the component level — no `useEffect` needed

```tsx
// app/users/page.tsx — Server Component (no "use client")

async function UsersPage() {
  const users = await db.user.findMany() // direct DB call ✓

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  )
}

export default UsersPage
```

**How it flows:**
```
Request hits server → Component runs → DB query fires → HTML rendered → Sent to browser
```

> No loading state, no `useEffect`, no API route needed.  
> Data is fetched **before** the HTML even leaves the server.

**`fetch()` caching options in Server Components:**

```ts
// cached indefinitely (like getStaticProps)
fetch('https://api.example.com/data', { cache: 'force-cache' })

// never cached (like getServerSideProps)
fetch('https://api.example.com/data', { cache: 'no-store' })

// revalidate every 60 seconds (ISR-style)
fetch('https://api.example.com/data', { next: { revalidate: 60 } })
```

---

### 🔵 Client Component — Fetching Data

Client components run in the browser. No DB access, no secrets, no file system.  
Data must come through an API route.

**Plain `fetch` approach:**

```tsx
'use client'
import { useEffect, useState } from 'react'

export default function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}
```

**SWR approach (recommended):**

```tsx
'use client'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(r => r.json())

export default function UserList() {
  const { data: users, isLoading } = useSWR('/api/users', fetcher)

  if (isLoading) return <p>Loading...</p>
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}
```

**How it flows:**
```
Component mounts → useEffect fires → fetch('/api/...') → state updated → re-render
```

> This is why client fetching shows a loading state — the component renders **first** with empty data,  
> then refetches and re-renders when the data arrives.

---

### 🔹 Side-by-Side Comparison

| | Server Component | Client Component |
|---|---|---|
| How to fetch | `async/await` directly | `useEffect` or SWR/React Query |
| DB access | ✅ Yes | ❌ No (API route only) |
| Secret env vars | ✅ Yes | ❌ No |
| Loading state needed | ❌ No | ✅ Yes |
| Interactive / real-time | ❌ No | ✅ Yes |
| Data fetched | Before HTML is sent | After component mounts |

---

---

###  Why Can't We Use `async/await` Directly in Client Components?

Short answer — **React does not support async Client Components.**

If you try this:

```tsx
'use client'

export default async function UserList() {
  const users = await fetch('/api/users').then(r => r.json()) // ❌ won't work
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}
```

You'll get an error. Here's why.

---

**Reason 1 — Client Components are tied to the browser render cycle**

React renders client components **synchronously** on the browser. The moment React calls your component function, it expects it to return JSX immediately. An `async` function returns a **Promise**, not JSX — React doesn't know what to do with that and breaks.

```
React calls YourComponent()
  → async function returns Promise<JSX>   ← React expected JSX, got a Promise ❌
```

---

**Reason 2 — Hooks don't work inside async functions**

Client components use hooks like `useState`, `useEffect`, `useContext`. React tracks hooks by the **order they are called** on each render. Inside an async function, execution can pause at every `await` — React loses track of the hook order and throws errors.

```tsx
'use client'

async function BadComponent() {
  const data = await fetch('/api/data') // ⏸ pauses here
  const [count, setCount] = useState(0) // ❌ React hook order is now broken
}
```

---

**Reason 3 — The browser has no idea when the Promise resolves**

On the server, Next.js can `await` the component before sending HTML — it controls the timing. In the browser, React is managing a live UI with state, events, and re-renders happening constantly. There's no safe moment to "pause everything and wait" for an async component to resolve.

---

**So what do you do instead?**

You separate the async work from the render using `useEffect`:

```tsx
'use client'
import { useEffect, useState } from 'react'

export default function UserList() {
  const [users, setUsers] = useState([])    // 1. start with empty state
  const [loading, setLoading] = useState(true)

  useEffect(() => {                          // 2. after render, fetch data
    async function load() {
      const res = await fetch('/api/users')
      const data = await res.json()
      setUsers(data)                         // 3. update state → re-render
      setLoading(false)
    }
    load()
  }, [])

  if (loading) return <p>Loading...</p>     // 4. show loading until ready
  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}
```

> `async/await` lives **inside** `useEffect`, not on the component itself.  
> The component function stays synchronous — React is happy. ✅

---

**The mental model:**

```
Server Component          Client Component
──────────────────        ──────────────────────────────────────
async function ✅         async function ❌
await db.query()          useEffect → async function inside → await fetch()
returns JSX               returns JSX immediately, fills in data later
```

---

> **One line summary:**  
> Server components run once and wait. Client components render first, then fetch — because React needs JSX *now*, not after a Promise resolves.

## ⏳ Auto Loading in Next.js (`loading.js`)

Next.js uses a special file convention to show loading UI **automatically** while a route segment is streaming in. It wraps your page in a [`<Suspense>`](https://react.dev/reference/react/Suspense) boundary behind the scenes — you don't write any Suspense code yourself.

---

### How it works

```
app/
├── loading.js          ← applies to every route (global fallback)
├── page.js
└── blog/
    ├── loading.js      ← applies only to /blog (overrides app-level)
    └── page.js
```

**File placement = scope.** Drop `loading.js` at any level of the `app/` folder and it automatically wraps that route segment and all its children.

---

### Mental model

```
app/loading.js            →   every route in the app
app/blog/loading.js       →   /blog and its sub-routes only
app/blog/[slug]/loading.js →  /blog/:slug only
```

More specific files **override** the parent. If `/blog` has its own `loading.js`, the app-level one won't show for that route.

---

### Minimal example

```tsx
// app/blog/loading.js
export default function Loading() {
  return <div>Loading blog...</div>
}
```

That's it. Next.js handles the rest.

---

### ⚠️ Does NOT apply to Client Components

`loading.js` only works with **Server Components**. Client components render immediately (React needs JSX *now*, not after a promise), so the loading file is never shown.

**For client components, use `<Suspense>` manually:**

```tsx
// app/blog/page.js  ('use client')
import { Suspense } from 'react'
import Comments from './Comments'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading comments...</div>}>
      <Comments />
    </Suspense>
  )
}
```

---

### ⚡ When loading won't show

Even with `loading.js` set up correctly, the spinner may not appear if:

- **Navigation is fast** — Next.js has a 300ms threshold; instant transitions skip the fallback entirely
- **The result is cached** — cached pages render without re-fetching, so no loading state is triggered
- **The component is a Client Component** — see above

---

### Quick reference

| Scenario | Solution |
|---|---|
| Loading for all routes | `app/loading.js` |
| Loading for one route | `app/[route]/loading.js` |
| Loading inside a client component | `<Suspense fallback={…}>` |
| Loading not showing (fast nav / cache) | Expected — no fix needed |

# ⏸️ Suspense in Next.js

> Show a fallback (spinner/skeleton) while waiting for slow content to load, then swap it in automatically.

---

## The Idea

```tsx
<Suspense fallback={<p>Loading...</p>}>
  <SlowComponent />
</Suspense>
```

- React renders `<p>Loading...</p>` immediately
- When `SlowComponent` is ready → it replaces the fallback
- Everything outside the boundary renders normally, no waiting

---

## How `loading.js` Relates

`loading.js` is just Next.js doing this automatically for a whole route.

```
app/
├── loading.js       ← same as wrapping your page in <Suspense>
└── page.js
```

Use `loading.js` for full-page loading.  
Use `<Suspense>` when you want only *part* of a page to show a skeleton.

---

## Granular Loading — The Real Power

Instead of waiting for everything, show sections as they're ready.

```tsx
export default function Page() {
  return (
    <>
      <Header />                              {/* shows instantly */}

      <Suspense fallback={<UserSkeleton />}>
        <UserProfile />                       {/* slow — shows skeleton */}
      </Suspense>

      <Suspense fallback={<FeedSkeleton />}>
        <Feed />                              {/* medium — shows skeleton */}
      </Suspense>
    </>
  )
}
```

`Header` shows instantly. `Feed` appears when ready. `UserProfile` appears when ready.  
They don't wait for each other.

---

## With Async Server Components

If your component fetches data with `await`, wrap it in Suspense.

```tsx
async function UserProfile() {
  const user = await db.users.find()  // slow db call
  return <div>{user.name}</div>
}

// In your page:
<Suspense fallback={<Skeleton />}>
  <UserProfile />
</Suspense>
```

That's it. Next.js streams the skeleton first, then swaps in the real content.

---

## With Client Components

Client components can't be `async`. Use a library like SWR with `suspense: true`.

```tsx
'use client'
import useSWR from 'swr'

function UserProfile() {
  const { data } = useSWR('/api/user', fetcher, { suspense: true })
  return <div>{data.name}</div>
}

// Wrap it when you use it:
<Suspense fallback={<Skeleton />}>
  <UserProfile />
</Suspense>
```

---

## Always Pair With an Error Boundary

Suspense handles **loading**. Error boundaries handle **something broke**.

```tsx
<ErrorBoundary fallback={<p>Something went wrong.</p>}>
  <Suspense fallback={<Skeleton />}>
    <UserProfile />
  </Suspense>
</ErrorBoundary>
```

In Next.js you get this for free with `error.js` next to your `loading.js`.

---

## Quick Reference

| What you want | How |
|---|---|
| Loading UI for a whole route | `loading.js` |
| Loading UI for part of a page | `<Suspense fallback={…}>` |
| Multiple independent sections | Multiple `<Suspense>` boundaries |
| Handle errors too | `error.js` or `<ErrorBoundary>` |

---

## Common Mistakes

```tsx
// ❌ wrapping everything in one boundary — entire page waits
<Suspense fallback={<Spinner />}>
  <Header />       {/* forced to wait even though it's instant */}
  <UserProfile />
  <Feed />
</Suspense>

// ✅ only wrap the slow parts
<Header />
<Suspense fallback={<Skeleton />}><UserProfile /></Suspense>
<Suspense fallback={<Skeleton />}><Feed /></Suspense>
```

---

## Connecting Next.js to MongoDB

### Why it's different from a normal Node server

In a regular Node/Express server, you connect to the database **once** when the server starts, and that connection stays alive forever.

Next.js is different:

- In **development**, Next.js hot-reloads your code on every file change. Each reload can re-run your connection file, creating **hundreds of duplicate connections** that choke your database.
- In **production** (on Vercel/serverless), there is **no persistent server**. Each incoming request may spin up a fresh function instance — so you can't assume a connection already exists.

> **The fix:** cache the connection on the `global` object in dev (it survives hot-reloads), and reuse an existing connection in prod if one is already open.

---

### Step 1 — Install the driver

```bash
npm install mongodb
```

---

### Step 2 — Add your connection string

Create a `.env.local` file in your project root (Next.js loads this automatically, and it is git-ignored by default):

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/<dbname>?retryWrites=true&w=majority
```

Replace `<username>`, `<password>`, and `<dbname>` with your actual MongoDB Atlas values.

---

### Step 3 — Create the connection helper

```
src/
└── lib/
    └── database.js
```

```js
// src/lib/database.js

import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;

if (!URI) {
  throw new Error("MongoDB URI is not defined in the environment variables");
}

let clientPromise;

if (!global.mongoClient) {
  const client = new MongoClient(URI);   // create the client (not connected yet)
  global.mongoClient = client.connect(); // connect() returns a Promise — store it
}

clientPromise = global.mongoClient; // point to the cached promise

export default clientPromise;
```

#### What each line does

**`new MongoClient(URI)`**
Creates the client object using your connection string. At this point, no connection is open yet — it's just configuring *how* to connect.

**`client.connect()`**
This actually opens the connection to MongoDB. It returns a **Promise** — meaning the connection is happening in the background, not instantly.

**`global.mongoClient = client.connect()`**
We store that Promise on `global`, not the result of awaiting it. `global` is Node's true global object — unlike normal module variables, it survives Next.js hot-reloads in development. So the next time this file runs (on a code change), `global.mongoClient` already exists and we skip creating a new connection entirely.

**Why don't we `await client.connect()` here?**
Because this is module-level code — it runs once when the file is first imported, not inside an async function. You can't `await` at the top level in this context. Instead, we store the Promise itself, and whoever uses it does the awaiting:

```js
// in your route handler:
const client = await clientPromise; // ← the await happens here
const db = client.db("myDatabase");
```

**`clientPromise = global.mongoClient`**
Just a local variable pointing to the same Promise. This is what gets exported — any file that imports this will receive the same shared Promise, meaning they all share the same single connection pool.

> **The key insight:** we never store the *resolved connection* — we store the *Promise of a connection*. Every file that imports `clientPromise` and awaits it gets the same connection back. Promises in JavaScript remember their resolved value, so awaiting the same Promise 100 times doesn't reconnect 100 times — it just returns the cached result instantly after the first time.

---

### Step 4 — Use it in a Route Handler

```js
// app/api/users/route.js

import clientPromise from "@/lib/database";

export async function GET() {
  const client = await clientPromise;        // wait for connection
  const db = client.db("myDatabase");        // pick which DB to use
  const users = await db
    .collection("users")                     // pick which collection
    .find({})
    .toArray();

  return Response.json(users);
}
```

---

### What each piece means

| Term | What it is |
|---|---|
| `MongoClient` | The class from the `mongodb` package. Represents a connection pool to your cluster. |
| `client.connect()` | Opens the connection. Returns a Promise, so we `await` it. |
| `clientPromise` | The cached Promise — sharing this means we share one connection, not many. |
| `global._mongoClientPromise` | Node's global object. Survives hot-reloads in dev so the connection isn't re-created. |
| `client.db("name")` | Selects a specific database inside your cluster. |
| `.collection("name")` | Selects a collection (like a table) inside that database. |

---

### Common Mistakes

```js
// ❌ Connecting inside a component or route without caching
// This creates a new connection on EVERY request
export async function GET() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect(); // brand new connection every time
}

// ✅ Always import the shared clientPromise
import clientPromise from "@/lib/database";

export async function GET() {
  const client = await clientPromise; // reuses existing connection
}
```