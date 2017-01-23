# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# Dltdojo peers yml file , name:4a  btc peers:6 mariadb peers:1 mongodb peers:1
# DATETIME:2017-01-23T09:39:20.597Z
DCNAME=4a
alias dc='docker-compose -p $DCNAME -f peers$DCNAME.yml'
alias dcup='dcend ; dc up -d; dc ps'
alias dcend='dc stop ; dc rm -f'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
alias btcp0exec='docker exec -t ${DCNAME}_btcp_1'
alias btcp0='ddj btc btcp'
alias btcp1exec='docker exec -t ${DCNAME}_btcp1_1'
alias btcp1='ddj btc btcp1'
alias btcp2exec='docker exec -t ${DCNAME}_btcp2_1'
alias btcp2='ddj btc btcp2'
alias btcp3exec='docker exec -t ${DCNAME}_btcp3_1'
alias btcp3='ddj btc btcp3'
alias btcp4exec='docker exec -t ${DCNAME}_btcp4_1'
alias btcp4='ddj btc btcp4'
alias btcp5exec='docker exec -t ${DCNAME}_btcp5_1'
alias btcp5='ddj btc btcp5'
alias dmariadbexec1='docker exec -it ${DCNAME}_mariadb1_1'
alias dmysql='dmariadbexec1 mysql'
alias dmongoexec1='docker exec -it ${DCNAME}_mongo1_1'
alias dmongo='dmongoexec1 mongo'