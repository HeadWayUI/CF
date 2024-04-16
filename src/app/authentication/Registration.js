// import './registration.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('DONOR');
    const [gender, setGender] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (emailAddress) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(emailAddress);
    };
    
    const validatePassword = (password) => {
        return password.length >= 4;
    };

    const handleRegistration = async (e) => {
        e.preventDefault();

        // Frontend validation
        if (!validateEmail(emailAddress)) {
            setError('Please enter a valid email address.');
            return;
        }

        if (!validatePassword(password)) {
            setError('Password must be at least 6 characters long.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('firstName', firstName);
            formData.append('lastName', lastName);
            formData.append('contactNumber', contactNumber);
            formData.append('emailAddress', emailAddress);
            formData.append('password', password);
            formData.append('userType', userType);
            formData.append('gender', gender);
            formData.append('image', image);

            const response = await fetch("http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090/api/register/donor", {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (response.ok) {
                // Registration successful
                // Redirect to another page, e.g., dashboard
                console.log(data);
                navigate('/login');
            } else {
                // Registration failed
                setError(data.message || 'Registration failed');
            }
        } catch (error) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <form className="form" onSubmit={handleRegistration}>
                <p className="title">Register</p>
                <p className="message">Signup now and get full access to our app.</p>
                <div className="flex flex-column">
                    <label>
                        <input className="input flex-column" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="" required />
                        <span>Firstname</span>
                    </label>
                    <label>
                        <input className="input1 flex-column" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="" required />
                        <span>Lastname</span>
                    </label>
                </div>

                <label>
                    <input className="input" type="email" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} placeholder="" required />
                    <span>Email Address</span>
                </label>

                <label>
                    <input className="input" type="number" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="" required />
                    <span>Contact Number</span>
                </label>
                <label>
                    <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="" required />
                    <span>Password</span>
                </label>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="male" value="MALE" checked={gender === 'MALE'} onChange={() => setGender('MALE')} />
                    <label className="form-check-label" htmlFor="male" style={{ color: "#fff" }}>Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="female" value="FEMALE" checked={gender === 'FEMALE'} onChange={() => setGender('FEMALE')} />
                    <label className="form-check-label" htmlFor="female" style={{ color: "#fff" }}>Female</label>
                </div>
                <div className="form-group">
                    <label htmlFor="createPhoto">Photo</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} className="form-control-file" id="createPhoto" />
                </div>
                <button type="submit" className="submit">Submit</button>
                {error && <div>{error}</div>}
                <p className="signin">Already have an account? <Link to='/login'>Sign in</Link></p>
            </form>
        </>
    );
}

export default Registration;
