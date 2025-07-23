import React, { useState, useEffect } from 'react';
import Dropdown from './Dropdown';
import DateRangePicker from './DateRangePicker';
import ProviderTable from './ProviderTable';
import Pagination from './Pagination';
import { fetchProviders } from '../services/api';

const ProviderListing = () => {
  const [filters, setFilters] = useState({
    runDate: '04/11/23 - 07/12/23',
    state: 'All',
    reviewStatus: 'All'
  });

  const [pagination, setPagination] = useState({
    currentPage: 1,
    itemsPerPage: 10,
    totalItems: 0,
    totalPages: 1
  });

  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const stateOptions = ['All', 'GA', 'VA'];
  const reviewStatusOptions = ['All', 'Approved', 'Rejected', 'Preliminary Review', 'Committee Review'];

  const loadProviders = async (searchFilters = filters, paginationParams = pagination) => {
    setLoading(true);
    setError(null);
    
    try {
      const apiFilters = {
        runDate: searchFilters.runDate === '04/11/23 - 07/12/23' ? searchFilters.runDate : searchFilters.runDate,
        state: searchFilters.state === 'All' ? '' : searchFilters.state,
        reviewStatus: searchFilters.reviewStatus === 'All' ? '' : searchFilters.reviewStatus,
        pageNo: paginationParams.currentPage,
        pageSize: paginationParams.itemsPerPage,
        sortBy: '',
        sortOrder: ''
      };

      const response = await fetchProviders(apiFilters);
      
      if (response && response.data) {
        setProviders(response.data);
        // Update pagination based on response if API provides total count
        if (response.totalItems !== undefined) {
          setPagination(prev => ({
            ...prev,
            totalItems: response.totalItems,
            totalPages: Math.ceil(response.totalItems / prev.itemsPerPage)
          }));
        }
      }
    } catch (err) {
      setError('Failed to load providers. Please try again.');
      console.error('Error loading providers:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProviders();
  }, []);

  const handleFilterChange = (filterName, value) => {
    const newFilters = {
      ...filters,
      [filterName]: value
    };
    setFilters(newFilters);
    
    // Reset to first page when filters change
    const newPagination = {
      ...pagination,
      currentPage: 1
    };
    setPagination(newPagination);
    
    // Load data with new filters
    loadProviders(newFilters, newPagination);
  };

  const handleReset = () => {
    const resetFilters = {
      runDate: '04/11/23 - 07/12/23',
      state: 'All',
      reviewStatus: 'All'
    };
    setFilters(resetFilters);
    
    const resetPagination = {
      ...pagination,
      currentPage: 1
    };
    setPagination(resetPagination);
    
    // Load data with reset filters
    loadProviders(resetFilters, resetPagination);
  };

  const handleDownload = () => {
    // Download functionality to be implemented
    console.log('Download triggered with filters:', filters);
  };

  const handlePageChange = (page) => {
    const newPagination = {
      ...pagination,
      currentPage: page
    };
    setPagination(newPagination);
    
    // Load data for the new page
    loadProviders(filters, newPagination);
  };

  const handleItemsPerPageChange = (itemsPerPage) => {
    const newPagination = {
      ...pagination,
      itemsPerPage,
      currentPage: 1,
      totalPages: Math.ceil(pagination.totalItems / itemsPerPage)
    };
    setPagination(newPagination);
    
    // Load data with new page size
    loadProviders(filters, newPagination);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-16 bg-white shadow-lg border-r border-gray-200">
        <div className="flex flex-col items-center py-4 space-y-4">
          {/* Menu Icon */}
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* User Icon */}
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Additional nav items */}
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-16">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-semibold text-gray-900">Provider Listing</h1>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5l-5-5h5v-12" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              {/* Run Date Range Picker */}
              <div>
                <DateRangePicker
                  label="Run Date"
                  value={filters.runDate}
                  onChange={(value) => handleFilterChange('runDate', value)}
                />
              </div>

              {/* State Dropdown */}
              <div>
                <Dropdown
                  label="State"
                  value={filters.state}
                  options={stateOptions}
                  onChange={(value) => handleFilterChange('state', value)}
                  placeholder="Select state"
                />
              </div>

              {/* Review Status Dropdown */}
              <div>
                <Dropdown
                  label="Review Status"
                  value={filters.reviewStatus}
                  options={reviewStatusOptions}
                  onChange={(value) => handleFilterChange('reviewStatus', value)}
                  placeholder="Select status"
                />
              </div>

              {/* Reset Button */}
              <div>
                <button
                  onClick={handleReset}
                  className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Reset
                </button>
              </div>

              {/* Download Button */}
              <div>
                <button
                  onClick={handleDownload}
                  className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-6">
            <p className="text-sm text-gray-700 mb-4">
              Showing {Math.min(pagination.itemsPerPage, pagination.totalItems)} of {pagination.totalItems} Providers
            </p>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                <div className="text-sm text-red-700">{error}</div>
              </div>
            )}

            {/* Loading State */}
            {loading ? (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  <span className="ml-3 text-gray-600">Loading providers...</span>
                </div>
              </div>
            ) : (
              <>
                {/* Provider Table */}
                <ProviderTable providers={providers} />

                {/* Pagination */}
                <Pagination
                  currentPage={pagination.currentPage}
                  totalPages={pagination.totalPages}
                  itemsPerPage={pagination.itemsPerPage}
                  totalItems={pagination.totalItems}
                  onPageChange={handlePageChange}
                  onItemsPerPageChange={handleItemsPerPageChange}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderListing; 