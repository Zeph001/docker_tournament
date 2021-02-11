import React, { Component } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import "../../css/App.css";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true } // tells the API that it is OK to set the cookie on our client
      )
      .then((response) => {
        //console.log("registration response", response);
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
          this.props.history.push("/dashboard")
        }
      })
      .catch((error) => {
        console.log("Registration error", error);
      });
    event.preventDefault();
  }

  handleChange(event) {
    //console.log("handle change", event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="green" textAlign="center">
              Sign Up
            </Header>
            <Form size="large" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  data-testid = "email-input"
                  id = "emailId"
                  icon="user"
                  iconPosition="left"
                  placeholder="E-mail address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange.bind(this)}
                  required
                  autoComplete="username"
                />
                <Form.Input
                  icon="lock"
                  data-testid = "password-input"
                  id ="passwordId"
                  iconPosition="left"
                  placeholder="Password (6 - 30 character)"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                  autoComplete="new-password"
                />
                <Form.Input
                  icon="lock"
                  data-testid = "password-confirmation-input"
                  id = "passwordConfirmationId"
                  iconPosition="left"
                  placeholder="Password confirmation"
                  type="password"
                  name="password_confirmation"
                  value={this.state.password_confirmation}
                  onChange={this.handleChange}
                  required
                  autoComplete="current-password"
                />
                <Button id ="registrationButtonId" color="green" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>
            <Button id= "to-login" color="grey" fluid size="small" attached="top" as={Link} to ="/login">
              Do you have already an Account?
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
