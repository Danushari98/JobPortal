import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Jobs from "../pages/Jobs.jsx";
import JobDetails from "../pages/JobDetails.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Profile from "../pages/Profile.jsx";
import Messages from "../pages/Message.jsx";
import Notifications from "../pages/Notifications.jsx";

function AppRoutes({ filteredJobs }) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jobs" element={<Jobs jobs={filteredJobs} />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}

export default AppRoutes;
