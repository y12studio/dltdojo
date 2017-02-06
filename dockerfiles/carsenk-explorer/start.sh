#!/bin/bash
set -e
cd /opt/carexp
#  OUTIP=192.168.2.73 && sed -e "s/localhost\";/$OUTIP\";/g" app/app.js
sed -ie "s/localhost\";/$1\";/g" app/app.js
http-server ./app -a 0.0.0.0 -p 8000 -c-1
