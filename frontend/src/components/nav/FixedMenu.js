import React, { Component } from "react";
import {
  Container,
  Icon,
  Menu,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";


export default class FixedMenu extends Component {
  state = { activeItem: ""};

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu className="nav-bar" fixed="top" inverted widths="6">
          <Container >
            <Menu.Item header>
              <Icon
                name="tty"
                size="large"
                src="/logo.png"
                style={{ marginRight: "1em" }}
              />
              Project T
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              exact to="/dashboard"
              name="dashboard"
              active={activeItem === "dashboard"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              exact to="/community"
              name="community"
              active={activeItem === "community"}
              onClick={this.handleItemClick}
            />

            <Menu.Item style={{display: (this.props.loggedInStatus === "NOT_LOGGED_IN" ? 'block' : 'none')}}
                       as={NavLink}
                       exact to="/login"
                       active={activeItem === "login"}
                       onClick={this.handleItemClick}
            > Login/Register </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}
