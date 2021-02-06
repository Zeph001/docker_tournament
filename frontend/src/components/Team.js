import React, { Component } from "react";
import "../css/Team.css";

export default class Team extends Component {
  render() {
    return (
      <div>

        <div className="row team-header justify-content-center bg-dark ">
          <h1 className="team-header-h1 align-self-center text-white">Test-Team</h1>
        </div>
          <div className="row main-row">
            <div className="col-4 main-col">
              <h2>Member list</h2>
              <table className="table table-hover">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Member Name</th>
                  <th scope="col">Rank</th>
                  <th scope="col">Role</th>
                </tr>
                </thead>
                <tbody>
                <tr >
                  <th scope="row">1</th>
                  <td>Test-User 1</td>
                  <td>Challenger</td>
                  <td>Admin</td>
                  <td>
                    <a href="./community/team">View profile</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Test-User 2</td>
                  <td>Gold</td>
                  <td>Member</td>
                  <td>
                    <a href="./community/team">View profile</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Test-User 3</td>
                  <td>Diamond</td>
                  <td>Member</td>
                  <td>
                    <a href="./community/team">View profile</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Test-User 4</td>
                  <td>Gold</td>
                  <td>Member</td>
                  <td>
                    <a href="./community/team">View profile</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Test-User 5</td>
                  <td>Gold</td>
                  <td>Member</td>
                  <td>
                    <a href="./community/team">View profile</a>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <div className="col main-col">
              <h2>Tournament list</h2>
              <table className="table table-hover">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tournament Name</th>
                  <th scope="col">Tournament Type</th>
                  <th scope="col">Best-Of-Mode</th>
                  <th scope="col">Participants</th>
                </tr>
                </thead>
                <tbody>
                <tr >
                  <th scope="row">1</th>
                  <td>Test-Tournament 1</td>
                  <td>Single KO</td>
                  <td>Best-Of-3</td>
                  <td>16</td>
                  <td>
                    <a href="./community/team">View tournament</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Test-Tournament 2</td>
                  <td>Double KO</td>
                  <td>Best-Of-1</td>
                  <td>8</td>
                  <td>
                    <a href="./community/team">View tournament</a>
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

