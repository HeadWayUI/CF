import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Navbar from '../../navbar/Navbar'

const Studentcreate = () => {
  return (
    <>
     <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <div className="container mt-5">
      <h2 className="mb-4">Student Information</h2>
      <form >
        <div className="mb-3">
          <label htmlFor="studentEmail" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="studentEmail"
        
          />
        </div>
        <div className="mb-3">
          <label htmlFor="studentCode" className="form-label">Code</label>
          <input
            type="text"
            className="form-control"
            id="studentCode"
            
          />
        </div>
        <div className="mb-3">
          <label htmlFor="studentNewPassword" className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            id="studentNewPassword"
  
          />
        </div>
        <div className="mb-3">
          <label htmlFor="studentConfirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="studentConfirmPassword"
        
          />
        </div>
        <div className="mb-3">
          <label htmlFor="studentImage" className="form-label">Upload Image</label>
          <input
            type="file"
            className="form-control"
            id="studentImage"
          
          />
        </div>
        <div className="mb-3">
          <label htmlFor="additionalField" className="form-label">Additional Field</label>
          <input
            type="text"
            className="form-control"
            id="additionalField"
            
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  </div>
      
    </>
  )
}

export default Studentcreate
