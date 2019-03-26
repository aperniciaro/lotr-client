import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {
  state = {
    characters: [],
    races: [],
    characterNameInput: '',
    weaponInput: '',
    professionInput: '',
    residenceInput: '',
    ringInput: false,
    raceSelectInput: '',
    raceNameInput: '',
    languageInput: '',
    immortalInput: false
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

  DeleteCharacter = characterName => {
    axios
      .delete(`https://localhost:5001/api/Characters/name/${characterName}`)
      .then(this.GetAllCharacters())
  }

  AddRace = () => {
    axios.post('https://localhost:5001/api/Races').then(this.GetAllRaces())
  }

  UpdateRace = () => {}

  DeleteRace = () => {}

  ChangeCharacterName = event => {
    this.setState({
      characterNameInput: event.target.value
    })
  }

  ChangeWeapon = event => {
    this.setState({
      weaponInput: event.target.value
    })
  }

  ChangeProfession = event => {
    this.setState({
      professionInput: event.target.value
    })
  }

  ChangeResidence = event => {
    this.setState({
      residenceInput: event.target.value
    })
  }

  ChangeRaceSelect = event => {
    this.setState({
      raceSelectInput: event.target.value
    })
  }

  ChangeRaceName = event => {
    this.setState({
      raceNameInput: event.target.value
    })
  }

  ChangeLanguage = event => {
    this.setState({
      languageInput: event.target.value
    })
  }

  render() {
    return (
      <>
        <header>
          <h1>LotR-Dex</h1>
        </header>
        <h2>Characters</h2>
        <ul className="character-list">
          {this.state.characters.map(character => {
            return <li key={character.id}>{character.name}</li>
          })}
        </ul>
        <input
          className="text-field"
          placeholder="Character Name"
          onChange={this.ChangeCharacterName}
        />
        <input
          className="text-field"
          placeholder="Weapon of Choice"
          onChange={this.ChangeWeapon}
        />
        <input
          className="text-field"
          placeholder="Profession"
          onChange={this.ChangeProfession}
        />
        <input
          className="text-field"
          placeholder="Residence"
          onChange={this.ChangeResidence}
        />
        <select className="one-ring">
          <option value="default">Wielded the One Ring?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select className="drop-down" onChange={this.ChangeRaceSelect}>
          <option value="default">Select Race</option>
          {this.state.races.map(race => {
            return <option value={race.raceId}>{race.raceName}</option>
          })}
        </select>
        <section className="button-group">
          <button onClick={this.AddCharacter}>Add Character</button>
          <button onClick={this.UpdateCharacter}>Update Character</button>
          <button onClick={this.DeleteCharacter(this.state.characterNameInput)}>
            Delete Character
          </button>
        </section>
        <h2>Races</h2>
        <ul className="race-list">
          {this.state.races.map(race => {
            return <li key={race.id}>{race.raceName}</li>
          })}
        </ul>
        <input
          className="text-field"
          placeholder="Race"
          onChange={this.ChangeRaceName}
        />
        <input
          className="text-field"
          placeholder="Native Language"
          onChange={this.ChangeLanguage}
        />
        <select className="is-immortal">
          <option value="default">Immortal unless slain?</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <section className="button-group">
          <button onClick={this.AddRace}>Add Race</button>
          <button onClick={this.UpdateRace}>Update Race</button>
          <button onClick={this.DeleteRace}>Delete Race</button>
        </section>
      </>
    )
  }
}

export default App
