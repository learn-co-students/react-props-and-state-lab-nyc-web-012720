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

  onChangeType = value => {
    this.setState({pets: [], filters: {type: value}})
  }

  onFindPetsClick = () => {
    let petsURL
    this.state.filters.type === 'all' ? petsURL = '/api/pets' : petsURL = `/api/pets?type=${this.state.filters.type}`
    fetch(petsURL)
    .then(response => response.json())
    .then(pets => this.setState({pets}))
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
