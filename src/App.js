import React, { useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Repository from "./components/Repository";
import ComingSoon from "./components/ComingSoon";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("isAuthenticated") === "true"
  );
  const location = useLocation();

  const shouldShowNavbar = isAuthenticated && location.pathname !== "/signin";

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <div className="font-Inter flex flex-col lg:flex-row h-screen">
      {shouldShowNavbar && <Navbar onLogout={handleLogout} />}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          {!isAuthenticated && (
            <>
              <Route
                path="/signin"
                element={<Signin onLogin={handleLogin} />}
              />
              <Route path="*" element={<Navigate to="/signin" />} />
            </>
          )}
          {isAuthenticated && (
            <>
              <Route path="/" element={<Repository />} />
              <Route path="/ai-code-review" element={<ComingSoon />} />
              <Route path="//cloud-security" element={<ComingSoon />} />
              <Route path="/how-to-use" element={<ComingSoon />} />
              <Route path="/settings" element={<ComingSoon />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
      </div>
    </div>
  );
};

export default App;
