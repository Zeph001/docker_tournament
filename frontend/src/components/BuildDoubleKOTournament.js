import React from "react";
import "semantic-ui-css/semantic.min.css";
import 'reactjs-popup/dist/index.css';
import "../css/App.css";
import "bootstrap/dist/css/bootstrap-reboot.min.css";

//builds the double-KO tournament structure with Bootstrap-Grid
function BuildDoubleKOTournament(props) {
  let arrNames = props.names
  if(arrNames.length >= 4 && props.numOfSeeds === "4" && props.doubleKO) {
    return (
      <div className="container my-container">
        <div className="row my-row justify-content-center">
          <h1>{props.tournamentName}</h1>
        </div>

        {/*Header Row*/}
        <div className="row my-row justify-content-between">
          <div className="col-2 header-col">Quarterfinals</div>
          <div className="col-2 header-col">Semifinals</div>
          <div className="col-4 header-col">Final</div>
          <div className="col-2 header-col">Semifinals</div>
          <div className="col-2 header-col">Quarterfinals</div>
        </div>
        {/*Row 1*/}
        <div className="row my-row justify-content-between">
          <div className="col-2 my-col align-self-center" id="team1" onClick={props.nextRound}>
            {arrNames[0]}
          </div>
          <div className="col-2 my-col loser-col align-self-center" id="team5" onClick={props.nextRound}>
            {arrNames[4]}
          </div>
        </div>

        {/*Row 2*/}
        <div className="row my-row justify-content-center">
          <div className="col-2 my-col align-self-center" id="team7" onClick={props.nextRound}>
            {arrNames[6]}
          </div>
          <div className="col-2 align-self-center"/>
          <div className="col-2 align-self-center"/>
          <div className="col-2 my-col loser-col align-self-center" id="team9" onClick={props.nextRound}>
            {arrNames[8]}
          </div>
        </div>

        {/*Row 3*/}
        <div className="row my-row justify-content-between">
          <div className="col-2 my-col align-self-center" id="team2" onClick={props.nextRound}>
            {arrNames[1]}
          </div>
          <div className="col-2 my-col loser-col align-self-center" id="team6" onClick={props.nextRound}>
            {arrNames[5]}
          </div>
        </div>

        {/*Row 4*/}
        <div className="row my-row justify-content-center">
          <div className="col-2 my-col align-self-center" id="team11" onClick={props.nextRound}>
            {arrNames[10]}
          </div>
          <div className="col-2 my-col align-self-center loser-col" id="team12" onClick={props.nextRound}>
            {arrNames[11]}
          </div>
        </div>

        {/*Row 5*/}
        <div style={{display: (props.extraMatch ? 'block' : 'none')}}>
          <div className="row my-row justify-content-center">
            <div className="col-2 my-col" id="team13" onClick={props.nextRound}>
              {arrNames[12]}
            </div>
            <div className="col-2 my-col loser-col" id="team14" onClick={props.nextRound}>
              {arrNames[13]}
            </div>
          </div>
        </div>

        {/*Row 6*/}
        <div className="row my-row justify-content-between">
          <div className="col-2 my-col align-self-center" id="team3" onClick={props.nextRound}>
            {arrNames[2]}
          </div>
          <div className="col-2"/>
        </div>

        {/*Row 7*/}
        <div className="row my-row justify-content-center">
          <div className="col-2 my-col align-self-center" id="team8" onClick={props.nextRound}>
            {arrNames[7]}
          </div>
          <div className="col-2 align-self-center"/>
          <div className="col-2 align-self-center"/>
          <div className="col-2 my-col loser-col align-self-center" id="team10" onClick={props.nextRound}>
            {arrNames[9]}
          </div>
        </div>

        {/*Row 8*/}
        <div className="row my-row justify-content-between">
          <div className="col-2 my-col align-self-center" id="team4" onClick={props.nextRound}>
            {arrNames[3]}
          </div>
          <div className="col-2">
          </div>
        </div>
      </div>
    )
  }else if(arrNames.length >= 8 && props.numOfSeeds === "8" && props.doubleKO) {
    return (
      <div className="container my-container">
        <div className="row my-row justify-content-center">
          <h1>{props.tournamentName}</h1>
        </div>
        {/*Header Row*/}
        <div className="row my-row justify-content-between">
          <div className="col header-col">First Round</div>
          <div className="col header-col">Quarterfinals</div>
          <div className="col header-col">Semifinals</div>
          <div className="col-3 header-col">Final</div>
          <div className="col header-col">Semifinals</div>
          <div className="col header-col">Quarterfinals</div>
          <div className="col header-col">First Round</div>
        </div>

        {/*Row 1*/}
        <div className="row my-row justify-content-between">
          <div className="col my-col align-self-center" id="team1" onClick={props.nextRound}>
            {arrNames[0]}
          </div>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col my-col loser-col align-self-center" id="team9" onClick={props.nextRound}>
            {arrNames[8]}
          </div>
        </div>

        {/*Row 2*/}
        <div className="row my-row justify-content-between">
          <div className="col my-col align-self-center" id="team2" onClick={props.nextRound}>
            {arrNames[1]}
          </div>
          <div className="col my-col align-self-center" id="team15" onClick={props.nextRound}>
            {arrNames[14]}
          </div>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col my-col loser-col align-self-center" id="team19" onClick={props.nextRound}>
            {arrNames[18]}
          </div>
          <div className="col my-col loser-col align-self-center" id="team10" onClick={props.nextRound}>
            {arrNames[9]}
          </div>
        </div>

        {/*Row 3*/}
        <div className="row my-row justify-content-center">
          <div className="col"/>
          <div className="col"/>
          <div className="col my-col align-self-center" id="team23" onClick={props.nextRound}>
            {arrNames[22]}
          </div>
          <div className="col"/>
          <div className="col"/>
          <div className="col my-col loser-col align-self-center" id="team25" onClick={props.nextRound}>
            {arrNames[24]}
          </div>
          <div className="col"/>
          <div className="col"/>
        </div>

        {/*Row 4*/}
        <div className="row my-row justify-content-between">
          <div className="col my-col align-self-center" id="team3" onClick={props.nextRound}>
            {arrNames[2]}
          </div>
          <div className="col my-col align-self-center" id="team16" onClick={props.nextRound}>
            {arrNames[15]}
          </div>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col my-col loser-col align-self-center" id="team20" onClick={props.nextRound}>
            {arrNames[19]}
          </div>
          <div className="col my-col loser-col align-self-center" id="team11" onClick={props.nextRound}>
            {arrNames[10]}
          </div>
        </div>

        {/*Row 5*/}
        <div className="row my-row justify-content-between">
          <div className="col my-col align-self-center" id="team4" onClick={props.nextRound}>
            {arrNames[3]}
          </div>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col my-col loser-col align-self-center" id="team12" onClick={props.nextRound}>
            {arrNames[11]}
          </div>
        </div>

        {/*Row 6*/}
        <div className="row my-row justify-content-between">
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col my-col align-self-center" id="team27" onClick={props.nextRound}>
            {arrNames[26]}
          </div>
          <div className="col my-col loser-col align-self-center" id="team28" onClick={props.nextRound}>
            {arrNames[27]}
          </div>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
        </div>

        {/*Row 7*/}
        <div style={{display: (props.extraMatch ? 'block' : 'none')}}>
          <div className="row my-row justify-content-center">
            <div className="col"/>
            <div className="col"/>
            <div className="col"/>
            <div className="col my-col" id="team29" onClick={props.nextRound}>
              {arrNames[28]}
            </div>
            <div className="col my-col loser-col" id="team30" onClick={props.nextRound}>
              {arrNames[29]}
            </div>
            <div className="col"/>
            <div className="col"/>
            <div className="col"/>
          </div>
        </div>

        {/*Row 8*/}
        <div className="row my-row justify-content-between">
          <div className="col my-col align-self-center" id="team5" onClick={props.nextRound}>
            {arrNames[4]}
          </div>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col my-col loser-col align-self-center" id="team13" onClick={props.nextRound}>
            {arrNames[12]}
          </div>
        </div>

        {/*Row 9*/}
        <div className="row my-row justify-content-between">
          <div className="col my-col align-self-center" id="team6" onClick={props.nextRound}>
            {arrNames[5]}
          </div>
          <div className="col my-col align-self-center" id="team17" onClick={props.nextRound}>
            {arrNames[16]}
          </div>
          <div className="col"/><div className="col"/><div className="col"/><div className="col"/>
          <div className="col my-col loser-col align-self-center" id="team21" onClick={props.nextRound}>
            {arrNames[20]}
          </div>
          <div className="col my-col loser-col align-self-center" id="team14" onClick={props.nextRound}>
            {arrNames[13]}
          </div>
        </div>

        {/*Row 10*/}
        <div className="row my-row justify-content-center">
          <div className="col"/>
          <div className="col"/>
          <div className="col my-col align-self-center" id="team24" onClick={props.nextRound}>
            {arrNames[23]}
          </div>
          <div className="col"/>
          <div className="col"/>
          <div className="col my-col loser-col align-self-center" id="team26" onClick={props.nextRound}>
            {arrNames[25]}
          </div>
          <div className="col"/>
          <div className="col"/>
        </div>

        {/*Row 11*/}
        <div className="row my-row justify-content-between">
          <div className="col my-col align-self-center" id="team7" onClick={props.nextRound}>
            {arrNames[6]}
          </div>
          <div className="col my-col align-self-center" id="team18" onClick={props.nextRound}>
            {arrNames[17]}
          </div>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col my-col loser-col align-self-center" id="team22" onClick={props.nextRound}>
            {arrNames[21]}
          </div>
          <div className="col"/>
        </div>

        {/*Row 12*/}
        <div className="row my-row justify-content-between">
          <div className="col my-col align-self-center" id="team8" onClick={props.nextRound}>
            {arrNames[7]}
          </div>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
          <div className="col"/>
        </div>
      </div>
    )
  }else if(arrNames.length >= 16 && props.numOfSeeds === "16" && props.doubleKO) {
   return <h1>Coming soon!</h1>
  }
}

export default BuildDoubleKOTournament
