import React from 'react';
import { agentPerformanceData } from '../data/mockData';
import NetPnLBarChart from '../components/charts/NetPnLBarChart';
import OverallPerformanceLineChart from '../components/charts/OverallPerformanceLineChart';
import ProfitContributionPieChart from '../components/charts/ProfitContributionPieChart';

const AnalyticsPage = () => {
  return (
    <div className="p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">In-Depth Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <NetPnLBarChart data={agentPerformanceData} />
        <OverallPerformanceLineChart data={agentPerformanceData} />
        <div className="lg:col-span-2">
            <ProfitContributionPieChart data={agentPerformanceData} />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
