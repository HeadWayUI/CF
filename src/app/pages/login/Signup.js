import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import loginimg from "../../../assets/images/log.svg";
import registerimg from "../../../assets/images/register.svg";
import { toast } from "react-toastify";

const Signup = () => {
    const [lemailAddress, lemailAddresschange] = useState('');
    const [lpassword, lpasswordchange] = useState('');
    const [firstName, firstNamechange] = useState("");
    const [lastName, lastNamechange] = useState("");
    const [password, passwordchange] = useState("");
    const [emailAddress, emailAddresschange] = useState("");
    const [contactNumber, contactNumberchange] = useState("");
    const [gender, genderchange] = useState("");
    return (
        <>
            <div className="container1" >
                <div className="forms-container1">
                    <div className="signin-signup1">

                        <form action="#" method="POST" className="sign-up-form1" >
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
                                <select className="input-field1" id="gender" name="gender" value={gender} onChange={e => genderchange(e.target.value)}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>

                            </div>
                            <input type="submit" className="btn" value="Sign up" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Signup;
