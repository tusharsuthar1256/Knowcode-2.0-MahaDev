import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/home.jsx";
import About from "./Pages/About/about";
import InfoActivity from "./Pages/Info activity/infoActivity";
import Nav from "./Components/Nav/nav.jsx";
import Sidebar from "./Pages/Dashboard/sidebar/sidebar.jsx";
import Contact from "./Pages/Contact/contact.jsx";
import Signup from "./Pages/Signup.jsx";
import PublicRoute from "../src/utils/PublicRoute.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase.js";
import { AppContext } from "./Context/appContext.jsx"; // Import context
import Dashboard from "./Pages/Dashboard/dashboard.jsx";
import QuizLearning from "./Pages/Dashboard/QuizLearning/Quiz-Learning.jsx";
import ModuleOne from "./Pages/Dashboard/Module1/Module1.jsx";
import Profile from "./Pages/Dashboard/Profile/profile.jsx";
import ModuleTwo from "./Pages/Dashboard/Module1/Module2.jsx";
import ModuleThree from "./Pages/Dashboard/Module1/Module3.jsx";
import Events from "./Pages/Dashboard/Events/events.jsx";

function App() {
  const location = useLocation();
  const { user } = useContext(AppContext); // Consume the context

  const handleLogout = async () => {
    await signOut(auth);
  };

  const hideNavPaths = ["/dashboard", "/signup"];

  return (
    <>
      {/* Render Nav (top nav) only if not authenticated */}
      {!user && !hideNavPaths.includes(location.pathname) && (
        <Nav onClick={handleLogout} />
      )}

      {/* Render Sidebar (after login) if authenticated */}
      {user && <Sidebar onclick={handleLogout} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}


        {/* Private routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Route>
            <Route path="/events" element={<Events/>} />
            <Route path="/quiz-test" element={<QuizLearning />}/>
              <Route path="/module-one" element={<ModuleOne />} />
              <Route path="/module-two" element={<ModuleTwo />} />
              <Route path="/module-three" element={<ModuleThree />} />

        {/* Public routes */}
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route path="/info-activity" element={<InfoActivity />} />
      </Routes>
    </>
  );
}

export default App;
