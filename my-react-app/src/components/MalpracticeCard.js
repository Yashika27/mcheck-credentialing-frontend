import React from 'react';

const MalpracticeCard = ({ malpractice }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-blue-600">🛡️ Malpractice Insurance</span>
        </div>
        <button className="text-xs text-blue-600 hover:text-blue-800">
          🔗 View Analysis
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-4 text-xs">
          <div>
            <div className="text-gray-500">Carrier Name</div>
            <div className="font-medium">{malpractice.carrierName}</div>
          </div>
          <div>
            <div className="text-gray-500">Policy Number</div>
            <div className="font-medium">{malpractice.policyNumber}</div>
          </div>
          <div>
            <div className="text-gray-500">Amount ($)</div>
            <div className="font-medium">{malpractice.amount}</div>
          </div>
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

export default MalpracticeCard; 