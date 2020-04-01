import React from 'react'

// {
//   id: '5c142d9e-ea45-4231-8146-cccf71c704c0',
//   type: 'dog',
//   gender: 'male',
//   age: 4,
//   weight: 1,
//   name: 'Trident',
//   isAdopted: false,
// }

class Pet extends React.Component {
  handleClick = (id) => {
    this.props.onAdoptPet(id)
  }


  render() {
    const pet = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {pet.gender === 'female' ? '♀' : '♂'}
            {pet.name}
          </a>
          <div className="meta">
            <span className="date">{pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {pet.age}</p>
            <p>Weight: {pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => {this.handleClick(pet.id)}}>Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
