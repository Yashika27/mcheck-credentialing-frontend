import React, { useState } from 'react';

const ExpandableCard = ({ 
  title, 
  count, 
  status, 
  children, 
  defaultExpanded = true,
  onViewAnalysis,
  showViewAnalysis = true,
  collapsible = false
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Accurate':
        return 'text-green-600';
      case 'Active':
        return 'text-blue-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-4">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {collapsible ? (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center space-x-2 text-left"
              >
                <svg
                  className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <h3 className="text-sm font-medium text-gray-900">
                  {title} {count && <span className="text-gray-500">({count})</span>}
                </h3>
              </button>
            ) : (
              <h3 className="text-sm font-medium text-gray-900">
                {title} {count && <span className="text-gray-500">({count})</span>}
              </h3>
            )}
            {status && (
              <span className={`text-xs font-medium ${getStatusColor(status)}`}>
                ✓ {status}
              </span>
            )}
          </div>
          {showViewAnalysis && (
            <button
              onClick={onViewAnalysis}
              className="text-xs text-blue-600 hover:text-blue-800"
            >
              🔗 View Analysis
            </button>
          )}
        </div>
      </div>
      
      {(isExpanded || !collapsible) && (
        <div className="px-6 py-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableCard; 