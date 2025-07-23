import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBadge from './StatusBadge';

const ProviderTable = ({ providers = [] }) => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [selectAll, setSelectAll] = useState(false);

  // Sample data matching the screenshot
  const sampleProviders = [
    {
      id: 1,
      npi: '1255889903',
      name: 'DAVID JACOB KAMAN',
      license: 'AP132457',
      dob: '02/05/1986',
      gender: 'M',
      specialty: 'FAMILY MEDICINE',
      state: 'TX',
      healthScore: 45,
      lastUpdated: '07/17/2025',
      reviewStatus: 'Preliminary Review'
    },
    {
      id: 2,
      npi: '1255889903',
      name: 'DAVID JACOB KAMAN',
      license: 'AP132457',
      dob: '02/05/1986',
      gender: 'M',
      specialty: 'FAMILY MEDICINE',
      state: 'TX',
      healthScore: 45,
      lastUpdated: '07/17/2025',
      reviewStatus: 'Approved'
    },
    {
      id: 3,
      npi: '1255889903',
      name: 'DAVID JACOB KAMAN',
      license: 'AP132457',
      dob: '02/05/1986',
      gender: 'M',
      specialty: 'FAMILY MEDICINE',
      state: 'TX',
      healthScore: 45,
      lastUpdated: '07/17/2025',
      reviewStatus: 'Preliminary Review'
    },
    {
      id: 4,
      npi: '1255889903',
      name: 'DAVID JACOB KAMAN',
      license: 'AP132457',
      dob: '02/05/1986',
      gender: 'M',
      specialty: 'FAMILY MEDICINE',
      state: 'TX',
      healthScore: 45,
      lastUpdated: '07/17/2025',
      reviewStatus: 'Preliminary Review'
    },
    {
      id: 5,
      npi: '1255889903',
      name: 'DAVID JACOB KAMAN',
      license: 'AP132457',
      dob: '02/05/1986',
      gender: 'M',
      specialty: 'FAMILY MEDICINE',
      state: 'TX',
      healthScore: 0,
      lastUpdated: '07/17/2025',
      reviewStatus: 'Rejected'
    },
    {
      id: 6,
      npi: '1255889903',
      name: 'DAVID JACOB KAMAN',
      license: 'AP132457',
      dob: '02/05/1986',
      gender: 'M',
      specialty: 'FAMILY MEDICINE',
      state: 'TX',
      healthScore: 45,
      lastUpdated: '07/17/2025',
      reviewStatus: 'Preliminary Review'
    },
    {
      id: 7,
      npi: '1255889903',
      name: 'DAVID JACOB KAMAN',
      license: 'AP132457',
      dob: '02/05/1986',
      gender: 'M',
      specialty: 'FAMILY MEDICINE',
      state: 'TX',
      healthScore: 45,
      lastUpdated: '07/17/2025',
      reviewStatus: 'Committee Review'
    },
    {
      id: 8,
      npi: '1255889903',
      name: 'DAVID JACOB KAMAN',
      license: 'AP132457',
      dob: '02/05/1986',
      gender: 'M',
      specialty: 'FAMILY MEDICINE',
      state: 'TX',
      healthScore: 45,
      lastUpdated: '07/17/2025',
      reviewStatus: 'Approved'
    },
    {
      id: 9,
      npi: '1255889903',
      name: 'DAVID JACOB KAMAN',
      license: 'AP132457',
      dob: '02/05/1986',
      gender: 'M',
      specialty: 'FAMILY MEDICINE',
      state: 'TX',
      healthScore: 45,
      lastUpdated: '07/17/2025',
      reviewStatus: 'Preliminary Review'
    },
    {
      id: 10,
      npi: '1255889903',
      name: 'DAVID JACOB KAMAN',
      license: 'AP132457',
      dob: '02/05/1986',
      gender: 'M',
      specialty: 'FAMILY MEDICINE',
      state: 'TX',
      healthScore: 45,
      lastUpdated: '07/17/2025',
      reviewStatus: 'Preliminary Review'
    }
  ];

  // Use API data if available, otherwise show sample data for development
  const dataToDisplay = providers.length > 0 ? providers : sampleProviders;

  // Show empty state when no data from API and no sample data
  const hasData = dataToDisplay.length > 0;

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(dataToDisplay.map(provider => provider.id)));
    }
    setSelectAll(!selectAll);
  };

  const handleSelectRow = (id) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }
    setSelectedRows(newSelectedRows);
    setSelectAll(newSelectedRows.size === dataToDisplay.length);
  };

  const handleProviderClick = (providerId) => {
    navigate(`/provider/${providerId}`);
  };

  const getHealthScoreColor = (score) => {
    if (score === 0) return 'text-red-600';
    if (score < 50) return 'text-orange-600';
    return 'text-green-600';
  };

  // If API is being used and returns no data, show empty state
  if (providers.length === 0 && sampleProviders.length > 0) {
    return (
      <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-8">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No providers found</h3>
          <p className="mt-1 text-sm text-gray-500">
            No providers match the selected criteria. Try adjusting your filters.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-3 py-2 text-left">
                <input
                  type="checkbox"
                  className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-tight">
                NPI
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-tight">
                NAME
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-tight">
                LICENSE
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-tight">
                DOB
              </th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-tight">
                GENDER
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-tight">
                SPECIALTY
              </th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-tight">
                STATE
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-tight">
                HEALTH SCORE
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-tight">
                LAST UPDATED
              </th>
              <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-tight">
                REVIEW STATUS
              </th>
              <th className="px-2 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-tight">
                
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dataToDisplay.map((provider) => (
              <tr key={provider.id} className="hover:bg-gray-50">
                <td className="px-3 py-3 whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="h-3 w-3 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={selectedRows.has(provider.id)}
                    onChange={() => handleSelectRow(provider.id)}
                  />
                </td>
                <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-900">
                  {provider.npi}
                </td>
                <td className="px-3 py-3 whitespace-nowrap text-xs font-medium text-gray-900">
                  {provider.name}
                </td>
                <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-900">
                  {provider.license}
                </td>
                <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-900">
                  {provider.dob}
                </td>
                <td className="px-2 py-3 whitespace-nowrap text-xs text-gray-900">
                  {provider.gender}
                </td>
                <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-900">
                  {provider.specialty}
                </td>
                <td className="px-2 py-3 whitespace-nowrap text-xs text-gray-900">
                  {provider.state}
                </td>
                <td className="px-3 py-3 whitespace-nowrap text-xs">
                  <span className={`font-medium ${getHealthScoreColor(provider.healthScore)}`}>
                    {provider.healthScore}%
                  </span>
                </td>
                <td className="px-3 py-3 whitespace-nowrap text-xs text-gray-900">
                  {provider.lastUpdated}
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <StatusBadge status={provider.reviewStatus} />
                </td>
                <td className="px-2 py-3 whitespace-nowrap text-right text-xs font-medium">
                  <button 
                    onClick={() => handleProviderClick(provider.id)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProviderTable; 