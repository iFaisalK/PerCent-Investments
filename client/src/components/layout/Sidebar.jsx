import React from 'react';
import { LayoutDashboard, BarChart2, Users, Settings, LifeBuoy, Download } from 'lucide-react';
import logo from '../../assets/logo.png'; 

const Sidebar = ({ currentPage, setCurrentPage }) => {
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
        <aside className="w-64 bg-white text-gray-800 flex-col hidden lg:flex border-r border-gray-200">
            <div className="p-6 flex items-center justify-center border-b border-gray-200" style={{height: '81px'}}>
                 <img src={logo} alt="Per Cent Logo" className="h-14 w-auto" />
            </div>
            
            <nav className="flex-1 p-4 space-y-8 mt-4">
                <div>
                    <h3 className="px-4 pb-2 text-xs uppercase text-gray-500 tracking-wider">Menu</h3>
                    <ul>
                        {menuItems.map(item => (
                            <li key={item.name}>
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setCurrentPage(item.name);
                                    }}
                                    className={`flex items-center px-4 py-3 my-1 rounded-lg transition-colors duration-200 ${
                                        currentPage === item.name
                                            ? 'bg-green-100 text-green-700 font-semibold'
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
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
                    <h3 className="px-4 pb-2 text-xs uppercase text-gray-500 tracking-wider">General</h3>
                    <ul>
                        {generalItems.map(item => (
                            <li key={item.name}>
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="flex items-center px-4 py-3 my-1 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <item.icon className="w-5 h-5 mr-3" />
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
