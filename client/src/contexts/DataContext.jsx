import React, { createContext, useState, useContext, useMemo } from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

// Create the context with a default shape to prevent errors
const DataContext = createContext({
    agentData: [],
    summaryStats: {
        overallPnl: 0,
        totalTrades: 0,
        topAgent: { name: 'N/A', pnl: 0 },
        agentsToReview: 0,
    },
    handleFileUpload: () => {},
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [agentData, setAgentData] = useState([]);
    const [summaryStats, setSummaryStats] = useState({
        overallPnl: 0,
        totalTrades: 0,
        topAgent: { name: 'N/A', pnl: 0 },
        agentsToReview: 0,
    });

    const processData = (data) => {
        const parsedData = data.map(row => ({
            ...row,
            'Net P&L': parseFloat(row['Net P&L']) || 0,
            'No Of Trade': parseInt(row['No Of Trade'], 10) || 0,
            'Gross P&L': parseFloat(row['Gross P&L']) || 0,
            'Brokerage': parseFloat(row['Brokerage']) || 0,
        }));
        setAgentData(parsedData);
        calculateSummary(parsedData);
    };

    const calculateSummary = (data) => {
        if (data.length === 0) return;

        const overallPnl = data.reduce((acc, item) => acc + item['Net P&L'], 0);
        const totalTrades = data.reduce((acc, item) => acc + item['No Of Trade'], 0);
        
        let topAgent = { name: 'N/A', pnl: -Infinity };
        data.forEach(agent => {
            if (agent['Net P&L'] > topAgent.pnl) {
                topAgent = { name: agent['Agent Name'], pnl: agent['Net P&L'] };
            }
        });

        const agentsToReview = data.filter(agent => agent['Net P&L'] < 0).length;

        setSummaryStats({
            overallPnl,
            totalTrades,
            topAgent,
            agentsToReview,
        });
    };

    const handleFileUpload = (file) => {
        const reader = new FileReader();
        const fileExtension = file.name.split('.').pop().toLowerCase();

        if (fileExtension === 'csv') {
            Papa.parse(file, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    processData(results.data);
                }
            });
        } else if (fileExtension === 'xls' || fileExtension === 'xlsx') {
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = XLSX.utils.sheet_to_json(worksheet);
                processData(json);
            };
            reader.readAsArrayBuffer(file);
        } else {
            alert("Unsupported file format. Please upload a CSV, XLS, or XLSX file.");
        }
    };

    // Memoize the context value to ensure components re-render correctly
    const value = useMemo(() => ({
        agentData,
        summaryStats,
        handleFileUpload
    }), [agentData, summaryStats]);

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
};
