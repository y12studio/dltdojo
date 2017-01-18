# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=devhf
alias bdev='docker build -t y12docker/dltdojo-fabgopeer:dev .'
alias dc='docker-compose  -p $DCNAME -f docker-compose-channel.yml'
alias dcend='dc stop ; dc rm -f'
alias dcup='dcend ; dc up -d'
alias fabp0='docker exec -it ${DCNAME}_fabp0_1'
alias fabp1='docker exec -it ${DCNAME}_fabp1_1'
alias fabp2='docker exec -it ${DCNAME}_fabp2_1'
