import React from 'react'

const Home = () => {
  return (
    <div className="p-4 sm:p-8 min-h-screen  bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-blue-700">
          Welcome to Our Dashboard App 🚀
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          This is a simple and secure application built with <strong>React</strong>, <strong>Redux Toolkit</strong>, <strong>Firebase</strong>, and <strong>Tailwind CSS</strong>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">📦 Manage Products</h3>
            <p className="text-gray-600">Easily view, add, and delete products from your dashboard with real-time updates.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">👥 User Accounts</h3>
            <p className="text-gray-600">Signup and login functionality secured using Firebase Authentication.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">⚙️ Redux Toolkit</h3>
            <p className="text-gray-600">Global state management for authentication and data syncing across components.</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm text-gray-500">
            🔒 Secure, Fast, and Scalable – Start building your app with modern technologies!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
