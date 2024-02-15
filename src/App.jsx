import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Projects from './pages/Projects';
import AppLayout from './ui/AppLayout';
import Experience from './pages/Experience';
import Skills from './pages/Skills';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="homepage" replace />} />
          <Route path="homepage" element={<Homepage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
