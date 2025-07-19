import React from 'react';
import { useData } from '../../contexts/DataContext';

const AgentTable = () => {
    const { agentData } = useData();

    if (agentData.length === 0) {
        return (
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Agent Leaderboard</h3>
                <div className="flex items-center justify-center h-48 text-gray-500">
                    Please import a KRA sheet to see agent data.
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Agent Leaderboard</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50 border-b border-gray-200">
                            <th className="p-4 text-sm font-semibold text-gray-600">Agent Name</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">No. of Trades</th>
                            <th className="p-4 text-sm font-semibold text-gray-600 text-right">Brokerage (₹)</th>
                            <th className="p-4 text-sm font-semibold text-gray-600 text-right">Gross P&L (₹)</th>
                            <th className="p-4 text-sm font-semibold text-gray-600 text-right">Net P&L (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agentData.sort((a, b) => b['Net P&L'] - a['Net P&L']).map((agent, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="p-4 font-medium text-gray-800">{agent['Agent Name']}</td>
                                <td className="p-4 text-gray-700">{agent['No Of Trade']}</td>
                                <td className="p-4 text-gray-700 text-right">{agent['Brokerage'].toLocaleString('en-IN')}</td>
                                <td className={`p-4 font-medium text-right ${agent['Gross P&L'] > 0 ? 'text-blue-600' : 'text-orange-600'}`}>
                                    {agent['Gross P&L'].toLocaleString('en-IN')}
                                </td>
                                <td className={`p-4 font-bold text-right ${agent['Net P&L'] > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {agent['Net P&L'].toLocaleString('en-IN')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AgentTable;
