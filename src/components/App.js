import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="slime-img">
          <img
            alt='slime logo'
            src={require('./Pictures/king_slime_solo.png')} />
        </div>
        <div>
          <h1 className="slime-heading">
            A DISCORD BOT FOR MAPLESTORY M
        </h1>
        </div>
        <div>
          <a
            href='https://discordapp.com/oauth2/authorize?client_id=502644283329871872&scope=bot'
            target='blank'
            className="discord-link"
          >
            Invite Now
          </a>


        </div>
      </div>

    )
  }
}

export default App;
