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

// New function to fetch cards data for all categories
export const fetchCardsData = async (providerId) => {
  // Use mock API for development or when real API is not available
  if (USE_MOCK_API) {
    return await mockFetchCardsData(providerId);
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/providers/${providerId}/cards`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cards data:', error);
    // Fallback to mock API if real API fails
    console.log('Falling back to mock cards API');
    return await mockFetchCardsData(providerId);
  }
};

// Mock function for development
const mockFetchCardsData = async (providerId) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    certifications: [
      {
        id: 1,
        specialty: "Internal Medicine",
        boardName: "American Board of Internal Medicine",
        issueDate: "2020-05-15",
        expiryDate: "2030-05-15"
      },
      {
        id: 2,
        specialty: "Cardiology",
        boardName: "American Board of Cardiovascular Disease",
        issueDate: "2021-03-20",
        expiryDate: "2031-03-20"
      }
    ],
    boardActions: [
      {
        id: 1,
        status: "Active",
        actionDate: "2023-01-15",
        description: "License renewal completed"
      }
    ],
    workExperience: [
      {
        id: 1,
        organizationName: "Mayo Clinic",
        startDate: "2020-01-01",
        tenure: "4 years 1 month",
        address: "200 First St SW",
        city: "Rochester",
        state: "MN",
        zip: "55905",
        phone: "(507) 284-2511"
      },
      {
        id: 2,
        organizationName: "Cleveland Clinic",
        startDate: "2018-06-01",
        tenure: "2 years",
        address: "9500 Euclid Ave",
        city: "Cleveland",
        state: "OH",
        zip: "44195",
        phone: "(216) 444-2200"
      },
      {
        id: 3,
        organizationName: "Johns Hopkins Hospital",
        startDate: "2016-07-01",
        tenure: "2 years",
        address: "1800 Orleans St",
        city: "Baltimore",
        state: "MD",
        zip: "21287",
        phone: "(410) 955-5000"
      }
    ],
    licenses: [
      {
        id: 1,
        number: "MD12345",
        state: "CA",
        board: "Medical Board of California",
        type: "MD",
        issueDate: "2020-01-15",
        expiryDate: "2025-01-15"
      },
      {
        id: 2,
        number: "NY67890",
        state: "NY",
        board: "New York State Board",
        type: "MD",
        issueDate: "2020-02-01",
        expiryDate: "2025-02-01"
      },
      {
        id: 3,
        number: "FL11111",
        state: "FL",
        board: "Florida Board of Medicine",
        type: "MD",
        issueDate: "2020-03-01",
        expiryDate: "2025-03-01"
      },
      {
        id: 4,
        number: "TX22222",
        state: "TX",
        board: "Texas Medical Board",
        type: "MD",
        issueDate: "2020-04-01",
        expiryDate: "2025-04-01"
      },
      {
        id: 5,
        number: "IL33333",
        state: "IL",
        board: "Illinois Department of Financial and Professional Regulation",
        type: "MD",
        issueDate: "2020-05-01",
        expiryDate: "2025-05-01"
      }
    ],
    otherAttributes: [
      {
        id: 1,
        type: "Medical School",
        schoolName: "Harvard Medical School",
        graduationYear: "2018"
      },
      {
        id: 2,
        type: "DEA Certification",
        practiceName: "Downtown Medical Center",
        deaNumber: "BX1234567",
        expiryDate: "2025-08-15"
      }
    ]
  };
}; 