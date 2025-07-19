import React, { useState } from 'react';
import { LayoutDashboard, BarChart2, Users, Settings, LifeBuoy, Download } from 'lucide-react';

const Sidebar = () => {
    const [active, setActive] = useState('Dashboard');
    
    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard },
        { name: 'Analytics', icon: BarChart2 },
        { name: 'Team', icon: Users },
    ];

    const generalItems = [
        { name: 'Settings', icon: Settings },
        { name: 'Help', icon: LifeBuoy },
    ];

    return (
        <aside className="w-64 bg-gray-900 text-white flex-col hidden lg:flex">
            <div className="p-6 flex items-center gap-3 border-b border-gray-700/50">
                 <div className="bg-green-500 p-2 rounded-lg">
                    <BarChart2 className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-xl font-bold tracking-wider">Donezo</h1>
            </div>
            
            <nav className="flex-1 p-4 space-y-8">
                <div>
                    <h3 className="px-4 pb-2 text-xs uppercase text-gray-400 tracking-wider">Menu</h3>
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.name}>
                                <a
                                    href="#"
                                    onClick={() => setActive(item.name)}
                                    className={`flex items-center px-4 py-3 my-1 rounded-lg transition-colors duration-200 ${
                                        active === item.name
                                            ? 'bg-green-600 text-white font-semibold'
                                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                    }`}
                                >
                                    <item.icon className="w-5 h-5 mr-3" />
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="px-4 pb-2 text-xs uppercase text-gray-400 tracking-wider">General</h3>
                    <ul>
                        {generalItems.map(item => (
                            <li key={item.name}>
                                <a
                                    href="#"
                                    onClick={() => setActive(item.name)}
                                    className={`flex items-center px-4 py-3 my-1 rounded-lg transition-colors duration-200 ${
                                        active === item.name
                                            ? 'bg-green-600 text-white font-semibold'
                                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                                    }`}
                                >
                                    <item.icon className="w-5 h-5 mr-3" />
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            <div className="p-6">
                <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <Download className="mx-auto w-8 h-8 text-green-500" />
                    <h4 className="font-semibold text-white mt-2">Download our Mobile App</h4>
                    <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
                        Download
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
