import React from 'react';
import './Event2.css';
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
            <h1 className="eventNameStyle">Design Arena</h1>
            <p><span className="highlight">Day 1:</span> Figma UI/UX Design Contest</p>
            <p><span className="highlight">Platform:</span> Figma</p>
            <p><span className="highlight">Team Composition:</span> Solo or Duo</p>
            <p><span className="highlight">Time:</span> 12:00 PM - 3:00 PM</p>
            <p><span className="highlight">Slot Duration:</span> 1.2 hours per slot</p>
            <p><span className="highlight">Resource Usage:</span> 20 minutes for resource gathering and problem-solving</p>

            <h2 className="highlight">Rules:</h2>
            <ul className="ul1">
              <li><span className="highlight">On-the-Spot Problem Statement:</span> Each team will receive a unique problem statement at the beginning of their time slot.</li>
              <li><span className="highlight">Design Requirements:</span> Teams must design a UI/UX solution using Figma based on the problem statement provided.</li>
              <li><span className="highlight">Submission:</span> All designs must be submitted by the end of the time slot. Late submissions will not be accepted.</li>
            </ul>

            <h2 className="highlight">Judging Criteria:</h2>
            <ul className="ul">
              <li>Creativity and Innovation</li>
              <li>User Experience (UX) Design Principles</li>
              <li>Visual Appeal</li>
              <li>Functionality and Feasibility</li>
            </ul>

            <p><span className="highlight">Judges:</span> A panel of experienced UI/UX designers will evaluate submissions.</p>

            <button className="register-button codepen-button"><span>Register</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
