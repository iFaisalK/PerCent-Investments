import React, { useRef } from 'react';
import { Search, Bell, User, Upload } from 'lucide-react';
import { useData } from '../../contexts/DataContext';

const Header = () => {
    const { handleFileUpload } = useData();
    const fileInputRef = useRef(null);

    const onImportClick = () => {
        // This function triggers a click on the hidden file input element.
        fileInputRef.current.click();
    };

    const onFileChange = (event) => {
        // This function is called when the user selects a file.
        const file = event.target.files[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    return (
        <header className="flex flex-wrap justify-between items-center gap-4">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Agent Performance</h1>
                <p className="text-gray-500 mt-1">Review and analyze your team's trading activity.</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative hidden md:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search agent..."
                        className="pl-10 pr-4 py-2 w-48 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                </div>
                <button className="p-2 rounded-full hover:bg-gray-200">
                    <Bell className="w-6 h-6 text-gray-600" />
                </button>
                <div className="flex items-center gap-3">
                    <img src="https://placehold.co/40x40/22c55e/FFFFFF/png?text=A" alt="Admin" className="w-10 h-10 rounded-full" />
                    <div>
                        <p className="font-semibold text-gray-800 text-sm">Admin</p>
                        <p className="text-xs text-gray-500">business.owner@percent.com</p>
                    </div>
                </div>
                {/* This is the hidden file input. It's the real hero here. */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={onFileChange}
                    className="hidden"
                    accept=".csv,.xls,.xlsx"
                />
                {/* This button triggers the hidden input when clicked. */}
                <button 
                    onClick={onImportClick}
                    className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-sm"
                >
                    <Upload className="w-5 h-5" />
                    Import Data
                </button>
            </div>
        </header>
    );
};

export default Header;
