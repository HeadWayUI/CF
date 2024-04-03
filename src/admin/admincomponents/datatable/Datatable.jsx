import "./datatable.scss";
import React  from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

const Datatable = () => {
  const [data, setData] = useState([]);
  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";


  useEffect(() => {
    // Fetch data from the endpoint
    fetch(baseUrl + '/api/students') // Replace 'your_endpoint_url' with the actual URL of your endpoint
      .then(response => response.json())
      .then(data => {
        const newData = data.map((row, index) => ({ ...row, id: index + 1 }));
        const studentIds = newData.map(student => student.studentId);
        console.log(studentIds);
      
        setData(newData);
        // Assuming your endpoint returns an array of user data
        // setData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  const handleDelete = (id) => {
    fetch(`http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090/api/student/${id}`, {
      method: 'DELETE',
      // Optionally, you can include headers or any other configuration needed for the request
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Assuming you want to parse the response JSON
      return response.json();
    })
    .then(data => {
      // Handle success, such as updating the UI or showing a success message
      console.log('Delete successful:', data);
      // Remove the deleted student from the local state (optional)
      setData(data.filter((item) => item.id !== id));
    })
    .catch(error => {
      // Handle error, such as displaying an error message or logging the error
      console.error('Error deleting student:', error);
    });
  };
  
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/learners/${params.row.studentId}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
              
            </Link>
            <button>
            <div className="deleteButton" onClick={() => handleDelete()}>
              Delete
            </div>
            </button>
           

            <div className="updateButton" onClick={() =>handleDelete(params.row.id)}>
              Update
            </div>

          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New
        <Link to="/screate" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
