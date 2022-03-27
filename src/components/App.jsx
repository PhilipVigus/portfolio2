import { Box } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import Loading from './loading/Loading';
import Skills from './pages/skills/Skills';
import PageWithHeader from '../layout/PageWithHeader';

function App() {
  return (
    <BrowserRouter>
      <Box bg="white" w="100%" minH="100vh" color="black">
        <Routes>
          <Route path="/loading" element={<Loading />} />
          <Route
            path="/about"
            element={
              <PageWithHeader>
                <About />
              </PageWithHeader>
            }
          />
          <Route
            path="/skills"
            element={
              <PageWithHeader>
                <Skills />
              </PageWithHeader>
            }
          />
          <Route
            path="/projects"
            element={
              <PageWithHeader>
                <Projects />
              </PageWithHeader>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWithHeader>
                <Contact />
              </PageWithHeader>
            }
          />
          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
