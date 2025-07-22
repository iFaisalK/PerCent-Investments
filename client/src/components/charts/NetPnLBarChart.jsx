import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';

const NetPnLBarChart = ({ data }) => {
    // We need to aggregate P&L per agent for the chart
    const aggregatedData = data.reduce((acc, curr) => {
        const existingAgent = acc.find(item => item['Agent Name'] === curr['Agent Name']);
        if (existingAgent) {
            existingAgent['Net P&L'] += curr['Net P&L'];
        } else {
            acc.push({ 'Agent Name': curr['Agent Name'], 'Net P&L': curr['Net P&L'] });
        }
        return acc;
    }, []);

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Agent Net P&L (₹)</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={aggregatedData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="Agent Name" interval={0} tick={{ fontSize: 12 }} />
                        <YAxis tickFormatter={(value) => `₹${value.toLocaleString()}`} />
                        <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Net P&L']} cursor={{fill: 'rgba(243, 244, 246, 0.5)'}} />
                        <Legend />
                        <Bar dataKey="Net P&L" name="Net Profit/Loss">
                            {aggregatedData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry['Net P&L'] >= 0 ? '#10b981' : '#ef4444'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default NetPnLBarChart;
