# multiplayer

FIXME

## Prerequisites

You will need [Leiningen][1] 2.0 or above installed.

[1]: https://github.com/technomancy/leiningen

## Running

To start a web server for the application, run:

    lein run

Then, in another terminal, start figwheel to compile the client:

	lein figwheel

Then connect the browser to:

	http://localhost:3449/

The client will load and then connect to the server over a websocket.

Pressing left and right arrows will rotate the yellow ship on the left. The blue ship on the right represents the reflected state from the server, or how other game players would see your ship.

## License

Copyright © 2016 FIXME
