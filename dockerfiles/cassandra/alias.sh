DCNAME=devcassandra
alias dc='docker-compose -p $DCNAME'
alias dcstop='dc stop && dc rm -f'
alias dcup='dc stop && dc up -d'
alias cas1='docker exec -it ${DCNAME}_cas1_1'
alias caseed='docker exec -it ${DCNAME}_caseed_1'
