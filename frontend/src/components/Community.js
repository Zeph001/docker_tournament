import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Sidebar.css";

export default class Community extends Component {
  render() {
    return (
      <div className="community-page">
        <div className = "row">
          <div className="col-3 px-1 bg-dark position-fixed" id="sticky-sidebar">
            <div className="nav flex-column flex-nowrap vh-100 overflow-auto text-white p-2">
              <h1 className="nav-link nav-header">Manage Communities</h1>
              <a href="./community/new" className="nav-button btn btn-lg btn-primary btn-block">Create your own Team</a>
              <h3 className="nav-link">Teams</h3>
              <h5 className="nav-link">joined_team</h5>
            </div>
          </div>
          <div className="col-9 offset-3" id="main">
            <table className="table table-hover">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Team-Name</th>
                <th scope="col">Level</th>
                <th scope="col">Location</th>
                <th scope="col">Member Number</th>
              </tr>
              </thead>
              <tbody>
              <tr >
                <th scope="row">1</th>
                <td>Test-Team</td>
                <td>Advanced</td>
                <td>Germany</td>
                <td>5/5</td>
                <td>
                  <a href="./community/team">view</a>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Test-Team 2</td>
                <td>Beginner</td>
                <td>United States</td>
                <td>2/5</td>
                <td>
                  <a href="./community/team">view</a>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
