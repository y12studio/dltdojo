# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:2b, peers:2
# DATETIME:2017-01-22T03:38:30.133Z
DCNAME=2b
alias dc='docker-compose -p $DCNAME -f peers$DCNAME.yml'
alias dcup='dc stop ; dc rm -f; dc up -d'
alias dcend='dc stop ; dc rm -f'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
alias ethpexec='docker exec -t ${DCNAME}_ethp_1'
alias ethp='ddj eth ethp'
alias ethp1exec='docker exec -t ${DCNAME}_ethp1_1'
alias ethp1='ddj eth ethp1'