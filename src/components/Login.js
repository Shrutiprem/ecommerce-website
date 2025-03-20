// // src/components/Login.js
// import React, { useState } from 'react';
// import './Login.css';

// const Login = ({ onLogin }) => {
//   const [role, setRole] = useState('customer');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isSignup, setIsSignup] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically handle the authentication logic
//     // For now, just simulate successful login
//     if (username && password) {
//       onLogin({ username, role });
//     }
//   };

//   return (
//     <div className="login-form">
//       <form onSubmit={handleSubmit}>
//         <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="customer">Customer</option>
//           <option value="admin">Admin</option>
//         </select>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
//         <button type="button" onClick={() => setIsSignup(!isSignup)}>
//           {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [role, setRole] = useState('customer');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the authentication logic
    // For now, just simulate successful login
    if (username && password) {
      onLogin({ username, role });
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
        <button type="button" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
