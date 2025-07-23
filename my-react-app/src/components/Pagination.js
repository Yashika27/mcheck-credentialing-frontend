import React from 'react';

const Pagination = ({
  currentPage = 1,
  totalPages = 5,
  itemsPerPage = 10,
  totalItems = 100,
  onPageChange,
  onItemsPerPageChange
}) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      {/* Items per page dropdown */}
      <div className="flex items-center space-x-2">
        <select
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange && onItemsPerPageChange(Number(e.target.value))}
          className="block rounded-md border border-gray-300 bg-white py-1 pl-3 pr-8 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
        <span className="text-sm text-gray-700">items per page</span>
      </div>

      {/* Page navigation */}
      <div className="flex items-center space-x-1">
        {/* Previous button */}
        <button
          onClick={() => onPageChange && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            currentPage === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          Prev
        </button>

        {/* Page numbers */}
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange && onPageChange(page)}
            className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              page === currentPage
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next button */}
        <button
          onClick={() => onPageChange && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
            currentPage === totalPages
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination; 