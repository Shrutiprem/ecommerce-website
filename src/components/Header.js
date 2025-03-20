// // src/components/Header.js
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import './Header.css';

// const Header = ({ cart }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Fetch categories from the FakeStore API
//     axios.get('https://fakestoreapi.com/products/categories')
//       .then(response => setCategories(response.data))
//       .catch(error => console.error('Error fetching categories:', error));
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/search/${searchTerm}`);
//       setSearchTerm('');  // Clear the search field
//     }
//   };

//   const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <header className="header">
//       <div className="logo-section">
//         <Link to="/" className="logo">
//           <img src="https://www.360webdesigns.com/wp-content/uploads/2016/07/Services_ECommerce_v2-01.png" alt="Logo" />
//         </Link>
//         <h1 className="site-title">Srushee E-commerce</h1>
//       </div>
//       <form onSubmit={handleSearch} className="search-form">
//         <input 
//           type="text" 
//           value={searchTerm} 
//           onChange={(e) => setSearchTerm(e.target.value)} 
//           placeholder="Search for a product..." 
//           className="search-input"
//         />
//         <button type="submit" className="search-button">Search</button>
//       </form>
//       <nav className="nav-links">
//         <Link to="/" className="nav-item">Home</Link>
//         <div className="nav-item categories-dropdown">
//           Categories
//           <div className="dropdown-content">
//             {categories.map((category) => (
//               <Link 
//                 key={category} 
//                 to={`/category/${category}`} 
//                 className="dropdown-item"
//               >
//                 {category.charAt(0).toUpperCase() + category.slice(1)}
//               </Link>
//             ))}
//           </div>
//         </div>
//         <Link to="/cart" className="nav-item">Cart ({totalItemsInCart})</Link>
//         <Link to="/orders" className="nav-item">Orders</Link>
//       </nav>
//     </header>
//   );
// };

// Header.propTypes = {
//   cart: PropTypes.array.isRequired,
// };

// export default Header;

// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Login from './Login'; // Import the Login component
import './Header.css';

const Header = ({ cart }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
        // Fetch categories from the FakeStore API
        axios.get('https://fakestoreapi.com/products/categories')
          .then(response => setCategories(response.data))
          .catch(error => console.error('Error fetching categories:', error));
      }, []);
    
      const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
          navigate(`/search/${searchTerm}`);
          setSearchTerm('');  // Clear the search field
        }
      };

  const handleLogin = (userData) => {
    setUser(userData);
    setIsLoggedIn(true);
    setShowLogin(false);
    // Optionally, you can navigate based on role
    if (userData.role === 'admin') {
      navigate('/admin/dashboard'); // Example route for admin
    } else {
      navigate('/');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    // You might want to redirect or perform additional logout actions
  };

  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo-section">
        <Link to="/" className="logo">
          <img src="https://static.vecteezy.com/system/resources/previews/014/488/179/original/shopping-cart-icon-online-sale-free-vector.jpg" alt="Logo" />
        </Link>
        <h1 className="site-title">Srushee E-commerce</h1>
      </div>
      <form onSubmit={handleSearch} className="search-form">
         <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          placeholder="Search for a product..." 
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <nav className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <div className="nav-item categories-dropdown">
           Categories
           <div className="dropdown-content">
            {categories.map((category) => (
              <Link 
                key={category} 
                to={`/category/${category}`} 
                className="dropdown-item"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            ))}
          </div>
        </div>
        <Link to="/cart" className="nav-item">Cart ({totalItemsInCart})</Link>
        <Link to="/orders" className="nav-item">Orders</Link>
        {isLoggedIn ? (
          <>
            <span className="nav-item">Welcome, {user.username}</span>
            <button onClick={handleLogout} className="nav-item">Logout</button>
          </>
        ) : (
          <button onClick={() => setShowLogin(!showLogin)} className="nav-item">Login</button>
        )}
      </nav>
      {showLogin && <Login onLogin={handleLogin} />}
    </header>
  );
};

Header.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Header;
