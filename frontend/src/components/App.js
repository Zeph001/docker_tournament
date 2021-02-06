import React, { Component } from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import axios from "axios";
import "../css/App.css";
import "semantic-ui-css/semantic.min.css";
import Registration from "./auth/Registration";
import FixedMenu from "./nav/FixedMenu";
import Login from "./auth/Login";
import TournamentBracket from "./TournamentBracket";
import Community from "./Community";
import CreateTeam from "./CreateTeam";
import CreateTournament from "./CreateTournament";
import Team from "./Team";


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleSuccessfulAuth(data) {
    this.handleLogin(data);
    //redirection handled in form submit
  }

  handleLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  }

  handleRedirect() {
    if(this.state.loggedInStatus === "NOT_LOGGED_IN") {
      this.props.history.push("/login");
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
          <FixedMenu
            handleLogin={this.handleLogin}
            handleLogout={this.handleLogout}
            loggedInStatus={this.state.loggedInStatus} position = "fixed"
          />
          </div>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogout={this.handleLogout}
                  loggedInStatus={this.state.loggedInStatus}
                /> //... -> takes all props
              )}
            />
            <Route
            exact
            path={"/dashboard"}
            render={(props) => (
              <Dashboard
                {...props}
                handleLogout={this.handleLogout}
                loggedInStatus={this.state.loggedInStatus}
                user={this.state.user.email}
              />
            )}
          />
            <Route
              exact
              path={"/register"}
              render={(props) => (
                <Registration
                  {...props}
                  handleSuccessfulAuth={this.handleSuccessfulAuth}
                />
              )}
            />
            <Route
              exact
              path={"/login"}
              render={(props) => (
                <Login
                  {...props}
                  handleSuccessfulAuth={this.handleSuccessfulAuth}
                />

              )}
            />
            <Route
              exact
              path={"/tournament"}
              render={(props) => (
                <TournamentBracket
                  {...props}
               />
              )}
            />
            <Route
              exact
              path={"/community"}
              render={() => (
                <Community
                />
              )}
            />
            <Route
              exact
              path={"/community/team"}
              render={() => (
                <Team
                />
              )}
            />
            <Route
              exact
              path={"/community/new"}
              render={() => (
                <CreateTeam
                />
              )}
            />
            <Route
              exact
              path={"/tournament/new"}
              render={() => (
                <CreateTournament
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
