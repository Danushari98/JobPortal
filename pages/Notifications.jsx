import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Notifications.css";

const notifications = [
  { id: 1, user: "Chaitali Gurav", text: "posted a new job opportunity", time: "53m" },
  { id: 2, user: "Pallavi Borah", text: "shared a hiring post", time: "2h" },
  { id: 3, user: "BOT VFX", text: "posted Spread the Smile initiative", time: "5h" },
  { id: 4, user: "Lakshmana Rao", text: "viewed your profile", time: "1d" },
  { id: 5, user: "Sara HR", text: "sent you a message", time: "1d" },
  { id: 6, user: "Ramesh Kumar", text: "liked your post", time: "2d" },
  { id: 7, user: "Tech Corp", text: "invited you to apply", time: "3d" },
  { id: 8, user: "Infosys HR", text: "posted a Frontend Developer job", time: "4d" },
  { id: 9, user: "Google Careers", text: "recommended a job for you", time: "5d" },
  { id: 10, user: "Amazon Hiring", text: "shortlisted your profile", time: "1w" }
];

function Notifications() {

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      alert("Please login to view notifications");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="notifications-container">

      <div className="filter-buttons">
        <button className="active">All</button>
        <button>Jobs</button>
        <button>Mentions</button>
      </div>

      {notifications.map(item => (
        <div key={item.id} className="notification-card">
          <div className="dot"></div>
          <div className="notification-content">
            <p>
              <b>{item.user}</b> {item.text}
            </p>
            <span>{item.time}</span>
          </div>
          <div className="more">⋯</div>
        </div>
      ))}

    </div>
  );
}

export default Notifications;
