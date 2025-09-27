import React from 'react'
import { useState } from "react";
import { motion } from "framer-motion";

const responses = {
  "About Me": "I am [Your Name], a passionate developer with interest in React, Java, and Cloud technologies.",
  "Skills": "Java, React, Spring Boot, Firebase, SQL, Cloud Computing",
  "Projects": "1. Clinic Management System (Java) \n2. Virtual Queue System (Firebase + Kotlin) \n3. Rubik’s Cube Solver (Java)",
  "Education": "B.Tech in Computer Science and Engineering",
  "Contact": "Email: yourmail@example.com | LinkedIn: linkedin.com/in/yourprofile",
  "Download Resume": "👉 [Click Here to Download Resume](your-resume-link)"
};

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello 👋! I’m **EchoMe**, your personal assistant. Choose an option below:" }
  ]);

  const handleClick = (option) => {
    setMessages([...messages, { from: "user", text: option }, { from: "bot", text: responses[option] }]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <motion.div
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-4 flex flex-col"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h2 className="text-xl font-bold text-center mb-3 text-blue-600">🤖 EchoMe</h2>

        <div className="flex flex-col gap-2 mb-4 overflow-y-auto h-80 border p-2 rounded-lg bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded-lg max-w-xs ${
                msg.from === "bot" ? "bg-blue-200 self-start" : "bg-green-200 self-end"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2">
          {Object.keys(responses).map((option) => (
            <button
              key={option}
              onClick={() => handleClick(option)}
              className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-600 transition"
            >
              {option}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

