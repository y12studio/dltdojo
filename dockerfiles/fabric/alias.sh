# Distributed Ledger Technology Dojo (DLTDOJO)
# https://github.com/y12studio/dltdojo
DCNAME=devhf
alias bdev='docker build -t y12docker/dltdojo-fabgo:dev .'
alias fab='docker run -it y12docker/dltdojo-fabgo:dev'
alias dc='docker-compose -p $DCNAME -f dev-peer.yml'
alias dcc='docker-compose -f docker-compose-channel.yml'
alias dcend='dc stop ; dc rm -f'
alias dccend='dcc stop ; dcc rm -f'
alias dcup='dcend ; dc up -d'
alias dccup='dccend ; dcc up -d'
alias vp1='docker exec -it ${DCNAME}_vp1_1'
