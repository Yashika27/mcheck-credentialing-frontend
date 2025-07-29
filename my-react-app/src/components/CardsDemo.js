import React from 'react';
import CardsContainer from './CardsContainer';

const CardsDemo = () => {
  // Sample provider ID - in a real app, this would come from props or routing
  const sampleProviderId = "12345";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Provider Credentialing Cards</h1>
          <p className="mt-2 text-gray-600">
            Comprehensive view of provider certifications, licenses, work experience, and more
          </p>
        </div>

        {/* Cards Container */}
        <CardsContainer providerId={sampleProviderId} />
      </div>
    </div>
  );
};

export default CardsDemo;