import React from 'react';
import { Link } from 'react-router-dom';
import tataSteelBackground from './assets/tataSteelBackground.jpg'; // Adjust the path as needed
import AdminDashboard from './AdminDashboard'; // Import the AdminDashboard component

const Adminbody = () => {
    return (
        <div style={styles.container}>
            <div style={styles.topContainer}>
                <div style={styles.header}>
                    <h2 style={styles.subheading}>We also make tomorrow</h2>
                    <h1 style={styles.mainHeading}>Find Your <span style={styles.highlight}>Dream Job</span> & Grow Your Professional Career</h1>
                    <p style={styles.description}>Get the job you want by researching employers, using the right keywords to filter job search results and improving your networking skills.</p>
                    <div style={styles.buttons}>
                        <Link to="/get-started" style={styles.buttonPrimary}>Get Started</Link>
                        <Link to="/know-more" style={styles.buttonSecondary}>Know More</Link>
                    </div>
                </div>
                <div style={styles.promotions}>
                    <div style={styles.promoItem}>
                        <div style={{ ...styles.icon, backgroundImage: 'url(https://stevetough1.files.wordpress.com/2023/06/steel30.jpg)' }}></div>
                        <p>Available Products</p>
                        <span>240+</span>
                    </div>
                    <div style={styles.promoItem}>
                        <div style={{ ...styles.icon, backgroundImage: 'url(https://tse1.mm.bing.net/th?id=OIP.6VHA4-FWje8Fk2lDZCXLMwHaEH&pid=Api&P=0&h=180)' }}></div>
                        <p>Media</p>
                        <div style={styles.buttons}>
                            <Link to="/images" style={styles.buttonPrimary}>Click here</Link>
                        </div>
                    </div>
                    <div style={styles.promoItem}>
                        <div style={{ ...styles.icon, backgroundImage: 'url(https://tse4.mm.bing.net/th?id=OIP.LeCGQDVMx4a1cQXEIvm8LQHaFG&pid=Api&P=0&h=180)' }}></div>
                        <p>Performance</p>
                        <span>With Exchange Releases</span>
                    </div>
                </div>
            </div>
            <div style={styles.bottomFlexContainer}>
                <div style={styles.flexBox}>FlexBox1</div>
                <div style={styles.flexBox}>FlexBox2</div>
                <div style={styles.flexBox}>
                    <Link to="/admin/adminDashboard" style={styles.adminDashboardLink} Element={<AdminDashboard/>}>
                    adminDashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '50px',
        backgroundColor: '#f7f7f7',
        backgroundImage: `url(${tataSteelBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
    },
    topContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '30px',
    },
    header: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 51, 102, 0.8)', // Navy Blue with transparency
        padding: '20px',
        borderRadius: '10px',
        marginRight: '20px',
    },
    subheading: {
        fontSize: '24px',
        marginBottom: '10px',
    },
    mainHeading: {
        fontSize: '36px',
        marginBottom: '20px',
    },
    highlight: {
        color: '#ffd700', // Gold
    },
    description: {
        fontSize: '18px',
        marginBottom: '20px',
    },
    buttons: {
        marginTop: '20px',
    },
    buttonPrimary: {
        padding: '10px 20px',
        backgroundColor: '#28a745', // Green
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        marginRight: '10px',
    },
    buttonSecondary: {
        padding: '10px 20px',
        backgroundColor: 'white',
        color: '#28a745', // Green
        textDecoration: 'none',
        borderRadius: '5px',
        border: '1px solid #28a745', // Green
    },
    promotions: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color:'black',
        backgroundColor: 'rgba(0, 51, 102, 0.8)', // Navy Blue with transparency
        padding: '20px',
        borderRadius: '10px',
    },
    promoItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
    },
    icon: {
        width: '70px',
        height: '70px',
        backgroundColor: '#d3d3d3',
        borderRadius: '50%',
        marginBottom: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    bottomFlexContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    flexBox: {
        flex: 1,
        height: '200px',
        margin: '0 10px',
        backgroundColor: 'rgba(211, 211, 211, 0.8)', // Light Gray with transparency
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        color: '#000',
    },
    adminDashboardLink: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'inherit', // Inherit color from parent
    },
};

export default Adminbody;
