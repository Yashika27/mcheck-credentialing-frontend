import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProviderListing from './components/ProviderListing';
import ProviderDetail from './components/ProviderDetail';
import CardsDemo from './components/CardsDemo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProviderListing />} />
          <Route path="/provider/:id" element={<ProviderDetail />} />
          <Route path="/cards-demo" element={<CardsDemo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
