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
changeState = (event) => {
    this.setState({
        filters: {type: event.target.value}
    })
}
fetchPets = () => {
    let baseUrl = "/api/pets"
    if (this.state.filters.type !== "all"){
        baseUrl+=`?type=${this.state.filters.type}`
    }
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(fetchedPets => (this.setState({pets:fetchedPets}))) 
}
changeAdoptionKey = (petId) => {
    const newPets = this.state.pets.map(pet => (
        pet.id === petId ? { ...pet, isAdopted: true } : pet
    ));
      this.setState({ pets: newPets });
} 
render() {
    return (
        <div className = "ui container">
            <header>
                <h1 className="ui dividing header">React Animal Shelter</h1>
            </header>
            <div className="ui container">
            <div className="ui grid">
                <div className="four wide column">
                <Filters onChangeType={this.changeState} onFindPetsClick={this.fetchPets}/>
                </div>
                <div className="twelve wide column">
                <PetBrowser onAdoptPet={this.changeAdoptionKey} pets={this.state.pets}/>
                </div>
            </div>
            </div>
        </div>
    )
  }
}
export default App
