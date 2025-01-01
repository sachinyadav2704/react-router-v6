/* eslint-disable react/prop-types */
// import React from 'react';
import {
   BrowserRouter as Router,
   Routes,
   Route,
   Link,
   useNavigate,
   useParams,
   useLocation,
   Outlet,
   Navigate,
   useSearchParams,
   useResolvedPath,
   useMatch,
} from 'react-router-dom';
import './App.css';

// Home component
function Home() {
   return (
      <div>
         <h1>Welcome to React Router v6 Demo</h1>
         <p>This page demonstrates the key features of React Router v6.</p>
      </div>
   );
}

// About component
function About() {
   return (
      <div>
         <h1>About</h1>
         <p>This is a simple app to demonstrate React Router v6 functionality.</p>
      </div>
   );
}

// Contact component
function Contact() {
   const location = useLocation();
   return (
      <div>
         <h1>Contact</h1>
         <p>You are currently on: {location.pathname}</p>
      </div>
   );
}

// Profile component
function Profile() {
   const { username } = useParams();
   return (
      <div>
         <h1>Profile</h1>
         <p>Viewing profile for user: {username}</p>
      </div>
   );
}

// Dashboard component
function Dashboard() {
   return (
      <div>
         <h1>Dashboard</h1>
         <p>Select an option below:</p>
         <nav>
            <ul>
               <li>
                  <Link to="overview">Overview</Link>
               </li>
               <li>
                  <Link to="settings">Settings</Link>
               </li>
               <li>
                  <Link to="reports">Reports</Link>
               </li>
            </ul>
         </nav>
         <Outlet />
      </div>
   );
}

function Overview() {
   return (
      <div>
         <h2>Overview</h2>
         <p>Dashboard Overview Section</p>
      </div>
   );
}

function Settings() {
   return (
      <div>
         <h2>Settings</h2>
         <p>Dashboard Settings Section</p>
      </div>
   );
}

function Reports() {
   const navigate = useNavigate();
   return (
      <div>
         <h2>Reports</h2>
         <p>Click below to go back to Overview.</p>
         <button onClick={() => navigate('/dashboard/overview')}>Go to Overview</button>
      </div>
   );
}

function Login() {
   const navigate = useNavigate();
   const handleLogin = () => navigate('/dashboard');
   return (
      <div>
         <h1>Login</h1>
         <button onClick={handleLogin}>Login</button>
      </div>
   );
}

function Search() {
   const [searchParams, setSearchParams] = useSearchParams();
   const query = searchParams.get('query');
   const handleSearch = e => {
      e.preventDefault();
      const value = e.target.elements.search.value;
      setSearchParams({ query: value });
   };
   return (
      <div>
         <h1>Search</h1>
         <form onSubmit={handleSearch}>
            <input type="text" name="search" placeholder="Enter search term" />
            <button type="submit">Search</button>
         </form>
         {query && <p>Results for: {query}</p>}
      </div>
   );
}

function CustomLink({ to, children }) {
   const resolvedPath = useResolvedPath(to);
   const isActive = useMatch({ path: resolvedPath.pathname, end: true });
   return (
      <Link to={to} style={{ color: isActive ? 'red' : 'blue' }}>
         {children}
      </Link>
   );
}

function User({ isLoggedIn }) {
   return isLoggedIn ? (
      <div>
         <h1>User Dashboard</h1>
         <p>Welcome back, User!</p>
      </div>
   ) : (
      <Navigate to="/login" replace />
   );
}

function NotFound() {
   return (
      <div>
         <h1>404 - Not Found</h1>
         <p>The page does not exist.</p>
      </div>
   );
}

function Navigation() {
   return (
      <nav>
         <ul>
            <li>
               <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
               <CustomLink to="/about">About</CustomLink>
            </li>
            <li>
               <CustomLink to="/contact">Contact</CustomLink>
            </li>
            <li>
               <CustomLink to="/profile/JohnDoe">Profile</CustomLink>
            </li>
            <li>
               <CustomLink to="/dashboard">Dashboard</CustomLink>
            </li>
            <li>
               <CustomLink to="/search">Search</CustomLink>
            </li>
            <li>
               <CustomLink to="/user">User</CustomLink>
            </li>
            <li>
               <CustomLink to="/login">Login</CustomLink>
            </li>
         </ul>
      </nav>
   );
}

function App() {
   const isLoggedIn = false;
   return (
      <Router>
         <Navigation />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />}>
               <Route path="overview" element={<Overview />} />
               <Route path="settings" element={<Settings />} />
               <Route path="reports" element={<Reports />} />
            </Route>
            <Route path="/search" element={<Search />} />
            <Route path="/user" element={<User isLoggedIn={isLoggedIn} />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   );
}

export default App;
