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
    ringInput: '',
    raceSelectInput: '',
    raceNameInput: '',
    languageInput: '',
    immortalInput: ''
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

  UpdateCharacter = () => {
    axios
      .post('https://localhost:5001/api/Characters')
      .then(this.GetAllCharacters())
  }

  DeleteCharacter = () => {
    axios
      .delete(
        `https://localhost:5001/api/Characters/name/${
          this.state.characterNameInput
        }`
      )
      .then(this.GetAllCharacters())
  }

  AddRace = () => {
    axios.post('https://localhost:5001/api/Races').then(this.GetAllRaces())
  }

  UpdateRace = () => {
    axios.post('https://localhost:5001/api/Races').then(this.GetAllRaces())
  }

  DeleteRace = () => {
    axios
      .delete(
        `https://localhost:5001/api/Races/name/${this.state.raceNameInput}`
      )
      .then(this.GetAllRaces())
  }

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

  ChangeOneRing = event => {
    this.setState({
      ringInput: event.target.value
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

  ChangeImmortal = event => {
    this.setState({
      immortalInput: event.target.value
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
        <label for="one-ring">Wielded the One Ring?: </label>
        <select id="one-ring" onChange={this.ChangeOneRing}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <label for="race-select">Select Race: </label>
        <select id="race-select" onChange={this.ChangeRaceSelect}>
          {this.state.races.map(race => {
            return <option value={race.raceId}>{race.raceName}</option>
          })}
        </select>
        <section className="button-group">
          <button onClick={this.AddCharacter}>Add Character</button>
          <button onClick={this.UpdateCharacter}>Update Character</button>
          <button onClick={this.DeleteCharacter}>Delete Character</button>
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
        <label for="is-immortal">Immortal unless slain?: </label>
        <select id="is-immortal" onChange={this.ChangeImmortal}>
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
