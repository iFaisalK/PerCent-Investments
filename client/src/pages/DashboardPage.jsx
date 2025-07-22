import React from 'react';
import { agentPerformanceData } from '../data/mockData';
import StatCard from '../components/dashboard/StatCard';
import AgentTable from '../components/dashboard/AgentTable';
import NetPnLBarChart from '../components/charts/NetPnLBarChart';
import OverallPerformanceLineChart from '../components/charts/OverallPerformanceLineChart';
import ProfitContributionPieChart from '../components/charts/ProfitContributionPieChart';

const DashboardPage = () => {
  // Calculate summary statistics from the static data
  const overallPnl = agentPerformanceData.reduce((acc, item) => acc + item['Net P&L'], 0);
  const totalTrades = agentPerformanceData.reduce((acc, item) => acc + item['No Of Trade'], 0);
  
  const agentPnl = agentPerformanceData.reduce((acc, item) => {
    acc[item['Agent Name']] = (acc[item['Agent Name']] || 0) + item['Net P&L'];
    return acc;
  }, {});

  const topAgent = Object.entries(agentPnl).reduce((top, current) => {
    return current[1] > top[1] ? current : top;
  }, ['', -Infinity]);

  const agentsToReview = Object.values(agentPnl).filter(pnl => pnl < 0).length;

  const formattedStats = [
    { title: "Overall Net P&L", value: `₹${overallPnl.toLocaleString('en-IN')}`, iconColor: "bg-green-500" },
    { title: "Total Trades", value: totalTrades.toLocaleString('en-IN'), iconColor: "bg-blue-500" },
    { title: "Top Agent", value: topAgent[0], trend: `₹${topAgent[1].toLocaleString('en-IN')} P&L`, iconColor: "bg-purple-500" },
    { title: "Agents to Review", value: agentsToReview, iconColor: "bg-red-500" },
  ];

  return (
    <div className="p-6 lg:p-8">
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {formattedStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Dashboard Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <NetPnLBarChart data={agentPerformanceData} />
          <OverallPerformanceLineChart data={agentPerformanceData} />
      </div>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
            <AgentTable data={agentPerformanceData} />
        </div>
        <div className="lg:col-span-2">
            <ProfitContributionPieChart data={agentPerformanceData} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
