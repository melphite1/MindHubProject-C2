import React from 'react'
import toArray from "react"

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
        {
                                            this.props.game.rating === 1 ? <p className='text-light'><span className='text-light'>$</span>$$$$</p> :
                                                this.props.game.rating === 2 ? <p className='text-light'><span className='text-light'>$$</span>$$$</p> :
                        
                                                this.props.game.rating === 3 ? <p className='text-light'><span className='text-light'>$$$</span>$$</p> :
                                                this.props.game.rating === 4? <p className='text-light'><span className='text-light'>$$</span>$$$</p> :
                        
                                                this.props.game.rating === 5 ? <p className='text-light'><span className='text-light'>$$$</span>$$</p>: null}
      </>
      

    )
  }
}

export default Game