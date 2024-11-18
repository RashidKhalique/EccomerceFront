import React from 'react';

function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-center text-white">
        <h1 className="text-9xl font-extrabold mb-4">404</h1>
        <p className="text-xl md:text-2xl font-semibold mb-6">Oops! Page not found</p>
        <p className="text-lg mb-8">The page you're looking for does not exist or has been moved.</p>
        <a
          href="/"
          className="inline-block px-6 py-3 text-lg font-medium text-purple-900 bg-white rounded-full hover:bg-purple-100 transition duration-300"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}

export default NotFoundPage;
