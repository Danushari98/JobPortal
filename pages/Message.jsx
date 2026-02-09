import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Message.css";

const conversations = [
  { id: 1, name: "Lakshmana Rao", message: "Land your dream role...", time: "10:12 AM" },
  { id: 2, name: "Ramesh", message: "Okay thanks 👍", time: "Yesterday" },
  { id: 3, name: "Sara HR", message: "Please send your resume", time: "Jan 5" },
  { id: 4, name: "Infosys HR", message: "Interview scheduled", time: "Jan 4" },
  { id: 5, name: "Google Recruiter", message: "We liked your profile", time: "Jan 3" }
];

function Message() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");

    if (!loggedUser) {
      alert("Please login to view messages");
      navigate("/login");
    } else {
      setUser(loggedUser);
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="message-panel">

      <div className="message-header">
        <h3>Messaging</h3>
      </div>

      <input 
        type="text" 
        placeholder="Search messages"
        className="search-box"
      />

      <div className="conversation-list">
        {conversations.map(chat => (
          <div key={chat.id} className="conversation-item">
            <div className="avatar"></div>
            <div className="chat-info">
              <h4>{chat.name}</h4>
              <p>{chat.message}</p>
            </div>
            <span className="time">{chat.time}</span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Message;
