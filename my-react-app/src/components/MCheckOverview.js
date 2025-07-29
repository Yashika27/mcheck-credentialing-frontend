import React from 'react';

const MCheckOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-6">
      <h2 className="text-md font-semibold text-gray-900 mb-3">MCheck R3 Overview</h2>
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          <span className="text-xs text-gray-700">Given License number is <strong>Active</strong> and <strong>Accurate</strong></span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          <span className="text-xs text-gray-700"><strong>Issue Date</strong> and <strong>Expiry Date</strong> are correct</span>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Evidence Breakdown</h3>
        <div className="text-xs text-gray-700 mb-2">
          MCheck found this License to be <span className="text-green-600 font-medium">Accurate</span>.
        </div>
        
        <div className="space-y-1">
          <details className="border border-gray-200 rounded">
            <summary className="px-2 py-1.5 cursor-pointer text-xs font-medium text-gray-700 hover:bg-gray-50">
              🔄 License was a match in T:
            </summary>
            <div className="px-2 py-1.5 border-t border-gray-200 text-xs text-gray-600">
              License match details would be shown here.
            </div>
          </details>
          
          <details className="border border-gray-200 rounded">
            <summary className="px-2 py-1.5 cursor-pointer text-xs font-medium text-gray-700 hover:bg-gray-50">
              🔄 License was not a match in O:
            </summary>
            <div className="px-2 py-1.5 border-t border-gray-200 text-xs text-gray-600">
              No match details would be shown here.
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default MCheckOverview;