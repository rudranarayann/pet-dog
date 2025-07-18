import React from "react";
import { Search } from "lucide-react"; 

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="mb-6 max-w-md mx-auto">
    <div className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
        <Search className="w-5 h-5" />
      </span>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by breed..."
        className="w-full pl-10 pr-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
      />
    </div>
  </div>
);

export default SearchBar;
