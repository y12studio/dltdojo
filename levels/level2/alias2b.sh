# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# Ethereum peers yml file ,name:2b, peers:2
# DATETIME:2017-01-23T08:40:25.837Z
DCNAME=2b
alias dc='docker-compose -p $DCNAME -f peers$DCNAME.yml'
alias dcup='dcend ; dc up -d; dc ps'
alias dcend='dc stop ; dc rm -f'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
alias ethpexec='docker exec -t ${DCNAME}_ethp_1'
alias ethp='ddj eth ethp'
alias ethp1exec='docker exec -t ${DCNAME}_ethp1_1'
alias ethp1='ddj eth ethp1'