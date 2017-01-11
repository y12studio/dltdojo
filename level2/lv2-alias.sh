# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:lv2, peers:6
# DATETIME:2017-01-11T09:13:51.202Z
DCNAME=lv2
alias dc='docker-compose -p $DCNAME -f $DCNAME-peers.yml'
alias dcup='dc stop && dc rm && dc up -d && dc scale evp1=5'
VP0ID=${DCNAME}_evp0_1
alias vp0='docker exec -it $VP0ID'
VP1ID=${DCNAME}_evp1_1
alias vp1='docker exec -it $VP1ID'
VP2ID=${DCNAME}_evp1_2
alias vp2='docker exec -it $VP2ID'
VP3ID=${DCNAME}_evp1_3
alias vp3='docker exec -it $VP3ID'
VP4ID=${DCNAME}_evp1_4
alias vp4='docker exec -it $VP4ID'
VP5ID=${DCNAME}_evp1_5
alias vp5='docker exec -it $VP5ID'
alias vp0curl='vp0 /curlrpc.sh'
alias vp0cli='vp0 node index.js'
alias vp1curl='vp1 /curlrpc.sh'
alias vp1cli='vp1 node index.js'
alias vp2curl='vp2 /curlrpc.sh'
alias vp2cli='vp2 node index.js'
alias vp3curl='vp3 /curlrpc.sh'
alias vp3cli='vp3 node index.js'
alias vp4curl='vp4 /curlrpc.sh'
alias vp4cli='vp4 node index.js'
alias vp5curl='vp5 /curlrpc.sh'
alias vp5cli='vp5 node index.js'