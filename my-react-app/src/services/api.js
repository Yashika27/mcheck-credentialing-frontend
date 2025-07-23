import { mockFetchProviders } from './mockApi';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';
const USE_MOCK_API = process.env.REACT_APP_USE_MOCK_API === 'true' || true; // Set to true for development

export const fetchProviders = async (filters) => {
  // Use mock API for development or when real API is not available
  if (USE_MOCK_API) {
    return await mockFetchProviders(filters);
  }

  try {
    const payload = {
      runDate: filters.runDate || "",
      state: filters.state || "",
      reviewStatus: filters.reviewStatus || "",
      pageNo: filters.pageNo || 1,
      pageSize: filters.pageSize || 10,
      sortBy: filters.sortBy || "",
      sortOrder: filters.sortOrder || ""
    };

    const response = await fetch(`${API_BASE_URL}/api/providers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching providers:', error);
    // Fallback to mock API if real API fails
    console.log('Falling back to mock API');
    return await mockFetchProviders(filters);
  }
}; 