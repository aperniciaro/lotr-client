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
    const data = {
      name: this.state.characterNameInput,
      weaponOfChoice: this.state.weaponInput,
      profession: this.state.professionInput,
      residence: this.state.residenceInput,
      hasWieldedOneRing: this.state.ringInput,
      raceId: this.state.raceSelectInput
    }

    axios
      .post('https://localhost:5001/api/Characters', data, {
        headers: { 'Content-type': 'application/json' }
      })
      .then(this.GetAllCharacters)
  }

  UpdateCharacter = () => {
    const data = {
      name: this.state.characterNameInput,
      weaponOfChoice: this.state.weaponInput,
      profession: this.state.professionInput,
      residence: this.state.residenceInput,
      hasWieldedOneRing: this.state.ringInput,
      raceId: this.state.raceSelectInput
    }

    axios
      .put(
        `https://localhost:5001/api/Characters/name/${
          this.state.characterNameInput
        }`,
        data,
        {
          headers: { 'Content-type': 'application/json' }
        }
      )
      .then(this.GetAllCharacters)
  }

  DeleteCharacter = () => {
    axios
      .delete(
        `https://localhost:5001/api/Characters/name/${
          this.state.characterNameInput
        }`
      )
      .then(this.GetAllCharacters)
  }

  AddRace = () => {
    const data = {
      raceName: this.state.raceNameInput,
      nativeLanguage: this.state.languageInput,
      isImmortal: this.state.immortalInput
    }

    axios
      .post('https://localhost:5001/api/Races', data, {
        headers: { 'Content-type': 'application/json' }
      })
      .then(this.GetAllRaces)
  }

  UpdateRace = () => {
    const data = {
      raceName: this.state.raceNameInput,
      nativeLanguage: this.state.languageInput,
      isImmortal: this.state.immortalInput
    }

    axios
      .put(
        `https://localhost:5001/api/Races/name/${this.state.raceNameInput}`,
        data,
        {
          headers: { 'Content-type': 'application/json' }
        }
      )
      .then(this.GetAllRaces)
  }

  DeleteRace = () => {
    axios
      .delete(
        `https://localhost:5001/api/Races/name/${this.state.raceNameInput}`
      )
      .then(this.GetAllRaces)
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
      ringInput: !!parseInt(event.target.value)
    })
  }

  ChangeRaceSelect = event => {
    this.setState({
      raceSelectInput: parseInt(event.target.value)
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
      immortalInput: !!parseInt(event.target.value)
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
            return (
              <li key={character.id}>
                <h3>{character.name}</h3>
                <div className="character-attribute">
                  <h4>Weapon of Choice: </h4>
                  <h5>{character.weaponOfChoice}</h5>
                </div>
                <div className="character-attribute">
                  <h4>Profession: </h4>
                  <h5>{character.profession}</h5>
                </div>
                <div className="character-attribute">
                  <h4>Residence: </h4>
                  <h5>{character.residence}</h5>
                </div>
                <div className="character-attribute">
                  <h4>Wielded the One Ring?: </h4>
                  <h5>{character.hasWieldedOneRing ? 'Yes' : 'No'}</h5>
                </div>
                <div className="character-attribute">
                  <h4>Race: </h4>
                  <h5>{character.raceId}</h5>
                </div>
              </li>
            )
          })}
        </ul>
        <section className="character-inputs">
          <section className="text-fields">
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
          </section>
          <section className="drop-downs">
            <label htmlFor="one-ring">Wielded the One Ring?: </label>
            <select id="one-ring" onChange={this.ChangeOneRing}>
              <option value="" selected disabled hidden>
                Select
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <label htmlFor="race-select">Select Race: </label>
            <select id="race-select" onChange={this.ChangeRaceSelect}>
              <option value="" selected disabled hidden>
                Select
              </option>
              {this.state.races.map(race => {
                return (
                  <option key={race.id} value={race.id}>
                    {race.raceName}
                  </option>
                )
              })}
            </select>
          </section>
        </section>
        <section className="button-group">
          <button onClick={this.AddCharacter}>Add Character</button>
          <button onClick={this.UpdateCharacter}>Update Character</button>
          <button onClick={this.DeleteCharacter}>Delete Character</button>
        </section>
        <h2>Races</h2>
        <ul className="race-list">
          {this.state.races.map(race => {
            return (
              <li key={race.id}>
                <h3>{race.raceName}</h3>
                <div className="race-attribute">
                  <h4>Native Language: </h4>
                  <h5>{race.nativeLanguage}</h5>
                </div>
                <div className="race-attribute">
                  <h4>Is Immortal?: </h4>
                  <h5>{race.isImmortal ? 'Yes' : 'No'}</h5>
                </div>
              </li>
            )
          })}
        </ul>
        <section className="race-inputs">
          <section className="text-fields">
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
          </section>
          <section className="drop-downs">
            <label htmlFor="is-immortal">Immortal unless slain?: </label>
            <select id="is-immortal" onChange={this.ChangeImmortal}>
              <option value="" selected disabled hidden>
                Select
              </option>
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
          </section>
        </section>
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
