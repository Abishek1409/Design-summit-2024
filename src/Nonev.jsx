import React from 'react';
import './Nonev.css';
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
            <h1 className="eventNameStyle">Code Your Way Out</h1>
            <p><span className="highlight">Day 1:</span> Escape Room Challenge Overview</p>
            <p><span className="highlight">Number of Rounds:</span> 1</p>
            <p><span className="highlight">Time:</span> 10:00 AM - 12:30 PM</p>
            <p><span className="highlight">Team Composition:</span> Duo</p>

            <h2 className="highlight">Rules:</h2>
            <ul className="ul1">
              <li><span className="highlight">Problem Solving:</span> Each team will face 5 different coding problems, each corresponding to a unique imaginary room.</li>
              <li><span className="highlight">Escape Mechanism:</span> Teams must solve each problem to "escape" to the next room.</li>
              <li><span className="highlight">Timer:</span> A countdown timer will be displayed throughout the event to track the time remaining.</li>
              <li><span className="highlight">Winning Criteria:</span> The first team to escape from all 5 rooms by solving all problems will be declared the winner.</li>
            </ul>

            <h2 className="highlight">Rules for Problem-Solving:</h2>
            <ul className="ul1">
              <li><span className="highlight">Collaboration:</span> is encouraged within the team.</li>
              <li><span className="highlight">No external resources or assistance:</span> are allowed.</li>
            </ul>

            <h2 className="highlight">Materials Provided:</h2>
            <ul className="ul1">
              <li>Chairs and tables</li>
              <li>A black or whiteboard for brainstorming</li>
              <li>Pens and papers for notes</li>
            </ul>

            <button className="register-button codepen-button"><span>Register</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
