# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:lv3, peers:2
# DATETIME:2017-01-11T09:06:01.713Z
DCNAME=lv3
alias dc='docker-compose -p $DCNAME -f $DCNAME-peers.yml'
alias dcup='dc stop && dc rm && dc up -d && dc scale evp1=1'
VP0ID=${DCNAME}_evp0_1
alias vp0='docker exec -it $VP0ID'
VP1ID=${DCNAME}_evp1_1
alias vp1='docker exec -it $VP1ID'
alias vp0curl='vp0 /curlrpc.sh'
alias vp0cli='vp0 node index.js'
alias vp1curl='vp1 /curlrpc.sh'
alias vp1cli='vp1 node index.js'