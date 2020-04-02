import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }
  //Use callback from child Comp
  onChangeType = value => {
    this.setState({ ...this.state, filters: { type: value } });
  };
  onFindPetsClick = () => {
    //fetch when it's call
    //udate the params by state.filters.type
    //event should be value
    const all = "/api/pets";
    const animal = `/api/pets?type=${this.state.filters.type}`;
    let url;
    this.state.filters.type === "all" ? (url = all) : (url = animal);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ pets: data, ...this.state.filters }));
  };
  onAdoptPet = adoptId => {
    const newPets = this.state.pets.map(pet => {
      if (adoptId == pet.id) {
        const newPet = pet;
        newPet.isAdopted
          ? (newPet.isAdopted = false)
          : (newPet.isAdopted = true);
        console.log(newPet.isAdopted);
      }
    });
    this.setState({ newPets, ...this.state.filters });
  };
  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
