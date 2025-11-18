import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { closeSidebar } from "../../store/slices/sidebarSlice";
import { Database, Home } from "lucide-react";


const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const { pathname: currentPage } = useLocation();;
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);

  const navItems = [
    { id: '/', label: 'Home', icon: <Home size={20} /> },
    { id: '/data', label: 'Data', icon: <Database size={20} /> },
  ] as const;

  const handleNavClick = (page: 'home' | 'data') => {
    navigate(page)
  };

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => dispatch(closeSidebar())}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white min-h-screen p-4 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <button
            onClick={() => dispatch(closeSidebar())}
            className="lg:hidden text-gray-300 hover:text-white"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="space-y-2">
          {navItems.map(({ icon, id, label }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id as 'home' | 'data')}
              className={`w-full flex item-center gap-4 text-left px-4 py-3 rounded-lg transition-colors ${currentPage === id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                }`}
            >
              <span >
                {icon}
              </span>
              {label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

