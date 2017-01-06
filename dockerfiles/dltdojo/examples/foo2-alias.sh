# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:foo2, peers:4
DCN=foo2
alias dc='docker-compose -p foo2 -f foo2-peers.yml'
alias dcup='dc stop && dc rm && dc up -d'
alias vp0='docker exec -i -t foo2_evp0_1'
alias vp1='docker exec -i -t foo2_evp1_1'
alias vp2='docker exec -i -t foo2_evp2_1'
alias vp3='docker exec -i -t foo2_evp3_1'