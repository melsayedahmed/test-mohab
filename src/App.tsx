import { ThemeProvider } from './contexts/ThemeContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ProjectDetails from './components/ProjectDetails';
import ContactPage from './components/ContactPage';
import BlogsPage from './components/BlogsPage';
import BlogDetailPage from './components/BlogDetailPage';
import YouTubePage from './components/YouTubePage';
import GlobalMap from './components/GlobalMap';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <ThemeProvider>
      <Preloader />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/youtube" element={<YouTubePage />} />
            <Route path="/map" element={<GlobalMap />} />
          </Routes>
          <Footer />
        </div>
        <WhatsAppButton />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;