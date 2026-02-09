import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AppRoutes from "../routes/AppRoutes.jsx";
import jobsData from "../data/jobs";

function App() {
  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  return (
    <>
      <Navbar setFilteredJobs={setFilteredJobs} />
      <AppRoutes filteredJobs={filteredJobs} />
      <Footer />
    </>
  );
}

export default App;
