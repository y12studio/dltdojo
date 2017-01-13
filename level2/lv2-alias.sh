# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:lv2, peers:6
# DATETIME:2017-01-13T09:03:51.234Z
DCNAME=lv2
alias dc='docker-compose -p $DCNAME -f $DCNAME-peers.yml'
alias dcup='dc stop && dc rm && dc up -d && dc scale evp1=5'
VPID0=${DCNAME}_evp0_1
alias vp0='docker exec -it $VPID0'
VPID1=${DCNAME}_evp1_1
alias vp1='docker exec -it $VPID1'
VPID2=${DCNAME}_evp1_2
alias vp2='docker exec -it $VPID2'
VPID3=${DCNAME}_evp1_3
alias vp3='docker exec -it $VPID3'
VPID4=${DCNAME}_evp1_4
alias vp4='docker exec -it $VPID4'
VPID5=${DCNAME}_evp1_5
alias vp5='docker exec -it $VPID5'
dsolc() { docker cp "$2" "$1":/tmp/; docker exec -it "$1" node index.js solc /tmp/"$2" "$3"; }
dnc() { docker cp "$2" "$1":/tmp/; docker exec -it "$1" node index.js newContract /tmp/"$2" "$3" "$4" "$5"; }
dcp() { docker cp "$1":${2} ${3}; }
alias dnc0='dnc $VPID0'
alias dsolc0='dsolc $VPID0'
alias dcp0='dcp $VPID0'
alias evp0curl='vp0 /curlrpc.sh'
alias evp0='vp0 node index.js'
alias dnc1='dnc $VPID1'
alias dsolc1='dsolc $VPID1'
alias dcp1='dcp $VPID1'
alias evp1curl='vp1 /curlrpc.sh'
alias evp1='vp1 node index.js'
alias dnc2='dnc $VPID2'
alias dsolc2='dsolc $VPID2'
alias dcp2='dcp $VPID2'
alias evp2curl='vp2 /curlrpc.sh'
alias evp2='vp2 node index.js'
alias dnc3='dnc $VPID3'
alias dsolc3='dsolc $VPID3'
alias dcp3='dcp $VPID3'
alias evp3curl='vp3 /curlrpc.sh'
alias evp3='vp3 node index.js'
alias dnc4='dnc $VPID4'
alias dsolc4='dsolc $VPID4'
alias dcp4='dcp $VPID4'
alias evp4curl='vp4 /curlrpc.sh'
alias evp4='vp4 node index.js'
alias dnc5='dnc $VPID5'
alias dsolc5='dsolc $VPID5'
alias dcp5='dcp $VPID5'
alias evp5curl='vp5 /curlrpc.sh'
alias evp5='vp5 node index.js'