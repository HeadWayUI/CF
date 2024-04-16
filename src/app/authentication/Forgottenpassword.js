import React, { useState } from 'react';
import Footer from '../shared/Footer';
import { useNavigate } from 'react-router-dom';
const Forgottenpassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    code: '',
    newPassword: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, code, newPassword, confirmPassword } = formData;
    const endpoint = `http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090/api/resetPassword/${email}?code=${code}&newPassword=${newPassword}&confirmPassword=${confirmPassword}`;
    
    fetch(endpoint, {
      method: 'POST' // Adjust the method as needed
    })
    .then(response => {
      if (response.ok) {
        console.log('Password reset successfully.');
        navigate('/login');
        // Optionally, redirect or show a success message
      } else {
        console.error('Password reset failed.');
        // Handle errors or show error message
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <>
      <div className="container">
        <div className="reset-password-card">
          <h2 className="text-center mb-4">Reset Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email address</label>
              <input type="email" className="form-control" id="emailInput" name="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="codeInput" className="form-label">Verification Code</label>
              <input type="text" className="form-control" id="codeInput" name="code" value={formData.code} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="newPasswordInput" className="form-label">New Password</label>
              <input type="password" className="form-control" id="newPasswordInput" name="newPassword" value={formData.newPassword} onChange={handleInputChange} required />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPasswordInput" className="form-label">Confirm New Password</label>
              <input type="password" className="form-control" id="confirmPasswordInput" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
            </div>
            <button type="submit" className="btn btn-primary btn-reset">Reset Password</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Forgottenpassword;
