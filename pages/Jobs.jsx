import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import "./Jobs.css";

function Jobs({ jobs }) {
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (jobs.length > 0) {
      setSelectedJob(jobs[0]);
    }
  }, [jobs]);

  return (
    <div className="jobs-container">

      {/* LEFT SIDE - JOB LIST */}
      <div className="jobs-list">
        {jobs.length === 0 ? (
          <h3>No jobs found</h3>
        ) : (
          jobs.map(job => (
            <JobCard
              key={job.id}
              job={job}
              onSelect={() => setSelectedJob(job)}
            />
          ))
        )}
      </div>

      {/* RIGHT SIDE - JOB DETAILS */}
      <div className="job-details">
        {selectedJob && (
          <>
            <h2>{selectedJob.title}</h2>
            <p className="company">
              {selectedJob.company} • {selectedJob.location}
            </p>

            <button className="apply-btn">Apply</button>

            <hr />

            <h3>About the job</h3>
            <p>{selectedJob.description}</p>

            <h3>Responsibilities</h3>
            <ul>
              {selectedJob.responsibilities?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Requirements</h3>
            <ul>
              {selectedJob.requirements?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Preferred Qualifications</h3>
            <ul>
              {selectedJob.preferred?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3>Desired Skills & Experience</h3>
            <p>{selectedJob.skills}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default Jobs;
