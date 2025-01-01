# React Router v6 Demo Application

## Overview

This application demonstrates the key features of React Router v6, showcasing its powerful capabilities for routing in modern React applications. It includes examples of basic routing, nested routing, dynamic routes, redirection, query parameters, and route guards.

### Features:

-  **Basic Routing:** Navigate between pages using defined routes.
-  **Nested Routes:** Organize routes hierarchically.
-  **Dynamic Routes:** Access URL parameters in components.
-  **Route Guards:** Protect routes based on conditions.
-  **Custom Links:** Style active links dynamically.
-  **Query Parameters:** Handle search queries with `useSearchParams`.
-  **404 Not Found:** Handle unmatched routes gracefully.

---

## Getting Started

### Installation

1. Clone the repository.
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory.
   ```bash
   cd react-router-v6
   ```
3. Install dependencies.
   ```bash
   npm install
   ```
4. Start the development server.
   ```bash
   npm start
   ```

---

## Key Features Explained

### 1. Basic Routing

```jsx
<Route path="/about" element={<About />} />
```

Defines a route for the `About` component accessible via `/about`.

### 2. Nested Routes

```jsx
<Route path="/dashboard" element={<Dashboard />}>
   <Route path="overview" element={<Overview />} />
   <Route path="settings" element={<Settings />} />
</Route>
```

Demonstrates how routes can be nested for better organization.

### 3. Dynamic Routes

```jsx
<Route path="/profile/:username" element={<Profile />} />
```

The `:username` parameter is dynamically retrieved using `useParams`.

### 4. Route Guards

```jsx
<Route path="/user" element={<User isLoggedIn={isLoggedIn} />} />
```

Redirects users to login if they are not authenticated using the `Navigate` component.

### 5. Custom Links

```jsx
<Link to={to} style={{ color: isActive ? 'red' : 'blue' }}>
```

Active links are styled dynamically using `useResolvedPath` and `useMatch`.

### 6. Query Parameters

```jsx
const [searchParams, setSearchParams] = useSearchParams();
```

Manages query parameters for the `Search` component.

### 7. 404 Not Found

```jsx
<Route path="*" element={<NotFound />} />
```

Handles all unmatched routes gracefully.

---

## Differences Between React Router v5 and v6

| Feature           | React Router v5                         | React Router v6                         |
| ----------------- | --------------------------------------- | --------------------------------------- |
| Route Declaration | `<Route path="/" component={Home} />`   | `<Route path="/" element={<Home />} />` |
| Nested Routes     | Requires nesting `<Switch>` components. | Directly nest routes within `<Routes>`  |
| Exact Matching    | Uses `exact` prop explicitly.           | Enabled by default in v6.               |
| Redirection       | `<Redirect to="/" />`                   | `<Navigate to="/" />`                   |
| Route Guards      | Handled manually with custom logic.     | Easier with `<Navigate />`.             |
| Query Parameters  | Managed manually with `useLocation`.    | Simplified with `useSearchParams`.      |

---
## Project Img
![ProjectImg](https://github.com/user-attachments/assets/d296c521-eff4-4490-b3ab-67dc2be42975)
