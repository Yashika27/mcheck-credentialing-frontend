import React from 'react';
import { useNavigate } from 'react-router-dom';
import ExpandableCard from './ExpandableCard';
import LicenseCard from './LicenseCard';
import BoardCertificationCard from './BoardCertificationCard';
import WorkExperienceCard from './WorkExperienceCard';
import OtherAttributeCard from './OtherAttributeCard';
import BoardActionCard from './BoardActionCard';
import MalpracticeCard from './MalpracticeCard';
import SanctionCard from './SanctionCard';

const ProviderDetail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleViewAnalysis = () => {
    console.log('View Analysis clicked');
  };

  const licenseData = [
    {
      number: 'AP132457',
      state: 'TX',
      board: 'TBQN',
      type: 'APRN',
      issueDate: '10/31/2016',
      expiryDate: '02/28/2026'
    },
    {
      number: '910334',
      state: 'TX',
      board: 'TBQN',
      type: 'RN',
      issueDate: '10/17/2016',
      expiryDate: '02/28/2026'
    }
  ];

  const boardCertificationData = [
    {
      specialty: 'Family Medicine',
      boardName: 'American Academy of Nurse Practitioners',
      issueDate: '08/30/2016',
      expiryDate: '08/29/2026'
    },
    {
      specialty: 'Sleep Medicine',
      boardName: 'American Board of Internal Medicine',
      issueDate: '11/16/2009',
      expiryDate: '04/01/2025'
    }
  ];

  const workExperienceData = [
    {
      organizationName: 'Cleburne Family Medicine Associates, PLLC',
      startDate: '08/29/2026',
      tenure: '1 year 11 months',
      address: '310 N Bryant Ave',
      city: 'Sherman',
      state: 'TX',
      zip: '75092',
      phone: '9039570190'
    },
    {
      organizationName: 'Cleburne Family Medicine Associates, PLLC',
      startDate: '08/29/2026',
      tenure: '1 year 11 months',
      address: '310 N Bryant Ave',
      city: 'Sherman',
      state: 'TX',
      zip: '75092',
      phone: '9039570188'
    }
  ];

  const otherAttributesData = [
    {
      type: 'Medical School',
      schoolName: 'Oklahoma City University',
      graduationYear: '08/01/2016'
    },
    {
      type: 'DEA Certification',
      practiceName: 'Cleburne Family Medicine Associates, PLLC',
      deaNumber: 'MD4166775',
      expiryDate: '06/30/2025'
    }
  ];

  const boardActionData = [
    {
      status: 'Found',
      actionDate: '12/27/2023',
      description: 'A patient claimed'
    }
  ];

  const malpracticeData = [
    {
      carrierName: 'ProAssurance',
      policyNumber: 'MP79969',
      amount: '200K'
    }
  ];

  const sanctionData = [
    {
      status: 'Not Found',
      description: 'NONE - Clean Profile'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-16 bg-white shadow-lg border-r border-gray-200">
        <div className="flex flex-col items-center py-4 space-y-4">
          {/* Menu Icon */}
          <button className="p-2 text-gray-600 hover:text-gray-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          {/* User Icon */}
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Additional nav items */}
          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-16">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleBack}
                  className="p-1 text-gray-600 hover:text-gray-900"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Inbox
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-12 gap-6">
            {/* Left Section */}
            <div className="col-span-8 space-y-6">
              
              {/* Provider Basic Info Component */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <div className="grid grid-cols-6 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500">👤 David Jacob Kaman</span>
                    <div className="font-medium text-sm">Name</div>
                  </div>
                  <div>
                    <span className="text-gray-500">NPI</span>
                    <div className="font-medium">1255889903</div>
                  </div>
                  <div>
                    <span className="text-gray-500">NPI Status</span>
                    <div className="font-medium text-blue-600">⚪ Active</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Gender</span>
                    <div className="font-medium">M</div>
                  </div>
                  <div>
                    <span className="text-gray-500">DOB</span>
                    <div className="font-medium">02/05/1986</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Specialty</span>
                    <div className="font-medium">Family Medicine</div>
                  </div>
                </div>
              </div>

              {/* Credential Cards Component */}
              <div className="space-y-4">
              {/* License Records */}
          <div className="mb-4">
            <h3 className="text-xs font-medium text-gray-900 mb-3 flex items-center space-x-2">
              <span>License Record(s) <span className="text-gray-500">(2)</span></span>
              <span className="text-xs font-medium text-green-600">✓ Accurate</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {licenseData.map((license, index) => (
                <LicenseCard key={index} license={license} />
              ))}
            </div>
          </div>

          {/* Board Certifications */}
          <div className="mb-4">
            <h3 className="text-xs font-medium text-gray-900 mb-3 flex items-center space-x-2">
              <span>Board Certification(s) <span className="text-gray-500">(2)</span></span>
              <span className="text-xs font-medium text-green-600">✓ Accurate</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {boardCertificationData.map((certification, index) => (
                <BoardCertificationCard key={index} certification={certification} />
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="mb-4">
            <h3 className="text-xs font-medium text-gray-900 mb-3 flex items-center space-x-2">
              <span>Work Experience(s) <span className="text-gray-500">(2)</span></span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {workExperienceData.map((experience, index) => (
                <WorkExperienceCard key={index} experience={experience} />
              ))}
            </div>
          </div>

          {/* Other Attributes */}
          <div className="mb-4">
            <h3 className="text-xs font-medium text-gray-900 mb-3 flex items-center space-x-2">
              <span>Other Attributes <span className="text-gray-500">(2)</span></span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {otherAttributesData.map((attribute, index) => (
                <OtherAttributeCard key={index} attribute={attribute} />
              ))}
            </div>
          </div>

          {/* Board Actions */}
          <div className="mb-4">
            <h3 className="text-xs font-medium text-gray-900 mb-3">Board Action(s)</h3>
            <div className="grid grid-cols-1 gap-3">
              {boardActionData.map((action, index) => (
                <BoardActionCard key={index} action={action} />
              ))}
            </div>
          </div>

          {/* Malpractice Insurance */}
          <div className="mb-4">
            <h3 className="text-xs font-medium text-gray-900 mb-3">Malpractice Insurance</h3>
            <div className="grid grid-cols-1 gap-3">
              {malpracticeData.map((malpractice, index) => (
                <MalpracticeCard key={index} malpractice={malpractice} />
              ))}
            </div>
          </div>

          {/* Sanctions */}
          <div className="mb-4">
            <h3 className="text-xs font-medium text-gray-900 mb-3">Sanction(s)</h3>
            <div className="grid grid-cols-1 gap-3">
              {sanctionData.map((sanction, index) => (
                <SanctionCard key={index} sanction={sanction} />
              ))}
            </div>
          </div>
                </div>
              </div>

            {/* Right Section - MCheck R3 Overview */}
            <div className="col-span-4">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sticky top-6">
                <h2 className="text-md font-semibold text-gray-900 mb-3">MCheck R3 Overview</h2>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-xs text-gray-700">Given License number is <strong>Active</strong> and <strong>Accurate</strong></span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                    <span className="text-xs text-gray-700"><strong>Issue Date</strong> and <strong>Expiry Date</strong> are correct</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Evidence Breakdown</h3>
                  <div className="text-xs text-gray-700 mb-2">
                    MCheck found this License to be <span className="text-green-600 font-medium">Accurate</span>.
                  </div>
                  
                  <div className="space-y-1">
                    <details className="border border-gray-200 rounded">
                      <summary className="px-2 py-1.5 cursor-pointer text-xs font-medium text-gray-700 hover:bg-gray-50">
                        🔄 License was a match in T:
                      </summary>
                      <div className="px-2 py-1.5 border-t border-gray-200 text-xs text-gray-600">
                        License match details would be shown here.
                      </div>
                    </details>
                    
                    <details className="border border-gray-200 rounded">
                      <summary className="px-2 py-1.5 cursor-pointer text-xs font-medium text-gray-700 hover:bg-gray-50">
                        🔄 License was not a match in O:
                      </summary>
                      <div className="px-2 py-1.5 border-t border-gray-200 text-xs text-gray-600">
                        No match details would be shown here.
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetail; 