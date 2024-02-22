import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Projects from './pages/Projects';
import AppLayout from './ui/AppLayout';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
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
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
