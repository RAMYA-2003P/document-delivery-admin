// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdminRequests from './components/AdminRequests';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <Routes>
//      <Route path="/" element={<div>Welcome Admin</div>} />
//         <Route path="/admin/requests" element={<AdminRequests />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import AdminRequests from './components/AdminRequests';
// import LoginPage from './components/login';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/admin/login" element={<LoginPage/>} /> 

//         <Route path="/" element={<Navigate to="/admin/request" />} />
//         <Route path="/admin/request" element={<AdminRequests />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import AdminRequests from './components/AdminRequests';
// import LoginPage from './components/login';

// function App() {
//   const [user, setUser] = useState(null);

//   // Try loading user from token when the app loads
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');

//     if (token && userData) {
//       try {
//         const parsedUser = JSON.parse(userData);
//         if (parsedUser.role === 'admin') {
//           setUser(parsedUser);
//         }
//       } catch (err) {
//         console.error("Invalid user in localStorage", err);
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//       }
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/admin/login"
//           element={
//             user ? (
//               <Navigate to="/admin/request" replace />
//             ) : (
//               <LoginPage onLogin={setUser} />
//             )
//           }
//         />

//         <Route
//           path="/admin/request"
//           element={
//             user && user.role === 'admin' ? (
//               <AdminRequests user={user} />
//             ) : (
//               <Navigate to="/admin/login" replace />
//             )
//           }
//         />

//         {/* Redirect root to appropriate route */}
//         <Route
//           path="/"
//           element={
//             user && user.role === 'admin' ? (
//               <Navigate to="/admin/request" replace />
//             ) : (
//               <Navigate to="/admin/login" replace />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import AdminRequests from './components/AdminRequests';
// import LoginPage from './components/login';

// function App() {
//   const [user, setUser] = useState(null);

//   // Load admin user from localStorage when the app loads
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');

//     if (token && userData) {
//       try {
//         const parsedUser = JSON.parse(userData);
//         if (parsedUser.role === 'admin') {
//           setUser(parsedUser);
//         } else {
//           // Not an admin — force logout
//           localStorage.removeItem('token');
//           localStorage.removeItem('user');
//         }
//       } catch (err) {
//         console.error("Invalid user in localStorage", err);
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//       }
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* Admin login page */}
//         <Route
//           path="/admin/login"
//           element={
//             user ? (
//               <Navigate to="/admin/request" replace />
//             ) : (
//               <LoginPage onLogin={setUser} />
//             )
//           }
//         />

//         {/* Admin request dashboard — protected route */}
//         <Route
//           path="/admin/request"
//           element={
//             user && user.role === 'admin' ? (
//               <AdminRequests user={user} />
//             ) : (
//               <Navigate to="/admin/login" replace />
//             )
//           }
//         />

//         {/* Default route — redirect to correct page */}
//         <Route
//           path="/"
//           element={
//             user && user.role === 'admin' ? (
//               <Navigate to="/admin/request" replace />
//             ) : (
//               <Navigate to="/admin/login" replace />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import AdminRequests from './components/AdminRequests';
// import LoginPage from './components/login';

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');

//     if (token && userData) {
//       try {
//         const parsedUser = JSON.parse(userData);
//         if (parsedUser.role === 'admin') {
//           setUser(parsedUser);
//         } else {
//           localStorage.removeItem('token');
//           localStorage.removeItem('user');
//         }
//       } catch (err) {
//         console.error('Invalid user data in localStorage', err);
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//       }
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* Admin login route */}
//         <Route
//           path="/admin/login"
//           element={
//             user ? (
//               <Navigate to="/admin/request" replace />
//             ) : (
//               <LoginPage onLogin={setUser} />
//             )
//           }
//         />

//         {/* Admin request page - protected */}
//         <Route
//           path="/admin/request"
//           element={
//             user && user.role === 'admin' ? (
//               <AdminRequests user={user} />
//             ) : (
//               <Navigate to="/admin/login" replace />
//             )
//           }
//         />

//         {/* Redirect root based on role */}
//         <Route
//           path="/"
//           element={
//             user && user.role === 'admin' ? (
//               <Navigate to="/admin/request" replace />
//             ) : (
//               <Navigate to="/admin/login" replace />
//             )
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;















// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import AdminRequests from './components/AdminRequests';
// import Login from './components/login';

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');

//     if (token && userData) {
//       try {
//         const parsedUser = JSON.parse(userData);
//         if (parsedUser.role === 'admin') {
//           setUser(parsedUser);
//         } else {
//           localStorage.removeItem('token');
//           localStorage.removeItem('user');
//         }
//       } catch (err) {
//         console.error('Invalid user data in localStorage', err);
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//       }
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* Always show admin login first */}
//         <Route
//           path="/admin/login"
//           element={
//             user && user.role === 'admin' ? (
//               <Navigate to="/admin/request" replace />
//             ) : (
//               <Login onLogin={setUser} />
//             )
//           }
//         />

//         {/* Admin dashboard after login */}
//         <Route
//           path="/admin/request"
//           element={
//             user && user.role === 'admin' ? (
//               <AdminRequests user={user} />
//             ) : (
//               <Navigate to="/admin/login" replace />
//             )
//           }
//         />

//         {/* Default root redirect to /admin/login */}
//         <Route
//           path="/"
//           element={<Navigate to="/admin/login" replace />}
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;









// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import AdminRequests from './components/AdminRequests';
// import Login from './components/login';

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');

//     if (token && userData) {
//       try {
//         const parsedUser = JSON.parse(userData);
//         if (parsedUser.role === 'admin') {
//           setUser(parsedUser);
//         } else {
//           // clear invalid/non-admin data
//           localStorage.removeItem('token');
//           localStorage.removeItem('user');
//           setUser(null);
//         }
//       } catch (err) {
//         console.error('Invalid user data in localStorage', err);
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//         setUser(null);
//       }
//     } else {
//       setUser(null); // ensures logout works
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* Admin login route */}
//         <Route
//           path="/admin/login"
//           element={
//             user && user.role === 'admin' ? (
//               <Navigate to="/admin/request" replace />
//             ) : (
//               <Login onLogin={setUser} />
//             )
//           }
//         />

//         {/* Admin dashboard route */}
//         <Route
//           path="/admin/request"
//           element={
//             user && user.role === 'admin' ? (
//               <AdminRequests user={user} />
//             ) : (
//               <Navigate to="/admin/login" replace />
//             )
//           }
//         />

//         {/* Default route redirects to admin login */}
//         <Route path="*" element={<Navigate to="/admin/login" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;









// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import AdminRequests from './components/AdminRequests';
// import Login from './components/login';

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');

//     if (token && userData) {
//       try {
//         const parsedUser = JSON.parse(userData);
//         if (parsedUser.role === 'admin') {
//           setUser(parsedUser);
//         } else {
//           localStorage.removeItem('token');
//           localStorage.removeItem('user');
//           setUser(null);
//         }
//       } catch (err) {
//         console.error('Invalid user data in localStorage', err);
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//         setUser(null);
//       }
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* Admin Login */}
//         <Route
//           path="/admin/login"
//           element={
//             user && user.role === 'admin' ? (
//               <Navigate to="/admin/request" replace />
//             ) : (
//               <Login onLogin={setUser} />
//             )
//           }
//         />

//         {/* Admin Dashboard */}
//         <Route
//           path="/admin/request"
//           element={
//             user && user.role === 'admin' ? (
//               <AdminRequests />
//             ) : (
//               <Navigate to="/admin/login" replace />
//             )
//           }
//         />

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/admin/login" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

















// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import AdminRequests from './components/AdminRequests';
// import Login from './components/login';

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     const userData = localStorage.getItem('user');

//     if (token && userData) {
//       try {
//         const parsedUser = JSON.parse(userData);
//         if (parsedUser.role === 'admin') {
//           setUser(parsedUser);
//         } else {
//           localStorage.removeItem('token');
//           localStorage.removeItem('user');
//           setUser(null);
//         }
//       } catch (err) {
//         console.error('Invalid user data in localStorage', err);
//         localStorage.removeItem('token');
//         localStorage.removeItem('user');
//         setUser(null);
//       }
//     }
//   }, []);

//   return (
//     <Router>
//       <Routes>
//         {/* Admin Login */}
//         <Route
//           path="/admin/login"
//           element={
//             user && user.role === 'admin' ? (
//               <Navigate to="/admin/request" replace />
//             ) : (
//               <Login onLogin={setUser} />
//             )
//           }
//         />

//         {/* Admin Dashboard */}
//         <Route
//           path="/admin/request"
//           element={
//             user && user.role === 'admin' ? (
//               <AdminRequests onLogout={() => setUser(null)} />
//             ) : (
//               <Navigate to="/admin/login" replace />
//             )
//           }
//         />

//         {/* Fallback */}
//         <Route path="*" element={<Navigate to="/admin/login" replace />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AdminRequests from './components/AdminRequests';
import Login from './components/login';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');

    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        if (parsedUser.role === 'admin') {
          setUser(parsedUser);
        } else {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          setUser(null);
        }
      } catch (err) {
        console.error('Invalid user data in localStorage', err);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
      }
    }
  }, []);

  return (
    <Router>
      <Routes>

        {/* Default route: Always show login first */}
        <Route path="/" element={<Navigate to="/admin/login" replace />} />

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<Login onLogin={setUser} />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin/request"
          element={
            user && user.role === 'admin' ? (
              <AdminRequests onLogout={() => setUser(null)} />
            ) : (
              <Navigate to="/admin/login" replace />
            )
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/admin/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
