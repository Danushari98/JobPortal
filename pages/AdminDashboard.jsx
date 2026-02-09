import jobs from "../data/jobs";

function AdminDashboard() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Admin Dashboard</h2>
      <p>Total Jobs: {jobs.length}</p>
    </div>
  );
}

export default AdminDashboard;
