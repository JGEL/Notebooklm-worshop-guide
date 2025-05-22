
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import WorkshopStructurePage from './pages/WorkshopStructurePage';
import LearningObjectivesPage from './pages/LearningObjectivesPage';
import NotebookLMInfoPage from './pages/NotebookLMInfoPage';
import MedicalApplicationsPage from './pages/MedicalApplicationsPage';
import ParticipantProfilePage from './pages/ParticipantProfilePage';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-light">
      <Navbar navLinks={NAV_LINKS} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/estructura" element={<WorkshopStructurePage />} />
          <Route path="/objetivos" element={<LearningObjectivesPage />} />
          <Route path="/notebooklm" element={<NotebookLMInfoPage />} />
          <Route path="/aplicaciones" element={<MedicalApplicationsPage />} />
          <Route path="/perfil" element={<ParticipantProfilePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
