
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-4">

      <div className="text-center max-w-xl w-full">

        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-5 rounded-full bg-indigo-500/10 border border-indigo-400/20">
    
          </div>
        </div>

        {/* 404 Heading */}
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl md:text-4xl font-bold text-white mt-5">
          Oops! Page Not Found
        </h2>

        <p className="text-slate-400 mt-4 text-base md:text-lg leading-relaxed">
          Sorry, the page you are looking for doesn't
          exist, has been removed, or is temporarily
          unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-9">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-500/20"
          >
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 border border-slate-600 text-slate-200 hover:bg-white/10 px-7 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            Go Back
          </button>

        </div>

        {/* Footer */}
        <p className="text-slate-500 text-sm mt-12">
          Error Code: 404 | Page Not Found
        </p>

      </div>
    </div>
  );
};

export default NotFound;
