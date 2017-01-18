# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=devhf
alias bdev='docker build -t y12docker/dltdojo-fabgopeer:dev .'
alias dc='docker-compose  -p $DCNAME -f docker-compose-channel.yml'
alias dcend='dc stop ; dc rm -f'
alias dcup='dcend ; dc up -d'
alias vp1='docker exec -it ${DCNAME}_peer1_1'
alias vp0='docker exec -it ${DCNAME}_peer0_1'
