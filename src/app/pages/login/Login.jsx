import React, { useState } from 'react';
import './login.css';
import { Link , useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import loginimg from "../../../assets/images/log.svg";
import registerimg from "../../../assets/images/register.svg";
import { toast } from "react-toastify";


const Login = () => {

  const baseUrl = "http://ec2-51-20-142-197.eu-north-1.compute.amazonaws.com:9090/"
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const usenavigate=useNavigate();
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  
  const [lemailAddress, lemailAddresschange] = useState('');
  const [lpassword, lpasswordchange] = useState('');
  const [firstName, firstNamechange] = useState("");
  const [lastName, lastNamechange] = useState("");
  const [password, passwordchange] = useState("");
  const [emailAddress, emailAddresschange] = useState("");
  const [contactNumber, contactNumberchange] = useState("");
  const [gender, genderchange] = useState("");

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = 'Please enter the value in ';
    if (firstName === null || firstName === '') {
        isproceed = false;
        errormessage += ' firstname';
    }
    if (lastName === null || lastName === '') {
        isproceed = false;
        errormessage += ' Lastname';
    }
    if (password === null || password === '') {
        isproceed = false;
        errormessage += ' Password';
    }
    if (emailAddress === null || emailAddress === '') {
        isproceed = false;
        errormessage += ' Email';
    }

    if(!isproceed){
        toast.warning(errormessage)
    }else{
        if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(emailAddress)){

        }else{
            isproceed = false;
            toast.warning('Please enter the valid email')
        }
    }
    return isproceed;
}

const loginvalidate = () => {
  let result = true;
  if (lemailAddress === '' || lemailAddress === null) {
      result = false;
      toast.warning('Please Enter EmailAdress');
  }
  if (lpassword === '' || lpassword === null) {
      result = false;
      toast.warning('Please Enter Password');
  }
  return result;
}

const ProceedLogin = (e) => {
  e.preventDefault();
  if (loginvalidate()) {
    ///implentation
    // console.log('proceed');
    fetch(baseUrl + lemailAddress).then((res) => {
        return res.json();
    }).then((resp) => {
        //console.log(resp)
        if (Object.keys(resp).length === 0) {
            toast.error('Please Enter valid username');
        } else {
            if (resp.password === lpassword) {
                toast.success('Success');
                usenavigate('/')
            }else{
                toast.error('Please Enter valid credentials');
            }
        }
    }).catch((err) => {
        toast.error('Login Failed due to :' + err.message);
    });
}
}

  const handlesubmit = (e) =>{
    e.preventDefault();
    let regobj = { firstName, lastName, emailAddress, contactNumber,password,gender };
    console.log(regobj);
    if (IsValidate()) {
      //console.log(regobj);
      fetch(baseUrl + "api/register/", {
          method: "POST",
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(regobj)
      }).then((res) => {
          toast.success('Registered successfully.')
          navigate('/');
      }).catch((err) => {
          toast.error('Failed :' + err.message);
      });
  }
  }
  
  return (
    <div className={`container1 ${isSignUp ? 'sign-up-mode' : ''}`}>
      <div className="forms-container1">
        <div className="signin-signup1">
          {isSignUp ? (
            <form action="#" method = "POST" className="sign-up-form1" id='loginform' onSubmit={handlesubmit}>
              <h2 className="title1">Sign up</h2> 
              <div className="input-field1">
                <i><FaUser /></i>
                <input value={firstName} onChange={e => firstNamechange(e.target.value)} type="text" placeholder="FirstName" />
              </div>
              <div className="input-field1">
                <i><FaUser /></i>
                <input value={lastName} onChange={e => lastNamechange(e.target.value)} type="text" placeholder="LastName" />
              </div>
              <div className="input-field1">
                <i ><FaEnvelope /></i>
                <input value={emailAddress} onChange={e => emailAddresschange(e.target.value)} type="email" placeholder="Email Address" />
              </div>
              <div className="input-field1">
                <i><FaPhone /></i>
                <input value={contactNumber} onChange={e => contactNumberchange(e.target.value)} type="number" placeholder="Phone Number" />
              </div>
              <div className="input-field1">
                <i><FaLock /></i>
                <input value={password} onChange={e => passwordchange(e.target.value)} type="password" placeholder="Password" />
              </div>
              <div className="input-field1">
                
                  <i><FaUser /></i>
                  <select className = "input-field1" id="gender" name="gender" value={gender} onChange={e => genderchange(e.target.value)}>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                
                </div>
              <input type="submit" className="btn1" value="Sign up" />
              
              {/* <div className="social-media1">
                <Link  href="#" className="social-icon1">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="social-icon1">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="social-icon1">
                  <i className="fab fa-google"></i>
                </Link>
                <Link href="#" className="social-icon1">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div> */}
            </form>
          ) : (
            <form action="#" className="sign-in-form1" onSubmit={ProceedLogin}>
              <h2 className="title1">Sign in</h2>
              <div className="input-field1">
                <i><FaEnvelope /></i>
                <input value={lemailAddress} onChange={e => lemailAddresschange(e.target.value)} type="text" placeholder="Email Address" />
              </div>
              <div className="input-field1">
                <i><FaLock /></i>
                <input value={lpassword} onChange={e => lpasswordchange(e.target.value)} type="password" placeholder="Password" />
              </div>
              <Link><p className="social-text1">Forgot Password</p></Link>
              <input type="submit" value="Login" className="btn solid" /> 
            </form>
          )}
        </div>
      </div>

      <div className="panels-container1">
        <div className={`panel1 left-panel ${isSignUp ? 'hide' : ''}`}>
          <div className="content1">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Debitis, ex ratione. Aliquid!
            </p>
            <button1 className="btn transparent" onClick={toggleForm}>
              Sign up
            </button1>
          </div>
          <img src={loginimg} className="image1" alt="" />
        </div>
        <div className={`panel1 right-panel ${isSignUp ? '' : 'hide'}`}>
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn1 transparent" onClick={toggleForm}>
              Sign in
            </button>
          </div>
          <img src={registerimg} className="image1" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;