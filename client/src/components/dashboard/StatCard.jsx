import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const StatCard = ({ title, value, trend, trendDirection, iconColor }) => {
    const trendClasses = trendDirection === 'up' ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100';
    
    return (
        <div className="bg-white p-5 rounded-xl shadow-sm flex flex-col justify-between border border-gray-100">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <p className="text-sm text-gray-500">{title}</p>
                    <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
                </div>
                <div className={`p-2 rounded-full ${iconColor}`}>
                    <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
            </div>
            <div className={`mt-4 text-xs font-medium self-start px-2 py-1 rounded-md ${trendClasses}`}>
                {trend} from last month
            </div>
        </div>
    );
};

export default StatCard;
