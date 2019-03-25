import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    characters: [],
    races: []
  }
  componentDidMount() {
    axios.get('https://localhost:5001/api/Characters').then(resp => {
      this.setState({
        characters: resp.data
      })
    })
    axios.get('https://localhost:5001/api/Races').then(resp => {
      this.setState({
        races: resp.data
      })
    })
  }
  render() {
    return (
      <>
        <h1>LotR-Dex</h1>
        <h2>Characters</h2>
        <ul>
          {this.state.characters.map(character => {
            return <li key={character.id}>{character.name}</li>
          })}
        </ul>
        <input placeholder="Character Name" />
        <h2>Races</h2>
        <ul>
          {this.state.races.map(race => {
            return <li key={race.id}>{race.raceName}</li>
          })}
        </ul>
        <input placeholder="Race" />
      </>
    )
  }
}

export default App
