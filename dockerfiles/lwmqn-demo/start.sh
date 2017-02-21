#!/bin/bash
set -e
/btc.sh &
sleep 2s
homeaddress=`bitcoin-cli getnewaddress`
echo "Home Bitcoin Address="$homeaddress
cd /lwmqn-demo
if [ -n "$1" ]
then
    socketport=$1
    sed -i.bak "s/:3030/:$socketport/g" build/main-5548af6b59a58fa7341d.min.js
    echo "socket.io port="$1
fi
# grep -rEo build -e '.{0,10}3030.{0,10}'
npm start
