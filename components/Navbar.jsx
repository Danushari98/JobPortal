import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaSearch,
  FaBell,
  FaUserCircle,
  FaHome,
  FaBriefcase,
  FaEnvelope,
  FaSignInAlt,
  FaUserPlus
} from "react-icons/fa";

import jobs from "../data/jobs";
import "./Navbar.css";

function Navbar({ setFilteredJobs }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = jobs.filter(job =>
      job.title.toLowerCase().includes(value.toLowerCase()) ||
      job.location.toLowerCase().includes(value.toLowerCase()) ||
      job.company.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredJobs(filtered);
  };

  return (
    <nav className="navbar">
      {/* LEFT LOGO */}
      <div className="nav-left">
        <FaBriefcase className="logo-icon" />
        <span className="logo-text">JobPortal</span>
      </div>

      {/* SEARCH */}
      <div className="nav-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search jobs, company, location..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* LINKS */}
      <div className="nav-links">
        <Link to="/"><FaHome /> Home</Link>

        {/* JOBS ICON */}
        <Link to="/jobs"><FaBriefcase /> Jobs</Link>

        {/* MESSAGING */}
        <Link to="/messages"><FaEnvelope /> Messaging</Link>

        {/* NOTIFICATION */}
        <Link to="/notifications"><FaBell /> Notifications</Link>

        {/* LOGIN ICON */}
        <Link to="/login"><FaSignInAlt /> Login</Link>

        {/* SIGNUP ICON */}
        <Link to="/register" className="signup-btn">
          <FaUserPlus /> Signup
        </Link>

        {/* PROFILE */}
        <Link to="/profile">
          <FaUserCircle className="profile-icon" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
