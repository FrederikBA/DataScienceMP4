import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
import apiUtils from '../utils/apiUtils';
import { useState, useEffect } from "react"

  
const URL = apiUtils.getUrl()
  
const VisualizationFour = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const getCompanies = async () => {
      const response = await apiUtils.getAxios().get(`${URL}/numbers`);
      setCompanies(response.data);
      console.log("response");
    };
    getCompanies();
  }, [URL]);

  const chartData = companies.map(({ name, employees }) => ({ x: name, y: employees }));

  return (
    <div className="center">
      <h1>Four</h1>
      <VictoryChart domainPadding={{ x: 30 }} theme={VictoryTheme.material}>
      <VictoryAxis style={{tickLabels: {angle: 90,  fontSize: 4, padding: 30, domainPadding: 5 } }}/>
        <VictoryAxis dependentAxis   />
        <VictoryBar  
       
        data={chartData} />
      </VictoryChart>
    </div>
  );
};




export default VisualizationFour