import React from 'react';

const AgentTable = ({ data }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Daily Performance Log</h3>
            <div className="overflow-x-auto max-h-96">
                <table className="w-full text-left">
                    <thead className="sticky top-0 bg-gray-50">
                        <tr className="border-b border-gray-200">
                            <th className="p-4 text-sm font-semibold text-gray-600">Date</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">Agent Name</th>
                            <th className="p-4 text-sm font-semibold text-gray-600">No. of Trades</th>
                            <th className="p-4 text-sm font-semibold text-gray-600 text-right">Net P&L (₹)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.sort((a, b) => new Date(b.Date) - new Date(a.Date)).map((agent, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="p-4 text-gray-700">{agent['Date']}</td>
                                <td className="p-4 font-medium text-gray-800">{agent['Agent Name']}</td>
                                <td className="p-4 text-gray-700">{agent['No Of Trade']}</td>
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
