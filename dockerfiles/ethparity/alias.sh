DCNAME=devparity
alias dc='docker-compose -p $DCNAME -f poa.yml'
alias dcstop='dc stop ; dc rm -f'
alias dcup='dcstop ; dc up -d'
alias peer2='docker exec -it ${DCNAME}_peer2_1'
