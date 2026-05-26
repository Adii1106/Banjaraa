import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Explore from "../pages/Explore";
import Community from "../pages/Community";
import Signup from "../pages/Signup";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/explore" element={<Explore />} />

        <Route path="/community" element={<Community />} />

        <Route path="/signup" element={<Signup />} />


      </Routes>
    </BrowserRouter>
  );
}