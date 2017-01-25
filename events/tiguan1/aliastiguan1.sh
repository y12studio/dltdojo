# Distributed Ledger Technology Dojo (DLTDOJO) 
# https://github.com/y12studio/dltdojo
# Dltdojo peers yml file , name:tiguan1  btc peers:15 eth peers:15 fabric peers:15 mariadb peers:1 mongodb peers:1
# DATETIME:2017-01-25T10:38:41.029Z
confirm() {
    # call with a prompt string or use a default
    read -r -p "${1:-Are you sure? [y/N]} " response
    case "$response" in
        [yY][eE][sS]|[yY])
            true
            ;;
        *)
            false
            ;;
    esac
}

DLTDOJOID=1
DCNAME=tiguan1
alias dc='docker-compose -p $DCNAME -f peers$DCNAME.yml'
alias dcup='dcend ; dc up -d; dc ps'
alias dcend='dc stop ; dc rm -f'
alias dojoexec='docker exec -it ${DCNAME}_dltdojo_1'
alias ddj='dojoexec node index.js'
alias btcpstop='confirm && dc stop btcp${DLTDOJOID}'
alias btcpstart='confirm && dc start btcp${DLTDOJOID}'
alias ethpstop='confirm && dc stop ethp${DLTDOJOID}'
alias ethpstart='confirm && dc start ethp${DLTDOJOID}'
alias fabpstop='confirm && dc stop fabp${DLTDOJOID}'
alias fabpstart='confirm && dc start fabp${DLTDOJOID}'
alias btcp='ddj btc btcp${DLTDOJOID}'
alias btcpexec='docker exec -it ${DCNAME}_btcp${DLTDOJOID}_1'
alias ethp='ddj eth ethp${DLTDOJOID}'
alias ethpexec='docker exec -it ${DCNAME}_ethp${DLTDOJOID}_1'
alias fabp='docker exec -t ${DCNAME}_fabp${DLTDOJOID}_1'
alias dmariadbexec1='docker exec -it ${DCNAME}_mariadb1_1'
alias dmysql='dmariadbexec1 mysql'
alias dmongoexec1='docker exec -it ${DCNAME}_mongo1_1'
alias dmongo='dmongoexec1 mongo'