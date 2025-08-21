

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';


// import { login } from '../features/auth/authSlice';
// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.auth);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(login({ email, password }));
//   };

//   return (
//     <div className="container mt-5" style={{ maxWidth: '400px' }}>
//       <h2>Login</h2>
//       {error && <div className="alert alert-danger">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           className="form-control mb-3"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           disabled={loading}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="form-control mb-3"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           disabled={loading}
//         />
//         <button className="btn btn-primary w-100" disabled={loading}>
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;



// import React, { useState } from 'react';

// function Login({ onLogin }) {
//   const [email, setemail] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       setError('Please enter your email');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || 'Login failed');
//         return;
//       }

//       if (data.user.role !== 'admin') {
//         setError('Access denied. Not an admin.');
//         return;
//       }

//       // Save token and user info
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('user', JSON.stringify(data.user));
//       onLogin(data.user);

//     } catch (err) {
//       console.error(err);
//       setError('Server error');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto' }}>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Enter Admin email"
//           value={email}
//           onChange={(e) => setemail(e.target.value)}
//           style={{ width: '100%', padding: '8px' }}
//         />
//         <button type="submit" style={{ width: '100%', marginTop: 10 }}>
//           Login
//         </button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// }

// export default Login;







// import React, { useState } from 'react';

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       setError('Please enter your email');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/admin-login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || 'Login failed');
//         return;
//       }

//       if (data.user.role !== 'admin') {
//         setError('Access denied. Not an admin.');
//         return;
//       }

//       // Save user & token to localStorage
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('user', JSON.stringify(data.user));
//       onLogin(data.user);
//     } catch (err) {
//       console.error(err);
//       setError('Server error');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto', paddingTop: '80px' }}>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Enter Admin Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: '100%', padding: '8px' }}
//         />
//         <button type="submit" style={{ width: '100%', marginTop: 10 }}>
//           Login
//         </button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// }

// export default Login;





// import React, { useState } from 'react';

// function Login({ onLogin }) {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email) {
//       setError('Please enter your email');
//       return;
//     }

//     try {
//       const res = await fetch('http://localhost:5000/api/auth/admin-login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message || 'Login failed');
//         return;
//       }

//       if (data.user.role !== 'admin') {
//         setError('Access denied. Not an admin.');
//         return;
//       }

//       // Save user & token
//       localStorage.setItem('token', data.token);
//       localStorage.setItem('user', JSON.stringify(data.user));

//       // Update parent state
//       onLogin(data.user);
//     } catch (err) {
//       console.error(err);
//       setError('Server error');
//     }
//   };

//   return (
//     <div style={{ maxWidth: 400, margin: 'auto', paddingTop: '80px' }}>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Enter Admin Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={{ width: '100%', padding: '8px' }}
//         />
//         <button type="submit" style={{ width: '100%', marginTop: 10 }}>
//           Login
//         </button>
//       </form>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </div>
//   );
// }

// export default Login;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ✅ Hook

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter your email');
      return;
    }

    try {
      const res = await fetch('https://document-delivery-backend-3.onrender.com/api/auth/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      if (data.user.role !== 'admin') {
        setError('Access denied. Not an admin.');
        return;
      }

      // Save user & token
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Update parent state
      onLogin(data.user);

      // ✅ Redirect to request page
      navigate('/admin/request');
    } catch (err) {
      console.error(err);
      setError('Server error');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', paddingTop: '80px' }}>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '8px' }}
        />
        <button type="submit" style={{ width: '100%', marginTop: 10 }}>
          Login
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
