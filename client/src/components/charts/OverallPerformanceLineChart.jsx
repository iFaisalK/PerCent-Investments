import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area } from 'recharts';

const OverallPerformanceLineChart = ({ data }) => {
    // Aggregate Net P&L by date
    const dailyData = data.reduce((acc, curr) => {
        const date = curr.Date;
        if (!acc[date]) {
            acc[date] = { Date: date, 'Total Net P&L': 0 };
        }
        acc[date]['Total Net P&L'] += curr['Net P&L'];
        return acc;
    }, {});

    const chartData = Object.values(dailyData).sort((a, b) => new Date(a.Date) - new Date(b.Date));

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 font-heading">Daily Performance Trend</h3>
            <div style={{ width: '100%', height: 300 }}>    
                <ResponsiveContainer>
                    {/* Increased bottom margin again and added dy to XAxis for more robust spacing */}
                    <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
                        <defs>
                            <linearGradient id="colorPnl" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="Date" dy={15} />
                        <YAxis tickFormatter={(value) => `₹${value.toLocaleString()}`} />
                        <Tooltip 
                            formatter={(value) => [`₹${value.toLocaleString()}`, 'Total Net P&L']} 
                            contentStyle={{
                                borderRadius: '8px',
                                border: 'none',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                                fontFamily: 'Poppins'
                            }}
                        />
                        <Legend verticalAlign="bottom" />
                        {/* Added an Area component to create the gradient fill */}
                        <Area type="monotone" dataKey="Total Net P&L" stroke="none" fill="url(#colorPnl)" />
                        <Line type="monotone" dataKey="Total Net P&L" stroke="#10b981" strokeWidth={3} activeDot={{ r: 8 }} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default OverallPerformanceLineChart;
