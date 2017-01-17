# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# BitcoinCore alias script, name:lv1, peers:4
# DATETIME:2017-01-17T01:36:10.008Z
DCNAME=lv1
alias dc='docker-compose -p $DCNAME -f $DCNAME-peers.yml'
alias dcup='dc stop ; dc rm -f; dc up -d'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
BTCPID0=${DCNAME}_btcp_1
alias btcp0sh='docker exec -it $BTCPID0'
alias btcp0='ddj btc btcp'
BTCPID1=${DCNAME}_btcp1_1
alias btcp1sh='docker exec -it $BTCPID1'
alias btcp1='ddj btc btcp1'
BTCPID2=${DCNAME}_btcp2_1
alias btcp2sh='docker exec -it $BTCPID2'
alias btcp2='ddj btc btcp2'
BTCPID3=${DCNAME}_btcp3_1
alias btcp3sh='docker exec -it $BTCPID3'
alias btcp3='ddj btc btcp3'