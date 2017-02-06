###2017-02-06T18:45:08+0800
```
$ docker build -t y12docker/dltdojo-carexp .
$ docker-compose up -d
$ docker-compose logs carexp
carexp_1  | Starting up http-server, serving ./app
carexp_1  | Available on:
carexp_1  |   http://127.0.0.1:8000
carexp_1  |   http://192.168.176.3:8000
carexp_1  | Hit CTRL-C to stop the server
carexp_1  | [Mon Feb 06 2017 11:39:12 GMT+0000 (UTC)] "GET /" "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36"
carexp_1  | _http_outgoing.js:370
carexp_1  |     throw new TypeError('The header content contains invalid characters');
carexp_1  |     ^
carexp_1  |
carexp_1  | TypeError: The header content contains invalid characters
carexp_1  |     at ServerResponse.setHeader (_http_outgoing.js:370:11)
carexp_1  |     at module.exports.ResponseStream.(anonymous function) [as setHeader] (/usr/local/lib/node_modules/http-server/node_modules/union/lib/response-stream.js:100:34)
carexp_1  |     at serve (/usr/local/lib/node_modules/http-server/node_modules/ecstatic/lib/ecstatic.js:241:13)
carexp_1  |     at /usr/local/lib/node_modules/http-server/node_modules/ecstatic/lib/ecstatic.js:159:11
carexp_1  |     at FSReqWrap.oncomplete (fs.js:112:15)
$ docker-compose stop
```
