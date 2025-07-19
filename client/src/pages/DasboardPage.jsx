import React from 'react';
import { useData } from '../contexts/DataContext';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import StatCard from '../components/dashboard/StatCard';
import AgentTable from '../components/dashboard/AgentTable';
import NetPnLBarChart from '../components/charts/NetPnLBarChart';

const DashboardPage = () => {
  const data = useData();

  // More robust guard clause:
  // This checks not only that the data context is available, but also that the
  // specific 'summaryStats' object we need has been initialized. This prevents
  // the component from crashing on the initial render.
  if (!data || !data.summaryStats) {
    // Returning null or a loading spinner is best practice here.
    return <div>Loading...</div>;
  }

  const { summaryStats } = data;

  const formattedStats = [
    { title: "Overall Net P&L", value: `₹${summaryStats.overallPnl.toLocaleString('en-IN')}`, trend: "", trendDirection: "up", iconColor: "bg-green-500" },
    { title: "Total Trades", value: summaryStats.totalTrades.toLocaleString('en-IN'), trend: "", trendDirection: "up", iconColor: "bg-blue-500" },
    { title: "Top Agent", value: summaryStats.topAgent.name, trend: `₹${summaryStats.topAgent.pnl.toLocaleString('en-IN')} P&L`, trendDirection: "up", iconColor: "bg-purple-500" },
    { title: "Agents to Review", value: summaryStats.agentsToReview, trend: "", trendDirection: "down", iconColor: "bg-red-500" },
  ];

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8 bg-gray-100/50">
        <Header />
        <div className="mt-8">
          {/* Top Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {formattedStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* Main Dashboard Grid */}
          <div className="mt-8 grid grid-cols-1 gap-8">
              <NetPnLBarChart />
              <AgentTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
