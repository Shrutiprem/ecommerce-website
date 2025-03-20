// src/components/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li><Link to="/ManageProducts">Manage Products</Link></li>
          <li><Link to="/admin/orders">View All Orders</Link></li>
          <li><Link to="/admin/users">Manage Users</Link></li>
          <li><Link to="/admin/analytics">View Analytics</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
