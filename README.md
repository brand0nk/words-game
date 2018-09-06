# words-game
word game where you come up with a word that includes the provided substring
within a time limit.

server runs a node endpoint that is connected to by the reactjs client embedded
in a webpage.


You can use pm2 to run the server
```
npm install pm2 -g
pm2 start server.js
```


Generating the library:
Prob a java program or smth b/c I'm tired of writing js.
Do I want this in a db or just a flat file or something...
For now, I'll write out just a txt file
[char string] => comma, separated, list, of, words

Idk we can slurp this into a db later or whatever.
