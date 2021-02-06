import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import {Button} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    this.props.handleLogout();
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log("Logout error", error);
      });
  }

  logoutButton(props) {
    if (props === "NOT_LOGGED_IN") {
      return;
    } else {
      return <Button data-testid = "logout-button" id ="logoutButton"
                     className="ui red button" floated='right' onClick={() => this.handleLogoutClick()}>Logout</Button>;
    }
  }

  render() {
    return (
      <div>
        <div className="dashboardBackground">
          <div>
            <h1> </h1>
            <h1 className="font-dashboard">
              Status: {this.props.loggedInStatus}{" "}
            </h1>
            <p className="font-dashboard">User: {this.props.user}</p>
              <div className="">
                {this.logoutButton(this.props.loggedInStatus)}
              </div>
          </div>
          <div className="jumbotronDashboard">
              <h1 className="headerDashboard">Create your own Tournament</h1>
            <div className="row">
              <div className="col">
                <h1 className="font-dashboard">A quick Tournament?</h1>
                <h2 className="font-dashboard">Test our Tournament-Generator!</h2>
                <Button data-testid ="tournament-generator-btn"
                        id ="tournament-generator-btn"
                        as={Link}
                        to="/tournament/new"
                        className="ui huge primary button">Create
                </Button>
              </div>
              <div className="col">
              <h1 className="font-dashboard">Create a Tournament</h1>
                <h2 className="font-dashboard">and invite your friends</h2>
              <Button data-testid ="tournament-teams-btn"
                      id ="tournament-team-btn"
                      as={Link}
                      to="/tournament/new"
                      className="ui huge orange button">Create
              </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboardImageBackground"></div>
      </div>
    );
  }
}
