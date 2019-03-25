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
        <input placeholder="Weapon of Choice" />
        <input placeholder="Profession" />
        <input placeholder="Residence" />
        <p>Have they wielded the One Ring?</p>
        <div>
          <input type="radio" id="yes" name="option" value="yes" />
          <label for="yes">Yes</label>
          <input type="radio" id="no" name="option" value="no" />
          <label for="no">No</label>
        </div>
        <select>
          <option id="race-select">Select Race</option>
          {this.state.races.map(race => {
            return <option value={race.raceId}>{race.raceName}</option>
          })}
        </select>
        <button>Add Character</button>
        <button>Update Character</button>
        <button>Delete Character</button>
        <h2>Races</h2>
        <ul>
          {this.state.races.map(race => {
            return <li key={race.id}>{race.raceName}</li>
          })}
        </ul>
        <input placeholder="Race" />
        <input placeholder="Native Language" />
        <p>Are they immortal unless slain?</p>
        <div>
          <input type="radio" id="yes" name="option" value="yes" />
          <label for="yes">Yes</label>
          <input type="radio" id="no" name="option" value="no" />
          <label for="no">No</label>
        </div>
        <button>Add Race</button>
        <button>Update Race</button>
        <button>Delete Race</button>
      </>
    )
  }
}

export default App
