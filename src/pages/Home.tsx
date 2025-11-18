const Home = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Welcome to Dashboard</h2>
        <p className="text-sm sm:text-base text-gray-600">Manage and view your data efficiently</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Total Users</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">10</p>
            </div>
            <div className="text-3xl sm:text-4xl">👥</div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Active Sessions</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">24</p>
            </div>
            <div className="text-3xl sm:text-4xl">📈</div>
          </div>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-lg shadow sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 mb-1">Data Points</p>
              <p className="text-xl sm:text-2xl font-bold text-gray-800">1,234</p>
            </div>
            <div className="text-3xl sm:text-4xl">📊</div>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <p className="font-medium text-sm sm:text-base text-gray-800">View Data</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Browse and filter user data</p>
          </button>
          <button className="p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <p className="font-medium text-sm sm:text-base text-gray-800">Export Data</p>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Download data in various formats</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

