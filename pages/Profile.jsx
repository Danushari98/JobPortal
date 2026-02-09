import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [savedJobs, setSavedJobs] = useState([]);
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    const jobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    setSavedJobs(jobs);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h2>Welcome, {user}</h2>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>

        <h3>Saved Jobs</h3>

        {savedJobs.length === 0 ? (
          <p>No jobs saved yet.</p>
        ) : (
          savedJobs.map(job => (
            <div key={job.id} className="saved-job">
              <h4>{job.title}</h4>
              <p>{job.company} • {job.location}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Profile;
