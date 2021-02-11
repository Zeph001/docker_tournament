import BuildSingleKOTournament from "./BuildSingleKOTournament";
import BuildDoubleKOTournament from "./BuildDoubleKOTournament";
import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {Button} from 'semantic-ui-react'
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import "../css/App.css";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

//Popup after the end of the tournament
function PopUpInput(props) {
  return (
    <div className="intro-components">
        <Popup style ={{backgroundColor: "black"}} open = {props.openPopUp} modal>
          <div className= "popWindow">
            <div className="headerPopUp">
              Congratulations!
            </div>
            <div className="contentPopUp">
            <span>{props.winnerTournament}!</span>
            </div>
            <div className="popUpBtn">
              <Button as={Link}
                      to="/tournament/new"
                      className= "ui huge primary button" color= "green">Play another Tournament!</Button>
            </div>
            <div className="popUpBtn">
              <Button as={Link}
                      to="/dashboard" className="leavePopUpBtn">Leave</Button>
            </div>
          </div>
        </Popup>
      </div>
  );
}

/**
 * This class renders the Tournament brackets with
 */
export default class TournamentBracket extends Component {
  constructor(props) {
    super(props);

    //when the class is rendered, it takes the props from CreateTournament, which sets the parameters
    this.state = {
      receivedTeams: [],
      testState: "",
      tournamentName: this.props.location.state.tournamentName,
      extraMatch: false,
      showWinnerBln: false,
      showBracket4: false,
      winner: "",
      winnerArray: [],
      numOfSeeds: this.props.location.state.numOfSeeds,
      seedNum: [],
      newName: "",
      names: [],
      class: "container",
      winnerMatch1: "",
      winnerMatch2: "",
      singleKO: this.props.location.state.singleKO,
      doubleKO: this.props.location.state.doubleKO,
      bestOf3: this.props.location.state.bestOf3

    };
    this.handleNextRound  = this.handleNextRound.bind(this)
    console.log("received teams",this.props.location.state.receivedTeams)
    console.log("Tournament Name", this.props.location.state.tournamentName)
  }

  componentWillMount() {
    this.handleChangeOfBracketSize(this.props.location.state.numOfSeeds)
  }

  //when the page is loaded, the input method will be called, which allocates the teams to their seats
  componentDidMount() {
      console.log("num of seeds:",this.props.location.state.numOfSeeds)
      console.log("num of seeds 2:",this.state.numOfSeeds)
      let arr = this.props.location.state.receivedTeams
      for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        console.log("received team", obj)
        this.handleInput(obj)
      }

  }
  //rendering of the popUp
  renderInput() {
    return (
      <PopUpInput
        onChangeOfInput={e => this.handleChangeOfInput(e)}
        changeBracketSize={e => this.handleChangeOfBracketSize(e)}
        changeTournamentForm = {e => this.handleChangeOfTournamentForm(e)}
        changeBestOfMode = {e => this.handleChangeOfBestOfMode(e)}
        onClick={e => this.handleInput(e)}
        onEnter={e => this.handleEnter(e)}
        newName={this.state.newName}
        openPopUp = {this.state.showWinnerBln} //opens the popup if true -> gets true when tournament is over
        winnerTournament = {this.state.winner} //is used when the tournament is over to show the winner in the popup window
      />
    );
  }

  //renders the Single KO Tournament Bracket from BuildSingleKOTournament.js
  renderSingleKOBracket() {
    if(this.state.singleKO) {
      return (
        <BuildSingleKOTournament
          nextRound={e => this.handleNextRound(e)}
          names={this.state.names}
          numOfSeeds={this.state.numOfSeeds}
          singleKO={this.state.singleKO}
          tournamentName={this.state.tournamentName}
        />

      )
    }
  }

  //renders the Double KO Tournament Bracket from BuildDoubleKOTournament.js
  renderDoubleKOBracket() {
    if(this.state.doubleKO) {
      return (
        <BuildDoubleKOTournament
          nextRound={e => this.handleNextRound(e)}
          names={this.state.names}
          numOfSeeds={this.state.numOfSeeds}
          doubleKO={this.state.doubleKO}
          tournamentName={this.state.tournamentName}
          extraMatch={this.state.extraMatch}
        />

      )
    }
  }

  //functionality to enter key
  //does the same thing as input button
  handleEnter(e) {
    if (e.key === "Enter" ) {
     this.handleInput()
    }
  }

  // a random int will be given back with a max int -> max = 4 possible ints: 0, 1, 2, 3
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  //handles the allocation of the participants to their seats
  handleInput(e) {
    let newTeam = e
    const newNames = this.state.names;
    const arrLength = this.state.names.length;
    let participantAmount = parseInt(this.state.numOfSeeds); // seeds can be 4, 8, 16 (amount of participant)
    let index = this.getRandomInt(participantAmount)
    console.log("index: ",index)
    console.log("seeds", participantAmount)
    console.log("new names", newNames)
    console.log("input receives team", newTeam)
    while (newNames[index] !== undefined && this.state.stopEntries === false) { //if the seat is already given, it has to find an empty seat
            index = this.getRandomInt(participantAmount)
    }

    if (arrLength === 0) {
      index = undefined;
    }

    if (index !== undefined && this.state.stopEntries === false) {
      console.log("in if")
      if (newTeam !== "") {
        newNames.splice(index, 1, newTeam); //update state of names array
        this.setState({
          names: newNames
        });
      }
    }

    console.log(arrLength)
    console.log(this.state.names)
    // set back after input
    this.setState({
      newName: "",
    });
  }


  //when the input is being changed, update the string of new name
  handleChangeOfInput(e) {
    const name = e.target.value;
    console.log(e.target.value)
    this.setState({
      newName: name
    });
  }
  //changes the tournament form
  handleChangeOfTournamentForm(e){
    let newTournamentForm = e.target.value;
    if(newTournamentForm === "undefined") {
      this.setState({
        singleKO: false,
        doubleKO: false
      })
    }
    if(newTournamentForm === "Single KO") {
      this.setState({
        singleKO: true,
        doubleKO: false
      })
    }
    if(newTournamentForm === "Double KO") {
      this.setState({
        singleKO: false,
        doubleKO: true
      })
    }
  }

  handleChangeOfBestOfMode(e) {
    let newTournamentForm = e.target.value;
    if(newTournamentForm === "undefined") {
      this.setState({
        bestOf3: false
      })
    }if(newTournamentForm === "Best of 3") {
      this.setState({
        bestOf3: true
      })
    }
  }

  //updates the number of the seeds
  handleChangeOfBracketSize(e) {
    console.log("in change bracket size")
    let newNum = e;
    this.setState({
      numOfSeeds: newNum,
      stopEntries: false,
      teamCounter: 0
    });

    if (newNum === "undefined") {
      this.setState({
        names: [],
        class: "",
        isClicked: []
      });
    }

    if (newNum === "4") {
      console.log("in num 4")
      //depending on the seed, fills the arrays with the correct amount of columns
      this.setState({
        names: Array(6).fill(),
      });
    }
    if (newNum === "8" || (newNum === "4" && this.state.doubleKO)) {
      this.setState({
        names: Array(14).fill(),
      });
    }
    if (newNum === "16") {
      this.setState({
        names: Array(30).fill(),
      });
    }
  }

  // event handler for click on Team
  // it decides where the winner and loser of the match goes next
  handleNextRound(event) {
   let arrNames = this.state.names
   let idOfColumn = event.target.getAttribute('id')

   console.log(idOfColumn)
   let winner = document.getElementById(idOfColumn)
   console.log(this.state.names)
   let arrWinner = this.state.winnerArray

if(winner.innerText !== "" && (this.state.singleKO
  || this.state.doubleKO) && (this.state.bestOf3 !== true || (this.state.bestOf3 && arrWinner.includes(idOfColumn)))) {
  let keyWinner;
  let keyLoser;
  if(idOfColumn.length === 5) {
    keyWinner = parseInt(idOfColumn.slice(-1))
  } else if(idOfColumn.length === 6) {
    keyWinner = parseInt(idOfColumn.slice(-2))
  }
  let pickedTeam = document.getElementById(idOfColumn)

    if(keyWinner % 2 === 1 //we look if team 1 has won
      && pickedTeam.style.backgroundColor !== "rgb(152, 251, 152)"
      && pickedTeam.style.backgroundColor !== "rgb(255, 102, 102)" //if the match has been played, then the color can't be changed
      && document.getElementById("team" + (keyWinner+1)).innerText !== ""){ //looks if opponent is registered
      pickedTeam.style.backgroundColor = "rgb(152, 251, 152)"
      pickedTeam.innerText += " (W)"
      keyLoser = keyWinner + 1
      document.getElementById("team" + (keyLoser).toString()).style.backgroundColor = "rgb(255, 102, 102)"
      document.getElementById("team" + (keyLoser).toString()).innerText += " (L)"

    } else if (keyWinner % 2 === 0 //we look if team 2 has won
      && pickedTeam.style.backgroundColor !== "rgb(152, 251, 152)"
      && pickedTeam.style.backgroundColor !== "rgb(255, 102, 102)"
      && document.getElementById("team" + (keyWinner-1)).innerText !== "") {
      pickedTeam.style.backgroundColor = "rgb(152, 251, 152)"
      pickedTeam.innerText += " (W)"
      keyLoser = keyWinner - 1
      document.getElementById("team" + (keyLoser).toString()).style.backgroundColor = "rgb(255, 102, 102)"
      document.getElementById("team" + (keyLoser).toString()).innerText += " (L)"
    }

  if ((idOfColumn === "team1" || idOfColumn === "team2") && (arrNames[0] !== undefined && arrNames[1] !== undefined)){
    console.log(this.state.doubleKO)
    if(this.state.numOfSeeds === "4" && this.state.doubleKO && arrNames[4] === undefined && arrNames[6] === undefined) {
      arrNames[4] = arrNames[keyLoser - 1]
      arrNames[6] = arrNames[keyWinner - 1]
    } else if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[14] === undefined && arrNames[8] === undefined) {
      arrNames[8] = arrNames[keyLoser - 1]
      arrNames[14] = arrNames[keyWinner - 1]
    } else if (this.state.numOfSeeds === "4" && arrNames[4] === undefined){
    arrNames[4] = arrNames[keyWinner-1]
    } else if (this.state.numOfSeeds === "8" && arrNames[8] === undefined){
      arrNames[8] = arrNames[keyWinner-1]
    } else if (this.state.numOfSeeds === "16" && arrNames[16] === undefined) {
      arrNames[16] = arrNames[keyWinner-1]
    }
  } else if ((idOfColumn === "team3" || idOfColumn === "team4") && (arrNames[2] !== undefined && arrNames[3] !== undefined)) {
    if(this.state.numOfSeeds === "4" && this.state.doubleKO && arrNames[5] === undefined && arrNames[7] === undefined) {
      arrNames[5] = arrNames[keyLoser - 1]
      arrNames[7] = arrNames[keyWinner - 1]
    } else if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[15] === undefined && arrNames[9] === undefined) {
      arrNames[9] = arrNames[keyLoser - 1]
      arrNames[15] = arrNames[keyWinner - 1]
    } else if(this.state.numOfSeeds === "4" && arrNames[5] === undefined){
      arrNames[5] = arrNames[keyWinner-1]
    } else if (this.state.numOfSeeds === "8" && arrNames[9] === undefined){
      arrNames[9] = arrNames[keyWinner-1]
    } else if (this.state.numOfSeeds === "16" && arrNames[17] === undefined){
      arrNames[17] = arrNames[keyWinner-1]
    }
  } else if ((idOfColumn === "team5" || idOfColumn === "team6") && (arrNames[4] !== undefined && arrNames[5] !== undefined)){
    if(this.state.numOfSeeds === "4" && this.state.doubleKO && arrNames[8] === undefined) {
      arrNames[8] = arrNames[keyWinner - 1]
    } else if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[16] === undefined && arrNames[10] === undefined) {
      arrNames[10] = arrNames[keyLoser - 1]
      arrNames[16] = arrNames[keyWinner - 1]
    } else if (this.state.numOfSeeds === "4" && this.state.singleKO) {
      this.setState({
        showWinnerBln: true,
        winner: arrNames[keyWinner-1]
      })
    } else if (this.state.numOfSeeds === "8" && arrNames[10] === undefined) {
      arrNames[10] = arrNames[keyWinner-1];
    } else if (this.state.numOfSeeds === "16" && arrNames[18] === undefined) {
      arrNames[18] = arrNames[keyWinner-1];
    }
  } else if ((idOfColumn === "team7" || idOfColumn === "team8") && (arrNames[6] !== undefined && arrNames[7] !== undefined))  {
    if(this.state.numOfSeeds === "4" && this.state.doubleKO && arrNames[9] === undefined && arrNames[10] === undefined) {
      arrNames[9] = arrNames[keyLoser - 1]
      arrNames[10] = arrNames[keyWinner - 1]
    } else if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[17] === undefined && arrNames[11] === undefined) {
      arrNames[11] = arrNames[keyLoser - 1]
      arrNames[17] = arrNames[keyWinner - 1]
    } else if (this.state.numOfSeeds === "8" && arrNames[11] === undefined){
      arrNames[11] = arrNames[keyWinner-1]
    } else if (this.state.numOfSeeds === "16" && arrNames[19] === undefined){
      arrNames[19] = arrNames[keyWinner-1]
    }
  } else if ((idOfColumn === "team9" || idOfColumn === "team10") && (arrNames[8] !== undefined && arrNames[9] !== undefined)) {
    if(this.state.numOfSeeds === "4" && this.state.doubleKO && arrNames[11] === undefined) {
      arrNames[11] = arrNames[keyWinner - 1]
    } else if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[18] === undefined) {
      arrNames[18] = arrNames[keyWinner - 1]
    } else if (this.state.numOfSeeds === "8" && arrNames[12] === undefined){
      arrNames[12] = arrNames[keyWinner-1]
    } else if (this.state.numOfSeeds === "16" && arrNames[20] === undefined){
      arrNames[20] = arrNames[keyWinner-1]
    }
  } else if ((idOfColumn === "team11" || idOfColumn === "team12")
    && (arrNames[10] !== undefined && arrNames[11] !== undefined)) {
    if (this.state.numOfSeeds === "4" && idOfColumn === "team11") {
        this.setState({
          showWinnerBln: true,
          winner: arrNames[keyWinner-1]
        })
    } else if(this.state.numOfSeeds === "4" && idOfColumn === "team12") {
      arrNames[12] = arrNames[keyLoser-1]
      arrNames[13] = arrNames[keyWinner-1]
      this.setState({extraMatch: true}) // extra match is needed because of double ko
    } else if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[19] === undefined) {
      arrNames[19] = arrNames[keyWinner - 1]
    } else if (this.state.numOfSeeds === "8" && arrNames[13] === undefined){
      arrNames[13] = arrNames[keyWinner-1]
    } else if (this.state.numOfSeeds === "16" && arrNames[21] === undefined){
      arrNames[21] = arrNames[keyWinner-1]
    }
  } else if ((idOfColumn === "team13" || idOfColumn === "team14")
    && (arrNames[12] !== undefined && arrNames[13] !== undefined)) {
    if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[20] === undefined) {
      arrNames[20] = arrNames[keyWinner - 1]
    } else if (this.state.numOfSeeds === "8" || (this.state.numOfSeeds === "4" && this.state.doubleKO)){
      this.setState({
        showWinnerBln: true,
        winner: arrNames[keyWinner-1]
      })
    } else if (this.state.numOfSeeds === "16" && arrNames[22] === undefined){
      arrNames[22] = arrNames[keyWinner-1]
    }

  } else if ((idOfColumn === "team15" || idOfColumn === "team16")
    && (arrNames[14] !== undefined && arrNames[15] !== undefined)) {
    if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[12] === undefined && arrNames[22] === undefined) {
      arrNames[22] = arrNames[keyWinner - 1]
      arrNames[12] = arrNames[keyLoser - 1]
    } else if(this.state.numOfSeeds === "16" && arrNames[23] === undefined) {
      arrNames[23] = arrNames[keyWinner - 1]
    }

  } else if ((idOfColumn === "team17" || idOfColumn === "team18")
    && (arrNames[16] !== undefined && arrNames[17] !== undefined)) {
    if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[23] === undefined && arrNames[13] === undefined) {
      arrNames[23] = arrNames[keyWinner - 1]
      arrNames[13] = arrNames[keyLoser - 1]
    } else if(this.state.numOfSeeds === "16" && arrNames[24] === undefined) {
      arrNames[24] = arrNames[keyWinner - 1]
    }

  } else if ((idOfColumn === "team19" || idOfColumn === "team20")
    && (arrNames[18] !== undefined && arrNames[19] !== undefined)) {
    if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[24] === undefined) {
      arrNames[24] = arrNames[keyWinner - 1]
    } else if(this.state.numOfSeeds === "16" && arrNames[25] === undefined) {
      arrNames[25] = arrNames[keyWinner - 1]
    }

  } else if ((idOfColumn === "team21" || idOfColumn === "team22")
    && (arrNames[20] !== undefined && arrNames[21] !== undefined)) {
    if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[25] === undefined) {
      arrNames[25] = arrNames[keyWinner - 1]
    } else if(this.state.numOfSeeds === "16" && arrNames[26] === undefined) {
      arrNames[26] = arrNames[keyWinner - 1]
    }

  } else if ((idOfColumn === "team23" || idOfColumn === "team24")
    && (arrNames[22] !== undefined && arrNames[23] !== undefined)) {
    if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[26] === undefined && arrNames[21] === undefined) {
      arrNames[26] = arrNames[keyWinner - 1]
      arrNames[21] = arrNames[keyLoser - 1]
    } else if(this.state.numOfSeeds === "16" && arrNames[27] === undefined) {
      arrNames[27] = arrNames[keyWinner - 1]
    }
  } else if ((idOfColumn === "team25" || idOfColumn === "team26")
    && (arrNames[24] !== undefined && arrNames[25] !== undefined)) {
    if(this.state.numOfSeeds === "8" && this.state.doubleKO && arrNames[27] === undefined) {
      arrNames[27] = arrNames[keyWinner - 1]
    } else if(this.state.numOfSeeds === "16" && arrNames[28] === undefined) {
      arrNames[28] = arrNames[keyWinner - 1]
    }
  } else if ((idOfColumn === "team27" || idOfColumn === "team28")
    && (arrNames[26] !== undefined && arrNames[27] !== undefined)) {
    if (this.state.numOfSeeds === "8" && idOfColumn === "team27") {
      this.setState({
        showWinnerBln: true,
        winner: arrNames[keyWinner-1]
      })
    } else if(this.state.numOfSeeds === "8" && idOfColumn === "team28") {
      arrNames[28] = arrNames[keyLoser-1]
      arrNames[29] = arrNames[keyWinner-1]
      this.setState({extraMatch: true}) // extra match is needed because of double ko
    } else if(this.state.numOfSeeds === "16" && arrNames[29] === undefined) {
      arrNames[29] = arrNames[keyWinner - 1]
    }

  } else if ((idOfColumn === "team29" || idOfColumn === "team30") && (arrNames[28] !== undefined && arrNames[29] !== undefined)) {
    this.setState({
      showWinnerBln: true,
      winner: arrNames[keyWinner-1]
    })
  }

  console.log(arrNames)
} else {
  arrWinner.push(idOfColumn)
  this.setState({
    winnerArray: arrWinner
  })
}

  this.setState({
    names: arrNames
  })

}

  render() {
    return (
      <div className="bracketBuilder">
        <div id = "heading" className="heading" style={{backgroundColor: "whitesmoke"}}>{this.renderInput()}</div>
        <div className = "tournamentBootstrap">{this.renderSingleKOBracket()}</div>
        <div className = "doubleKOTournament">{this.renderDoubleKOBracket()}</div>
      </div>
    );
  }
}
