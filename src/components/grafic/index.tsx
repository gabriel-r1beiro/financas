"use client"
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dailyData = [
  { date: '2025-02-01', sales: 30 },
  { date: '2025-02-02', sales: 45 },
  { date: '2025-02-03', sales: 60 },
  { date: '2025-02-04', sales: 3 },
  { date: '2025-02-05', sales: 100 },
  { date: '2025-02-06', sales: 75 },
  { date: '2025-02-07', sales: 85 },
  { date: '2025-02-08', sales: 70 },
  { date: '2025-02-09', sales: 80 },
  { date: '2025-02-10', sales: 24 },
  { date: '2025-02-11', sales: 34 },
  { date: '2025-02-12', sales: 60 },
  // Adicione mais dados diários aqui
];

const monthlyData = [
  { month: 'Jan', sales: 1200 },
  { month: 'Feb', sales: 1500 },
  { month: 'Mar', sales: 1800 },
  // Adicione mais dados mensais aqui
];

const SalesChart = () => {
  const [view, setView] = useState('daily');

  const data = view === 'daily' ? dailyData : monthlyData;

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button className={`px-4 py-2 ${view === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setView('daily')}>Diário</button>
        <button className={`px-4 py-2 ml-2 ${view === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setView('monthly')}>Mensal</button>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={view === 'daily' ? 'date' : 'month'} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
