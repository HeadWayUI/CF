import React from 'react'
import { useNavigate} from 'react-router-dom';

const Profile = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          // Fetch logout endpoint
          const response = await fetch('http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090/api/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            }
          });
    
          if (response.ok) {
            // Clear local storage upon successful logout
            localStorage.removeItem('username');
            // Redirect to login page or perform any other action
            // For example, you can use React Router to navigate to the login page
            navigate('login')
            alert('logout successfully .... please login again ????')
          } else {
            // Handle error response
            console.error('Logout failed:', response.statusText);
          }
        } catch (error) {
          // Handle network errors
          console.error('Network error:', error);
        }
      };
  return (
    <>
      <div className="container mt-5">
      <div className="card">
        <img src="https://via.placeholder.com/150" height={180} width={100} className="card-img-top" alt="Profile" />
        <div className="card-body">
          <h5 className="card-title">John Doe</h5>
          <p className="card-text">Some example text.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Email: example@example.com</li>
          <li className="list-group-item">Location: New York</li>
          <li className="list-group-item">Interests: Technology, Travel</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Edit Profile</a>
          <a href="" className="card-link" onClick={handleLogout}>Logout</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile
