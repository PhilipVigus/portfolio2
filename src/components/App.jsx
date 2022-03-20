import './App.css';
import { Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './header/Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Box bg="white" w="100%" color="black">
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
