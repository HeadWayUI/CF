import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';


const Piechart = () => {
  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  const [student, setStudent] = useState(0);
  const [trainer, setTrainer] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from endpoint 1
        const response1 = await fetch(baseUrl + '/api/students');
        const data1 = await response1.json();
        const count1 = data1.length;
        setStudent(count1);

        // Fetch data from endpoint 3
        const response3 = await fetch(baseUrl + '/api/trainers');
        const data3 = await response3.json();
        const count3 = data3.length;
        setTrainer(count3);

        // Fetch data from endpoint 4
        // const response4 = await fetch(baseUrl + '/clients/all');
        // const data4 = await response4.json();
        // const count4 = data4.length;
        // setClients(count4);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <h1 style={{textAlign:"center"}}>Pie Chart</h1>
    <br></br>
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: student, label: 'Learners' },
          { id: 1, value: trainer, label: 'Trainers' }
        ]
      }
    ]}
    width={900}
    height={400}
  />
  </>
  );
};

export default Piechart
