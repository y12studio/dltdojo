# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:level2, peers:6
DCN=level2
alias dc='docker-compose -p level2 -f level2-peers.yml'
alias dcup='dc stop && dc rm && dc up -d && dc scale evp1=5'
alias vp0='docker exec -i -t level2_evp0_1'
alias vp1='docker exec -i -t level2_evp1_1'
alias vp2='docker exec -i -t level2_evp1_2'
alias vp3='docker exec -i -t level2_evp1_3'
alias vp4='docker exec -i -t level2_evp1_4'
alias vp5='docker exec -i -t level2_evp1_5'