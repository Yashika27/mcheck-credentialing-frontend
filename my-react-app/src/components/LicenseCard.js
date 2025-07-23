import React from 'react';

const LicenseCard = ({ license }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-green-600">👤 License is ✓ Accurate</span>
        </div>
        <button className="text-xs text-blue-600 hover:text-blue-800">
          🔗 View Analysis
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="grid grid-cols-6 gap-2 text-xs text-gray-500">
          <div>Number</div>
          <div>State</div>
          <div>Board</div>
          <div>Type</div>
          <div>Issue Date</div>
          <div>Expiry Date</div>
        </div>
        <div className="grid grid-cols-6 gap-2 text-xs font-medium">
          <div>{license.number}</div>
          <div>{license.state}</div>
          <div>{license.board}</div>
          <div>{license.type}</div>
          <div>{license.issueDate}</div>
          <div>{license.expiryDate}</div>
        </div>
        <div className="flex justify-end">
          <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
            Active
          </span>
        </div>
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

export default LicenseCard; 