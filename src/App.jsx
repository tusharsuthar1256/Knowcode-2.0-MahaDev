import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/home.jsx';
import About from './Pages/About/about';
import InfoActivity from './Pages/Info activity/infoActivity';
import Nav from './Components/Nav/nav.jsx';
import Contact from './Pages/Contact/contact.jsx';
import Signup from './Pages/Signup.jsx';
import PublicRoute from "../src/utils/PublicRoute.jsx";
import PrivateRoute from './utils/PrivateRoute.jsx';
import { signOut } from 'firebase/auth';
import { auth } from './utils/firebase.js';
import Dashboard from './Pages/Dashboard/dashboard.jsx';

function App() {
  const location = useLocation();

  const handleLogout = async () => {
    await signOut(auth);
  };

  // Define the paths where the Nav component should not be displayed
  const hideNavPaths = ['/dashboard'];

  return (
    <>
      {/* Render Nav only if the current path is not in the hideNavPaths array */}
      {!hideNavPaths.includes(location.pathname) && <Nav onclick={handleLogout} />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route path="/info-activity" element={<InfoActivity />} /> {/* Fixed the path */}
      </Routes>
    </>
  );
}

export default App;
