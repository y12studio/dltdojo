# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# EthereumGo alias script, name:2a, peers:6
# DATETIME:2017-01-22T03:37:27.635Z
DCNAME=2a
alias dc='docker-compose -p $DCNAME -f peers$DCNAME.yml'
alias dcup='dc stop ; dc rm -f; dc up -d'
alias dcend='dc stop ; dc rm -f'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
alias ethpexec='docker exec -t ${DCNAME}_ethp_1'
alias ethp='ddj eth ethp'
alias ethp1exec='docker exec -t ${DCNAME}_ethp1_1'
alias ethp1='ddj eth ethp1'
alias ethp2exec='docker exec -t ${DCNAME}_ethp2_1'
alias ethp2='ddj eth ethp2'
alias ethp3exec='docker exec -t ${DCNAME}_ethp3_1'
alias ethp3='ddj eth ethp3'
alias ethp4exec='docker exec -t ${DCNAME}_ethp4_1'
alias ethp4='ddj eth ethp4'
alias ethp5exec='docker exec -t ${DCNAME}_ethp5_1'
alias ethp5='ddj eth ethp5'