# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:lv3, peers:2
# DATETIME:2017-01-16T10:32:00.872Z
DCNAME=lv3
alias dc='docker-compose -p $DCNAME -f $DCNAME-peers.yml'
alias dcup='dc stop ; dc rm -f; dc up -d'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
alias ethpexec='docker exec -it ${DCNAME}_ethp_1'
alias ethpkey='ethpexec find /root/.ethereum/devchain/keystore -maxdepth 1 -name "UTC*" -exec cat {} \; | jq .'
alias ethp='ddj eth ethp'
alias ethp0='ddj eth ethp'
alias ethp1exec='docker exec -it ${DCNAME}_ethp1_1'
alias ethp1key='ethp1exec find /root/.ethereum/devchain/keystore -maxdepth 1 -name "UTC*" -exec cat {} \; | jq .'
alias ethp1='ddj eth ethp1'
alias ethp1='ddj eth ethp1'