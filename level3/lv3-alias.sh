# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:lv3, peers:2
# DATETIME:2017-01-10T09:04:14.694Z
DCN=lv3
alias dc='docker-compose -p lv3 -f lv3-peers.yml'
alias dcup='dc stop && dc rm && dc up -d && dc scale evp1=1'
alias vp0='docker exec -i -t lv3_evp0_1'
alias vp1='docker exec -i -t lv3_evp1_1'
alias vp0curl='vp0 /curlrpc.sh'
alias vp0cli='vp0 node index.js'
alias vp1curl='vp1 /curlrpc.sh'
alias vp1cli='vp1 node index.js'