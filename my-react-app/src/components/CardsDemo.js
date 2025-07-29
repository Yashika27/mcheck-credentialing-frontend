import React from 'react';
import CardsContainer from './CardsContainer';
import MCheckOverview from './MCheckOverview';

const CardsDemo = () => {
  // Sample provider ID - in a real app, this would come from props or routing
  const sampleProviderId = "12345";

  const handleBack = () => {
    // In a real app, this would navigate back
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-1">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleBack}
                className="p-1 text-gray-600 hover:text-gray-900"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h1 className="text-xl font-semibold text-gray-900">Provider Credentialing Cards</h1>
            </div>
            <div className="flex items-center space-x-3">
              <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Inbox
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-1 py-6">
        <div className="grid grid-cols-12 gap-4">
          {/* Left Section - Cards (3/4 of screen) */}
          <div className="col-span-9 space-y-4">
            <CardsContainer providerId={sampleProviderId} />
          </div>

          {/* Right Section - MCheck R3 Overview (1/4 of screen) */}
          <div className="col-span-3">
            <MCheckOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsDemo;