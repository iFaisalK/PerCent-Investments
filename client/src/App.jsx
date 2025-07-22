import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import DashboardPage from './pages/DashboardPage';
import AnalyticsPage from './pages/AnalyticsPage';
import TeamPage from './pages/TeamPage';

function App() {
  const [currentPage, setCurrentPage] = useState('Dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Analytics':
        return <AnalyticsPage />;
      case 'Team':
        return <TeamPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="bg-gray-50 font-sans text-gray-900">
      <div className="flex min-h-screen">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="flex-1 flex flex-col">
          {/* Pass currentPage to the Header */}
          <Header currentPage={currentPage} />
          <main className="flex-1 bg-gray-50">
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
