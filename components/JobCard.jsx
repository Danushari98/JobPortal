import { Link } from "react-router-dom";
import "./JobCard.css";

function JobCard({ job, onSelect }) {
  return (
    <div className="job-card" onClick={onSelect}>
      
      <div className="job-info">
        <h3 className="job-title">{job.title}</h3>
        
        <p className="job-company">
          {job.company} • {job.location}
        </p>

        <p className="job-salary">{job.salary}</p>
      </div>

      <div className="job-card-bottom">
        <Link 
          to={`/jobs/${job.id}`} 
          className="view-details"
          onClick={(e) => e.stopPropagation()}
        >
          View Details
        </Link>
      </div>

    </div>
  );
}

export default JobCard;
