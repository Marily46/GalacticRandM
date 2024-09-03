import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DetailsPageCharacter, DetailsPageEpisode, DetailsPageLocation, ListPageCharacter, ListPageEpisode, ListPageLocations, Navbar } from './pages';



const AppRouter: React.FC = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/character" element={<ListPageCharacter />} />
        <Route path="/character/:id" element={<DetailsPageCharacter />} />
        <Route path="/location" element={<ListPageLocations />} />
        <Route path="/location/:id" element={<DetailsPageLocation />} />
        <Route path="/episode" element={<ListPageEpisode />} />
        <Route path="/episode/:id" element={<DetailsPageEpisode />} />

      </Routes>
    </Router>
  );
};

export default AppRouter;
