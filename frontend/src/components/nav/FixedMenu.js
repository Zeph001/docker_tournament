import React, { Component } from "react";
import {
  Container,
  Dropdown,
  Icon,
  Menu,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class FixedMenu extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <Menu fixed="top" inverted widths="6">
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
              exact to="/"
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              exact to="/login"
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={NavLink}
              exact to="/register"
              name="register"
              active={activeItem === "register"}
              onClick={this.handleItemClick}
            />
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

            <Dropdown item simple text="Dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className="dropdown icon" />
                  <span className="text">Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      </div>
    );
  }
}
