FROM ubuntu:latest
# https://github.com/zcash/zcash/wiki/Debian-binary-packages
RUN apt-get update
RUN apt-get install apt-transport-https
RUN wget -qO - https://apt.z.cash/zcash.asc | apt-key add -
