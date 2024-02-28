import "./table.scss";
import React  from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Learnertable = () => {


  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";
  const [learner, setLearners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLearner = async () => {
      try {
        const response = await fetch(baseUrl + '/api/students'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setLearners(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLearner();
}, []);


    // const rows = [
    //     {
    //       id: 1,
    //       name: "Test-01",
    //       img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
    //       phone: 8899774455,
    //       dob: "1 March 1998",
    //       mail: 'test01@gmail.com',
    //       Address: "Hyderabad",
    //       Technolgy: "Digital Marketing",
    //     },
    //     {
    //       id: 2,
    //       name: "Test-02",
    //       img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    //       phone: 8899664455,
    //       dob: "1 March 1995",
    //       mail: 'test02@gmail.com',
    //       Address: "Hyderabad",
    //       Technolgy: "Front-End",
    //     },
    //     {
    //       id: 3,
    //       name: "Test-03",
    //       img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
    //       phone: 9988774455,
    //       dob: "1 April 200",
    //       mail: 'test03@gmail.com',
    //       Address: "Hyderabad",
    //       Technolgy: "Digital Marketing",
    //     },
    //     {
    //       id: 4,
    //       name: "Test-04",
    //       img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
    //       phone: 5588997744,
    //       dob: "18 March 1998",
    //       mail: 'test04@gmail.com',
    //       Address: "Hyderabad",
    //       Technolgy: "Devops",
    //     },
    //     {
    //       id: 5,
    //       name: "Test-05",
    //       img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    //       phone: 8547963215,
    //       dob: "1 March 2001",
    //       mail: 'test05@gmail.com',
    //       Address: "Hyderabad",
    //       Technolgy: "Testing",
    //     },
    //   ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student ID</TableCell>
            <TableCell className="tableCell">Student Name</TableCell>
            <TableCell className="tableCell">Student-Img</TableCell>
            <TableCell className="tableCell">Phone</TableCell>
            <TableCell className="tableCell">DOB</TableCell>
            <TableCell className="tableCell">Mail-Id</TableCell>
            <TableCell className="tableCell">Address</TableCell>
            <TableCell className="tableCell">Technology</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.phone}</TableCell>
              <TableCell className="tableCell">{row.dob}</TableCell>
              <TableCell className="tableCell">{row.mail}</TableCell>
              <TableCell className="tableCell">{row.Address}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.technology}`}>{row.technology}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Learnertable;
