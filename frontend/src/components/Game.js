import React from 'react'

class Game extends React.Component {

  render(){
    console.log(this.props)
    return (
      <>
        <div>
          <h1 className='text-light'>{this.props.game.title}</h1>
        </div>
      </>

    )
  }
}

export default Game