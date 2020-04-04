import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petCard = () => {
    return this.props.pets.map ( (pet, id) => 
      <Pet key={id} pet={pet} onAdoptPet={this.props.onAdoptPet}/>
    )
  }
  
  render() {  
    // console.log(this.props.pets);
    return (
      <div className="ui cards">
        {this.petCard()}
      </div>
    )
  }
}

export default PetBrowser
