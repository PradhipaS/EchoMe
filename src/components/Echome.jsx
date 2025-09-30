import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Echome.css";

const responses = {
  "About Me": "I am Pradhipa Seerangamurugesan. I am a Java programmer with knowledge of object-oriented programming, Java, and front-end technologies like HTML, CSS, and JavaScript. I have also worked on building projects using technologies like Spring Boot, Firebase, and React. Apart from backend development, I have experience in web technologies such as HTML, CSS, JavaScript, JSP, and Servlets, and I’ve explored areas like game development, cloud computing, and web application security as part of my academic and project work. I enjoy solving coding problems and developing applications that focus on usability and efficiency. I am eager to learn new technologies, contribute to real-world projects, and grow as a software developer. Outside of coding, I am passionate about continuous learning and enjoy working on creative projects that challenge me to improve both my technical and problem-solving skills.",
  "Skills": "Java, React, Spring Boot, Firebase, SQL, Cloud Computing",
  "Projects": "1. Clinic Management System (Java) \n2. Virtual Queue System (Firebase + Kotlin) \n3. Rubik’s Cube Solver (Java)",
  "Education": "B.Tech in Computer Science and Engineering",
  "Contact": "Email: yourmail@example.com | LinkedIn: linkedin.com/in/yourprofile",
  "Download Resume": "👉 [Click Here to Download Resume](your-resume-link)"
};

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello 👋! I’m EchoMe, Pradhipa 's personal assistant. How can I assist you today?" }
  ]);

  const handleClick = (option) => {
    setMessages([
      ...messages,
      { from: "user", text: option },
      { from: "bot", text: responses[option] }
    ]);
  };

  return (
    <div className="chatbot-container">
      <motion.div
        className="chat-window"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="chat-header"> EchoMe</div>

        <div className="chat-body">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.from === "bot" ? "bot" : "user"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input">
          {Object.keys(responses).map((option) => (
            <button key={option} onClick={() => handleClick(option)}>
              {option}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
