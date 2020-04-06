import React from 'react'

class Pet extends React.Component {
  // showAdoptionOption = () => {
  //   return (
  //     <div className="extra content">
  //       {/* {console.log(this.props.pet.name, this.props.pet.isAdopted)} */}
  //       {this.props.pet.isAdopted ? <React.Fragment><button className="ui primary button">Already adopted</button>
  //         <button className="ui disabled button" onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button></React.Fragment> : <React.Fragment><button className="ui disabled button">Already adopted</button>
  //           <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button></React.Fragment>}
  //     </div>
  //   )
  // }

  render() {
    // console.log(this.props.pet)
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <p>{this.props.pet.name} {this.props.pet.gender === 'male' ? " ♂" : " ♀"}</p>
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}T</p>
          </div>
        </div>
        <div className="extra content">
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button> */}
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button className="ui primary button" onClick={() => this.props.onAdoptPet(this.props.pet.id)} >Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
