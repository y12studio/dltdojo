# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:foo, peers:4
DCN=foo
alias dc='docker-compose -p foo -f foo-peers.yml'
alias dcup='dc stop && dc rm && dc up -d && dc scale evp1=3'
alias vp0='docker exec -i -t foo_evp0_1'
alias vp1='docker exec -i -t foo_evp1_1'
alias vp2='docker exec -i -t foo_evp1_2'
alias vp3='docker exec -i -t foo_evp1_3'
alias vp0curl='vp0 /curlrpc.sh'
alias vp0cli='vp0 node index.js'
alias vp1curl='vp1 /curlrpc.sh'
alias vp1cli='vp1 node index.js'
alias vp2curl='vp2 /curlrpc.sh'
alias vp2cli='vp2 node index.js'
alias vp3curl='vp3 /curlrpc.sh'
alias vp3cli='vp3 node index.js'