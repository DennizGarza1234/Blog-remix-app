# Blog Remix App

## Overview

This project is a multi-page blog application built using React Router v7 with file-based routing and TypeScript. The application demonstrates dynamic navigation, reusable layouts, and route parameter handling.

Users can:
- View a blog feed
- Navigate to an About page
- Open individual blog posts using dynamic routes
- Return to the feed using programmatic navigation

---

## Features

- File-based routing
- Dynamic route parameters
- Persistent navigation layout
- Programmatic navigation with useNavigate
- TypeScript support
- Responsive multi-page application structure

---

## Technologies Used

- React
- React Router v7
- TypeScript
- Vite

---

## Project Structure


app/
│
├── data/
│ └── posts.ts
│
├── routes/
│ ├── _index.tsx
│ ├── about.tsx
│ └── post.$postId.tsx
│
├── root.tsx
├── routes.ts
│
main.tsx


---

## Routes

| Route | Description |
|------|-------------|
| `/` | Home blog feed |
| `/about` | About page |
| `/post/:postId` | Dynamic blog post page |

---

## Installation

### Install dependencies

```bash
npm install
Start development server
npm run dev
```
