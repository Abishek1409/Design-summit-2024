import React from 'react';
import './Event3.css';
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
            <h1 className="eventNameStyle">Vision Vault</h1>
            <p><span className="highlight">Day 2:</span> Project Presentation Contest</p>
            <p><span className="highlight">Platform:</span> Of participant’s choice</p>
            <p><span className="highlight">Team Composition:</span> Duo</p>
            <p><span className="highlight">Time:</span> 9:00 AM - 11:30 AM</p>
            <p><span className="highlight">Slot Duration:</span> 7 - 10 minutes per team</p>

            <h2 className="highlight">Rules:</h2>
            <ul className="ul1">
              <li><span className="highlight">Slide Constraints:</span> Maximum 5 slides.</li>
              <li><span className="highlight">Time Budgeting:</span> Take a minute or two less than the maximum allotted time.</li>
              <li><span className="highlight">Content Restriction:</span> PPT should not include AI-generated content.</li>
            </ul>

            <h2 className="highlight">Judging Criteria:</h2>
            <ul className="ul">
              <li>Presentation should be clear, compelling, and crafted.</li>
              <li>Feasibility and scalability of the project.</li>
              <li>Presentation and communication skills.</li>
            </ul>

            <button className="register-button codepen-button"><span>Register</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
