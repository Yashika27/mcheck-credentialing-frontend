import React from 'react';

const WorkExperienceCard = ({ experience }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-3 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-medium text-blue-600">💼 Work Experience</span>
        </div>
        <button className="text-xs text-blue-600 hover:text-blue-800">
          🔗 View Analysis
        </button>
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="text-xs text-gray-500">Organization Name</div>
          <div className="font-medium text-sm">{experience.organizationName}</div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <div className="text-gray-500">Start Date</div>
            <div className="font-medium">{experience.startDate}</div>
          </div>
          <div>
            <div className="text-gray-500">Tenure</div>
            <div className="font-medium">{experience.tenure}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-2 text-xs">
          <div>
            <div className="text-gray-500">Address1</div>
            <div className="font-medium">{experience.address}</div>
          </div>
          <div>
            <div className="text-gray-500">City</div>
            <div className="font-medium">{experience.city}</div>
          </div>
          <div>
            <div className="text-gray-500">State</div>
            <div className="font-medium">{experience.state}</div>
          </div>
          <div>
            <div className="text-gray-500">ZIP</div>
            <div className="font-medium">{experience.zip}</div>
          </div>
          <div>
            <div className="text-gray-500">Phone</div>
            <div className="font-medium">{experience.phone}</div>
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

export default WorkExperienceCard; 