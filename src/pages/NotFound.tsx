import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate()
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                {/* 404 Text */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-gray-800 mb-2">404</h1>
                </div>

                {/* Message */}
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Page Not Found
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.
                    Please check the URL or return to the homepage.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => navigate('/')}
                        className="inline-flex cursor-pointer items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                        <Home size={20} />
                        Home Page
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NotFound;