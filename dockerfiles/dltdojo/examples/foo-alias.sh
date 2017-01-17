# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# BitcoinCore alias script, name:foo, peers:4
# DATETIME:2017-01-17T03:43:08.282Z
DCNAME=foo
alias dc='docker-compose -p $DCNAME -f $DCNAME-peers.yml'
alias dcup='dc stop ; dc rm -f; dc up -d'
alias dcend='dc stop ; dc rm -f'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
alias btcp0exec='docker exec -it ${DCNAME}_btcp_1'
alias btcp0='ddj btc btcp'
alias btcp1exec='docker exec -it ${DCNAME}_btcp1_1'
alias btcp1='ddj btc btcp1'
alias btcp2exec='docker exec -it ${DCNAME}_btcp2_1'
alias btcp2='ddj btc btcp2'
alias btcp3exec='docker exec -it ${DCNAME}_btcp3_1'
alias btcp3='ddj btc btcp3'