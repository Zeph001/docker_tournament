import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "../../css/App.css";
import Registration from "./Registration";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true } //that tells the API that it is OK to set the cookie on our client
      )
      .then((response) => {
        if (response.data.status) {
          this.props.handleSuccessfulAuth(response.data);
          this.props.history.push("/")
        }
      })
      .catch((error) => {
        console.log("Login error", error);
      });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  switchToRegister() {
    return(
        <Registration handleSuccessfulAuth ={this.handleSuccessfulAuth}/>,
      document.getElementById('newRegister')
    )
  }

  render() {
    return (
      <div id="div1">
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="green" textAlign="center">
              Log-in to your account
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                  <Form.Input
                    fluid
                    data-testid = "email-input"
                    icon="user"
                    id ="userEmail"
                    iconPosition="left"
                    placeholder="E-mail address"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                    autoComplete="username"
                  />
                  <Form.Input
                    icon="lock"
                    data-testid = "password-input"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    autoComplete="current-password"
                  />
                <Button id ="loginButton" color="green" fluid size="large">
                  Login
                </Button>
              </Segment>
            </Form>
            <Button id= "to-register" color="grey" fluid size="small" attached="top" as={Link} to ="/register">
              New to us?
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
