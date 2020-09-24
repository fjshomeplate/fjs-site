import React from "react"
const { Component } = React

class Game extends Component {
  render() {
    const { title } = this.props

    return (
      <div className="col-12 col-md-4 mb-4">
        <p>Introducing</p>
        <h2>{this.props.title}</h2>
        <a href="https://play.fjshomeplate.com/fat-benji">
          <button>Play</button>
        </a>
      </div>
    )
  }
}

export default Game
