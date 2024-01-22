import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function App() {
  const [selectedImageData, setSelectedImageData] = React.useState(null);

  return (
    <>
      {
        Boolean(selectedImageData) &&
        <Lightbox
          plugins={[Captions, Counter, Fullscreen, Thumbnails, Slideshow]}
          counter={{ container: { style: { top: "unset", bottom: 20 } } }}
          open={Boolean(selectedImageData)}
          close={() => setSelectedImageData(null)}
          slides={selectedImageData?.images}
        />
      }
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio setSelectedImageData={setSelectedImageData} />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;