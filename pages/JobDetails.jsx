import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import jobs from "../data/jobs";
import "./JobDetails.css";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobs.find(j => j.id === Number(id));

  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [resumeName, setResumeName] = useState("");

  const user = localStorage.getItem("user");

  useEffect(() => {
    if (!job) return;

    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    if (savedJobs.find(j => j.id === job.id)) {
      setSaved(true);
    }

    if (appliedJobs.find(j => j.id === job.id)) {
      setApplied(true);
    }
  }, [job]);

  if (!job) return <h2 className="not-found">Job not found</h2>;

  const handleApply = () => {
    if (!user) {
      alert("Please login to apply");
      navigate("/login");
      return;
    }

    document.getElementById("resumeUpload").click();
  };

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setResumeName(file.name);
    setApplied(true);

    let appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    if (!appliedJobs.find(j => j.id === job.id)) {
      appliedJobs.push(job);
      localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
    }

    alert("Application Submitted Successfully ✅");
  };

  const handleSave = () => {
    if (!user) {
      alert("Please login to save jobs");
      navigate("/login");
      return;
    }

    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

    if (!savedJobs.find(j => j.id === job.id)) {
      savedJobs.push(job);
      localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
      setSaved(true);
      alert("Job Saved Successfully ⭐");
    }
  };

  return (
    <div className="jobdetails-container">
      <div className="jobdetails-card">
        <h1>{job.title}</h1>
        <p className="company">
          {job.company} • {job.location}
        </p>

        <p className="salary"><b>Salary:</b> {job.salary}</p>

        <div className="action-buttons">
          <button 
            className={`apply-btn ${applied ? "applied" : ""}`}
            onClick={handleApply}
            disabled={applied}
          >
            {applied ? "Applied ✓" : "Apply"}
          </button>

          <button 
            className={`save-btn ${saved ? "saved" : ""}`}
            onClick={handleSave}
            disabled={saved}
          >
            {saved ? "Saved ✓" : "Save"}
          </button>

          <input
            type="file"
            id="resumeUpload"
            style={{ display: "none" }}
            onChange={handleResumeUpload}
          />
        </div>

        {resumeName && (
          <p className="resume-name">
            Uploaded Resume: <b>{resumeName}</b>
          </p>
        )}

        <hr />

        <h3>About the job</h3>
        <p>{job.description}</p>

        <h3>Responsibilities</h3>
        <ul>
          {job.responsibilities?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Requirements</h3>
        <ul>
          {job.requirements?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Preferred Qualifications</h3>
        <ul>
          {job.preferred?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Desired Skills & Experience</h3>
        <p>{job.skills}</p>
      </div>
    </div>
  );
}

export default JobDetails;
