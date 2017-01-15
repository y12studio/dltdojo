# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=devhf
alias dc='docker-compose -p $DCNAME -f dev-peer.yml'
alias dcup='dc stop ; dc rm -f ; dc up -d'
alias dcdown='dc stop ; dc rm -f'
CPID1=${DCNAME}_vp0_1
CPID2=${DCNAME}_vp1_1
alias sh1='docker exec -it $CPID1'
alias sh2='docker exec -it $CPID2'
alias peer1='sh1 peer'
alias peer2='sh2 peer'