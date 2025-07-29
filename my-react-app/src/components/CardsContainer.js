import React, { useState, useEffect } from 'react';
import { fetchCardsData } from '../services/api';
import CardGrid from './CardGrid';
import LicenseCard from './LicenseCard';
import BoardCertificationCard from './BoardCertificationCard';
import WorkExperienceCard from './WorkExperienceCard';
import OtherAttributeCard from './OtherAttributeCard';
import BoardActionCard from './BoardActionCard';

const CardsContainer = ({ providerId }) => {
  const [cardsData, setCardsData] = useState({
    certifications: [],
    boardActions: [],
    workExperience: [],
    licenses: [],
    otherAttributes: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCardsData = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchCardsData(providerId);
        setCardsData(data);
      } catch (err) {
        console.error('Error loading cards data:', err);
        setError('Failed to load cards data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (providerId) {
      loadCardsData();
    }
  }, [providerId]);

  if (loading) {
    return (
      <div className="space-y-6">
        {/* Loading skeleton */}
        {['Board Certifications', 'Board Actions', 'Work Experience', 'Licenses', 'Other Attributes'].map((title, index) => (
          <div key={index} className="mb-6">
            <div className="h-6 bg-gray-200 rounded w-48 mb-4 animate-pulse"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="h-32 bg-gray-100 rounded-lg animate-pulse"></div>
              <div className="h-32 bg-gray-100 rounded-lg animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600 text-sm mb-2">⚠️ Error Loading Data</p>
        <p className="text-red-500 text-xs">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-3 px-4 py-2 bg-red-600 text-white text-xs rounded hover:bg-red-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Board Certifications */}
      <CardGrid 
        title="Board Certifications" 
        isEmpty={!cardsData.certifications || cardsData.certifications.length === 0}
      >
        {cardsData.certifications?.map((certification) => (
          <div key={certification.id} className="mb-4">
            <BoardCertificationCard certification={certification} />
          </div>
        ))}
      </CardGrid>

      {/* Board Actions */}
      <CardGrid 
        title="Board Actions" 
        isEmpty={!cardsData.boardActions || cardsData.boardActions.length === 0}
      >
        {cardsData.boardActions?.map((action) => (
          <div key={action.id} className="mb-4">
            <BoardActionCard action={action} />
          </div>
        ))}
      </CardGrid>

      {/* Work Experience */}
      <CardGrid 
        title="Work Experience" 
        isEmpty={!cardsData.workExperience || cardsData.workExperience.length === 0}
      >
        {cardsData.workExperience?.map((experience) => (
          <div key={experience.id} className="mb-4">
            <WorkExperienceCard experience={experience} />
          </div>
        ))}
      </CardGrid>

      {/* Licenses */}
      <CardGrid 
        title="Licenses" 
        isEmpty={!cardsData.licenses || cardsData.licenses.length === 0}
      >
        {cardsData.licenses?.map((license) => (
          <div key={license.id} className="mb-4">
            <LicenseCard license={license} />
          </div>
        ))}
      </CardGrid>

      {/* Other Attributes */}
      <CardGrid 
        title="Other Attributes" 
        isEmpty={!cardsData.otherAttributes || cardsData.otherAttributes.length === 0}
      >
        {cardsData.otherAttributes?.map((attribute) => (
          <div key={attribute.id} className="mb-4">
            <OtherAttributeCard attribute={attribute} />
          </div>
        ))}
      </CardGrid>
    </div>
  );
};

export default CardsContainer;