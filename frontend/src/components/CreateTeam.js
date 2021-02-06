import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CreateForm.css";
import {Form} from "react-bootstrap";
import SelectCountry from "./SelectCountry";

export default class CreateTeam extends Component {

  render() {
    return (
    <div className="bg-light">
      <div className="container">
          <div className="p-5 text-center">
            <h1 className="mb-3">Create your Team</h1>
          </div>
        <Form className ="form-new-team">
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name your Team</Form.Label>
            <Form.Control type="text" placeholder="Team Name" />
          </Form.Group>
          <Form.Group>
            <Form.Label className="form-label">What type of member are you looking for?</Form.Label>
            <div className="choose-member-level">
            <div className="form-check form-check-inline">
              <input data-testid = "beginner-option" name="radio" className="form-check-input" type="radio" id="inlineCheckbox1" value="Beginner"/>
                <label className="form-check-label" htmlFor="inlineCheckbox1">Beginner</label>
            </div>
            <div className="form-check form-check-inline">
              <input data-testid = "intermediate-option" name="radio" className="form-check-input" type="radio"
                     id="inlineCheckbox2" value="Intermediate"/>
                <label className="form-check-label" htmlFor="inlineCheckbox2">Intermediate</label>
            </div>
            <div className="form-check form-check-inline">
              <input data-testid = "advanced-option" name="radio" className="form-check-input" type="radio" id="inlineCheckbox3" value="Advanced"/>
                <label className="form-check-label" htmlFor="inlineCheckbox3">Advanced</label>
            </div>
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label className="form-label">Where is your Team located?</Form.Label>
            <div>
            <SelectCountry/>
            </div>
          </Form.Group>
          <Form.Group>
          <div className="row form-row">
            <div className="col-2 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-lg">Create</button>
            </div>
          </div>
          </Form.Group>
        </Form>
      </div>
    </div>
    );
  }
}

