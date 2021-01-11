import React, { Component } from 'react';
import './App.css';
import Highlights from './components/Highlights';
import Button from './components/Buttons';
import RowList from './components/RowList';
import TableData from './components/TableData';
import Information from './components/Information';
import Header from './components/Header';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            leagueName: 'Ligue 1',
            rows: [],
            leagueId: 'FL1',
            leagues: {
                "Ligue 1": 'FL1',
                "La Liga": 'PD',
                "Premier League": 'PL',
                "Bundesliga": 'BL1',
                "Serie A": 'SA'
            },
            buttons: []
        }
        this.handleLeagueClick = this.handleLeagueClick.bind(this);
    }

  handleLeagueClick(e) {
    const newId = e.target.getAttribute('data-leagueid');
    this.setState({
      leagueId: newId
    }, () => { this.fetchData() });
  }

  fetchData() {
    const Token = '0bf4a2ce18824fe9ae78c121e88aee92';
    const leagueId = this.state.leagueId;
    const link = 'https://api.football-data.org/v2/competitions/' + leagueId + '/standings';

    fetch(link, { headers: { 'X-Auth-Token': Token } })
        .then((response) => response.json())
        .then((responseJson) => {
          const rows = [];
          responseJson.standings[0].table.map(
              (item, index) => {
                const { position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = item;
                const {crestUrl, name} = item.team;

                  rows.push(
                      <RowList key={index} position={position} crestURI={crestUrl} teamName={name} playedGames={playedGames} wins={won} draws={draw} losses={lost} goalsFor={goalsFor} goalsAgainst={goalsAgainst} goalDifference={goalDifference} points={points} />
                  )

                return (
                    rows
                )
              }
          )
          this.setState({
            leagueName: responseJson.competition.name,
            rows: rows
          })
        })
        .catch((error) => {
          console.error(error);
        });
  }

  componentDidMount() {
    this.fetchData();
    for (let key in this.state.leagues) {
      this.state.buttons.push(
          <Button handleClick={this.handleLeagueClick} key={this.state.leagues[key]} leagueId={this.state.leagues[key]} text={key} />
      )
    }
  }

  render() {

    return (
        <div className="app">
            <Header/>
            <Highlights>
                {this.state.buttons}
                {/*<PokemonTypeList setType={setSelectedType} />*/}
            </Highlights>
            <Information leagueCaption={this.state.leagueName}/>
            <div className="container">
                <TableData>
                    {this.state.rows}
                </TableData>
            </div>
        </div>
    );
  }

}

export default App;