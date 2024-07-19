import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AboutPage from './components/AboutPage/AboutPage';
import ContactPage from './components/contact/ContactPage';
import ProjectPage from './components/Projects/ProjectPage';
import ProfilePage from './components/Profile/ProfilePage';
import RequestQuote from './components/RequestQuote/RequestQuote';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path='/projects' element={<ProjectPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/request-quote' element={<RequestQuote />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
