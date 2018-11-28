import React, { Component } from 'react';
import Header from './components/Header';
import Players from './components/Players';
import Form from './components/Form';
import playersList from './data/playerData';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      players: playersList,
    }
  }

  addPlayers = (name, age) => {
    const { players } = this.state 
    players.push({
      name: name,
      id: players.length + 1,
      score: 0,
      age: age
    })
    this.setState({ players })
    console.log(this.state.players)
  }

  removePlayer = id => {
    let { players } = this.state 
    players = players.filter( p => p.id !== id )
    this.setState({ players })
  }

  handleScoreChange = (i, e) => {
    let { players } = this.state
      players[i - 1].score += e
      this.setState({ players })
    
  }

  getHighScore = () => {
    const scores = this.state.players.map(s => s.score)
    const highScore = Math.max(...scores)
    if (highScore) {
      return highScore
    }
    return null
  }

  render() {
    const { players } = this.state
    const highScore = this.getHighScore()
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" players={players} />
        <Players highScore={highScore} changeScore={this.handleScoreChange} removePlayer={this.removePlayer} players={players} />
        <Form addPlayer={this.addPlayers} />
      </div>
    );
  }
}

export default App;
