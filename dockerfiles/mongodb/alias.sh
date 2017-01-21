# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=devmongo
alias dc='docker-compose -p $DCNAME -f peers.yml'
alias dcend='dc stop ; dc rm -f'
alias dcup='dcend ; dc up -d;'
alias dexec1='docker exec -it ${DCNAME}_mongo1_1'
alias dexec2='docker exec -it ${DCNAME}_mongo2_1'
alias mongo1='dexec1 mongo'
alias mongo2='dexec2 mongo'
