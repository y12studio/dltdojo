DNAME=y12docker/dltdojo-xcp
alias build='docker build -t ${DNAME} . ; echo "docker build -t ${DNAME}";  docker images | grep ${DNAME}'
alias drun='docker run -it ${DNAME}'
DCNAME=devxcp
PNAME=xcp
alias dc='docker-compose -p $DCNAME -f peers.yml'
alias dcend='dc stop ; dc rm -f'
alias dcup='dcend ; dc up -d; dc ps'
alias dexec1='docker exec -it ${DCNAME}_${PNAME}1_1'
alias cli1='dexec1 counterparty-client --testnet'
