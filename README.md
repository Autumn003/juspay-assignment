# Juspay UI Developer Assignment

## Live Demo

Visit live application: [Project Demo](https://juspay-assignment-r5av.vercel.app/)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Installation

1. Clone the repository

```bash
git clone https://github.com/Autumn003/juspay-assignment.git
```

2. Navigate to the project directory

```bash
cd juspay-assignment
```

3. Install dependencies

```bash
npm install
```

### Running the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is not availabble).

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally

## Functionality included

### Core Features

#### Redux-based State Management

- Centralized and scalable state management for orders, UI state, and navigation.

#### Orders Management

- Sorting orders
- Filtering orders (including reverse order)
- Pagination for large datasets

#### Global Search

- Header search for quick navigation

#### Dark Mode

- Theme toggling implemented using Context API

#### Lazy loading & code spliting

- Implemented route-based lazy loading using React.lazy and Suspense to improve initial load time and performance.

### More

- Pixel-perfect implementation matching the provided Figma design
- Smooth micro-interactions for enhanced user experience
- Fully responsive layout:
  - Desktop
  - Tablet
  - Mobile
- Optimized component structure for faster rendering

### File Structure

```
├── public
│ ├── 3D03.png
│ ├── 3D05.png
│ ├── 3D08.png
│ ├── ByeWind.png
│ ├── Female05.png
│ ├── Female08.png
│ ├── Female09.png
│ ├── Female15.png
│ ├── Male06.png
│ ├── Male07.png
│ ├── Male08.png
│ ├── Male11.png
│ └── vite.svg
├── src
│ ├── assets
│ │ └── react.svg
│ ├── components
│ │ ├── dashboard -- (Components used in dashboad page)
│ │ │ ├── line-chart.tsx
│ │ │ ├── pie-chart.tsx
│ │ │ ├── products-table.tsx
│ │ │ ├── progress-card.tsx
│ │ │ ├── stacked-bar-chart.tsx
│ │ │ └── world-map.tsx
│ │ ├── header -- (Header with components used in it)
│ │ │ ├── breadcrumb.tsx
│ │ │ └── header.tsx
│ │ ├── orders -- (components used in orders page)
│ │ │ └── orders-pagination.tsx
│ │ ├── rightbar -- (Rightbar with component used in it)
│ │ │ ├── notification-card.tsx
│ │ │ └── rightbar.tsx
│ │ ├── sidebar -- (Sidebar with component used in it)
│ │ │ ├── expandable-menu.tsx
│ │ │ ├── sidebar.tsx
│ │ │ └── tab.tsx
│ │ └── ui -- (Reusable ui components)
│ │ ├── avatar.tsx
│ │ ├── button.tsx
│ │ ├── checkbox.tsx
│ │ ├── pagination.tsx
│ │ ├── search-box.tsx
│ │ ├── search-button.tsx
│ │ ├── table.tsx
│ │ └── user-card.tsx
│ ├── constants -- (All constant used all over the application)
│ │ └── content.tsx
│ ├── lib
│ │ ├── theme-toggler.tsx -- (context api theme toggler)
│ │ └── utils.ts -- (utility functions)
│ ├── pages
│ │ ├── dashboard.tsx
│ │ ├── orders.tsx
│ │ └── page-loader.tsx
│ ├── redux
│ │ ├── hooks -- (Selector and Dispatch hook to retrieve and dispatch the data)
│ │ │ └── index.ts
│ │ ├── slices -- (reducers file for redux state management)
│ │ │ ├── navigation-slice.ts
│ │ │ ├── order-slice.ts
│ │ │ └── ui-slice.ts
│ │ └── store -- (Redux store)
│ │ └── index.ts
│ ├── App.css
│ ├── App.tsx
│ ├── index.css
│ └── main.tsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```
