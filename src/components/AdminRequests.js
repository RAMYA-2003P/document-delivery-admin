// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [statusUpdate, setStatusUpdate] = useState({});
//   const [fileUpload, setFileUpload] = useState({});
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     fetchRequests();
//   }, []);

//   const fetchRequests = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/article-requests/all-requests');
//       setRequests(res.data);
//     } catch (error) {
//       console.error('Failed to fetch requests', error);
//     }
//   };

//   const handleStatusChange = (id, status) => {
//     setStatusUpdate((prev) => ({ ...prev, [id]: status }));
//   };

//   const handleFileChange = (id, file) => {
//     setFileUpload((prev) => ({ ...prev, [id]: file }));
//   };

//   const handleUpdate = async (id) => {
//     const formData = new FormData();
//     if (statusUpdate[id]) formData.append('status', statusUpdate[id]);
//     if (fileUpload[id]) formData.append('articleFile', fileUpload[id]);

//     try {
//       await axios.put(`http://localhost:5000/api/article-requests/${id}`, formData);
//       setMessage('Request updated successfully');
//       fetchRequests();
//     } catch (error) {
//       console.error('Failed to update request', error);
//       setMessage('Error updating request');
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h3>Admin Panel - Manage Article Requests</h3>
//       {message && <p>{message}</p>}

//       <table className="table table-bordered mt-3">
//         <thead className="thead-dark">
//           <tr>
//             <th>Article Title</th>
//             <th>Email</th>
//             <th>PRN</th>
//             <th>Department</th>
//             <th>Status</th>
//             <th>Upload Article</th>
//             <th>View Article</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requests.map((req) => (
//             <tr key={req._id}>
//               <td>{req.articleTitle}</td>
//               <td>{req.email}</td>
//               <td>{req.prn}</td>
//               <td>{req.department}</td>
//               <td>
//                 <select
//                   value={statusUpdate[req._id] || req.status}
//                   onChange={(e) => handleStatusChange(req._id, e.target.value)}
//                 >
//                   <option value="Pending">Pending</option>
//                   <option value="Approved">Approved</option>
//                   <option value="Rejected">Rejected</option>
//                   <option value="Completed">Completed</option>
//                 </select>
//               </td>
//               <td>
//                 <input
//                   type="file"
//                   onChange={(e) => handleFileChange(req._id, e.target.files[0])}
//                 />
//               </td>
//               <td>
//                 {req.articleFile ? (
//                   <a
//                     href={`http://localhost:5000/uploads/${req.articleFile}`}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     View
//                   </a>
//                 ) : (
//                   'No file'
//                 )}
//               </td>
//               <td>
//                 <button className="btn btn-primary btn-sm" onClick={() => handleUpdate(req._id)}>
//                   Update
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminRequests;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const token = localStorage.getItem('token'); // if using JWT
//         const response = await axios.get('http://localhost:5000/api/article-requests', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setRequests(response.data);
//       } catch (err) {
//         setError('Failed to fetch requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : requests.length === 0 ? (
//         <p>No article requests found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.title}</td>
//                 <td>
//                   {req.doi || req.url ? (
//                     <a href={req.doi || req.url} target="_blank" rel="noreferrer">Link</a>
//                   ) : (
//                     'N/A'
//                   )}
//                 </td>
//                 <td>{req.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;









// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         console.log("Fetching from backend...");
//         // const response = await axios.get('http://localhost:5000/api/article-requests');
//         const response = await axios.get('http://localhost:5000/api/article-requests/all-requests');
//         //const response = await axios.get('http://localhost:5000/api/article-requests');
//         console.log("Fetched data:", response.data); 
//         setRequests(response.data);
//       } catch (err) {
//         console.error("Error fetching requests:", err.message);
//         setError('Failed to fetch requests');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : requests.length === 0 ? (
//         <p>No article requests found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">
//                     Link
//                   </a>
//                 </td>
//                 <td>{req.status || 'Pending'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         console.log("Fetching all article requests...");

//         // Make GET request to public admin route
//         //const response = await axios.get('http://localhost:3001/api/article-requests/admin/request');
//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');

//         console.log("Fetched data:", response.data);
//         setRequests(response.data);
//       } catch (err) {
//         console.error("Error fetching requests:", err);
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : requests.length === 0 ? (
//         <p>No article requests found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">
//                     Link
//                   </a>
//                 </td>
//                 <td>{req.status || 'Pending'}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         console.log("Fetching all article requests...");

//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');

//         console.log("Fetched data:", response.data);
//         setRequests(response.data);
//       } catch (err) {
//         console.error("Error fetching requests:", err);
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : requests.length === 0 ? (
//         <p>No article requests found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">
//                     Link
//                   </a>
//                 </td>
//                 <td>
//                   <select
//                     value={req.status}
//                     onChange={async (e) => {
//                       const newStatus = e.target.value;
//                       try {
//                         await axios.put(`http://localhost:5000/api/article-requests/admin/request/${req._id}/status`, {
//                           status: newStatus,
//                         });
//                         // Update local state to reflect change
//                         setRequests((prev) =>
//                           prev.map((r) => (r._id === req._id ? { ...r, status: newStatus } : r))
//                         );
//                       } catch (error) {
//                         alert('Failed to update status');
//                       }
//                     }}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         console.log("Fetching all article requests...");
//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');
//         console.log("Fetched data:", response.data);
//         setRequests(response.data);
//       } catch (err) {
//         console.error("Error fetching requests:", err);
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/article-requests/admin/request/${id}/status`, {
//         status: newStatus,
//       });

//       // Update local state
//       setRequests(prev =>
//         prev.map(req => req._id === id ? { ...req, status: newStatus } : req)
//       );
//     } catch (error) {
//       console.error('Status update failed:', error);
//       alert('Failed to update status');
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : requests.length === 0 ? (
//         <p>No article requests found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">
//                     Link
//                   </a>
//                 </td>
//                 <td>
//                   <select
//                     value={req.status}
//                     onChange={(e) => handleStatusChange(req._id, e.target.value)}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         console.log("Fetching all article requests...");
//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');
//         console.log("Fetched data:", response.data);
//         setRequests(response.data);
//       } catch (err) {
//         console.error("Error fetching requests:", err);
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/article-requests/admin/request/${id}/status`, {
//         status: newStatus,
//       });

//       setRequests(prev =>
//         prev.map(req => req._id === id ? { ...req, status: newStatus } : req)
//       );
//     } catch (error) {
//       console.error('Status update failed:', error);
//       alert('Failed to update status');
//     }
//   };

//   const handleUpload = async (e, reqId) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('articleFile', e.target.articleFile.files[0]);

//     try {
//       await axios.post(`http://localhost:5000/api/article-requests/admin/request/${reqId}/upload`, formData);
//       alert('File uploaded and status marked as Completed');
//       setRequests(prev =>
//         prev.map(r => r._id === reqId ? { ...r, status: 'Completed' } : r)
//       );
//     } catch (err) {
//       alert('Failed to upload file');
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : requests.length === 0 ? (
//         <p>No article requests found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//               <th>Upload File</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">
//                     Link
//                   </a>
//                 </td>
//                 <td>
//                   <select
//                     value={req.status}
//                     onChange={(e) => handleStatusChange(req._id, e.target.value)}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>
//                 <td>
//                   <form onSubmit={(e) => handleUpload(e, req._id)}>
//                     <input type="file" name="articleFile" required />
//                     <button type="submit">Upload</button>
//                   </form> 
                  
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;










// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');
//         setRequests(response.data);
//       } catch (err) {
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/article-requests/admin/request/${id}/status`, {
//         status: newStatus,
//       });

//       setRequests(prev =>
//         prev.map(req => req._id === id ? { ...req, status: newStatus } : req)
//       );
//     } catch (error) {
//       alert('Failed to update status');
//     }
//   };

//   const handleUpload = async (e, reqId) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('articleFile', e.target.articleFile.files[0]);

//     try {
//       await axios.post(`http://localhost:5000/api/article-requests/admin/request/${reqId}/upload`, formData);
//       alert('File uploaded and status marked as Completed');
//       setRequests(prev =>
//         prev.map(r => r._id === reqId ? { ...r, status: 'Completed' } : r)
//       );
//     } catch (err) {
//       alert('Failed to upload file');
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : requests.length === 0 ? (
//         <p>No article requests found.</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>DOS</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//               <th>Upload File</th>
            
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id} className={req.status?.toLowerCase()}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>{req.createdAt}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">
//                     Link
//                   </a>
//                 </td>
//                 <td>
//                   <select
//                     value={req.status}
//                     onChange={(e) => handleStatusChange(req._id, e.target.value)}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>
// {/*                 <td>
//                   <form
//                     encType="multipart/form-data"
//                     onSubmit={(e) => handleUpload(e, req._id)}
//                   >
//                     <input type="file" name="articleFile" required />
//                     <button type="submit">Upload</button>
//                   </form>
//                 </td> */}
// <td>
//   <form
//     encType="multipart/form-data"
//     onSubmit={(e) => handleUpload(e, req._id)}
//     style={{ display: 'flex', gap: '4px', alignItems: 'center', margin: 0 }}
//   >
//     <input type="file" name="articleFile" style={{ padding: '2px', fontSize: '13px' }} required />
//     <button type="submit" style={{ padding: '2px 6px', fontSize: '13px' }}>Upload</button>
//   </form>
// </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';
// import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [stats, setStats] = useState({ today: 0, thisMonth: 0, thisYear: 0 });

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');
//         const data = response.data;
//         setRequests(data);

//         // Calculate statistics
//         const now = new Date();
//         let today = 0, thisMonth = 0, thisYear = 0;

//         data.forEach((req) => {
//           const createdAt = new Date(req.createdAt);

//           if (
//             createdAt.getDate() === now.getDate() &&
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           ) {
//             today++;
//           }

//           if (
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           ) {
//             thisMonth++;
//           }

//           if (createdAt.getFullYear() === now.getFullYear()) {
//             thisYear++;
//           }
//         });

//         setStats({ today, thisMonth, thisYear });
//       } catch (err) {
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);


//     // Function to update status
// const handleStatusChange = async (id, newStatus) => {
//   try {
//     await axios.put(`http://localhost:5000/api/article-requests/admin/request/${id}/status`, {
//       status: newStatus,
//     });

//     setRequests((prevRequests) =>
//       prevRequests.map((req) =>
//         req._id === id ? { ...req, status: newStatus } : req
//       )
//     );
//   } catch (error) {
//     console.error('Failed to update status:', error);
//     alert('Error updating status');
//   }
// };

// // Function to handle file upload
// const handleUpload = async (e, id) => {
//   e.preventDefault();
//   const formData = new FormData();
//   const file = e.target.elements.articleFile.files[0];
//   formData.append('articleFile', file);

//   try {
//     await axios.post(
//       `http://localhost:5000/api/article-requests/admin/request/${id}/upload`,
//       formData,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       }
//     );

//     alert('File uploaded successfully');
//   } catch (error) {
//     console.error('Upload failed:', error);
//     alert('Upload failed');
//   }
// };


//   const chartData = {
//     labels: ['Today', 'This Month', 'This Year'],
//     datasets: [
//       {
//         label: 'Number of Requests',
//         data: [stats.today, stats.thisMonth, stats.thisYear],
//         backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { position: 'top' },
//       title: {
//         display: true,
//         text: 'Article Requests Overview',
//       },
//     },
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : (
//         <>
//           {/* Bar Chart */}
//           <div style={{ maxWidth: '600px', margin: 'auto', marginBottom: '20px' }}>
//             <Bar data={chartData} options={chartOptions} />
//           </div>

//           {/* Table */}
//           <table>
//             <thead>
//               <tr>
//                 <th>PRN</th>
//                 <th>Name</th>
//                 <th>Department</th>
//                 <th>Title</th>
//                 <th>Author</th>
//                 <th>DOS</th>
//                 <th>DOI/URL</th>
//                 <th>Status</th>
//                 <th>Upload File</th>
//               </tr>
//             </thead>
//             <tbody>
//               {requests.map((req) => (
//                 <tr key={req._id} className={req.status?.toLowerCase()}>
//                   <td>{req.prn}</td>
//                   <td>{req.name}</td>
//                   <td>{req.department}</td>
//                   <td>{req.articleTitle}</td>
//                   <td>{req.authorDetails}</td>
//                   <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//                   <td>
//                     <a href={req.doi || req.url} target="_blank" rel="noreferrer">Link</a>
//                   </td>
//                   <td>
//                     <select
//                       value={req.status}
//                       onChange={(e) => handleStatusChange(req._id, e.target.value)}
//                     >
//                       <option value="Pending">Pending</option>
//                       <option value="Approved">Approved</option>
//                       <option value="Rejected">Rejected</option>
//                       <option value="Completed">Completed</option>
//                     </select>
//                   </td>
//                   <td>
//                     <form
//                       encType="multipart/form-data"
//                       onSubmit={(e) => handleUpload(e, req._id)}
//                       style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
//                     >
//                       <input type="file" name="articleFile" style={{ padding: '2px', fontSize: '13px' }} required />
//                       <button type="submit" style={{ padding: '2px 6px', fontSize: '13px' }}>Upload</button>
//                     </form>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [stats, setStats] = useState({ today: 0, thisMonth: 0, thisYear: 0 });
//   const [view, setView] = useState('requests'); // 'requests' or 'overview'

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');
//         const data = response.data;
//         setRequests(data);

//         const now = new Date();
//         let today = 0, thisMonth = 0, thisYear = 0;

//         data.forEach((req) => {
//           const createdAt = new Date(req.createdAt);
//           if (
//             createdAt.getDate() === now.getDate() &&
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           ) today++;
//           if (
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           ) thisMonth++;
//           if (createdAt.getFullYear() === now.getFullYear()) thisYear++;
//         });

//         setStats({ today, thisMonth, thisYear });
//       } catch (err) {
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/article-requests/admin/request/${id}/status`, {
//         status: newStatus,
//       });

//       setRequests((prevRequests) =>
//         prevRequests.map((req) =>
//           req._id === id ? { ...req, status: newStatus } : req
//         )
//       );
//     } catch (error) {
//       console.error('Failed to update status:', error);
//       alert('Error updating status');
//     }
//   };

//   const handleUpload = async (e, id) => {
//     e.preventDefault();
//     const formData = new FormData();
//     const file = e.target.elements.articleFile.files[0];
//     formData.append('articleFile', file);

//     try {
//       await axios.post(
//         `http://localhost:5000/api/article-requests/admin/request/${id}/upload`,
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         }
//       );
//       alert('File uploaded successfully');
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed');
//     }
//   };

//   const chartData = {
//     labels: ['Today', 'This Month', 'This Year'],
//     datasets: [
//       {
//         label: 'Number of Requests',
//         data: [stats.today, stats.thisMonth, stats.thisYear],
//         borderColor: '#4e73df',
//         backgroundColor: 'rgba(78, 115, 223, 0.2)',
//         tension: 0.3,
//         fill: true,
//         pointRadius: 5,
//         pointBackgroundColor: '#4e73df',
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { position: 'top' },
//       title: {
//         display: true,
//         text: 'Article Requests Overview',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: { precision: 0 },
//       },
//     },
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       {/* NAVBAR */}
//       <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
//         <button onClick={() => setView('requests')} style={{ padding: '6px 12px' }}>
//           Requests
//         </button>
//         <button onClick={() => setView('overview')} style={{ padding: '6px 12px' }}>
//           Overview
//         </button>
//       </div>

//       {/* CONTENT VIEW */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : view === 'overview' ? (
//         <div style={{ maxWidth: '600px', margin: 'auto' }}>
//           <Line data={chartData} options={chartOptions} />
//         </div>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>DOS</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//               <th>Upload File</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id} className={req.status?.toLowerCase()}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">
//                     Link
//                   </a>
//                 </td>
//                 <td>
//                   <select
//                     value={req.status}
//                     onChange={(e) => handleStatusChange(req._id, e.target.value)}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>
//                 <td>
//                   <form
//                     encType="multipart/form-data"
//                     onSubmit={(e) => handleUpload(e, req._id)}
//                     style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
//                   >
//                     <input type="file" name="articleFile" style={{ padding: '2px', fontSize: '13px' }} required />
//                     <button type="submit" style={{ padding: '2px 6px', fontSize: '13px' }}>
//                       Upload
//                     </button>
//                   </form>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;













// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { useNavigate } from 'react-router-dom';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [stats, setStats] = useState({ today: 0, thisMonth: 0, thisYear: 0 });
//   const [view, setView] = useState('requests');

//   const navigate = useNavigate();

//   // Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem('token'); // remove JWT
//     localStorage.removeItem('user'); // remove user info if stored
//     navigate('/admin/login'); // redirect to login
//   };

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');
//         const data = response.data;
//         setRequests(data);

//         const now = new Date();
//         let today = 0, thisMonth = 0, thisYear = 0;

//         data.forEach((req) => {
//           const createdAt = new Date(req.createdAt);
//           if (
//             createdAt.getDate() === now.getDate() &&
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           ) today++;
//           if (
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           ) thisMonth++;
//           if (createdAt.getFullYear() === now.getFullYear()) thisYear++;
//         });

//         setStats({ today, thisMonth, thisYear });
//       } catch (err) {
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/article-requests/admin/request/${id}/status`, {
//         status: newStatus,
//       });

//       setRequests((prevRequests) =>
//         prevRequests.map((req) =>
//           req._id === id ? { ...req, status: newStatus } : req
//         )
//       );
//     } catch (error) {
//       console.error('Failed to update status:', error);
//       alert('Error updating status');
//     }
//   };

//   const handleUpload = async (e, id) => {
//     e.preventDefault();
//     const formData = new FormData();
//     const file = e.target.elements.articleFile.files[0];
//     formData.append('articleFile', file);

//     try {
//       await axios.post(
//         `http://localhost:5000/api/article-requests/admin/request/${id}/upload`,
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         }
//       );
//       alert('File uploaded successfully');
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed');
//     }
//   };

//   const chartData = {
//     labels: ['Today', 'This Month', 'This Year'],
//     datasets: [
//       {
//         label: 'Number of Requests',
//         data: [stats.today, stats.thisMonth, stats.thisYear],
//         borderColor: '#4e73df',
//         backgroundColor: 'rgba(78, 115, 223, 0.2)',
//         tension: 0.3,
//         fill: true,
//         pointRadius: 5,
//         pointBackgroundColor: '#4e73df',
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { position: 'top' },
//       title: {
//         display: true,
//         text: 'Article Requests Overview',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: { precision: 0 },
//       },
//     },
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       {/* NAVBAR */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <div style={{ display: 'flex', gap: '10px' }}>
//           <button onClick={() => setView('requests')} style={{ padding: '6px 12px' }}>
//             Requests
//           </button>
//           <button onClick={() => setView('overview')} style={{ padding: '6px 12px' }}>
//             Overview
//           </button>
//         </div>
//         <button onClick={handleLogout} style={{ padding: '6px 12px', backgroundColor: 'crimson', color: 'white' }}>
//           Logout
//         </button>
//       </div>

//       {/* CONTENT VIEW */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : view === 'overview' ? (
//         <div style={{ maxWidth: '600px', margin: 'auto' }}>
//           <Line data={chartData} options={chartOptions} />
//         </div>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>DOS</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//               <th>Upload File</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id} className={req.status?.toLowerCase()}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">
//                     Link
//                   </a>
//                 </td>
//                 <td>
//                   <select
//                     value={req.status}
//                     onChange={(e) => handleStatusChange(req._id, e.target.value)}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>
//                 <td>
//                   <form
//                     encType="multipart/form-data"
//                     onSubmit={(e) => handleUpload(e, req._id)}
//                     style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
//                   >
//                     <input type="file" name="articleFile" style={{ padding: '2px', fontSize: '13px' }} required />
//                     <button type="submit" style={{ padding: '2px 6px', fontSize: '13px' }}>
//                       Upload
//                     </button>
//                   </form>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;
























    

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { useNavigate } from 'react-router-dom';

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// const AdminRequests = ({ onLogout }) => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [stats, setStats] = useState({ today: 0, thisMonth: 0, thisYear: 0 });
//   const [view, setView] = useState('requests');

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     if (onLogout) onLogout(); // Update user state in App.js
//     navigate('/admin/login');
//   };

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');
//         const data = response.data;
//         setRequests(data);

//         const now = new Date();
//         let today = 0, thisMonth = 0, thisYear = 0;

//         data.forEach((req) => {
//           const createdAt = new Date(req.createdAt);
//           if (
//             createdAt.getDate() === now.getDate() &&
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           ) today++;
//           if (
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           ) thisMonth++;
//           if (createdAt.getFullYear() === now.getFullYear()) thisYear++;
//         });

//         setStats({ today, thisMonth, thisYear });
//       } catch (err) {
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/article-requests/admin/request/${id}/status`, {
//         status: newStatus,
//       });

//       setRequests((prevRequests) =>
//         prevRequests.map((req) =>
//           req._id === id ? { ...req, status: newStatus } : req
//         )
//       );
//     } catch (error) {
//       console.error('Failed to update status:', error);
//       alert('Error updating status');
//     }
//   };

//   const handleUpload = async (e, id) => {
//     e.preventDefault();
//     const formData = new FormData();
//     const file = e.target.elements.articleFile.files[0];
//     formData.append('articleFile', file);

//     try {
//       await axios.post(
//         `http://localhost:5000/api/article-requests/admin/request/${id}/upload`,
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         }
//       );
//       alert('File uploaded successfully');
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed');
//     }
//   };

//   const chartData = {
//     labels: ['Today', 'This Month', 'This Year'],
//     datasets: [
//       {
//         label: 'Number of Requests',
//         data: [stats.today, stats.thisMonth, stats.thisYear],
//         borderColor: '#4e73df',
//         backgroundColor: 'rgba(78, 115, 223, 0.2)',
//         tension: 0.3,
//         fill: true,
//         pointRadius: 5,
//         pointBackgroundColor: '#4e73df',
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { position: 'top' },
//       title: {
//         display: true,
//         text: 'Article Requests Overview',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: { precision: 0 },
//       },
//     },
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       {/* NAVBAR */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <div style={{ display: 'flex', gap: '10px' }}>
//           <button onClick={() => setView('requests')} style={{ padding: '6px 12px' }}>
//             Requests
//           </button>
//           <button onClick={() => setView('overview')} style={{ padding: '6px 12px' }}>
//             Overview
//           </button>
//         </div>
//         <button onClick={handleLogout} style={{ padding: '6px 12px', backgroundColor: 'crimson', color: 'white' }}>
//           Logout
//         </button>
//       </div>

//       {/* CONTENT VIEW */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : view === 'overview' ? (
//         <div style={{ maxWidth: '600px', margin: 'auto' }}>
//           <Line data={chartData} options={chartOptions} />
//         </div>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>DOS</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//               <th>Upload File</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id} className={req.status?.toLowerCase()}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">
//                     Link
//                   </a>
//                 </td>
//                 <td>
//                   <select
//                     value={req.status}
//                     onChange={(e) => handleStatusChange(req._id, e.target.value)}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>
//                 <td>
//                   <form
//                     encType="multipart/form-data"
//                     onSubmit={(e) => handleUpload(e, req._id)}
//                     style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
//                   >
//                     <input type="file" name="articleFile" style={{ padding: '2px', fontSize: '13px' }} required />
//                     <button type="submit" style={{ padding: '2px 6px', fontSize: '13px' }}>
//                       Upload
//                     </button>
//                   </form>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';
// import { Line, Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from 'chart.js';
// import { useNavigate } from 'react-router-dom';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const AdminRequests = ({ onLogout }) => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [stats, setStats] = useState({ today: 0, thisMonth: 0, thisYear: 0 });
//   const [statusStats, setStatusStats] = useState({ Pending: 0, Approved: 0, Rejected: 0, Completed: 0 });
//   const [view, setView] = useState('requests');

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     if (onLogout) onLogout();
//     navigate('/admin/login');
//   };

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');
//         const data = response.data;
//         setRequests(data);

//         const now = new Date();
//         let today = 0,
//           thisMonth = 0,
//           thisYear = 0;
//         let statusCount = { Pending: 0, Approved: 0, Rejected: 0, Completed: 0 };

//         data.forEach((req) => {
//           const createdAt = new Date(req.createdAt);
//           if (
//             createdAt.getDate() === now.getDate() &&
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           )
//             today++;
//           if (
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           )
//             thisMonth++;
//           if (createdAt.getFullYear() === now.getFullYear()) thisYear++;

//           if (req.status && statusCount[req.status] !== undefined) {
//             statusCount[req.status]++;
//           }
//         });

//         setStats({ today, thisMonth, thisYear });
//         setStatusStats(statusCount);
//       } catch (err) {
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/article-requests/admin/request/${id}/status`, {
//         status: newStatus,
//       });

//       setRequests((prev) =>
//         prev.map((req) => (req._id === id ? { ...req, status: newStatus } : req))
//       );
//     } catch (error) {
//       console.error('Failed to update status:', error);
//       alert('Error updating status');
//     }
//   };

//   const handleUpload = async (e, id) => {
//     e.preventDefault();
//     const formData = new FormData();
//     const file = e.target.elements.articleFile.files[0];
//     formData.append('articleFile', file);

//     try {
//       await axios.post(
//         `http://localhost:5000/api/article-requests/admin/request/${id}/upload`,
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         }
//       );
//       alert('File uploaded successfully');
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed');
//     }
//   };

//   const volumeChartData = {
//     labels: ['Today', 'This Month', 'This Year'],
//     datasets: [
//       {
//         label: 'Number of Requests',
//         data: [stats.today, stats.thisMonth, stats.thisYear],
//         borderColor: '#4e73df',
//         backgroundColor: 'rgba(78, 115, 223, 0.2)',
//         tension: 0.3,
//         fill: true,
//         pointRadius: 5,
//         pointBackgroundColor: '#4e73df',
//       },
//     ],
//   };

//   const statusChartData = {
//     labels: ['Pending', 'Approved', 'Rejected', 'Completed'],
//     datasets: [
//       {
//         label: 'Requests by Status',
//         data: [
//           statusStats.Pending,
//           statusStats.Approved,
//           statusStats.Rejected,
//           statusStats.Completed,
//         ],
//         backgroundColor: ['white', '#e6f7ff','#ffe6e6' ,' #e6ffe6' ],
//         borderColor: ['black', 'black','black' ,' black' ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { position: 'top' },
//       title: {
//         display: true,
//         text: 'Article Requests Overview',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: { precision: 0 },
//       },
//     },
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       {/* NAVBAR */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <div style={{ display: 'flex', gap: '10px' }}>
//           <button onClick={() => setView('requests')} style={{ padding: '6px 12px' }}>
//             Requests
//           </button>
//           <button onClick={() => setView('overview')} style={{ padding: '6px 12px' }}>
//             Overview
//           </button>
//         </div>
//         <button
//           onClick={handleLogout}
//           style={{ padding: '6px 12px', backgroundColor: 'crimson', color: 'white' }}
//         >
//           Logout
//         </button>
//       </div>

//       {/* MAIN CONTENT */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : view === 'overview' ? (
//         <div style={{ maxWidth: '700px', margin: 'auto' }}>
//           <Line data={volumeChartData} options={chartOptions} />
//           <h4 style={{ marginTop: '30px' }}>Requests by Status</h4>
//           <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
//           <Pie data={statusChartData} />
//           </div>
//         </div>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>DOS</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//               <th>Upload File</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id} className={req.status?.toLowerCase()}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">
//                     Link
//                   </a>
//                 </td>
//                 <td>
//                   <select
//                     value={req.status}
//                     onChange={(e) => handleStatusChange(req._id, e.target.value)}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>
//                 <td>
//                   <form
//                     encType="multipart/form-data"
//                     onSubmit={(e) => handleUpload(e, req._id)}
//                     style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
//                   >
//                     <input type="file" name="articleFile" required style={{ fontSize: '13px' }} />
//                     <button type="submit" style={{ padding: '2px 6px', fontSize: '13px' }}>
//                       Upload
//                     </button>
//                   </form>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';
// import { Line, Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from 'chart.js';
// import { useNavigate } from 'react-router-dom';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const AdminRequests = ({ onLogout }) => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [stats, setStats] = useState({ today: 0, thisMonth: 0, thisYear: 0 });
//   const [statusStats, setStatusStats] = useState({ Pending: 0, Approved: 0, Rejected: 0, Completed: 0 });
//   const [view, setView] = useState('requests');

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     if (onLogout) onLogout();
//     navigate('/admin/login');
//   };

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');
//         const data = response.data;
//         setRequests(data);

//         const now = new Date();
//         let today = 0,
//           thisMonth = 0,
//           thisYear = 0;
//         let statusCount = { Pending: 0, Approved: 0, Rejected: 0, Completed: 0 };

//         data.forEach((req) => {
//           const createdAt = new Date(req.createdAt);
//           if (
//             createdAt.getDate() === now.getDate() &&
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           )
//             today++;
//           if (
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           )
//             thisMonth++;
//           if (createdAt.getFullYear() === now.getFullYear()) thisYear++;

//           if (req.status && statusCount[req.status] !== undefined) {
//             statusCount[req.status]++;
//           }
//         });

//         setStats({ today, thisMonth, thisYear });
//         setStatusStats(statusCount);
//       } catch (err) {
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/article-requests/admin/request/${id}/status`, {
//         status: newStatus,
//       });

//       setRequests((prev) =>
//         prev.map((req) => (req._id === id ? { ...req, status: newStatus } : req))
//       );
//     } catch (error) {
//       console.error('Failed to update status:', error);
//       alert('Error updating status');
//     }
//   };

//   const handleUpload = async (e, id) => {
//     e.preventDefault();
//     const formData = new FormData();
//     const file = e.target.elements.articleFile.files[0];
//     formData.append('articleFile', file);

//     try {
//       await axios.post(
//         `http://localhost:5000/api/article-requests/admin/request/${id}/upload`,
//         formData,
//         {
//           headers: { 'Content-Type': 'multipart/form-data' },
//         }
//       );
//       alert('File uploaded successfully');
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed');
//     }
//   };

//   const volumeChartData = {
//     labels: ['Today', 'This Month', 'This Year'],
//     datasets: [
//       {
//         label: 'Number of Requests',
//         data: [stats.today, stats.thisMonth, stats.thisYear],
//         borderColor: '#4e73df',
//         backgroundColor: 'rgba(78, 115, 223, 0.2)',
//         tension: 0.3,
//         fill: true,
//         pointRadius: 5,
//         pointBackgroundColor: '#4e73df',
//       },
//     ],
//   };

//   const statusChartData = {
//     labels: ['Pending', 'Approved', 'Rejected', 'Completed'],
//     datasets: [
//       {
//         label: 'Requests by Status',
//         data: [
//           statusStats.Pending,
//           statusStats.Approved,
//           statusStats.Rejected,
//           statusStats.Completed,
//         ],
//         backgroundColor: ['white', '#e6f7ff', '#ffe6e6', '#e6ffe6'],
//         borderColor: ['black', 'black', 'black', 'black'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: { position: 'top' },
//       title: {
//         display: true,
//         text: 'Article Requests Overview',
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: { precision: 0 },
//       },
//     },
//   };

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <div style={{ display: 'flex', gap: '10px' }}>
//           <button onClick={() => setView('requests')} style={{ padding: '6px 12px' }}>
//             Requests
//           </button>
//           <button onClick={() => setView('overview')} style={{ padding: '6px 12px' }}>
//             Overview
//           </button>
//         </div>
//         <button
//           onClick={handleLogout}
//           style={{ padding: '6px 12px', backgroundColor: 'crimson', color: 'white' }}
//         >
//           Logout
//         </button>
//       </div>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : view === 'overview' ? (
//         <div style={{ maxWidth: '700px', margin: 'auto' }}>
//           <Line data={volumeChartData} options={chartOptions} />
//           <h4 style={{ marginTop: '30px' }}>Requests by Status</h4>
//           <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
//             <Pie data={statusChartData} />
//           </div>
//         </div>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>DOS</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//               <th>Upload File</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id} className={req.status?.toLowerCase()}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">
//                     Link
//                   </a>
//                 </td>
//                 <td>
//                   <select
//                     value={req.status}
//                     onChange={(e) => handleStatusChange(req._id, e.target.value)}
//                   >
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>
//                 <td>
//                   <form
//                     encType="multipart/form-data"
//                     onSubmit={(e) => handleUpload(e, req._id)}
//                     style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
//                   >
//                     <input type="file" name="articleFile" required style={{ fontSize: '13px' }} />
//                     <button type="submit" style={{ padding: '2px 6px', fontSize: '13px' }}>
//                       Upload
//                     </button>
//                   </form>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './AdminRequests.css';
// import { Line, Pie } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   ArcElement,
// } from 'chart.js';
// import { useNavigate } from 'react-router-dom';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const AdminRequests = ({ onLogout }) => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [stats, setStats] = useState({ today: 0, thisMonth: 0, thisYear: 0 });
//   const [statusStats, setStatusStats] = useState({ Pending: 0, Approved: 0, Rejected: 0, Completed: 0 });
//   const [view, setView] = useState('requests');

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//     if (onLogout) onLogout();
//     navigate('/admin/login');
//   };

//   useEffect(() => {
//     const fetchRequests = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');
//         const data = response.data;
//         setRequests(data);

//         const now = new Date();
//         let today = 0, thisMonth = 0, thisYear = 0;
//         let statusCount = { Pending: 0, Approved: 0, Rejected: 0, Completed: 0 };

//         data.forEach((req) => {
//           const createdAt = new Date(req.createdAt);
//           if (
//             createdAt.getDate() === now.getDate() &&
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           ) today++;
//           if (
//             createdAt.getMonth() === now.getMonth() &&
//             createdAt.getFullYear() === now.getFullYear()
//           ) thisMonth++;
//           if (createdAt.getFullYear() === now.getFullYear()) thisYear++;

//           if (req.status && statusCount[req.status] !== undefined) {
//             statusCount[req.status]++;
//           }
//         });

//         setStats({ today, thisMonth, thisYear });
//         setStatusStats(statusCount);
//       } catch (err) {
//         setError('Failed to fetch requests.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, []);

//   const handleStatusChange = async (id, newStatus) => {
//     try {
//       await axios.put(`http://localhost:5000/api/article-requests/admin/request/${id}/status`, {
//         status: newStatus,
//       });
//       setRequests((prev) => prev.map((req) => (req._id === id ? { ...req, status: newStatus } : req)));
//     } catch (error) {
//       console.error('Failed to update status:', error);
//       alert('Error updating status');
//     }
//   };

//   const handleUpload = async (e, id) => {
//     e.preventDefault();
//     const formData = new FormData();
//     const file = e.target.elements.articleFile.files[0];
//     formData.append('articleFile', file);

//     try {
//       await axios.post(
//         `http://localhost:5000/api/article-requests/admin/request/${id}/upload`,
//         formData,
//         { headers: { 'Content-Type': 'multipart/form-data' } }
//       );
//       alert('File uploaded successfully');
//     } catch (error) {
//       console.error('Upload failed:', error);
//       alert('Upload failed');
//     }
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       title: {
//         display: true,
//         text: 'Request Volume Overview',
//       },
//     },
//   };

//   const volumeChartData = {
//     labels: ['Today', 'This Month', 'This Year'],
//     datasets: [
//       {
//         label: 'Number of Requests',
//         data: [stats.today, stats.thisMonth, stats.thisYear],
//         borderColor: '#4e73df',
//         backgroundColor: 'rgba(78, 115, 223, 0.2)',
//         tension: 0.3,
//         fill: true,
//         pointRadius: 5,
//         pointBackgroundColor: '#4e73df',
//       },
//     ],
//   };

//   const statusChartData = {
//     labels: ['Pending', 'Approved', 'Rejected', 'Completed'],
//     datasets: [
//       {
//         label: 'Requests by Status',
//         data: [statusStats.Pending, statusStats.Approved, statusStats.Rejected, statusStats.Completed],
//         backgroundColor: ['white', '#e6f7ff', '#ffe6e6', '#e6ffe6'],
//         borderColor: ['black', 'black', 'black', 'black'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const topStudents = Object.values(
//     requests.reduce((acc, req) => {
//       if (!acc[req.prn]) {
//         acc[req.prn] = {
//           prn: req.prn,
//           name: req.name,
//           department: req.department,
//           count: 0,
//         };
//       }
//       acc[req.prn].count++;
//       return acc;
//     }, {})
//   ).sort((a, b) => b.count - a.count);

//   const topArticles = Object.values(
//     requests.reduce((acc, req) => {
//       if (!acc[req.articleTitle]) {
//         acc[req.articleTitle] = { title: req.articleTitle, count: 0 };
//       }
//       acc[req.articleTitle].count++;
//       return acc;
//     }, {})
//   ).sort((a, b) => b.count - a.count);

//   return (
//     <div className="admin-dashboard">
//       <h2>Admin Dashboard - Article Requests</h2>

//       <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
//         <div style={{ display: 'flex', gap: '10px' }}>
//           <button onClick={() => setView('requests')}>Requests</button>
//           <button onClick={() => setView('overview')}>Overview</button>
//           <button onClick={() => setView('insights')}>Insights</button>
//         </div>
//         <button onClick={handleLogout} style={{ backgroundColor: 'crimson', color: 'white' }}>Logout</button>
//       </div>

//       {loading ? (
//         <p>Loading...</p>
//       ) : error ? (
//         <p className="error">{error}</p>
//       ) : view === 'overview' ? (
//         <div style={{ maxWidth: '700px', margin: 'auto' }}>
//           <Line data={volumeChartData} options={chartOptions} />
//           <h4 style={{ marginTop: '30px' }}>Requests by Status</h4>
//           <div style={{ width: '300px', height: '300px', margin: '0 auto' }}>
//             <Pie data={statusChartData} />
//           </div>
//         </div>
//       ) : view === 'insights' ? (
//         <div>
//           <h3>Top Requesting Students</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>PRN</th>
//                 <th>Name</th>
//                 <th>Department</th>
//                 <th>Requests</th>
//               </tr>
//             </thead>
//             <tbody>
//               {topStudents.slice(0, 5).map((stu) => (
//                 <tr key={stu.prn}>
//                   <td>{stu.prn}</td>
//                   <td>{stu.name}</td>
//                   <td>{stu.department}</td>
//                   <td>{stu.count}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           <h3 style={{ marginTop: '30px' }}>Most Requested Articles</h3>
//           <table>
//             <thead>
//               <tr>
//                 <th>Title</th>
//                 <th>Requests</th>
//               </tr>
//             </thead>
//             <tbody>
//               {topArticles.slice(0, 5).map((art) => (
//                 <tr key={art.title}>
//                   <td>{art.title}</td>
//                   <td>{art.count}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>PRN</th>
//               <th>Name</th>
//               <th>Department</th>
//               <th>Title</th>
//               <th>Author</th>
//               <th>DOS</th>
//               <th>DOI/URL</th>
//               <th>Status</th>
//               <th>Upload File</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.map((req) => (
//               <tr key={req._id} className={req.status?.toLowerCase()}>
//                 <td>{req.prn}</td>
//                 <td>{req.name}</td>
//                 <td>{req.department}</td>
//                 <td>{req.articleTitle}</td>
//                 <td>{req.authorDetails}</td>
//                 <td>{new Date(req.createdAt).toLocaleDateString()}</td>
//                 <td>
//                   <a href={req.doi || req.url} target="_blank" rel="noreferrer">Link</a>
//                 </td>
//                 <td>
//                   <select value={req.status} onChange={(e) => handleStatusChange(req._id, e.target.value)}>
//                     <option value="Pending">Pending</option>
//                     <option value="Approved">Approved</option>
//                     <option value="Rejected">Rejected</option>
//                     <option value="Completed">Completed</option>
//                   </select>
//                 </td>
//                 <td>
//                   <form encType="multipart/form-data" onSubmit={(e) => handleUpload(e, req._id)}>
//                     <input type="file" name="articleFile" required />
//                     <button type="submit">Upload</button>
//                   </form>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminRequests;





import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminRequests.css';
import { Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { useNavigate } from 'react-router-dom';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminRequests = ({ onLogout }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ today: 0, thisMonth: 0, thisYear: 0 });
  const [statusStats, setStatusStats] = useState({ Pending: 0, Approved: 0, Rejected: 0, Completed: 0 });
  const [view, setView] = useState('requests');

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    if (onLogout) onLogout();
    navigate('/admin/login');
  };

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/article-requests/admin/request');
        const data = response.data;
        setRequests(data);

        const now = new Date();
        let today = 0, thisMonth = 0, thisYear = 0;
        let statusCount = { Pending: 0, Approved: 0, Rejected: 0, Completed: 0 };

        data.forEach((req) => {
          const createdAt = new Date(req.createdAt);
          if (
            createdAt.getDate() === now.getDate() &&
            createdAt.getMonth() === now.getMonth() &&
            createdAt.getFullYear() === now.getFullYear()
          ) today++;
          if (
            createdAt.getMonth() === now.getMonth() &&
            createdAt.getFullYear() === now.getFullYear()
          ) thisMonth++;
          if (createdAt.getFullYear() === now.getFullYear()) thisYear++;

          if (req.status && statusCount[req.status] !== undefined) {
            statusCount[req.status]++;
          }
        });

        setStats({ today, thisMonth, thisYear });
        setStatusStats(statusCount);
      } catch (err) {
        setError('Failed to fetch requests.');
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/article-requests/admin/request/${id}/status`, {
        status: newStatus,
      });
      setRequests((prev) => prev.map((req) => (req._id === id ? { ...req, status: newStatus } : req)));
    } catch (error) {
      console.error('Failed to update status:', error);
      alert('Error updating status');
    }
  };

  const handleUpload = async (e, id) => {
    e.preventDefault();
    const formData = new FormData();
    const file = e.target.elements.articleFile.files[0];
    formData.append('articleFile', file);

    try {
      await axios.post(
        `http://localhost:5000/api/article-requests/admin/request/${id}/upload`,
        formData,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed');
    }
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Request Volume Overview',
      },
    },
  };

  const volumeChartData = {
    labels: ['Today', 'This Month', 'This Year'],
    datasets: [
      {
        label: 'Number of Requests',
        data: [stats.today, stats.thisMonth, stats.thisYear],
        borderColor: '#4e73df',
        backgroundColor: 'rgba(78, 115, 223, 0.2)',
        tension: 0.3,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#4e73df',
      },
    ],
  };

  const statusChartData = {
    labels: ['Pending', 'Approved', 'Rejected', 'Completed'],
    datasets: [
      {
        label: 'Requests by Status',
        data: [statusStats.Pending, statusStats.Approved, statusStats.Rejected, statusStats.Completed],
        backgroundColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0'],
        borderColor: ['#FFCE56', '#36A2EB', '#FF6384', '#4BC0C0'],
        borderWidth: 1,
      },
    ],
  };

  const topStudents = Object.values(
    requests.reduce((acc, req) => {
      if (!acc[req.prn]) {
        acc[req.prn] = {
          prn: req.prn,
          name: req.name,
          department: req.department,
          count: 0,
        };
      }
      acc[req.prn].count++;
      return acc;
    }, {})
  ).sort((a, b) => b.count - a.count);

  const topArticles = Object.values(
    requests.reduce((acc, req) => {
      if (!acc[req.articleTitle]) {
        acc[req.articleTitle] = { title: req.articleTitle, count: 0 };
      }
      acc[req.articleTitle].count++;
      return acc;
    }, {})
  ).sort((a, b) => b.count - a.count);

  return (
    <div className="admin-dashboard-container">
      <header className="admin-header">
        <h2>Admin Dashboard - Article Requests</h2>
        <div className="admin-controls">
          <div className="view-buttons">
            <button 
              className={`view-button ${view === 'requests' ? 'active' : ''}`} 
              onClick={() => setView('requests')}
            >
              Requests
            </button>
            <button 
              className={`view-button ${view === 'overview' ? 'active' : ''}`} 
              onClick={() => setView('overview')}
            >
              Overview
            </button>
            <button 
              className={`view-button ${view === 'insights' ? 'active' : ''}`} 
              onClick={() => setView('insights')}
            >
              Insights
            </button>
          </div>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>

      {loading ? (
        <div className="loading-container">
          <p>Loading...</p>
        </div>
      ) : error ? (
        <div className="error-container">
          <p className="error-message">{error}</p>
        </div>
      ) : view === 'overview' ? (
        <div className="charts-container">
          <div className="line-chart-container">
            <h3>Request Volume</h3>
            <Line data={volumeChartData} options={chartOptions} />
          </div>
          <div className="pie-chart-container">
            <h3>Requests by Status</h3>
            <div className="pie-chart-wrapper">
              <Pie data={statusChartData} />
            </div>
          </div>
        </div>
      ) : view === 'insights' ? (
        <div className="insights-container">
          <div className="top-students-section">
            <h3>Top Requesting Students</h3>
            <div className="table-responsive">
              <table className="insights-table">
                <thead>
                  <tr>
                    <th>PRN</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Requests</th>
                  </tr>
                </thead>
                <tbody>
                  {topStudents.slice(0, 5).map((stu) => (
                    <tr key={stu.prn}>
                      <td>{stu.prn}</td>
                      <td>{stu.name}</td>
                      <td>{stu.department}</td>
                      <td>{stu.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="top-articles-section">
            <h3>Most Requested Articles</h3>
            <div className="table-responsive">
              <table className="insights-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Requests</th>
                  </tr>
                </thead>
                <tbody>
                  {topArticles.slice(0, 5).map((art) => (
                    <tr key={art.title}>
                      <td>{art.title}</td>
                      <td>{art.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="requests-container">
          <div className="table-responsive">
            <table className="requests-table">
              <thead>
                <tr>
                  <th>PRN</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Date</th>
                  <th>Link</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req._id} className={`status-${req.status?.toLowerCase()}`}>
                    <td>{req.prn}</td>
                    <td>{req.name}</td>
                    <td>{req.department}</td>
                    <td>{req.articleTitle}</td>
                    <td>{req.authorDetails}</td>
                    <td>{new Date(req.createdAt).toLocaleDateString()}</td>
                    <td>
                      <a href={req.doi || req.url} target="_blank" rel="noreferrer" className="link-button">
                        View
                      </a>
                    </td>
                    <td>
                      <select 
                        value={req.status} 
                        onChange={(e) => handleStatusChange(req._id, e.target.value)}
                        className={`status-select status-${req.status?.toLowerCase()}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>
                    <td>
                      <form 
                        encType="multipart/form-data" 
                        onSubmit={(e) => handleUpload(e, req._id)}
                        className="upload-form"
                      >
                        <input 
                          type="file" 
                          name="articleFile" 
                          required 
                          className="file-input"
                        />
                        <button type="submit" className="upload-button">
                          Upload
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminRequests;