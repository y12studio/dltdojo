# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:lv2, peers:6
# DATETIME:2017-01-11T10:08:51.800Z
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
dcp() { docker cp "$1":${2} ${3}; }
alias dsolc0='dsolc $VPID0'
alias dcp0='dcp $VPID0'
alias vp0curl='vp0 /curlrpc.sh'
alias vp0cli='vp0 node index.js'
alias dsolc1='dsolc $VPID1'
alias dcp1='dcp $VPID1'
alias vp1curl='vp1 /curlrpc.sh'
alias vp1cli='vp1 node index.js'
alias dsolc2='dsolc $VPID2'
alias dcp2='dcp $VPID2'
alias vp2curl='vp2 /curlrpc.sh'
alias vp2cli='vp2 node index.js'
alias dsolc3='dsolc $VPID3'
alias dcp3='dcp $VPID3'
alias vp3curl='vp3 /curlrpc.sh'
alias vp3cli='vp3 node index.js'
alias dsolc4='dsolc $VPID4'
alias dcp4='dcp $VPID4'
alias vp4curl='vp4 /curlrpc.sh'
alias vp4cli='vp4 node index.js'
alias dsolc5='dsolc $VPID5'
alias dcp5='dcp $VPID5'
alias vp5curl='vp5 /curlrpc.sh'
alias vp5cli='vp5 node index.js'