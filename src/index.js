// Import react components
import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Import project's components
import Header from './components/Header';
import Footer from './components/Footer';

// Import project's pages
import Home from './pages/Home'
import Error from './pages/Error';

// Import Styles
import './index.css'

// Root initialization
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Creation of the Browser router */}
    <Router>
      <Header/>
      {/* Will contains all the routes */}
      <Routes>
        {/* Create each route */}
        <Route path="/" element={<Home />} />
        {/* Display an error page for all the url that doesn't match any route */}
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);