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

  onChangeType = (value) => {
    this.setState({filters: {type: value}})
  }

  onFindPetsClick = () => {
    let filterType = this.state.filters.type
    let animalUrl = '/api/pets'

    if (filterType !== 'all') {
      animalUrl += `?type=${filterType}`
    } 

    fetch(animalUrl)
    .then(res => res.json())
    .then(list => this.setState({pets: list}))
  }

  onAdoptPet = (petId) => {
    let newPets = this.state.pets.map(pet => {
      if (pet.id === petId) {
        return {...pet, isAdopted: true}
      } else {
        return pet
      }
    })

    this.setState({pets: newPets}, () => console.log(this.state.pets))
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
