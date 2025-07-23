import React from 'react';

const BoardActionCard = ({ action }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-orange-600">⚠️ Board Action(s)</span>
        </div>
        <button className="text-xs text-blue-600 hover:text-blue-800">
          🔗 View Analysis
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="grid grid-cols-3 gap-4 text-xs">
          <div>
            <div className="text-gray-500">Status</div>
            <div className="font-medium">{action.status}</div>
          </div>
          <div>
            <div className="text-gray-500">Action Date</div>
            <div className="font-medium">{action.actionDate}</div>
          </div>
          <div>
            <div className="text-gray-500">Description</div>
            <div className="font-medium">{action.description}</div>
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

export default BoardActionCard; 