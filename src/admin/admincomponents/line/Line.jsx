import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { useEffect, useState } from 'react';

export default function BasicLineChart() {

  const [studentCounts, setStudentCounts] = useState(0);
  const [sponsorCounts, setSponsorCounts] = useState(0); // Initialize as number instead of array
  const [trainerCounts, setTrainerCounts] = useState(0); // Initialize as number instead of array
  const [clientCounts, setClientCounts] = useState(0); // Initialize as number instead of array

  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(baseUrl + '/api/students');
        const data1 = await response1.json();
        console.log('Data from students endpoint:', data1);
        const count1 = data1.length;
        setStudentCounts(count1);

        const response2 = await fetch(baseUrl + '/api/donors');
        const data2 = await response2.json();
        const count2 = data2.length;
        setSponsorCounts(count2);

        const response3 = await fetch(baseUrl + '/api/trainers');
        const data3 = await response3.json();
        const count3 = data3.length;
        setTrainerCounts(count3);

        const response4 = await fetch(baseUrl + '/clients/all');
        const data4 = await response4.json();
        const count4 = data4.length;
        setClientCounts(count4);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
    <LineChart
      data={[
        { id: 0, value: studentCounts, label: 'Learners' },
        { id: 1, value: sponsorCounts, label: 'Sponsors' },
        { id: 2, value: trainerCounts, label: 'Trainers' },
        { id: 3, value: clientCounts, label: 'Clients' }
      ]}
      xAxisLabel="Time"
      yAxisLabel="Count"
      width={800}
      height={400}
    />
    </>
  );
}
