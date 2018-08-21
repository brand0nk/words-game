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
    return <div className="gameClientWindow">
      <HeaderBar />
      <PlayerList />
      <GameView />
    </div>;
  }
}

class HeaderBar extends React.Component {
  render() {
    return <div className="headerBar">Explosion Festival</div>;
  }
}

class ChatBar extends React.Component {
  render() {
    // return React.createElement('div', ['class', 'chatBar'], 'chat');
    return <div className="chatBar">chat</div>;
  }
}

class PlayerList extends React.Component {
  render() {
    return <div className="playerListCard">
      <ul className="playerList">
        <PlayerListEntry number="1"/>
        <PlayerListEntry number="2"/>
      </ul>
    </div>;
  }
}

class GameView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    }
    this.handleKeydown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    console.log(e.keyCode);
    switch(e.keyCode) {
    case 13: // enter key
      e.preventDefault();
      console.log("SEND IT");
      break;
    case 32: // space bar we just eat
      e.preventDefault();
      break;
      // clear out value and do checking stuff.
    }

    // alert("aaaa");
    // this.props.value = "hello";
  }

  render() {
    return <div className="gameView">
      {this.props.value}
      <form id="gameInputForm" className="hidden" onKeyDown={(e) => this.handleKeyDown(e)}>
        <input autoFocus="autofocus" type="text" autoComplete="off" autoCorrect="off" id="gameInput" maxLength="32"/>
      </form>
      {this.props.value}
    </div>;
  }


}

class PlayerListEntry extends React.Component {
  render() {
    return <li className="playerListEntry">entry {this.props.number}</li>;
  }
}
//
// const root = document.getElementById('game_client_container');
// const element = React.createElement(GameClientWindow, null);
// ReactDOM.render(element, root);

export default GameClientWindow;
