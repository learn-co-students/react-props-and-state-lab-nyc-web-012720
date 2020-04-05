import React from 'react'

class Pet extends React.Component {

  state = {
    isAdopted: this.props.pet.isAdopted
  }

  onAdoptPet = () => {
    this.setState({
      isAdopted: !this.state.isAdopted
    })
    this.props.onAdoptPet(this.props.pet.id)
  }


  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender === "female" ? '♀' : '♂' }
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.state.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={this.onAdoptPet} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
