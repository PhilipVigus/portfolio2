import { Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Loading from './loading/Loading';
import Header from './header/Header';
import Skills from './pages/skills/Skills';

function App() {
  return (
    <BrowserRouter>
      <Box bg="white" w="100%" minH="100vh" color="black">
        <Routes>
          <Route path="/loading" element={<Loading />} />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <About />
              </>
            }
          />
          <Route
            path="/skills"
            element={
              <>
                <Header />
                <Skills />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Header />
                <Projects />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
              </>
            }
          />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
