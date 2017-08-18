import React from 'react';
import '../assets/square-animation.css';

const Home = (props) => {

  const Animation = (
    <div className="square-animation">
      <div className="view">
        <div className="part">
          <div className="plane">
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="static">
              <div className="cube">
                <div className="face x"></div>
                <div className="face y"></div>
                <div className="face z"></div>
              </div>
              <div className="cube">
                <div className="face x"></div>
                <div className="face y"></div>
                <div className="face z"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="part">
          <div className="plane">
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="cube">
              <div className="face x"></div>
              <div className="face y"></div>
              <div className="face z"></div>
            </div>
            <div className="static">
              <div className="cube">
                <div className="face x"></div>
                <div className="face y"></div>
                <div className="face z"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


  return (
    <div className="header-wrapper" style={{"height": props.height}}>
      {Animation}
      <div className="header">
          <h3>Jana Rajakumar</h3>
          <h6>Software Developer</h6>
      </div>
    </div>
  );
}

export default Home;