import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/contact/ContactPage';
import ProjectPage from './components/Projects/ProjectPage';
import ProfilePage from './components/Profile/ProfilePage';
import RequestQuote from './components/RequestQuote/RequestQuote';
import ScrollToTop from './components/Global/ScrollToTop';
import CareerPage from './components/Career/CareerPage';


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/service' element={<ProjectPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/request-quote' element={<RequestQuote />} />
      <Route path='/career' element={<CareerPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
