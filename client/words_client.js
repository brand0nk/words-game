'use strict';

const e = React.createElement;

class GameClientWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const chatBar = React.createElement(ChatBar);
    return React.createElement('div', null, ['Hello', chatBar]);
  }
}

class ChatBar extends React.Component {
  render() {
    return React.createElement('div', ['class', 'chatBar'], 'chat');
  }
}

const root = document.getElementById('game_client_container');
const element = React.createElement(GameClientWindow, null);
ReactDOM.render(element, root);
