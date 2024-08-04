// src/Dashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await axios.get('/api/requests/pending');
                setRequests(response.data);
            } catch (error) {
                setError('Error fetching requests');
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);

    const handleApprove = async (id) => {
        try {
            await axios.post(`/api/requests/${id}/approve`);
            setRequests(requests.filter(req => req._id !== id));
        } catch (error) {
            console.error('Error approving request:', error);
        }
    };

    const handleReject = async (id) => {
        try {
            await axios.post(`/api/requests/${id}/reject`);
            setRequests(requests.filter(req => req._id !== id));
        } catch (error) {
            console.error('Error rejecting request:', error);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={styles.container}>
            <h2>Pending Requests</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Personal Number</th>
                        <th>Source Location</th>
                        <th>Destination Location</th>
                        <th>Material Type</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.length > 0 ? (
                        requests.map(request => (
                            <tr key={request._id}>
                                <td>{request.name}</td>
                                <td>{request.personalNumber}</td>
                                <td>{request.sourceLocation}</td>
                                <td>{request.destinationLocation}</td>
                                <td>{request.materialType}</td>
                                <td>{request.materialQuantity}</td>
                                <td>
                                    <button style={styles.buttonApprove} onClick={() => handleApprove(request._id)}>Approve</button>
                                    <button style={styles.buttonReject} onClick={() => handleReject(request._id)}>Reject</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No pending requests</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
    },
    buttonApprove: {
        margin: '0 5px',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '3px',
        color: 'white',
        backgroundColor: '#28a745',
        cursor: 'pointer',
    },
    buttonReject: {
        margin: '0 5px',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '3px',
        color: 'white',
        backgroundColor: '#dc3545',
        cursor: 'pointer',
    },
};

export default Dashboard;
