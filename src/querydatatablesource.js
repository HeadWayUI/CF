import React  from 'react';
export const userColumns = [

  { field: "id", headerName: "Q_Id", width: 70 },
  
  {
    field: "firstName",
    headerName: "Q_Name",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "contactNumber",
    headerName: "Q_Phone",
    width: 120,
  },
  {
    field: "emailAddress",
    headerName: "Q_Email",
    width: 220,
  },
  {
    field: "description",
    headerName: "Q_Message",
    width: 200,
  },


];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Testuser",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Placed",
    email: "1snow@gmail.com",
    phone: "9547896547",
    address: "Hyd",
    course: "Front-End",
  },
  {
    id: 2,
    username: "Testuser",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Placed",
    email: "1snow@gmail.com",
    phone: "9547896547",
    address: "Hyd",
    course: "Front-End",
  },
  {
    id: 3,
    username: "Testuser",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Placed",
    email: "1snow@gmail.com",
    phone: "9547896547",
    address: "Hyd",
    course: "Front-End",
  },
  {
    id: 4,
    username: "Testuser",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Placed",
    email: "1snow@gmail.com",
    phone: "9547896547",
    address: "Hyd",
    course: "Front-End",
  },
  {
    id: 5,
    username: "Testuser",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Placed",
    email: "1snow@gmail.com",
    phone: "9547896547",
    address: "Hyd",
    course: "Front-End",
  },
  {
    id: 6,
    username: "Testuser",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Placed",
    email: "1snow@gmail.com",
    phone: "9547896547",
    address: "Hyd",
    course: "Front-End",
  },
  {
    id: 7,
    username: "Testuser",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Placed",
    email: "1snow@gmail.com",
    phone: "9547896547",
    address: "Hyd",
    course: "Front-End",
  },
  {
    id: 8,
    username: "Testuser",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Placed",
    email: "1snow@gmail.com",
    phone: "9547896547",
    address: "Hyd",
    course: "Front-End",
  },
  {
    id: 9,
    username: "Testuser",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Placed",
    email: "1snow@gmail.com",
    phone: "9547896547",
    address: "Hyd",
    course: "Front-End",
  },
  {
    id: 10,
    username: "Testuser",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "Placed",
    email: "1snow@gmail.com",
    phone: "9547896547",
    address: "Hyd",
    course: "Front-End",
  },
];
