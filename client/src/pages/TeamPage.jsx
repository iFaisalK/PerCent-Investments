import React from 'react';
import { agentPerformanceData } from '../data/mockData';

const TeamPage = () => {
    // Aggregate data per agent
    const aggregatedData = agentPerformanceData.reduce((acc, curr) => {
        const agentName = curr['Agent Name'];
        if (!acc[agentName]) {
            acc[agentName] = {
                'Agent Name': agentName,
                'No Of Trade': 0,
                'Turnover': 0,
                'Net P&L': 0,
                'avatar': `https://placehold.co/80x80/E2E8F0/4A5568?text=${agentName.charAt(0)}`
            };
        }
        acc[agentName]['No Of Trade'] += curr['No Of Trade'];
        acc[agentName]['Turnover'] += curr['Turnover'];
        acc[agentName]['Net P&L'] += curr['Net P&L'];
        return acc;
    }, {});

    const teamData = Object.values(aggregatedData);

    return (
        <div className="p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Team Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamData.map((agent, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform transform hover:-translate-y-1">
                        <img src={agent.avatar} alt={agent['Agent Name']} className={`w-20 h-20 rounded-full mb-4 ring-4 ring-offset-2 ${agent['Net P&L'] >= 0 ? 'ring-green-200' : 'ring-red-200'}`}/>
                        <h3 className="text-xl font-semibold text-gray-800">{agent['Agent Name']}</h3>
                        <p className={`font-bold text-2xl mt-4 ${agent['Net P&L'] >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            ₹{agent['Net P&L'].toLocaleString('en-IN')}
                        </p>
                        <p className="text-sm text-gray-500">Net P&L</p>

                        <div className="w-full mt-6 pt-6 border-t border-gray-200 grid grid-cols-2 gap-4 text-sm">
                            <div className="text-left">
                                <p className="text-gray-500">Total Trades</p>
                                <p className="font-semibold text-gray-800">{agent['No Of Trade']}</p>
                            </div>
                            <div className="text-left">
                                <p className="text-gray-500">Turnover</p>
                                <p className="font-semibold text-gray-800">₹{agent['Turnover'].toLocaleString('en-IN')}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamPage;
