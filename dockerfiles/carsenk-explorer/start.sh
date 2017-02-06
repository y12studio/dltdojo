#!/bin/bash
set -e
cd /otp/carexp
# sed -ie 's/localhost";/ethdev";/g' app/app.js
http-server ./app -a 0.0.0.0 -p 8000 -c-1
