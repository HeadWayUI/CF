import * as React from 'react';
import { useEffect, useState } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';


const Piechart = () => {
  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  const [student, setStudent] = useState(0);
  const [sponsor, setSponsor] = useState(0);
  const [trainer, setTrainer] = useState(0);
  const [clients, setClients] = useState(0);
  const [funds, setFunds] = useState(0);
  const [actualfunds, setActualfunds] = useState(0);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from endpoint 1
        const response1 = await fetch(baseUrl + '/api/students');
        const data1 = await response1.json();
        const count1 = data1.length;
        setStudent(count1);

        // Fetch data from endpoint 2
        const response2 = await fetch(baseUrl + '/api/donors');
        const data2 = await response2.json();
        const count2 = data2.length;
        setSponsor(count2);

        // Fetch data from endpoint 3
        const response3 = await fetch(baseUrl + '/api/trainers');
        const data3 = await response3.json();
        const count3 = data3.length;
        setTrainer(count3);

        // Fetch data from endpoint 4
        const response4 = await fetch(baseUrl + '/clients/all');
        const data4 = await response4.json();
        const count4 = data4.length;
        setClients(count4);

        // Fetch data from endpoint 5
        const response5 = await fetch(baseUrl + '/clients/all');
        const data5 = await response5.json();
        const count5 = data5.length;
        setFunds(count5);

        // Fetch data from endpoint 6
        const response6 = await fetch(baseUrl + '/clients/all');
        const data6 = await response6.json();
        const count6 = data6.length;
        setActualfunds(count6);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: student, label: 'Learners' },
          { id: 1, value: sponsor, label: 'Sponsors' },
          { id: 2, value: trainer, label: 'Trainers' },
          { id: 3, value: clients, label: 'Clients' }
        ]
      }
    ]}
    width={400}
    height={250}
  />
  <h3>Funds Pie Chart </h3>
  <br></br>
  <PieChart
  series={[
    {
      data: [
        { id: 0, value: funds, label: 'Actual Funds' },
        { id: 1, value: actualfunds, label: 'Available Funds' },
      
      ]
    }
  ]}
  width={400}
  height={250}
/>
</>
  );
};

export default Piechart
