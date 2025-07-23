// Mock API service for development
const mockProviders = [
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
    npi: '1255889904',
    name: 'JANE SMITH',
    license: 'AP132458',
    dob: '03/15/1988',
    gender: 'F',
    specialty: 'CARDIOLOGY',
    state: 'GA',
    healthScore: 78,
    lastUpdated: '07/17/2025',
    reviewStatus: 'Approved'
  },
  {
    id: 4,
    npi: '1255889905',
    name: 'MICHAEL JOHNSON',
    license: 'AP132459',
    dob: '07/22/1985',
    gender: 'M',
    specialty: 'NEUROLOGY',
    state: 'VA',
    healthScore: 92,
    lastUpdated: '07/17/2025',
    reviewStatus: 'Committee Review'
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

export const mockFetchProviders = async (filters) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filteredData = [...mockProviders];

  // Apply filters
  if (filters.state && filters.state !== '') {
    filteredData = filteredData.filter(provider => provider.state === filters.state);
  }

  if (filters.reviewStatus && filters.reviewStatus !== '') {
    filteredData = filteredData.filter(provider => provider.reviewStatus === filters.reviewStatus);
  }

  // Apply pagination
  const pageSize = filters.pageSize || 10;
  const pageNo = filters.pageNo || 1;
  const startIndex = (pageNo - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  return {
    data: paginatedData,
    totalItems: filteredData.length,
    currentPage: pageNo,
    pageSize: pageSize,
    totalPages: Math.ceil(filteredData.length / pageSize)
  };
}; 