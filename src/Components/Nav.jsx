import React from "react";

function Nav() {
  return (
    <div className="w-full bg-black text-white px-6 py-2 flex items-center justify-end  gap-4">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-64 h-6 border border-gray-700 bg-black text-white rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-400 placeholder-gray-400"
        />
        <svg
          className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0a7 7 0 1110-10 7 7 0 01-10 10z"
          />
        </svg>
      </div>

      {/* Submit Button */}
      <a
        href="https://www.cureusjournals.com/users/sign_in"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 text-white px-5 h-6  rounded-full font-semibold hover:bg-orange-600 transition"
      >
        Submit Manuscript
      </a>
    </div>
  );
}

export default Nav;
