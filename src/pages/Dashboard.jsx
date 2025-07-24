import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-5xl mx-auto">
      
        <div className="bg-white shadow-md rounded-xl p-6 mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Welcome, {user?.email} 👋
          </h1>
          <p className="text-gray-600">You're successfully logged in to your dashboard.</p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">🧑‍💼 My Profile</h2>
            <p className="text-gray-600 text-sm">View and edit your personal information.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">⚙️ Settings</h2>
            <p className="text-gray-600 text-sm">Customize your experience and preferences.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">🚪 Logout</h2>
            <p className="text-gray-600 text-sm">Securely sign out of your account.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
