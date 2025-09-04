// Import react components
import React from 'react';
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import { styled } from "styled-components"

// Import project's components
import Header from './components/Header';
import Footer from './components/Footer';
import { UserProvider } from './contexts/UserContext';

// ADMIN
import HeaderAdmin from './components/admin/HeaderAdmin';

// Import project's pages
import Home from './pages/Home'
import Error from './pages/Error'
import Dishes from './pages/Dishes'
import ClientComments from './pages/Comments'
import OurTeamPage from './pages/OurTeam'
import Register from './pages/Register'
import LogIn from './pages/LogIn'
import DashBoard from './pages/admin/DashBoard';

// Import Styles
import './index.css'
import SideBar from './components/admin/SideBar';
import UserManager from './pages/admin/UserManager';
import MenuManager from './pages/admin/MenuManager';

// CSS style
const Content = styled.div`
  flex: 1;
  padding: 20px;
`

// End CSS style

// Root initialization
const root = ReactDOM.createRoot(document.getElementById('root'));

// Manage the components for the administrator interfaces
function Layout() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <>
      {isAdmin ? <><HeaderAdmin /> <SideBar/></>: <Header />}
      {/* Will contains all the routes */}
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
          <Content>
            <Routes>
              {/* Create each route */}
              <Route path="/" element={<Home />} />
              <Route path="/dishes" element={<Dishes />} />
              <Route path="/review" element={<ClientComments/>} />
              <Route path="/staff" element={<OurTeamPage/>} />
              <Route path="/register" element={<Register />} />
              <Route path="/logIn" element={<LogIn />} />

              {/* ADMIN routes */}
              <Route path="/admin" element={<DashBoard />} />
              <Route path="/admin/users" element={<UserManager />} />
              <Route path="/admin/menu" element={<MenuManager />}/>
              {/* Display an error page for all the url that doesn't match any route */}
              <Route path="*" element={<Error />}/>
            </Routes>
          </Content>
        </div>
        {!isAdmin ? <Footer />:<div></div>}
    </>
  );
}

root.render(
  <React.StrictMode>
    <UserProvider>
      {/* Creation of the Browser router */}
      <Router>
        <Layout />
      </Router>
    </UserProvider>
  </React.StrictMode>
);