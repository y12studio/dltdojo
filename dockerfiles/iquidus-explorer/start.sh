#!/bin/bash
set -e
bitcoind -daemon
sleep 2s
mongod --fork --logpath /tmp/mongolog
sleep 2s
#  db.createUser( { user: "iquidus", pwd: "3xp!0reR", roles: [ "readWrite" ] } )
echo 'db.createUser({ user: "iquidus", pwd: "pass", roles: [ "readWrite" ] });' > inituser.js
mongo explorerdb inituser.js
sleep 1s
cd /opt/app/explorer && npm start
