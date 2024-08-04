import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [formData, setFormData] = useState([]);
  const [designation, setDesignation] = useState('manager'); // Set the designation, or fetch it from context or props

  useEffect(() => {
    // Fetch form data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/formdata');
        setFormData(response.data.userdata);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async (personalNumber, status) => {
    try {
      await axios.patch(
        `http://localhost:5000/admin/update/${personalNumber}`,
        {}, // Empty body for PATCH request
        {
          headers: {
            'Content-Type': 'application/json',
            'status': status,
            'designation': designation,
            'personalnumber': personalNumber
          }
        }
      );
      // Optionally, re-fetch data or update local state
      const response = await axios.get('http://localhost:5000/admin/formdata');
      setFormData(response.data.userdata);
    } catch (error) {
      console.error(`Error updating status to ${status}:`, error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Personal Number</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formData.map(item => (
            <tr key={item.personalNumber}>
              <td>{item.personalNumber}</td>
              <td>{item.status}</td>
              <td>
                <button onClick={() => handleUpdate(item.personalNumber, 'approved')}>Approve</button>
                <button onClick={() => handleUpdate(item.personalNumber, 'rejected')}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
