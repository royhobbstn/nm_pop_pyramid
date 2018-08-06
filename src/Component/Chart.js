import React from 'react';

import { connect } from 'react-redux';

import { selectorFormatChartData } from '../Redux/selectors';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const ChartModal = ({ place_detail }) => {

  return <ResponsiveContainer width="100%" height={200}>
  
      <BarChart data={place_detail}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="Female" stackId="a" fill="#8884d8" />
        <Bar dataKey="Male" stackId="a" fill="#82ca9d" />
      </BarChart>
      
      </ResponsiveContainer>;
};


export default connect((state) => ({
  place_detail: selectorFormatChartData(state)
}), {})(ChartModal);
