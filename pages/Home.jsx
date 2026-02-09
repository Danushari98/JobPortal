import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <h1>Welcome to JobPortal</h1>
        <p>
          JobPortal is a modern job search platform built using React.  
          It helps job seekers discover opportunities and apply for roles
          that match their skills, experience, and career goals.
        </p>
        <button className="hero-btn">Explore Jobs</button>
      </section>

      {/* ABOUT SECTION */}
      <section className="section">
        <h2>Why JobPortal?</h2>
        <p>
          JobPortal connects talented professionals with top companies
          across India. Whether you are a fresher or an experienced developer,
          our platform makes job searching simple, fast, and effective.
        </p>
      </section>

      {/* FEATURES */}
      <section className="section features">
        <h2>Key Features</h2>
        <ul>
          <li>🔍 Search from 150+ job listings</li>
          <li>📍 Filter jobs by location and company</li>
          <li>💼 Apply for jobs easily</li>
          <li>👤 Create and manage your profile</li>
          <li>🔔 Get notifications for new jobs</li>
        </ul>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <h2>How It Works</h2>
        <p>
          Create your profile, search for jobs using keywords or location,
          and apply directly. Recruiters can post jobs and manage applicants
          through the admin dashboard.
        </p>
      </section>

      {/* FOOTER SECTION */}
      <section className="footer">
        <p>© 2026 JobPortal • Built with React</p>
      </section>
    </div>
  );
}

export default Home;
