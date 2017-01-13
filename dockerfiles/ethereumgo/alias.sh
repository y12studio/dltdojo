# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=devethgo
alias dc='docker-compose -p $DCNAME -f dev-peer.yml'
alias dcup='dc stop && dc rm -f && dc up --build -d'
alias dcdown='dc stop && dc rm -f'
CPID=${DCNAME}_evp_1
alias nsh='docker exec -it $CPID'
alias njs='nsh node index.js'
