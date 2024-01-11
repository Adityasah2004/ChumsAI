import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const DashboardRoutes = () => {
  return (
    <div className="w-full h-full">
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </div>
  );
};

export default DashboardRoutes;
