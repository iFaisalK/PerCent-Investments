import React from 'react';
import { Plus } from 'lucide-react';

const projects = [
    { name: "Develop API Endpoints", date: "Due: Nov 28, 2024", color: "bg-red-500" },
    { name: "Onboarding Flow", date: "Due: Nov 28, 2024", color: "bg-orange-500" },
    { name: "Build Dashboard", date: "Due: Nov 30, 2024", color: "bg-blue-500" },
    { name: "Optimize Page Load", date: "Due: Dec 5, 2024", color: "bg-green-500" },
];

const Project = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-gray-800">Project</h3>
                <button className="flex items-center gap-2 text-sm text-green-600 font-semibold hover:text-green-700">
                    <Plus className="w-4 h-4" /> New
                </button>
            </div>
            <div className="space-y-4">
                {projects.map(p => (
                    <div key={p.name} className="flex items-center gap-4">
                        <span className={`w-2 h-10 rounded-full ${p.color}`}></span>
                        <div>
                            <p className="font-semibold text-gray-700">{p.name}</p>
                            <p className="text-xs text-gray-500">{p.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
