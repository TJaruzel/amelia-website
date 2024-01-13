import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import LogoCollection from './Components/Portfolio/PortfolioCollections/LogoCollection';
import BrandingCollection from './Components/Portfolio/PortfolioCollections/BrandingCollection';
import EditorialCollection from './Components/Portfolio/PortfolioCollections/EditorialCollection';
import WebCollection from './Components/Portfolio/PortfolioCollections/WebCollection';
import IllustrationCollection from './Components/Portfolio/PortfolioCollections/IllustrationCollection';
import PhotographyCollection from './Components/Portfolio/PortfolioCollections/PhotographyCollection';
import Project from './Components/Portfolio/Project';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio-collections/logo" element={<LogoCollection />} />
        <Route path="/portfolio-collections/logo/:project?" element={<Project />} />
        <Route path="/portfolio-collections/branding" element={<BrandingCollection />} />
        <Route path="/portfolio-collections/branding/:project?" element={<Project />} />
        <Route path="/portfolio-collections/editorial" element={<EditorialCollection />} />
        <Route path="/portfolio-collections/editorial/:project?" element={<Project />} />
        <Route path="/portfolio-collections/web" element={<WebCollection />} />
        <Route path="/portfolio-collections/web/:project?" element={<Project />} />
        <Route path="/portfolio-collections/illustration" element={<IllustrationCollection />} />
        <Route path="/portfolio-collections/illustration/:project?" element={<Project />} />
        <Route path="/portfolio-collections/photography" element={<PhotographyCollection />} />
        <Route path="/portfolio-collections/photography/:project?" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;