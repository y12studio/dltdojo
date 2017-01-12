# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:lv3, peers:2
# DATETIME:2017-01-12T04:14:13.412Z
DCNAME=lv3
alias dc='docker-compose -p $DCNAME -f $DCNAME-peers.yml'
alias dcup='dc stop && dc rm && dc up -d && dc scale evp1=1'
VPID0=${DCNAME}_evp0_1
alias vp0='docker exec -it $VPID0'
VPID1=${DCNAME}_evp1_1
alias vp1='docker exec -it $VPID1'
dsolc() { docker cp "$2" "$1":/tmp/; docker exec -it "$1" node index.js solc /tmp/"$2" "$3"; }
dnc() { docker cp "$2" "$1":/tmp/; docker exec -it "$1" node index.js newContract /tmp/"$2" "$3" "$4" "$5"; }
dcp() { docker cp "$1":${2} ${3}; }
alias dnc0='dnc $VPID0'
alias dsolc0='dsolc $VPID0'
alias dcp0='dcp $VPID0'
alias vp0curl='vp0 /curlrpc.sh'
alias vp0cli='vp0 node index.js'
alias dnc1='dnc $VPID1'
alias dsolc1='dsolc $VPID1'
alias dcp1='dcp $VPID1'
alias vp1curl='vp1 /curlrpc.sh'
alias vp1cli='vp1 node index.js'