import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeType = (event) => {
    this.setState({
      filters: {type: event.target.value}
    })
  }

  findPetsClick = () => {
    const PETSURL = this.state.filters.type === 'all' ? '/api/pets' : `/api/pets?type=${this.state.filters.type}`
    fetch(PETSURL)
    .then(res => res.json())
    .then(pets => this.updatePets(pets))
    .catch(err => console.log(err))
  }

  updatePets = (pets) => {
    this.setState({
      pets: pets
    })
  }

  adoptPet = (id) => {
    let petIndex = this.state.pets.findIndex(pet => pet.id === id )
    this.setState({
      pets: [
        ...this.state.pets.slice(0,petIndex), 
        Object.assign({}, this.state.pets[petIndex], {isAdopted: true}),
        ...this.state.pets.slice(petIndex + 1)
      ]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
