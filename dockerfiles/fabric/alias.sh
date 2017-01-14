# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=devhf
alias dc='docker-compose -p $DCNAME -f dev-peer.yml'
alias dcup='dc stop ; dc rm -f ; dc up -d'
alias dcdown='dc stop ; dc rm -f'
CPID1=${DCNAME}_vp0_1
alias sh1='docker exec -it $CPID1'
