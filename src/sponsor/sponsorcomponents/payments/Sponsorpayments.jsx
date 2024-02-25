import React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Sponsorpayments = () => {
    const rows = [
    {
        razorpay_id: 1143155,
        payment_id: "cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
      {
        razorpay_id: 1143155,
        payment_id: "cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
      {
        razorpay_id: 1143155,
        payment_id:"cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
      {
        razorpay_id: 1143155,
        payment_id: "cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
      {
        razorpay_id: 1143155,
        payment_id: "cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
      {
        razorpay_id: 1143155,
        payment_id: "cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
      {
        razorpay_id: 1143155,
        payment_id: "cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
      {
        razorpay_id: 1143155,
        payment_id: "cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
      {
        razorpay_id: 1143155,
        payment_id: "cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
      {
        razorpay_id: 1143155,
        payment_id: "cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
      {
        razorpay_id: 1143155,
        payment_id: "cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
      {
        razorpay_id: 1143155,
        payment_id: "cbyuygf52154412sdvasv",
        amount: 15000,
        email: "John@gmail.com",
        contact: "1 March",
        created_at: 785,
        status: "Approved",
      },
    ];
  return (
    
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow className='font'>
          <TableCell className="tableCell">Payment_ID</TableCell>
          <TableCell className="tableCell">Razorpay_ID</TableCell>
          <TableCell className="tableCell">Amount</TableCell>
          <TableCell className="tableCell">Email</TableCell>
          <TableCell className="tableCell">Contact</TableCell>
          <TableCell className="tableCell">Created_at</TableCell>
          <TableCell className="tableCell">Status</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.razorpay_id}>
            <TableCell className="tableCell">{row.razorpay_id}</TableCell>
            
            {/* <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div>
            </TableCell> */}

            <TableCell className="tableCell">{row.payment_id}</TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.email}</TableCell>
            <TableCell className="tableCell">{row.contact}</TableCell>
            <TableCell className="tableCell">{row.created_at}</TableCell>
            <TableCell className="tableCell">
              <span className={`status ${row.status}`}>{row.status}</span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default Sponsorpayments
