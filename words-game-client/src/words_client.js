'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './words-game.css';

const e = React.createElement;

class GameClientWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chatBar = React.createElement(ChatBar);
    // return React.createElement('div', null, ['Hello', chatBar]);
    return <div class="gameClientWindow">
      <PlayerList />
    </div>;
  }
}

class ChatBar extends React.Component {
  render() {
    // return React.createElement('div', ['class', 'chatBar'], 'chat');
    return <div class="chatBar">chat</div>;
  }
}

class PlayerList extends React.Component {
  render() {
    return <div class="playerListCard">
      Players List
      <ul className="playerList">
        <PlayerListEntry number="1"/>
        <PlayerListEntry number="2"/>
      </ul>
    </div>;
  }
}

class PlayerListEntry extends React.Component {
  render() {
    return <li class="playerListEntry">entry {this.props.number}</li>;
  }
}
//
// const root = document.getElementById('game_client_container');
// const element = React.createElement(GameClientWindow, null);
// ReactDOM.render(element, root);

export default GameClientWindow;
