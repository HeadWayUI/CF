import "./sponsordatatable.scss";
import React  from 'react';
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';


const Sponsordatatable = () => {
  const [data, setData] = useState([]);
  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";


  useEffect(() => {
    // Fetch data from the endpoint
    fetch(baseUrl + '/api/students') // Replace 'your_endpoint_url' with the actual URL of your endpoint
      .then(response => response.json())
      .then(data => {
        const newData = data.map((row, index) => ({ ...row, id: index + 1 }));
        setData(newData);
        // Assuming your endpoint returns an array of user data
        // setData(data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/learner/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
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

export default Sponsordatatable;
