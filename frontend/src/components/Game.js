import React from 'react'


class Game extends React.Component {

  render(){
    console.log(this.props)
    return (
      <>
        <div>
          <h1 className='text-light'>{this.props.game.title}</h1>
          <body className='text-light'>{this.props.game.body}</body>
          {this.props.game.images.map(imagenes =>{
            return<img src ={imagenes} style={{width:"800px"}}></img>
          })}
        </div>
        <p className='text-light'>{this.props.game.rating}</p>
        

      </>
      

    )
  }
}

export default Game