import React from 'react';

const CardGrid = ({ title, children, isEmpty }) => {
  if (isEmpty) {
    return (
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-gray-500 text-sm">No {title.toLowerCase()} found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {children}
      </div>
    </div>
  );
};

export default CardGrid;