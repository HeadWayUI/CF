import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import  { useEffect, useState } from 'react';


export default function BasicBars() {
  const [chartData, setChartData] = useState([]);
  const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from the endpoint
        const response = await fetch(baseUrl + "/api/students");
        const data = await response.json(); 
        // Assuming the response contains an array of objects with 'label' and 'value' properties
        // Example: [{ label: 'Category 1', value: 10 }, { label: 'Category 2', value: 20 }, ...]
        setChartData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
     <h2>Bar Chart Example</h2>
     <BarChart
        data={chartData.map(item => ({ x: item.label, y: item.value }))} // Convert data to format expected by BarChart component
        xAxisLabel="Categories"
        yAxisLabel="Values"
        width={800}
        height={400}
      />
    </>
  );
}