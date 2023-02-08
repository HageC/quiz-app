import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
export default function Home() {
  const userInputRef = useRef(null);
  return (
    <div className="main">
      <h1 className="title">Quiz App</h1>
      <div className="info">
        <h2>Instructions:</h2>
        <h3>1. You will be asked 10 questions</h3>
        <h3>2. Each Question is worth 1 point</h3>
        <h3>3. Your result will be given at the end of the quiz</h3>
        <h3>4. You can change your answers before finishing the quiz</h3>
      </div>

      <form className="form">
        <input ref={userInputRef} type="text" placeholder="Username" />
      </form>

      <div className="start-quiz">
        <Link className="start-btn" to={"/quiz"}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
