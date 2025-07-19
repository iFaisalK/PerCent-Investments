import React from 'react';

const Reminders = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Reminders</h3>
            <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="font-semibold text-gray-800">Meeting with Arc Company</p>
                    <p className="text-sm text-gray-500">Time: 02:00 PM - 04:00 PM</p>
                    <button className="mt-3 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-semibold">
                        Start Meeting
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reminders;
