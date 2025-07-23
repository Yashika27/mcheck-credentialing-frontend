import React from 'react';

const OtherAttributeCard = ({ attribute }) => {
  const getStatusColor = (type) => {
    switch (type) {
      case 'Medical School':
        return 'text-green-600';
      case 'DEA Certification':
        return 'text-blue-600';
      default:
        return 'text-blue-600';
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case 'Medical School':
        return '📋 Medical School is ✓ Accurate';
      case 'DEA Certification':
        return '📋 DEA Certification';
      default:
        return '📋';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className={`text-xs font-medium ${getStatusColor(attribute.type)}`}>
            {getIcon(attribute.type)}
          </span>
        </div>
        <button className="text-xs text-blue-600 hover:text-blue-800">
          🔗 View Analysis
        </button>
      </div>
      
      <div className="space-y-3">
        {attribute.type === 'Medical School' ? (
          <>
            <div>
              <div className="text-xs text-gray-500">School Name</div>
              <div className="font-medium text-sm">{attribute.schoolName}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Graduation Year</div>
              <div className="font-medium text-sm">{attribute.graduationYear}</div>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="text-xs text-gray-500">Practice Name</div>
              <div className="font-medium text-sm">{attribute.practiceName}</div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <div className="text-gray-500">DEA Number</div>
                <div className="font-medium">{attribute.deaNumber}</div>
              </div>
              <div>
                <div className="text-gray-500">Expiry Date</div>
                <div className="font-medium">{attribute.expiryDate}</div>
              </div>
            </div>
          </>
        )}
      </div>
      
      <div className="border-t border-gray-200 pt-3">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500 mb-1">My Notes</div>
            <button className="text-xs text-blue-600 hover:text-blue-800">
              📝 Add Note
            </button>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Assignee</div>
            <div className="text-xs text-blue-600">👤 Ajay Shivhare</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherAttributeCard; 