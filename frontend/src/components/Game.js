import React from "react";


class Itinerary extends React.Component {
  /* state = {
    viewMore: false,
  };

  changeState = () => {
    this.setState({
      viewMore: !this.state.viewMore
    })
  }

  render() {
    const itineraryBackground = require("../img/miscellaneous/itineraryBackground.png");
    const dollars = [];
    const emptyDollars = [];
    const clocks = [];
    const emptyClocks = [];
    const hearts = [];
    const emptyHearts = [];

    function iconGenerator(quantity, filledValor, emptyValor) {
      for (var i = 0; i < quantity; i++) {
        filledValor.push("instance");
      }
      for (var i = 0; i < 5 - quantity; i++) {
        emptyValor.push("instance");
      }
    }
    iconGenerator(this.props.itinerary.price, dollars, emptyDollars);
    iconGenerator(this.props.itinerary.duration, clocks, emptyClocks);
    iconGenerator(this.props.itinerary.rating, hearts, emptyHearts);
    
    console.log(this.props)
    return (
      <>
        {
          <li
            id="itineraryBox"
            style={{ backgroundImage: `url(${itineraryBackground})` }}
          >
            <div id="imgTitleBox">
              <div
                id="tineraryImgContainer"
                style={{
                  backgroundImage: `url(${this.props.itinerary.profilePic})`,
                }}
              ></div>
              <div id="tineraryTextContainer">
                <h3>{this.props.itinerary.title}</h3>
              </div>
            </div>

            <div id="bodyBox">
              <div className="statisticsBox" id="hashtagContainer">
                {this.props.itinerary.hashtag.map((hashtag) => {
                  return <p id="hashtag">{hashtag}</p>;
                })}
              </div>
              <div className="statisticsBox">
                <div className="valorBox">
                  <p className="propiety">Price:</p>
                  {dollars.map((dollar) => {
                    return (
                      <p className="valor">
                        <i id="dollar" className="small material-icons">
                          local_atm
                        </i>
                      </p>
                    );
                  })}
                  {emptyDollars.map((emptyDollar) => {
                    return (
                      <p className="emptyValor">
                        <i className="small material-icons">local_atm</i>
                      </p>
                    );
                  })}
                </div>

                <div className="valorBox">
                  <p className="propiety">Duration: </p>
                  {clocks.map((clock) => {
                    return (
                      <p className="valor">
                        <i id="clock" className="small material-icons">
                          access_time
                        </i>
                      </p>
                    );
                  })}
                  {emptyClocks.map((emptyClock) => {
                    return (
                      <p className="emptyValor">
                        <i className="small material-icons">access_time</i>
                      </p>
                    );
                  })}
                </div>

                <div className="valorBox">
                  <p className="propiety">Likes:</p>
                  <p className="valor">
                    <i id="heart" className="small material-icons">
                      favorite_border
                    </i>
                    {this.props.itinerary.rating}
                  </p>
                </div>
              </div>
            </div>
            
            <button className='showBtn' onClick={this.changeState}>
              {!this.state.viewMore
              ? 'Show More'
              : 'Show Less' }</button>

            {this.state.viewMore ? (
              <div id="viewMore">
                <p>Acá van a ir las activities</p>
                {this.props.itinerary.comments.length > 1 
                ? (<div id="commentsBox" className="statisticsBox">
                    <p>Comments</p>
                    {this.props.itinerary.comments.map((comment) => {
                      return <div>{comment}</div>;
                    })}
                    <div></div>
                  </div>) 
                : <p className="propiety">No comentaries yet</p>}
              </div>
              ) : null
            }
          </li>
        }
      </>
    );
  } */
}

export default Itinerary;