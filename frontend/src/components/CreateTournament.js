import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/CreateForm.css";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";


export default class CreateTournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tournamentName: "",
      bracketSize: "4",
      newTeam: "",
      sentTeams: [],
      singleKO: true,
      doubleKO: false,
      bestOf3: false
    };
    this.handleBracketSelector = this.handleBracketSelector.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateTeamsValue = this.updateTeamsValue.bind(this)
    this.updateTournamentName = this.updateTournamentName.bind(this)
    this.handleTournamentType = this.handleTournamentType.bind(this)
    this.handleBestOfMode = this.handleBestOfMode.bind(this)
  }

  handleBracketSelector(event){
    let bracket = event.target.value;
    this.setState({
      bracketSize: bracket
    })
  }

  handleSubmit(e){
   return ( <Link
      to={{
        pathname: "/tournament",
        state: {testState: "test1",
          hideHeader: true,
          receivedTeams: this.state.sentTeams,
          tournamentName: this.state.tournamentName,
          numOfSeeds: this.state.bracketSize,
          singleKO: this.state.singleKO,
          doubleKO: this.state.doubleKO,
          bestOf3: this.state.bestOf3
        }
      }}
    >
    </Link>
   )
  }

updateTeamsValue(e) {
   let arrTeams = this.state.sentTeams
   let idOfInput = parseInt(e.target.getAttribute('id'))
   arrTeams[idOfInput] = e.target.value
   // arrTeams.push(e.target.value)
    this.setState({
      sentTeams: arrTeams
    })
  console.log(arrTeams)
  console.log(this.state.sentTeams)
}

updateTournamentName(e) {
   let newTournamentName = e.target.value
  this.setState({
    tournamentName: newTournamentName
  })
  console.log(this.state.tournamentName)
}

  handleTournamentType(e){
   let tournamentType =  e.target.value
    console.log(tournamentType)
    if(tournamentType ==="Single KO") {
      this.setState({
        singleKO: true,
        doubleKO: false
      })
    } else if(tournamentType ==="Double KO") {
      this.setState({
        singleKO: false,
        doubleKO: true
      })
    }

  }

  handleBestOfMode(e) {
    let bestOfType =  e.target.value
    if(bestOfType ==="Best of 1") {
      this.setState({
        bestOf3: false
      })
    } else if(bestOfType ==="Best of 3") {
      this.setState({
        bestOf3: true
      })
    }
  }
  handleTeamSelection(){
    let bracketSize = this.state.bracketSize

      return(
        <div>
        <div data-testid = "teams" className="input-group">
          <Form.Control data-testid = "team-input1" className ="input-teams" type ="text" id="0" value={this.state.sentTeams[0] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 1" required/>
          <Form.Control data-testid = "team-input2"  className ="input-teams" type ="text" id="1" value={this.state.sentTeams[1] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 2" required/>
          <Form.Control data-testid = "team-input3" className ="input-teams" type ="text" id="2" value={this.state.sentTeams[2] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 3" required/>
          <Form.Control data-testid = "team-input4" className ="input-teams" type ="text" id="3" value={this.state.sentTeams[3] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 4" required/>
        </div>

          <div style={{ display: (bracketSize === "4" ? 'none' : 'block') }}>
          <div className="input-group" >
          <Form.Control data-testid = "team-input5" className ="input-teams" type ="text" id="4" value={this.state.sentTeams[4] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 5" />
          <Form.Control data-testid = "team-input6" className ="input-teams" type ="text" id="5" value={this.state.sentTeams[5] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 6" />
          <Form.Control data-testid = "team-input7" className ="input-teams" type ="text" id="6" value={this.state.sentTeams[6] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 7" />
          <Form.Control data-testid = "team-input8" className ="input-teams" type ="text" id="7" value={this.state.sentTeams[7] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 8" />
          </div>
          </div>
          <div style={{ display: (bracketSize !== "16" ? 'none' : 'block') }}>
            <div className="input-group">
          <Form.Control data-testid = "team-input9" className ="input-teams" type ="text" id="8" value={this.state.sentTeams[8] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 9" />
          <Form.Control data-testid = "team-input10" className ="input-teams" type ="text" id="9" value={this.state.sentTeams[9] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 10" />
          <Form.Control data-testid = "team-input11" className ="input-teams" type ="text" id="10" value={this.state.sentTeams[10] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 11" />
          <Form.Control data-testid = "team-input12" className ="input-teams" type ="text" id="11" value={this.state.sentTeams[11] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 12" />
            </div>
            <div className="input-group">
          <Form.Control data-testid = "team-input13" className ="input-teams" type ="text" id="12" value={this.state.sentTeams[12] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 13" />
          <Form.Control data-testid = "team-input14" className ="input-teams" type ="text" id="13" value={this.state.sentTeams[13] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 14" />
          <Form.Control data-testid = "team-input15" className ="input-teams" type ="text" id="14" value={this.state.sentTeams[14] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 15" />
          <Form.Control data-testid = "team-input16" className ="input-teams" type ="text" id="15" value={this.state.sentTeams[15] || ""}
                        onChange={this.updateTeamsValue} placeholder ="Team 16" />
            </div>
            </div>
        </div>
      )
  }

  render() {
    return (
      <div className="bg-light">
        <div className="container">
          <div className="p-5 text-center">
            <h1 className="mb-3">Create your Tournament</h1>
          </div>
          <Form className ="form-new-team" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="tournamentNameId" >Name of your Tournament</Form.Label>
              <Form.Control data-testid = "tournament-name" id="tournamentNameId" value={this.state.tournamentName} type="text"
                            placeholder="Tournament Name" onChange ={this.updateTournamentName} required/>
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-label">Tournament Type</Form.Label>
              <div>
                <select data-testid = "select" id="tournament-type" name="tournament-type" className="form-control" onChange={this.handleTournamentType} required>
                  <option data-testid="select-option" value="Single KO">Single KO</option>
                  <option data-testid="select-option" value="Double KO">Double KO</option>
                </select>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-label">Best-Of-Mode</Form.Label>
              <div className="choose-member-level">
                <div className="form-check form-check-inline">
                  <input data-testid="best-of-1-option" name="radio" className="form-check-input" type="radio" id="inlineCheckbox1" value="Best of 1"
                         onChange={this.handleBestOfMode} required/>
                  <label className="form-check-label" htmlFor="inlineCheckbox1">Best of 1</label>
                </div>
                <div className="form-check form-check-inline">
                  <input data-testid="best-of-3-option" name="radio" className="form-check-input" type="radio" id="inlineCheckbox2" value="Best of 3"
                         onChange={this.handleBestOfMode} required/>
                  <label className="form-check-label" htmlFor="inlineCheckbox2">Best of 3</label>
                </div>
              </div>
            </Form.Group>
            <Form.Group>
              <Form.Label className="form-label">Bracket Size</Form.Label>
              <div>
                <select data-testid = "select-bracket" id="tournament-size" name="tournament-size" className="form-control" onChange={this.handleBracketSelector}>
                  <option data-testid = "bracket-option" value="4">4</option>
                  <option data-testid = "bracket-option" value="8">8</option>
                  <option data-testid = "bracket-option" value="16">16</option>
                </select>
              </div>
            </Form.Group>
            <Form.Label htmlFor="teamSelectionId" className="form-label">Insert your Teams</Form.Label>
            <div>
              {this.handleTeamSelection()}
            </div>
            <Form.Group>
              <div className="row form-row">
                <div className="col-2 d-flex justify-content-center">
                    <Button data-testid = "submit-button" type="submit" className="btn btn-primary btn-lg" as = {Link} to = {{
                      pathname: "/tournament",
                      state: {testState: "test1",
                        receivedTeams: this.state.sentTeams,
                        tournamentName: this.state.tournamentName,
                        numOfSeeds: this.state.bracketSize,
                        singleKO: this.state.singleKO,
                        doubleKO: this.state.doubleKO,
                        bestOf3: this.state.bestOf3
                      }
                    }}>Create</Button>

                </div>
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

