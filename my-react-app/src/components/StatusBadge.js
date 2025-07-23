import React from 'react';

const StatusBadge = ({ status }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Preliminary Review':
        return 'bg-orange-100 text-orange-800';
      case 'Committee Review':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`inline-flex px-1.5 py-0.5 text-xs font-medium rounded-full ${getStatusStyles(status)}`}>
      {status}
    </span>
  );
};

export default StatusBadge; 