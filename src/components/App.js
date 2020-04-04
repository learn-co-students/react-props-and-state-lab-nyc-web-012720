import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }
  

  onChangeType = event => {
    this.setState({ 
      filters: {
        ...this.state.filters, type: event.target.value}
    })
  }

  onFindPetsClick = () => {
    let petUrl = '/api/pets'
    let fetchUrl = petUrl

    if (this.state.filters.type !== 'all') {
      fetchUrl = `${petUrl}?type=${this.state.filters.type}`
    }

    fetch(fetchUrl)
    .then(res => res.json())
    .then(petsData => this.setState({ pets: petsData}))
  }

  onAdoptPet = (petId) => {
    const pets = this.state.pets.map( pet => {
      return pet.id === petId? {...pet, isAdopted: true} : pet
    })
    this.setState({ pets: pets})
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
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
