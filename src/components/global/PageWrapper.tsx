import { useAppDispatch } from "../../store/hooks";
import { toggleSidebar } from "../../store/slices/sidebarSlice"
import Sidebar from "./Sidebar"

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useAppDispatch();
    return (<div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 w-full lg:w-auto p-4 sm:p-6 lg:p-8">
            {/* Mobile menu button */}
            <button
                onClick={() => dispatch(toggleSidebar())}
                className="lg:hidden mb-4 p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Open menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {children}
        </main>
    </div>)
}