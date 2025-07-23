# API Integration Documentation

## Provider API Integration

The Provider Listing page has been integrated with a dynamic API to fetch provider data based on user-selected filters.

### API Endpoint Details

**Endpoint:** `/api/providers`  
**Method:** `POST`  
**Content-Type:** `application/json`

### Request Payload

```json
{
  "runDate": "04/11/23 - 07/12/23",
  "state": "TX",
  "reviewStatus": "Approved",
  "pageNo": 1,
  "pageSize": 10,
  "sortBy": "",
  "sortOrder": ""
}
```

### Response Format

```json
{
  "data": [
    {
      "id": 1,
      "npi": "1255889903",
      "name": "DAVID JACOB KAMAN",
      "license": "AP132457",
      "dob": "02/05/1986",
      "gender": "M",
      "specialty": "FAMILY MEDICINE",
      "state": "TX",
      "healthScore": 45,
      "lastUpdated": "07/17/2025",
      "reviewStatus": "Preliminary Review"
    }
  ],
  "totalItems": 100,
  "currentPage": 1,
  "pageSize": 10,
  "totalPages": 10
}
```

## Implementation Details

### Filter Integration
- **Run Date**: Passed from DateRangePicker selection
- **State**: Mapped from dropdown ("All" becomes empty string)
- **Review Status**: Mapped from dropdown ("All" becomes empty string)
- **Pagination**: Automatic page management with API calls
- **Sorting**: Ready for implementation (currently empty)

### Development Mode

For development and testing, the application uses a mock API service that:

1. **Simulates API delays** (500ms) for realistic testing
2. **Implements filtering** by state and review status
3. **Handles pagination** correctly
4. **Returns proper response format**

### Configuration

To switch between mock and real API:

1. **Use Mock API** (default for development):
   ```javascript
   const USE_MOCK_API = true;
   ```

2. **Use Real API**:
   ```javascript
   const USE_MOCK_API = false;
   ```

3. **Set API Base URL**:
   ```javascript
   const API_BASE_URL = 'https://your-api-domain.com';
   ```

### Error Handling

The implementation includes:

- **Loading states** with spinner
- **Error messages** for failed API calls
- **Fallback to mock API** if real API fails
- **Empty state handling** when no results found

### Filter Behavior

- **Automatic API calls** when filters change
- **Page reset to 1** when filters are applied
- **Real-time updates** based on dropdown selections
- **Reset functionality** clears all filters and reloads data

### Pagination Integration

- **Dynamic page updates** trigger API calls
- **Page size changes** automatically reload data
- **Total count updates** from API response
- **Proper pagination controls** based on total pages

## Testing the Integration

1. **Filter by State**: Select GA or VA to see filtered results
2. **Filter by Review Status**: Select different statuses to see filtering
3. **Pagination**: Change pages to test API pagination
4. **Reset**: Click reset to clear filters and reload all data
5. **Loading States**: Observe loading spinner during API calls

## Production Deployment

Before deploying to production:

1. Set `USE_MOCK_API = false` in `/src/services/api.js`
2. Configure correct `API_BASE_URL` for your environment
3. Ensure your backend API matches the expected request/response format
4. Test error handling with real API endpoints 