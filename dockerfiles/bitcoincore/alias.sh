DCNAME=dcbtc
alias dc='docker-compose -p $DCNAME'
alias dcstop='dc stop && dc rm -f'
alias dcup='dcstop && dc up -d'
alias dj='dc exec dltdojo node index.js'
