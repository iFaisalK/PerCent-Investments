import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'Completed', value: 41 },
  { name: 'In Progress', value: 59 },
];
const COLORS = ['#10b981', '#f3f4f6'];

const ProjectProgress = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Progress</h3>
            <div className="w-full h-48 relative flex items-center justify-center">
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            startAngle={90}
                            endAngle={450}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-gray-800">41%</span>
                    <span className="text-sm text-gray-500">Completed</span>
                </div>
            </div>
            <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600">Completed</span>
                </div>
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <span className="text-sm text-gray-600">In Progress</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectProgress;
