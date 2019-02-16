import React, { Component } from 'react';
import './index.scss';

class Expedition extends Component {

  render() {

    return (
      
      <div className="expedition view-comp">


        <h2>
          Organizing Expeditions
        </h2>


        <h3>
          set checkInChannel Config
        </h3>
        <div className="section">
          <div>
            !team command will only be available in this channel
          </div>
          <img alt="checkInChannel" src={require('../Pictures/checkin example.png')} />
        </div>


        <h3>
          !team checkin
        </h3>
        <div className="section">        
          <div>
            check-in to first available team
          </div>
          <img alt='gmrole' src={require('../Pictures/checkin example.png')} />
        </div>


        <h3>
          !team checkout
        </h3>
        <div className="section">
          <div>
            check-out from team
          </div>
          <img alt='checkout' src={require('../Pictures/checkout example.png')} />
        </div>

        <h3>
          !team view all
        </h3>
        <div className="section">
          <div>
            view all teams
          </div>
          <img alt='team view all' src={require('../Pictures/team view all example.png')} />
        </div>

        <h3>
          !team edit team[#] [team title]
        </h3>
        <div className="section">
          <div>
            changing team #'s title
          </div>
          <img alt='team name change' src={require('../Pictures/changing team names example.png')} />
        </div>

        <h3>
          !team add team[#] [ign]
        </h3>
        <div className="section">
          <div>
            adding [ign] to team #
          </div>
          <img alt='team add' src={require('../Pictures/team add exmaple.png')} />
        </div>

        <h3>
          !team mention team[#] [message]
        </h3>
        <div className="section">
          <div>
            sends [message] to everyone on team #
          </div>
          <img alt='team mention' src={require('../Pictures/team mention example.png')} />
        </div>

        <h3>For all commands, type !team help</h3>
    </div>


    )
  }
}

export default Expedition;
