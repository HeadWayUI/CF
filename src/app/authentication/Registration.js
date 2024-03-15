// import './registration.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Registration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('ADMIN');
    const [gender, setGender] = useState('');
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
          const response = await fetch("http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090/api/register/admin", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName,
              lastName,
              contactNumber,
              emailAddress,
              password,
              userType,
              gender,
            }),
          });
          const data = await response.json();
          if (response.ok) {
            // Registration successful
            // Redirect to another page, e.g., dashboard
            console.log(data)
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
    <form class="form" onSubmit={handleRegistration}>
        <p class="title">Register </p>
        <p class="message">Signup now and get full access to our app. </p>
        <div class="flex flex-column">
            <label>
                <input class="input flex-column"  value={firstName}
            onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="" required="" />
                <span>Firstname</span>
            </label>
            <label>
                <input class="input1 flex-column"   value={lastName}
            onChange={(e) => setLastName(e.target.value)} type="text" placeholder="" required="" />
                <span>Lastname</span>
            </label>
        </div>

        <label>
            <input class="input" type="email"  value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)} placeholder="" required="" />
            <span>Email Address</span>
        </label>

        <label>
            <input class="input" type="number"    value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)} placeholder="" required="" />
            <span>Contact Number</span>
        </label>
        <label>
            <input class="input" type="password"  value={password}
            onChange={(e) => setPassword(e.target.value)}
 placeholder="" required="" />
            <span>Password</span>
        </label>

        <label htmlFor="userType">
            <select  id="userType" class="input" value={userType}
            onChange={(e) => setUserType(e.target.value)}>
                <option>USER_TYPE</option>
                <option value="ADMIN">Admin</option>
                <option value="SPONSOR">Sponsor</option>    
            </select>
        </label>
    
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="male"
            value="MALE"
            checked={gender === 'MALE'}
            onChange={() => setGender('MALE')} />
            <label class="form-check-label" for="inlineRadio1"  htmlFor="male" style={{color:"#fff"}}>Male</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="female"
            value="FEMALE"
            checked={gender === 'FEMALE'}
            onChange={() => setGender('FEMALE')} />
            <label class="form-check-label" for="inlineRadio2" htmlFor="female" style={{color:"#fff"}}>Female</label>
        </div>
        <button class="submit">Submit</button>
        {error && <div>{error}</div>}
        <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
    </form>
    </>
  )
}

export default Registration
