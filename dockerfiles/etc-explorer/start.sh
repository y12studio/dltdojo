#!/bin/bash
set -e
mongod --fork --logpath /tmp/mongolog
sleep 6s
#  P1=192.168.2.73 && sed -e "s|http://localhost\";|http://$P1\";|g" app/app.js
cd /opt/app/explorer && sed -ie "s|http://localhost|http://$1|g" tools/grabber.js && \
   sed -ie "s|http://localhost|http://$1|g" routes/web3relay.js
sleep 10s
cd /opt/app/explorer && node ./tools/grabber.js &
cd /opt/app/explorer && node app.js
