import React from 'react';
import './Event1.css';
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
            <h1 className="eventNameStyle">Career Craft</h1>
            <p><span className="highlight">Day 1:</span> Talks about placements and higher studies</p>
            <p><span className="highlight">Time:</span> 10:00 AM - 12:00 PM</p>
            
            <h2 className="highlight">About:</h2>
            <p>Students will be allowed to clarify their doubts on placements and higher studies from the presenters.</p>

            <button className="register-button codepen-button"><span>Register</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
