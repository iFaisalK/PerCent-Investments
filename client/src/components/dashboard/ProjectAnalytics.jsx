import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'S', value: 30 },
  { name: 'M', value: 50 },
  { name: 'T', value: 75 },
  { name: 'W', value: 60 },
  { name: 'T', value: 90 },
  { name: 'F', value: 45 },
  { name: 'S', value: 70 },
];

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 8;
  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} rx={radius} ry={radius} />
    </g>
  );
};


const ProjectAnalytics = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Project Analytics</h3>
      <div style={{ width: '100%', height: 250 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip cursor={{fill: 'rgba(243, 244, 246, 0.5)'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}} />
            <Bar dataKey="value" fill="#d1fae5" shape={<CustomBar />} />
            <Bar dataKey="value" fill="#10b981" shape={<CustomBar />} barSize={20} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProjectAnalytics;
