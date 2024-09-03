import React from 'react';
import './Event5.css';
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
            <h1 className="eventNameStyle">Discussion Den</h1>
            <p><span className="highlight">Date:</span> September 14, 2024</p>
            <p><span className="highlight">Registration:</span> Solo</p>
            <p><span className="highlight">Time:</span> 9:00 AM - 10:30 AM</p>
            
            <h2 className="highlight">Judging Criteria:</h2>
            <ul className="ul">
              <li>Clarity of Thought</li>
              <li>Team Collaboration and Dynamics</li>
              <li>Relevance and Depth of Discussion</li>
              <li>Presentation Skills</li>
            </ul>
            
            <h2 className="highlight">Rules:</h2>
            <ul className="ul1">
              <li><span className="highlight">Rule 1:</span> <strong>Team Formation:</strong> Participants will be randomly assigned to teams.</li>
              <li><span className="highlight">Rule 2:</span> <strong>Topic Assignment: </strong>Each team will receive a specific topic for discussion.</li>
              <li><span className="highlight">Rule 3:</span> <strong>Discussion Time:</strong> Teams will have 15 minutes to discuss their topic.</li>
              <li><span className="highlight">Rule 4:</span> <strong>Preparation Time: </strong>Each team will have 5 minutes to prepare their final thoughts.</li>
              <li><span className="highlight">Rule 5:</span><strong>Total Duration:</strong> 20 minutes per team.</li>
              <li><span className="highlight">Rule 6:</span><strong>Presentation:</strong>  At the end of the preparation time, each team will present their discussion points.</li>
            </ul>
            
            <button className="register-button codepen-button"><span>Register</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
