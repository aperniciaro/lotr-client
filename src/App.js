import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    characters: [],
    races: []
  }

  componentDidMount() {
    this.GetAllCharacters()
    this.GetAllRaces()
  }

  GetAllCharacters = () => {
    axios.get('https://localhost:5001/api/Characters').then(resp => {
      this.setState({
        characters: resp.data
      })
    })
  }

  GetAllRaces = () => {
    axios.get('https://localhost:5001/api/Races').then(resp => {
      this.setState({
        races: resp.data
      })
    })
  }

  AddCharacter = () => {
    axios
      .post('https://localhost:5001/api/Characters')
      .then(this.GetAllCharacters())
  }

  UpdateCharacter = () => {}

  DeleteCharacter = () => {}

  AddRace = () => {
    axios.post('https://localhost:5001/api/Races').then(this.GetAllRaces())
  }

  UpdateRace = () => {}

  DeleteRace = () => {}

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
        <button onClick="AddCharacter()">Add Character</button>
        <button onClick="UpdateCharacter()">Update Character</button>
        <button onClick="DeleteCharacter()">Delete Character</button>
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
        <button onClick="AddRace()">Add Race</button>
        <button onClick="UpdateRace()">Update Race</button>
        <button onClick="DeleteRace()">Delete Race</button>
      </>
    )
  }
}

export default App
