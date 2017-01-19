DCNAME=devzcash
alias dc='docker-compose -p $DCNAME'
alias dcend='dc stop ; dc rm -f'
alias dcup='dcend ; dc up -d'
alias zp1='docker exec -it ${DCNAME}_zcash_1'
alias zp1cli='zp1 zcash-cli'
