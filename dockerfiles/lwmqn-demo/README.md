https://github.com/lwmqn/lwmqn-demo

```
$ docker build -t y12docker/dltdojo-lwmqndemo .
$ docker run -t -p 13000:3000 y12docker/dltdojo-lwmqndemo npm start
npm info it worked if it ends with ok
npm info using npm@4.0.5
npm info using node@v7.4.0
npm info lifecycle lwmqn-demo@0.3.0~prestart: lwmqn-demo@0.3.0
npm info lifecycle lwmqn-demo@0.3.0~start: lwmqn-demo@0.3.0

> lwmqn-demo@0.3.0 start /lwmqn-demo
> NODE_ENV=production node main

==> Listening on port 3000.
==> Open up http://0.0.0.0:3000/ in your browser.


Welcome to mqtt-shepherd webapp...

      __  ___ ____  ______ ______        ____ __ __ ____ ___   __ __ ____ ___   ___
     /  |/  // __ \/_  __//_  __/ ____  / __// // // __// _ \ / // // __// _ \ / _ \
    / /|_/ // /_/ / / /    / /   /___/ _\ \ / _  // _/ / ___// _  // _/ / , _// // /
   /_/  /_/ \___\_\/_/    /_/         /___//_//_//___//_/   /_//_//___//_/|_|/____/
   A Lightweight MQTT Machine Network Server

   >>> Author:     Simen Li (simenkid@gmail.com)
   >>> Version:    mqtt-shepherd v0.6.x
   >>> Document:   https://github.com/lwmqn/mqtt-shepherd
   >>> Copyright (c) 2016 Simen Li, The MIT License (MIT)

The server is up and running, press Ctrl+C to stop server.
---------------------------------------------------------------
[         ready ] Waiting for device joining or messages...
$ docker push y12docker/dltdojo-lwmqndemo:latest
```
