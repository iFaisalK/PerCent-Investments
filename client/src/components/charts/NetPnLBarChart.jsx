import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useData } from '../../contexts/DataContext';

const NetPnLBarChart = () => {
    const { agentData } = useData();

    if (agentData.length === 0) {
        return <div className="flex items-center justify-center h-full text-gray-500">Import data to see the chart.</div>;
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Agent Net P&L (₹)</h3>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <BarChart data={agentData} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="Agent Name" angle={-45} textAnchor="end" height={80} interval={0} tick={{ fontSize: 12 }} />
                        <YAxis tickFormatter={(value) => `₹${value.toLocaleString()}`} />
                        <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Net P&L']} cursor={{fill: 'rgba(243, 244, 246, 0.5)'}} />
                        <Bar dataKey="Net P&L">
                            {agentData.map((entry, index) => (
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
