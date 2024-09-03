import React from 'react';
import './Event4.css';
import suku from './sukuna.jpg';

const EventPage = () => {
  return (
    <div className="bg">
      <div className="backbtn">
        <button className="arrow-button">&larr;</button>
      </div>
      <div className="container glass">
        <div className="event-page">
          <div className="poster-section gradient-background">
            <img src={suku} alt="Event Poster" className="poster" />
          </div>
          <div className="details-section gradient-background">
            <h1 className="eventNameStyle">Code Crack</h1>
            <p><span className="highlight">Day 2:</span> Output Finding</p>
            <p><span className="highlight">Team Composition:</span> Duo</p>
            <p><span className="highlight">Time:</span> 10:30 AM – 12:30 PM</p>

            <h2 className="highlight">Rules:</h2>
            <ul className="ul1">
              <li><span className="highlight">Rule 1:</span> A set of 6 questions will be provided.</li>
              <li><span className="highlight">Rule 2:</span> Participants must find the correct output for each question within the allotted time.</li>
              <li><span className="highlight">Rule 3:</span> Participants should mention their known programming language(s).</li>
              <li><span className="highlight">Rule 4:</span> No plagiarism.</li>
            </ul>

            <button className="register-button codepen-button"><span>Register</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
