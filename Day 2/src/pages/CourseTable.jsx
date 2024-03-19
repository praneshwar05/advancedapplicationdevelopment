import React from 'react';
import '../assets/css/CourseTable.css'; // Import your CSS file
import Home from './Home';
import Footer from './Footer';

function CourseTable() {
  return (
    <div>
      <Home />
      <div className="table-container">
        <table className="course-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Timing</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Chess Basics</td>
              <td>Monday, Wednesday, Friday 6:00 PM - 7:00 PM</td>
              <td>12 weeks</td>
            </tr>
            <tr>
              <td>Advanced Strategies</td>
              <td>Tuesday, Thursday 5:00 PM - 7:00 PM</td>
              <td>8 weeks</td>
            </tr>
            <tr>
              <td>Intermediate Tactics</td>
              <td>Monday, Wednesday 5:00 PM - 6:00 PM</td>
              <td>10 weeks</td>
            </tr>
            <tr>
              <td>Endgame Mastery</td>
              <td>Thursday 6:00 PM - 8:00 PM</td>
              <td>6 weeks</td>
            </tr>
            <tr>
              <td>Opening Theory</td>
              <td>Tuesday 7:00 PM - 9:00 PM</td>
              <td>8 weeks</td>
            </tr>
            <tr>
              <td>Middlegame Planning</td>
              <td>Wednesday 7:00 PM - 9:00 PM</td>
              <td>8 weeks</td>
            </tr>
            <tr>
              <td>Chess Tactics</td>
              <td>Monday, Friday 7:00 PM - 8:30 PM</td>
              <td>12 weeks</td>
            </tr>
            <tr>
              <td>Strategic Endgames</td>
              <td>Thursday 5:30 PM - 7:00 PM</td>
              <td>10 weeks</td>
            </tr>
            <tr>
              <td>Mastering Pawn Structures</td>
              <td>Wednesday 6:00 PM - 8:00 PM</td>
              <td>10 weeks</td>
            </tr>
            <tr>
              <td>Attack and Defense</td>
              <td>Monday 7:00 PM - 9:00 PM</td>
              <td>8 weeks</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default CourseTable;
